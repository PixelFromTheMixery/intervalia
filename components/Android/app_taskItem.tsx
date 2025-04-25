import { RootStackParamList } from "@shared/navigation";
import StatusButtons from "@components/StatusButtons";

import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { ListItem, Switch} from "@rneui/themed";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'List'>;

export default function AppTask({ taskName }: { taskName: string }) {
  const navigation = useNavigation<NavigationProp>();
  
  const [switched, setSwitched] = useState(false);
  const [complete, setComplete] = useState(false);
  return(
    <ListItem 
    topDivider
    onPress={() => navigation.navigate('Details', {taskName: taskName})}
      >
      <ListItem.Content>
        <ListItem.Title style={{paddingBottom:10}}>
        {taskName}
        </ListItem.Title>  
        <StatusButtons />
      </ListItem.Content>
      {!complete && (
        <Switch
          value={switched}
          onValueChange={(value) => setSwitched(value)}
        />
      )}

    </ListItem>
);}