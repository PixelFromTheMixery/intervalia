import { RootStackParamList } from "@shared/navigation";
import ProjectItem from "@components/projectItem";
import { useUi } from "@shared/uiContext";

import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Drawer, DrawerItem, Text } from "@ui-kitten/components";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'List'>;

/*
Project list item with dynamically generated name, time, and count
  Assumingly supplied from database
phone navigation functionality and update selected ui item
*/

export default function AppProjectItems(
  i: number, 
  item: {
    name: string, 
    time:string, 
    count:number
  }){
  const navigation = useNavigation<NavigationProp>();
  const { setProjectName } = useUi();

  	return (
		<Drawer>
			<DrawerItem>
				<Text>Test</Text>
			</DrawerItem>
		</Drawer>)}
/*
  return(
    <ListItem 
      key={i} 
      onPress={() => {
        navigation.navigate('List', {projectName: item.name})
        setProjectName(item.name)
    }}>
      <ProjectItem 
        projectName={item.name}
        projectTime={item.time}
        projectCount={item.count.toString()
        }/>
    </ListItem>
)}*/