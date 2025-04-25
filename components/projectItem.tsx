import { Badge, ListItem, Text } from "@rneui/themed";
import { View } from "react-native";

export default function ProjectItem(
  { projectName, 
    projectTime, 
    projectCount 
  }: { 
    projectName: string; 
    projectTime: string;
    projectCount: string
  }){
  return(
      <ListItem.Content style={{flexDirection: "row", minWidth:150}}>
        <View style={{flex:1}}>
          <ListItem.Title>{projectName}</ListItem.Title>
        </View>
        <View style={{paddingHorizontal:8}}>
          <ListItem.Subtitle>{projectTime}</ListItem.Subtitle>
        </View>
        <View style={{paddingHorizontal:8}}>
          <Badge value={projectCount} />
        </View>

      </ListItem.Content>
);}