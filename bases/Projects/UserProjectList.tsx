import { useState } from "react";
import { View } from "react-native";
import { Badge, ListItem, Icon } from "@rneui/themed";

export default function UserList() {

	const [expanded, setExpanded] = useState(false);
	const [tagExpanded, setTagExpanded] = useState(false);
	
	return (
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
				<ListItem>
					<ListItem.Content style={{minWidth:150}}>
						<ListItem.Title>
							Project
							</ListItem.Title>
					</ListItem.Content>
					<ListItem.Content>
						<ListItem.Subtitle>
							Xh Ym
						</ListItem.Subtitle>
					</ListItem.Content>
					<ListItem.Content right>
						<Badge value="14" />
					</ListItem.Content>
				</ListItem>
			</ListItem.Accordion>
			<ListItem.Accordion
				content={
					<>
						<Icon name="tag" style={{ paddingRight: 15 }} />
						<ListItem.Content>
							<ListItem.Title>Tag</ListItem.Title>
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
				<ListItem>
					<ListItem.Content style={{minWidth:150}}>
						<ListItem.Title>Project</ListItem.Title>
					</ListItem.Content>
					<ListItem.Content>
						<ListItem.Subtitle>
							Xh Ym
						</ListItem.Subtitle>
					</ListItem.Content>
					<ListItem.Content right>
						<Badge value="14" />
					</ListItem.Content>
				</ListItem>
			</ListItem.Accordion>
		</View>
	);
}
