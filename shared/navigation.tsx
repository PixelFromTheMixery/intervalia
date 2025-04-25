import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProjectList from '@bases/Projects';
import TaskList from '@bases/TaskList';
import TaskDetails from '@bases/Task';

export type RootStackParamList = {
  Home: undefined;
  List: { projectName: string };
  Details: { taskName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ProjectList}
          options={{ title: 'Projects' }}
        />
        <Stack.Screen
          name="List"
          component={TaskList}
          options={({ route }) => ({ title: route.params.projectName })}
        />
        <Stack.Screen
          name="Details"
          component={TaskDetails}
          options={({ route }) => ({ title: route.params.taskName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
