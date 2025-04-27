import WebProjectItems from "@components/Web/web_projectItems";
import AppProjectItems from "@components/Android/app_projectItems";

import { useState } from "react";
import { Platform} from "react-native";
import { Drawer, DrawerItem, Text } from "@ui-kitten/components";

export default function BaseList() {
  /*For Accordian*/
  const [expanded, setExpanded] = useState(false);

  /*
  Simple List values
  Potential revert to just titles and use sql queries for other info
  */
  const titles=[
    {name:"Today", time: "30m", count: 24},
    {name:"Tomorrow", time: "30m", count: 1},
    {name:"This Week", time: "30m", count: 1},
    {name:"Due Date", time: "30m", count: 1},
    {name:"No Due Date", time: "30m", count: 1},
    {name:"All Tasks", time: "30m", count: 1},
    {name:"Today", time: "30m", count: 1},
  ]

  /*
  Returns a expanding list of Views, each with a name, total time, total task count
  Seperated by platform because Android Navigation breaks web side
  */
  return (
		<Drawer>
			<DrawerItem>
				<Text>Test</Text>
			</DrawerItem>
		</Drawer>)}
    /*
    <ListItem.Accordion 
      bottomDivider
      content={
        <>
          <Icon name="home" style={{ paddingRight: 15 }} />
          <ListItem.Content>
            <ListItem.Title>Basic Views</ListItem.Title>
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
}*/