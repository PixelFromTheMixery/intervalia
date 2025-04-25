import { styles } from "@shared/stylesheet";
import Summary from "@bases/TaskList/Details";
import AppTask from "@components/Android/app_taskItem";
import WebTask from "@components/Web/web_taskItem";
import TaskCompleted from "@components/TaskCompExample";

import { useState } from "react";
import { View, ScrollView, Platform, } from "react-native";
import { Icon, ListItem } from "@rneui/themed";

export default function TaskList() {
  /*For Accordian*/
  const [expanded, setExpanded] = useState(false);
  
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
              {Platform.OS === "web" ? (
                <>
                  <WebTask taskName="Task name that is long to test word wrap" />
                  <WebTask taskName="That" />
                  <WebTask taskName="The other" />
                  <WebTask taskName="Again" />
                  <WebTask taskName="This" />
                  <WebTask taskName="This" />
                  <WebTask taskName="This" />
                  <WebTask taskName="This" />
                  <WebTask taskName="This" />
                  <WebTask taskName="This" />
                </>
              ) : (
                <>
                  <AppTask taskName="Task name that is long to test word wrap" />
                  <AppTask taskName="That" />
                  <AppTask taskName="The other" />
                  <AppTask taskName="Again" />
                  <AppTask taskName="This" />
                  <AppTask taskName="This" />
                  <AppTask taskName="This" />
                  <AppTask taskName="This" />
                  <AppTask taskName="This" />
                  <AppTask taskName="This" />
                </>
              )}
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
  );
}
