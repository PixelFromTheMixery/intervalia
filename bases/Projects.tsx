import { styles } from "@shared/stylesheet";
import BaseList from "@bases/Projects/BaseProjectList"
import UserList from "@bases/Projects/UserProjectList"

import { View, ScrollView } from "react-native";

export default function ProjectList() {
  return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        <View style={{marginRight:10}}>
          <BaseList/>
          <UserList/>
        </View>
      </ScrollView>
    </View>
  );
}
