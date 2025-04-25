import StatusButtons from "@shared/components/StatusButtons";

import { useState } from "react";
import { ListItem, Switch} from "@rneui/themed";
import { View } from "react-native";

export default function AppTask({ taskName }: { taskName: string }) {
  const [switched, setSwitched] = useState(false);
  const [complete, setComplete] = useState(false);
  return(
    <ListItem topDivider>
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