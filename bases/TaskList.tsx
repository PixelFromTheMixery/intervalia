import { styles } from "@shared/stylesheet";
import Summary from "@bases/TaskList/Details";
import Task from "@components/Task";
import TaskCompleted from "@components/TaskCompExample";


import { useState } from "react";
import { View, ScrollView, } from "react-native";
import { Icon, ListItem } from "@rneui/themed";

export default function TaskList() {
  const [expanded, setExpanded] = useState(false);
    
  return (
    <View style={{flex:1}}>
      <View style={{
        flex:1,
        backgroundColor: "#abdaff"
        }}>
        <Summary/>
        <View style={{flex:1}}>
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
              <Task/>
              <Task/>
              <Task/>
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
              <TaskCompleted/>

            </ListItem.Accordion>

          </ScrollView>
          </View>
      </View>
    </View>
  );
}
