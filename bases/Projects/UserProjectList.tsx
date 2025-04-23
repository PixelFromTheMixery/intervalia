import { useState } from "react";
import { View } from "react-native";
import { ListItem, Icon } from "@rneui/themed";

export default function UserList() {
	const [expanded, setExpanded] = useState(false);
	return (
		<View>
			<ListItem.Accordion
				content={
					<>
						<Icon name="folder" style={{ paddingRight: 15 }} />
						<ListItem.Content>
							<ListItem.Title>Category</ListItem.Title>
							<ListItem.Subtitle>20 Tasks 400 Mins</ListItem.Subtitle>
						</ListItem.Content>
					</>
				}
				isExpanded={expanded}
				onPress={() => {
					setExpanded(!expanded);
				}}
			>
				<ListItem>
					<ListItem.Content>
						<ListItem.Title>Project</ListItem.Title>
					</ListItem.Content>
				</ListItem>
			</ListItem.Accordion>
			<ListItem>
				<Icon name="tag" />
				<ListItem.Content>
					<ListItem.Title>Tag</ListItem.Title>
				</ListItem.Content>
			</ListItem>
		</View>
	);
}
