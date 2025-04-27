import { styles } from "@shared/stylesheet";
import ProjectList from "@bases/Projects";
import Tasklist from "@bases/TaskList";
import TaskDetails from "@bases/Task";
import { useUi } from "@shared/uiContext";

import { View } from "react-native";
import { Text } from "@ui-kitten/components";

export default function Web() {
	/*Used for selected UI Elements*/
	const { projectName } = useUi();

	/*
  Single screen application with:
    Headers for views as there is no navigation feature 
    Project List on left
      Will be updated to be a hidden toolbar
    (Wide)Task List based on project
    Task Details View
  */
	return ( <View><Text>Test</Text></View>)}
	/*
		<View style={{ flexDirection: "row", flex: 1 }}>
			<View style={{ minWidth: 300 }}>
				<View>
					<Text>Header</Text>
				</View>
				<ProjectList />
			</View>
			<View style={[{ flex: 2, backgroundColor: "#abdaff" }]}>
				<View
					style={[
						styles.rounded,
						{
							height: 40,
							borderRadius: 15,
							backgroundColor: "#fff",
							margin: 10,
							marginBottom: 0,
							justifyContent: "center",
							alignItems: "center",
						},
					]}
				>
					<Text>{projectName}</Text>
				</View>
				<Tasklist />
			</View>

			<View style={[{ flex: 1 }]}>
				<View>
					<Text>Header</Text>
				</View>
				<TaskDetails />
			</View>
		</View>
	);
}
*/