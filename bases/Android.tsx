import Navigation from "@shared/navigation";

import { View } from "react-native";

export default function Android() {
	/*
	Shell for Android application
	Contains: 
		Safe Area Provider for fitting to phone screens
		Navigation for screen shifting, Projects screen as home screen
	*/
	return (
			<View style={{flex:1}}>
				<Navigation/>
			</View>
	);
}
