import Web from "@bases/Web";
import Android from "@bases/Android";

import { Platform, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export function Shell() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View>{Platform.OS === "web" ? <Web /> : <Android />}</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
