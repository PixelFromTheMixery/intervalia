from utils.api_tools import make_call_with_retry

class NotionUtils:
    def __init__(self):
        self.url = "https://api.notion.com/v1/"

    def get_users(self):
        user_url = self.url + "users"
        users = make_call_with_retry(
            "get", user_url, "get users from notion"
        )
        return users

    def get_databases(self):
        data = {"filter": {"value": "database", "property": "object"}}
        search_url = self.url + "search"
        databases = make_call_with_retry(
            "post", search_url, "fetch databases for selection", data
        )
        return databases

    def get_db_structure(self, database_id):
        url = self.url + "databases/"

        source_url = url + database_id
        struct = make_call_with_retry("get", source_url, f"fetch database structure")[
            "properties"
        ]

        filtered = {k: v for k, v in struct.items() if struct[k]["type"] != "relation"}

        return filtered

    def match_db_structure(self, target):
        source_struct = self.get_db_structure(self.config.data["notion"]["task_db"])
        for prop in source_struct:
            del source_struct[prop]["id"]

        dest_struct = self.get_db_structure(target)
        for prop in dest_struct.keys():
            del dest_struct[prop]["id"]

        to_create = {
            k: source_struct[k]
            for k in source_struct
            if k not in dest_struct
            and k in self.config.data["notion"]["log"]["sync_props"]
        }
        to_destroy = {
            k: dest_struct[k]
            for k in dest_struct
            if k not in source_struct
            and k in self.config.data["notion"]["log"]["sync_props"]
        }

        props_to_destroy = {prop: None for prop in to_destroy}

        db_url = self.url + f"databases/{target}"

        if len(props_to_destroy) != 0:
            data = {"properties": props_to_destroy}
            make_call_with_retry(
                "patch",
                db_url,
                "delete destination database properties not in source database",
                data
            )

        new_prop = {}
        for prop in to_create:
            prop_dict = to_create[prop]
            prop_type = prop_dict["type"]
            new_prop = {prop: {prop_type: prop_dict[prop_type]}}

            data = {"properties": new_prop}
            make_call_with_retry(
                "patch",
                db_url,
                "create source properties in history database",
                data,
            )

    def get_project_list(self, database_id):
        notion_projects = self.get_db_structure(
            database_id
        )["Project"]["select"]["options"]
        return [project["name"] for project in notion_projects]

    def get_page_contents(self, page_id):
        children_url = self.url + f"blocks/{page_id}/children"
        children = make_call_with_retry("get", children_url, f"fetch page contents")
        return children

    def unpack_db_page(self, task: dict):
        unpacked_props = {}

        for prop in task["properties"]:
            prop_dict = task["properties"][prop]
            prop_type = prop_dict["type"]

            if prop_dict[prop_type] is None:
                pass

            elif prop_type in ["checkbox", "number", "self.url", "date"]:
                unpacked_props[prop] = {prop_type: prop_dict[prop_type]}

            elif prop_type in ["select", "status"]:
                unpacked_props[prop] = {
                    prop_type: {"name": prop_dict[prop_type]["name"]}
                }

            elif prop_type == "people":
                people_list = [
                    {"object": "user", "id": user["id"]}
                    for user in prop_dict[prop_type]
                ]
                unpacked_props[prop] = {"people": people_list}

            elif prop_type == "title":
                title = prop_dict[prop_type][0]["text"]["content"]
                unpacked_props[prop] = {"title": [{"text": {"content": title}}]}

            elif prop_type == "multi_select":
                tag_list = [{"name": select["name"]} for select in prop_dict[prop_type]]
                unpacked_props[prop] = {prop_type: tag_list}

            elif prop_type == "rich_text":
                if prop_dict[prop_type] != []:
                    content = prop_dict[prop_type][0]["text"]["content"]
                    unpacked_props[prop] = {
                        "rich_text": [{"text": {"content": content}}]
                    }
            elif prop_type == "relation":
                pass

        if task["properties"]["Notes"]["checkbox"] == True:
            page_contents = self.get_page_contents(task["id"])
            return {"props": unpacked_props, "contents": page_contents}
        else:
            return {"props": unpacked_props}

    def recreate_task(self, task: dict, parent: str):
        pages_url = self.url + "pages"
        page = self.unpack_db_page(task)
        new_page = {
            prop: page["props"][prop]
            for prop in page["props"]
            if prop in self.config.data["notion"]["log"]["sync_props"]
        }
        data = {
            "parent": {"database_id": parent},
            "properties": new_page,
        }

        if "contents" in page.keys():
            data["children"] = page["contents"]

        make_call_with_retry(
            "post",
            pages_url,
            f'recreate task {task["properties"]["Name"]["title"][0]["text"]["content"]} in destination database',
            data
        )

    def task_data_filter(self, query: str, arg_one: str = None, arg_two: str = None):
        data = {}
        if query == "Done":
            if arg_one == "status":
                data = {"filter": {"property": arg_two, "status": {"equals": "Done"}}}
            else:
                data = {"filter": {"property": arg_two, "checkbox": True}}
        elif query == "Time":
            data = {
                "filter": {
                    "timestamp": "last_edited_time",
                    "last_edited_time": {"on_or_after": arg_one},
                }
            }
        elif query == "Name":
            data = {"filter": {"property": "Name", "rich_text": {"equals": arg_one}}}
        return data

    def get_tasks(self, project: str, double_list: bool = False, history: bool = False):
        tasks_url = (
            self.url + f'databases/{self.config.data["notion"]["task_db"]}/query'
        )
        if history:
            tasks_url = (
                self.url
                + f'databases/{self.config.data["notion"]["log"]["history"]}/query'
            )
        if project == "Done":
            data = self.task_data_filter(
                "Done", self.reset_prop_type, self.reset_prop_name
            )
            url_info = "get all completed tasks"
        elif project == "Time":
            data = self.task_data_filter(
                "Time", self.config.data["system"]["locked"]["notion_sync"]
            )
            url_info = "get all completed tasks"
        elif project not in self.config.data["clockify"]["projects"]["name"].keys():
            data = self.task_data_filter("Name", project)
            url_info = f"check for task {project}"
        else:
            data = {"filter": {"property": "Project", "select": {"equals": project}}}
            url_info = f"get all tasks in notion project: {project}"
        tasks = make_call_with_retry(
            "post", 
            tasks_url, 
            url_info,
            data
        )
        if double_list:
            if self.reset_prop_type == "status":
                task_list = [
                    task
                    for task in tasks
                    if task["properties"][self.reset_prop_name]["status"]["name"]
                    != "Done"
                ]
                done_list = [
                    task
                    for task in tasks
                    if task["properties"][self.reset_prop_name]["status"]["name"]
                    == "Done"
                ]
            if self.reset_prop_type == "checkbox":
                task_list = [
                    task
                    for task in tasks
                    if task["properties"][self.reset_prop_name]["checkbox"] == False
                ]
                done_list = [
                    task
                    for task in tasks
                    if task["properties"][self.reset_prop_name]["checkbox"] == True
                ]
            return task_list, done_list
        else:
            return tasks

    def update_page(self, data: dict, page_id: str, name: str):
        page_url = self.url + f"pages/{page_id}"
        make_call_with_retry(
            "patch", 
            page_url, 
            f"updating notion page {name}", 
            data
        )

    def create_page(self, data: dict):
        page_url = self.url + f"pages"
        make_call_with_retry(
            "post",
            page_url,
            f'creating notion page {data["properties"]["Name"]["title"][0]["text"]["content"]}',
            data
        )

    def check_for_page(self, name):
        page_url = self.url + f'databases/{self.config.data["notion"]["task_db"]}/query'
        data = self.task_data_filter("Name", name)
        page = make_call_with_retry(
            "post",
            page_url,
            f"looking for notion page {name} in source database",
            data,
        )
        return page
