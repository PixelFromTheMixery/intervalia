import { View } from "react-native";
import ProjectList from "./Projects";
import { Header} from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskList from "./TaskList";


export default function Android() {
	return (
	<SafeAreaProvider>
		<View style={{flex:1}}>
			<Header
				leftComponent={{icon: "menu", color:"#fff"}}
				centerComponent={{text: "Projects", style: {fontSize:18, color: "#fff"}}}
			/>
			<TaskList/>
		</View>
	</SafeAreaProvider>
	);
}
