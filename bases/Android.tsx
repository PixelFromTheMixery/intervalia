import ProjectList from "@bases/Projects";
import TaskList from "@bases/TaskList";
import TaskDetails from "@bases/Task";

/*import { createStackNavigator } from '@react-navigation/stack';*/
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

export default function Android() {

	return (
		<SafeAreaProvider>
			<View style={{flex:1}}>
				<TaskList/>
			</View>
		</SafeAreaProvider>
	);
}
