import { View } from "react-native";
import { ListItem, Icon } from "@rneui/themed";

export default function BaseList() {
  const titles=[
    "Today",
    "Tomorrow",
    "This Week",
    "Due Date",
    "No Due Date",
    "All Tasks",
  ]
  
  
  return (
    <View>
      <ListItem.Accordion
				content={
          <>
          <Icon name="folder" style={{ paddingRight: 15 }} />
          <ListItem.Content>
            <ListItem.Title>Basic Lists</ListItem.Title>
            <ListItem.Subtitle>20 Tasks 400 Mins</ListItem.Subtitle>
          </ListItem.Content>
          </>
        }
        isExpanded={expanded}
				onPress={() => {
					setExpanded(!expanded);
				}}
>
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
        </ListItem.Accordion>
    </View>
  )
}