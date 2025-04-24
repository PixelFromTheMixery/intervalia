import { styles } from "@shared/stylesheet";

import { Icon, ListItem, Switch } from "@rneui/themed";
import { useState } from "react";
import { View, ScrollView } from "react-native";

export default function TaskDetails() {
  const [check, setCheck] = useState(false)
  const [switched, setSwitched] = useState(false);
  const [complete, setComplete] = useState(false);

  const taskDetails=[
    {name: "Notes ", value: true, type: "bool"},
    {name: "Size", value: "That", type: "select"},
    {name: "Level", value: "That", type: "multiselect"},
    {name: "Type", value: "That", type: "select"},
    {name: "Project", value: "That", type: "select"},
    {name: "Focus/Break", value: "That", type: "int"},
    {name: "Repeats", value: "Every 1 Days", type: "int"},
    {name: "Rate", value: "That", type: "select"},
    {name: "URL", value: "That", type: "str"},
    {name: "Info", value: "That", type: "str"}
]

  return (
    <ScrollView style={{flex:1}}>    
      <View style={{flex:1}}>
        <ListItem topDivider>
        <ListItem.CheckBox
          checked={check}
          onPress={() => setCheck(!check)}>
        </ListItem.CheckBox>
        <ListItem.Content>
          <ListItem.Title>Thing</ListItem.Title>
        </ListItem.Content>
        <ListItem.Content right>
          <Icon name="add"/>
        </ListItem.Content>
        {!complete && <ListItem.Content right>
          <Switch
          value={switched}
          onValueChange={(value) => setSwitched(value)}></Switch>
        </ListItem.Content>
        }
        <ListItem.Content right>
          <Icon name="edit"/>
        </ListItem.Content>

      </ListItem>
      <ListItem topDivider>
        <ListItem.Content>
          <ListItem.Title>
            Definition of Done
          </ListItem.Title>
          <ListItem.Subtitle>
            Requirments for completeness of task, extra words to test wordwrap
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem topDivider>
        <ListItem.Content>
          <ListItem.CheckBox
            checked={true}/>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Title>
            Notes
          </ListItem.Title>
        </ListItem.Content>          
        <ListItem.Content right>
          <ListItem.Title>
            <Icon name="open-in-new"/>
          </ListItem.Title>
          
        </ListItem.Content>
      </ListItem>
      
      <ListItem topDivider>
        <ListItem.Content>
          <ListItem.Title>
            Status
          </ListItem.Title>
          <ListItem.ButtonGroup
          buttons={["To do", "In Progress", "Blocked", "Done"]}
          />
        </ListItem.Content>
      </ListItem>
      <ListItem topDivider>
        <ListItem.Content>
          <ListItem.Title>
            Size
          </ListItem.Title>
          <ListItem.ButtonGroup
          buttons={["XS","S", "M", "L", "XL"]}
          />
        </ListItem.Content>
      </ListItem>
      {
        taskDetails.map((l, i) => (
          <ListItem key={i} bottomDivider>          
            <ListItem.Content>
              <ListItem.Title>
                {l.name}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Subtitle>
                {l.value}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Subtitle>
                {l.type}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </ScrollView>
  )

}