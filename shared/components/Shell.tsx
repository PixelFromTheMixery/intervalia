import { UiProvider } from "@shared/uiContext";
import Web from "@bases/Web";
import Android from "@bases/Android";

import { Platform, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from '@eva-design/eva';

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