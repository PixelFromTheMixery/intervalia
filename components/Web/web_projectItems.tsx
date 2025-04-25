import { ListItem } from "@rneui/themed"
import ProjectItem from "@components/projectItem"
import { useUi } from "@shared/uiContext";

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
    <ListItem 
      key={i} 
      bottomDivider
      onPress={() => {setProjectName(item.name)}}>
      <ProjectItem 
        projectName={item.name}
        projectTime={item.time}
        projectCount={item.count.toString()
        }/>
    </ListItem>
)}