import { styles } from "@shared/stylesheet";
import Summary from "@components/ProjectDetails";
import TaskListItem from "@components/TaskItem";
import { useUi } from "@shared/uiContext";
import { NavigationPropTask } from "@shared/navigation";

import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { View, ScrollView, Platform, } from "react-native";
import { Icon, ListItem } from "@rneui/themed";

export default function TaskListScreen() {
  /*For Accordian*/
  const [expanded, setExpanded] = useState(false);
  const navigation = Platform.OS === "android" ? useNavigation<NavigationPropTask>() : null;
  

  const dummyTasks = [
		{ name: "This", status: 0},
		{ name: "That", status: 1},
		{ name: "The Other", status: 2},
		{ name: "Again", status: 3},
		{ name: "This", status: 4},
		{ name: "Another", status: 5},
	];

  const { setTaskName } = useUi();
    // Platform-specific navigation handling
    const handlePress = (name: string) => {
      setTaskName(name);
  
      if (navigation) {
        // For mobile, use React Navigation
        navigation.navigate("Task", { taskName: name });
      }
    };

	

  /*
  Returns a prett background element with a non functioning list of items containing following:
    Interactive buttons for updating status
    Task Name
    Activate timer on task
  Currently hard coded but will be generated from database
  Non-operating completed task list to remove clutter
  */
  return (
      <View style={{
        flex:1,
        backgroundColor: "#abdaff"
        }}>
        <Summary/>
          <ScrollView 
            style={[styles.rounded, {
              height: 40,
              borderRadius: 15,
              backgroundColor: "#fff",
              margin:10, 
              flex:1,
              marginTop:0, 
          }]}>
            <View>
              {dummyTasks.map((l,i) =>(
                <TaskListItem
                key={i}
                name={l.name}
                status={l.status}
                onPress={() => handlePress(l.name)}
                />
              ))}
            </View>
            <ListItem.Accordion
            topDivider
            content={
              <>
              <Icon name="check-circle" style={{ paddingRight: 15 }}/>
              <ListItem.Title>
                Completed Tasks
              </ListItem.Title>
              </>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
            >

            </ListItem.Accordion>

          </ScrollView>
          </View>
  );
}
