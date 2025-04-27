import { Badge, ListItem, Text } from "@rneui/themed";
import { View } from "react-native";

export default function ProjectListItem(
  { projectName, 
    projectTime, 
    projectCount,
    onPress
  }: { 
    projectName: string; 
    projectTime: string;
    projectCount: string;
    onPress: () => void
  }){

    
  return(
      <ListItem onPress={onPress} style={{flexDirection: "row", minWidth:150}}>
        <View style={{flex:1}}>
          <ListItem.Title>{projectName}</ListItem.Title>
        </View>
        <View style={{paddingHorizontal:8}}>
          <ListItem.Subtitle>{projectTime}</ListItem.Subtitle>
        </View>
        <View style={{paddingHorizontal:8}}>
          <Badge value={projectCount} />
        </View>
      </ListItem>
);}