import { Icon, ListItem, Switch } from "@rneui/themed";
import { useState } from "react";
import StatusButtons from "@components/StatusButtons";

export default function TaskDetails() {
	
	/*for UI elements of Task Screen */
	const [switched, setSwitched] = useState(false);
	const [complete, setComplete] = useState(false);

	/*
	Returns a list of: 
		Interactive Menu for updating the task and opening task edit menu
		view-only details about the task
			Summary
			Definition of Done
			Notes and Link
			Url and Link
			Focus and Break time
	Currently hard-coded but will be populated by database info
	*/
	return (
		<>
			<ListItem topDivider>
				<ListItem.Content>
          <StatusButtons
					status={3}/>
				</ListItem.Content>
				{!complete && (
					<ListItem.Content right>
						<Switch
							value={switched}
							onValueChange={(value) => setSwitched(value)}
						></Switch>
					</ListItem.Content>
				)}
				<ListItem.Content right>
          <Icon name="add"/>
					<Icon name="edit" />
				</ListItem.Content>
			</ListItem>

			<ListItem topDivider>
				<ListItem.Content>
					<ListItem.Title>Summary</ListItem.Title>
					<ListItem.Subtitle>
						x size task takes y minutes every z timespan
					</ListItem.Subtitle>
				</ListItem.Content>
			</ListItem>

			<ListItem topDivider>
				<ListItem.Content>
					<ListItem.Title>Definition of Done</ListItem.Title>
					<ListItem.Subtitle>
						Requirments for completeness of task, extra words to test wordwrap
					</ListItem.Subtitle>
				</ListItem.Content>
			</ListItem>

			<ListItem topDivider>
				<ListItem.Content>
					<ListItem.CheckBox checked={true} disabled />
				</ListItem.Content>
				<ListItem.Content>
					<ListItem.Title>Notes</ListItem.Title>
				</ListItem.Content>
				<ListItem.Content right>
					<ListItem.Title>
						<Icon name="open-in-new" />
					</ListItem.Title>
				</ListItem.Content>
			</ListItem>
			<ListItem topDivider>
				<ListItem.Content>
					<ListItem.Title>URL</ListItem.Title>
				</ListItem.Content>
				<ListItem.Content right>
					<ListItem.Title>
						<Icon name="open-in-new" />
					</ListItem.Title>
				</ListItem.Content>
			</ListItem>
			<ListItem topDivider>
				<ListItem.Content>
					<ListItem.Title>Focus</ListItem.Title>
					<ListItem.Subtitle>Break</ListItem.Subtitle>
				</ListItem.Content>
				<ListItem.Content right>
					<ListItem.Title>25</ListItem.Title>
					<ListItem.Subtitle>5</ListItem.Subtitle>
				</ListItem.Content>
			</ListItem>
		</>
	);
}
