import { styles } from "@shared/stylesheet";
import ProjectList from "@bases/Projects"
import Tasklist from "@bases/TaskList"

import { View } from "react-native";
import { Header, Text } from "@rneui/themed";

export default function Web() {
	return <View style={{ flexDirection: "row", flex: 1}}>
    <View style={{flex:2}}>
      <Header
      leftComponent={{icon: "menu", color:"#fff"}}
      centerComponent={{text: "Projects", style: {fontSize:18, color: "#fff"}}}
      rightComponent={{icon: "visibility", color:"#fff"}}
      />
      <ProjectList/>
    </View>
    <View style={[{flex:4, backgroundColor:"#bbb"}]}>
      <Tasklist/>
    </View>
    <View style={[styles.centered, {flex:3}]}>
      <Text>Task PlaceHolder</Text>
    </View>
    
  </View>;
}
