import { RootStackParamList } from "@shared/navigation";
import ProjectItem from "@components/projectItem";

import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ListItem } from "@rneui/themed"

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'List'>;

export default function AppProjectItems(
  i: number, 
  item: {
    name: string, 
    time:string, 
    count:number
  }){
  const navigation = useNavigation<NavigationProp>();

  return(
    <ListItem 
      key={i} 
      onPress={() => {
        navigation.navigate('List', {projectName: item.name})
    }}>
      <ProjectItem 
        projectName={item.name}
        projectTime={item.time}
        projectCount={item.count.toString()
        }/>
    </ListItem>
)}