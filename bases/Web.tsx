import { styles } from "@shared/stylesheet";
import ProjectScreen from "@bases/Screens/Projects";
import Tasklist from "@bases/Screens/TaskList"
import TaskDetails from "@bases/Screens/Task";
import { useUi } from "@shared/uiContext";


import { View } from "react-native";
import { Header, Text } from "@rneui/themed";

export default function Web() {

  /*Used for selected UI Elements*/
  const { projectName } = useUi();

  /*
  Single screen application with:
    Headers for views as there is no navigation feature 
    Project List on left
      Will be updated to be a hidden toolbar
    (Wide)Task List based on project
    Task Details View
  */
  return (
  <View style={{ flexDirection: "row", flex: 1}}>
    <View style={{minWidth:300}}>
      <Header
      leftComponent={{icon: "menu", color:"#fff"}}
      centerComponent={{text: "Projects", style: {fontSize:18, color: "#fff"}}}
      rightComponent={{icon: "visibility", color:"#fff"}}
      />
      <ProjectScreen/>
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
        <Text>{projectName}</Text>
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
    </View>
  )
}
