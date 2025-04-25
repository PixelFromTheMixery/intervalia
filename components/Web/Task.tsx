import StatusButtons from "@shared/components/StatusButtons";

import { useState } from "react";
import { ListItem, Switch} from "@rneui/themed";
import { Platform, View } from "react-native";

export default function WebTask({ taskName }: { taskName: string }) {
  const [switched, setSwitched] = useState(false);
  const [complete, setComplete] = useState(false);
  return(
      <ListItem topDivider>
  <ListItem.Content
    style={{
      flexDirection: "row",
      alignItems:"center"
    }}
  >
    <View>
      <StatusButtons/>
    </View>

    <View style={{ flex: 1, paddingHorizontal: 8 }}>
      <ListItem.Title >
        {taskName}
      </ListItem.Title>
    </View>

    {!complete && (
      <Switch
        value={switched}
        onValueChange={(value) => setSwitched(value)}
      />
    )}
  </ListItem.Content>
</ListItem>
);}