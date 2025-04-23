import { useState } from "react";
import { ListItem, Switch} from "@rneui/themed";

export default function Task() {
  
  const [check, setCheck] = useState(false);
  const [switched, setSwitched] = useState(false);
  const [complete, setComplete] = useState(false);

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