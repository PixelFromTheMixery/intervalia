import { useState } from "react";
import { View } from "react-native";
import { ListItem, Icon, Badge } from "@rneui/themed";

export default function BaseList() {
  const [expanded, setExpanded] = useState(false);
    
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
        bottomDivider
				content={
          <>
          <Icon name="home" style={{ paddingRight: 15 }} />
          <ListItem.Content>
            <ListItem.Title>Basic Lists</ListItem.Title>
            <ListItem.Subtitle>400 Mins</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content right>
            <Badge value="14" />
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
              <ListItem.Title>
                {l}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Content>
              <ListItem.Subtitle>
                Xh Ym
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
              <Badge value="14" />
            </ListItem.Content>
          </ListItem>
        ))}
        </ListItem.Accordion>
    </View>
  )
}