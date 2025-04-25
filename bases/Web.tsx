import { styles } from "@shared/stylesheet";
import ProjectList from "@bases/Projects"
import Tasklist from "@bases/TaskList"
import TaskDetails from "@bases/Task";
import { useUi } from "@shared/uiContext";


import { View } from "react-native";
import { Header, Text } from "@rneui/themed";

export default function Web() {
	const { projectName } = useUi();
  
  return <View style={{ flexDirection: "row", flex: 1}}>
    <View style={{minWidth:300}}>
      <Header
      leftComponent={{icon: "menu", color:"#fff"}}
      centerComponent={{text: "Projects", style: {fontSize:18, color: "#fff"}}}
      rightComponent={{icon: "visibility", color:"#fff"}}
      />
      <ProjectList/>
      </View>
        <View style={[{flex:2, backgroundColor:"#abdaff"}]}>
            <View style={[styles.rounded, {
        height: 40,
        borderRadius: 15,
        backgroundColor: "#fff",
        margin:10, 
        marginBottom:0, 
        justifyContent:"center", 
        alignItems:"center",
      }]}>
        <Text style={{fontWeight:"bold"}}>{projectName}</Text>
      </View>
      <Tasklist/>
    </View>
    
    <View style={[{flex:1}]}>
    <Header
      leftComponent={{icon: "visibility", color:"#fff"}}
      centerComponent={{text: "Task Name", style: {fontSize:18, color: "#fff"}}}
      />
      <TaskDetails/>
    </View>
    
  </View>;
}
