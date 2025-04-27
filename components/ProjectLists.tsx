import { useUi } from "@shared/uiContext";
import { NavigationPropProject } from "@shared/navigation";
import ProjectListItem from "@components/ProjectItem";

import { useState } from "react";
import { Platform} from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function ProjectLists() {
	/*For Accordian*/
	const [expanded, setExpanded] = useState(false);
	const navigation = Platform.OS === "android" ? useNavigation<NavigationPropProject>() : null;

	/*
  Simple List values
  Potential revert to just titles and use sql queries for other info
  */
	const basicViews = [
		{ name: "Today", time: "30m", count: 24 },
		{ name: "Tomorrow", time: "30m", count: 1 },
		{ name: "This Week", time: "30m", count: 1 },
		{ name: "Due Date", time: "30m", count: 1 },
		{ name: "No Due Date", time: "30m", count: 1 },
		{ name: "All Tasks", time: "30m", count: 1 },
	];

	const { setProjectName } = useUi();
	// Platform-specific navigation handling
	const handlePress = (name: string) => {
		setProjectName(name);

		if (navigation) {
			// For mobile, use React Navigation
			navigation.navigate("Project", { projectName: name });
		}
	};

	/*
  Returns a expanding list of Views, each with a name, total time, total task count
  Seperated by platform because Android Navigation breaks web side
  */
	return (
		<ListItem.Accordion
			bottomDivider
			content={
				<>
					<Icon name="home" style={{ paddingRight: 15 }} />
					<ListItem.Content>
						<ListItem.Title>Basic Views</ListItem.Title>
					</ListItem.Content>
				</>
			}
			isExpanded={expanded}
			onPress={() => {
				setExpanded(!expanded);
			}}
		>
			{basicViews.map((l,i) => (
				<ProjectListItem
				key={i}
        projectName={l.name}
        projectTime={l.time}
        projectCount={l.count.toString()}
        onPress={() => handlePress(l.name)}
        />
			))}
		</ListItem.Accordion>
	);
}
