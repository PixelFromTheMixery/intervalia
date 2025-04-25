import { ListItem, Icon } from "@rneui/themed";
import { useState } from "react";
import { Platform } from "react-native";


export default function StatusButtons(
	status: number
	){
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(status);
  return (
		<ListItem.ButtonGroup
      containerStyle={Platform.OS == "web" ? {width:150,} : {width:"100%"}}
			buttons={[
				<Icon name="radio-button-unchecked" />,
				<Icon name="schedule" />,
				<Icon name="block" />,
				<Icon name="task-alt" />,
			]}
      selectedIndex={selectedButtonIndex}
      onPress={(index) => setSelectedButtonIndex(index)}
		/>
	)
}
