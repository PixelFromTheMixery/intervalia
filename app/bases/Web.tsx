import { styles } from '@shared/style'

import { Text, View } from 'react-native';


export default function Web() {
  return (
        <View style={{flexDirection: 'row', width:'100%'}}>
          <Text style={{flex:1, textAlign:'center'}}>Column 1</Text>
          <Text style={{flex:3, textAlign:'center'}}>Column 2</Text>
          <Text style={{flex:1, textAlign:'center'}}>Column 3</Text>
        </View>
  );
}
