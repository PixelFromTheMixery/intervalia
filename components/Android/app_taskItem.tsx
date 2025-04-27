import { RootStackParamList } from "@shared/navigation";
import StatusButtons from "@components/StatusButtons";

import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'List'>;


/*
Task list item with dynamically generated status, name, activation
  Assumingly supplied from database
Phone navigation functionality and update selected ui item
*/


export default function AppTask({ taskName }: { taskName: string }) {
  const navigation = useNavigation<NavigationProp>();
  
  const [switched, setSwitched] = useState(false);
  const [complete, setComplete] = useState(false);

  return(
    <Drawer>
      <DrawerItem>
        <Text>Test</Text>
      </DrawerItem>
    </Drawer>
);}