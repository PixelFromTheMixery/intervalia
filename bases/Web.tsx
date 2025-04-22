import { styles } from "@shared/style";
import { MakeCall } from "../components/Tests";

import { Text, View } from "react-native";

export default function Web() {
	return (
		<View style={{ flexDirection: "row", width: "100%" }}>
			<View>
				<MakeCall />
			</View>
		</View>
	);
}
