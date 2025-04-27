import StatusButtons from "@components/StatusButtons";

import { useState } from "react";
import { ListItem, Switch, Text} from "@rneui/themed";
import { View } from "react-native";
/*
Task list item with dynamically generated status, name, activation
  Assumingly supplied from database
Phone navigation functionality and update selected ui item
*/
export default function TaskListItem(
  { 
    name,
    status,
    onPress
  }:{ 
    name: string;
    status: number;
    onPress: () => void;
  }){
  

  const [switched, setSwitched] = useState(false);
  const [complete, setComplete] = useState(false);

  return(

    <ListItem 
    topDivider
    onPress={onPress}
      >
      <View style={{flex:1}}>  
        <View style={{paddingBottom:10}}>
          <Text>{name}</Text>  
        </View>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <StatusButtons status={status}/>
          <Text>Other info</Text>
        </View>
      </View>
      {!complete && (
        <Switch
          value={switched}
          onValueChange={(value) => setSwitched(value)}
        />
      )}


    </ListItem>
);}