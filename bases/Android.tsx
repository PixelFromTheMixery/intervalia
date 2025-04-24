import { View } from "react-native";
import ProjectList from "@bases/Projects";
import { Header, Text} from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskList from "@bases/TaskList";
import TaskDetails from "@bases/Task";


export default function Android() {
	return (
	<SafeAreaProvider>
		<View style={{flex:1}}>
			<Header
				leftComponent={{icon: "menu", color:"#fff"}}
				centerComponent={{text: "Projects", style: {fontSize:18, color: "#fff"}}}
			/>
			<TaskDetails/>
		</View>
	</SafeAreaProvider>
	);
}
