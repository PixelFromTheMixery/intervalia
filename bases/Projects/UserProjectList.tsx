import WebProjectItems from "@components/Web/web_projectItems";
import AppProjectItems from "@components/Android/app_projectItems";

import { useState } from "react";
import { Platform, View } from "react-native";
import { Drawer, DrawerItem, Text } from "@ui-kitten/components";

export default function UserList() {
  /*
	For Accordians,
	May be dynamically generated for the categories
	*/
	const [expanded, setExpanded] = useState(false);
	const [tagExpanded, setTagExpanded] = useState(false);
	/*
	Returns a series of folders for each notion project category and its internal project
	Each category has a summary of the time and task count
	Currently hard coded but will reference database
	*/

	return (
		<Drawer>
			<DrawerItem>
				<Text>Test</Text>
			</DrawerItem>
		</Drawer>)}

/*
<View>
			<ListItem.Accordion
				content={
					<>
						<Icon name="folder" style={{ paddingRight: 15 }} />
						<ListItem.Content>
							<ListItem.Title>Category</ListItem.Title>
							<ListItem.Subtitle>400 Mins</ListItem.Subtitle>
						</ListItem.Content>
						<ListItem.Content right>
            	<Badge value="14" />
          	</ListItem.Content>
					</>
				}
				isExpanded={expanded}
				onPress={() => {
					setExpanded(!expanded);
				}}
			>
				{Platform.OS == "web" ? 
				(
					WebProjectItems(0, {
						name:"testProject", 
						time: "1h 30m",
						count: 1
					})):
				(
					AppProjectItems(0, {
						name:"testProject", 
						time: "1h 30m",
						count: 1
				}))}
			</ListItem.Accordion>
			<ListItem.Accordion
				content={
					<>
						<Icon name="tag" style={{ paddingRight: 15 }} />
						<ListItem.Content>
							<ListItem.Title>Tags</ListItem.Title>
							<ListItem.Subtitle>400 Mins</ListItem.Subtitle>
						</ListItem.Content>
						<ListItem.Content right>
            	<Badge value="14" />
          	</ListItem.Content>
          
					</>
				}
				isExpanded={tagExpanded}
				onPress={() => {
					setTagExpanded(!tagExpanded);
				}}
			>
				{Platform.OS == "web" ? 
				(
					WebProjectItems(0, {
						name:"testProject", 
						time: "1h 30m",
						count: 1
					})):
				(
					AppProjectItems(0, {
						name:"testProject", 
						time: "1h 30m",
						count: 1
				}))}
			</ListItem.Accordion>
		</View>
	);
}
*/