import { UiProvider } from "@shared/uiContext";
import Web from "@bases/Web";
import Android from "@bases/Android";

import { Platform, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export const Shell = () => (
	<UiProvider>
		<SafeAreaProvider>
			<SafeAreaView style={{flex: 1}}>
				<View  style={{flex: 1}}>
					{Platform.OS === "web" ? <Web /> : <Android />}
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	</UiProvider>
)