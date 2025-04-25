import ProjectList from "@bases/Projects";
import TaskList from "@bases/TaskList";
import TaskDetails from "@bases/Task";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";


export default function Android() {
	return (
		<SafeAreaProvider>
			<View style={{flex:1}}>
				<TaskDetails/>
			</View>
		</SafeAreaProvider>
	);
}
