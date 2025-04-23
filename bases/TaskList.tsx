import { styles } from "@shared/stylesheet";

import { View, ScrollView, Text } from "react-native";

export default function ProjectList() {
  return (
    <View style={{flex:1}}>
      <View style={{
        flex:1,
        backgroundColor: "powderblue"
        }}>
        <View style={{
            height: 40,
            borderRadius: 15,
            backgroundColor: "#fff",
            margin:10, 
            marginBottom:0, 
            justifyContent:"center", 
            alignItems:"center",
          }}>
          <Text>Project Name</Text>
        </View>
        <View style={{flexDirection:"row", flex:1, justifyContent:"space-evenly"}}>
          <View style={[styles.taskListSummary,{margin:10, marginRight:5}]}>
            <Text>Tasks Remaining</Text>
            <Text>Thing</Text>
          </View>
          <View style={[styles.taskListSummary,{margin:10, marginLeft:5}]}>
            <Text>Time Remaining</Text>
            <Text>T</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
