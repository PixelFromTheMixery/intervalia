import { styles } from "@shared/stylesheet";

import { View } from "react-native";
import { Text } from "@rneui/themed";

export default function Summary() {
  return (
    <>
    <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
      <View style={[styles.taskListSummary, styles.rounded, {margin:10, marginRight:5}]}>
        <Text>Tasks</Text>
        <Text>Thing</Text>
      </View>
      <View style={[styles.taskListSummary, styles.rounded, {margin:10, marginLeft:5}]}>
        <Text>Time</Text>
        <Text>T</Text>
      </View>
    </View>
  </>
);}