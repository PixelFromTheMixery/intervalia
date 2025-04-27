import ProjectItem from "@components/projectItem"
import { useUi } from "@shared/uiContext";

import { Drawer, DrawerItem, Text } from "@ui-kitten/components";


/*Project list item with  functionality*/

export default function WebProjectItems(
  i: number, 
  item: {
    name: string, 
    time:string, 
    count:number
  }){
  const { setProjectName } = useUi();
  return(
    <Drawer>
      <DrawerItem>
        <Text>Base List</Text>
      </DrawerItem>
    </Drawer>)}