import { View } from "react-native";
import { ListItem, Text } from "@rneui/themed";

export default function BaseList() {
  const titles=[
    "Today",
    "Tomorrow",
    "This Week",
    "Due Date",
    "No Due Date",
    "All Tasks",
    "Notion Automation"
  ]
  
  
  return (
    <View>
      {
        titles.map((l, i) => (
        <ListItem key={i} bottomDivider>          
          <ListItem.Content style={{minWidth:150}}>
            <ListItem.Subtitle>
              {l}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content right>
            <ListItem.Subtitle>
              Xh Ym | Z
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        ))}
    </View>
  )
}