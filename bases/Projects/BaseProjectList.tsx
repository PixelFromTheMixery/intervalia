import WebProjectItems from "@components/Web/web_projectItems";
import AppProjectItems from "@components/Android/app_projectItems";

import { useState } from "react";
import { Platform} from "react-native";
import { ListItem, Icon} from "@rneui/themed";

export default function BaseList() {
  const [expanded, setExpanded] = useState(false);

  const titles=[
    {name:"Today", time: "30m", count: 1},
    {name:"Tomorrow", time: "30m", count: 1},
    {name:"This Week", time: "30m", count: 1},
    {name:"Due Date", time: "30m", count: 1},
    {name:"No Due Date", time: "30m", count: 1},
    {name:"All Tasks", time: "30m", count: 1},
    {name:"Today", time: "30m", count: 1},
  ]

  return (
    <ListItem.Accordion 
      bottomDivider
      content={
        <>
          <Icon name="home" style={{ paddingRight: 15 }} />
          <ListItem.Content>
            <ListItem.Title>Basic Lists</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
        {Platform.OS == "web" ? 
        (
        titles.map((l, i) => (
          WebProjectItems(i,l)
      ))):(
        titles.map((l, i) => (
          AppProjectItems(i,l)
      )))}
    </ListItem.Accordion>
  )
}