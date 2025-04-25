import Navigation from "@shared/navigation";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

export default function Android() {

	return (
		<SafeAreaProvider>
			<View style={{flex:1}}>
				<Navigation/>
			</View>
		</SafeAreaProvider>
	);
}
