import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	lightTheme: {
		backgroundColor: "#fff",
		color: "#000",
	},

	taskListSummary:{
		flexDirection:"row",
		flex:1,
		padding: 10,
		backgroundColor:"#fff",
		height: 60,		
		justifyContent:"space-between",
		alignItems: "center",
		borderRadius:15
	},

	hero:{
		backgroundColor: "#1f39ff",
		alignItems: "center",
		margin: 5,
		borderRadius: 15
	},
	
	hero_text:{
		paddingVertical: 10,
		color: "#fff",
		fontWeight: "bold",
	},

	darkTheme: {
		backgroundColor: "#333",
		color: "#fff",
	},

	centered: {
		alignItems: "center",
		justifyContent: "center",
	},

	padded: {
		padding: 5,
	},

	margined: {
		margin: 5,
	},
});