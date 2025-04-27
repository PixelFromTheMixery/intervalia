import { ListItem, Button, Overlay } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";

const statuses = [
  'To Do',
  'Doing',
  'Blocked',
  'Done',
  'Repeating',
  'Ongoing',
];


export default function StatusButtons(
	{status}: {status: number}
	){
		const [visible, setVisible] = useState(false);
	 	const [selectedStatus, setSelectedStatus] = useState(statuses[status]);

		const selectStatus = (status: string) => {
    setSelectedStatus(status);
    setVisible(false);
		};
		 return (
    <>
      <Button
        title={selectedStatus}
        onPress={() => setVisible(true)}
				style={{width:100}}
      />
      <Overlay
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        overlayStyle={{
          width: '80%',
          borderRadius: 10,
          padding: 10,
        }}
      >
        <View>
          {statuses.map((status) => (
            <ListItem 
              key={status} 
              onPress={() => selectStatus(status)}
              bottomDivider
            >
              <ListItem.Content>
                <ListItem.Title>{status}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </Overlay>
    </>
  );
}