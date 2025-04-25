import BaseList from "@bases/Projects/BaseProjectList"
import UserList from "@bases/Projects/UserProjectList"
import { Input, Text } from "@rneui/themed";

import { View, ScrollView } from "react-native";

export default function ProjectList() {
  /*
  Returns a non-functioning search bar and Project View Lists
  */
  return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        <Input
          placeholder="Search here"
          leftIcon={{name: "search"}}>
        </Input>
        <View style={{marginRight:10}}>
          <BaseList/>
          <UserList/>
        </View>
      </ScrollView>
    </View>
  );
}
