import { UiProvider } from "@shared/uiContext";
import Web from "@bases/Web";
import Android from "@bases/Android";

import { Platform, View } from "react-native";

export const Shell = () => (
	<UiProvider>
		<View  style={{flex: 1}}>
			{Platform.OS === "web" ? <Web /> : <Android />}
		</View>
	</UiProvider>
)