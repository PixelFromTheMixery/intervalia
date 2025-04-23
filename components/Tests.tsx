import { Platform, Text } from "react-native";

export function OS_Check() {
	return <Text>This is the {Platform.OS} app!</Text>;
}

