import { useState } from "react";
import { ListItem, Switch} from "@rneui/themed";

export default function TaskCompleted() {
  
  const [check, setCheck] = useState(true);
  const [switched, setSwitched] = useState(false);
  const [complete, setComplete] = useState(true);

  return(
    <ListItem topDivider>
      <ListItem.CheckBox
        checked={check}
        onPress={() => setCheck(!check)}>
      </ListItem.CheckBox>
      <ListItem.Content>
        <ListItem.Title>Test</ListItem.Title>
        <ListItem.Subtitle>Details</ListItem.Subtitle>
      </ListItem.Content>
      {!complete && <ListItem.Content right>
        <Switch
        value={switched}
        onValueChange={(value) => setSwitched(value)}></Switch>
      </ListItem.Content>}
    </ListItem>
);}