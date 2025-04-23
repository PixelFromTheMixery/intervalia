import { styles } from "@shared/stylesheet";
import ProjectList from "@bases/Projects"

import { View } from "react-native";
import { Header, Icon, Text } from "@rneui/themed";
import { TouchableOpacity } from "react-native";

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
    <View style={[styles.centered, {flex:4, backgroundColor:"#bbb"}]}>
      <Text>Task List PlaceHolder</Text>
    </View>
    <View style={[styles.centered, {flex:3}]}>
      <Text>Task PlaceHolder</Text>
    </View>
    
  </View>;
}
