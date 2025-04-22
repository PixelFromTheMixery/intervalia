import Web from "@bases/Web";
import Android from "@bases/Android";

import { Platform, View } from "react-native";
import { colorScheme, useColorScheme } from "nativewind";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";


// Use imperatively
colorScheme.set("system");

export function Shell() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View>{Platform.OS === "web" ? <Web /> : <Android />}</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
