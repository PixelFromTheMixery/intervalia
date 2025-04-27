import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ProjectList from '@bases/Screens/Projects';
import TaskList from '@bases/Screens/TaskList';
import TaskDetails from '@bases/Screens/Task';

export type RootStackParamList = {
  Home: undefined;
  Project: { projectName: string };
  Task: { taskName: string };
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
          name="Project"
          component={TaskList}
          options={({ route }) => ({ title: route.params.projectName })}
        />
        <Stack.Screen
          name="Task"
          component={TaskDetails}
          options={({ route }) => ({ title: route.params.taskName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type NavigationPropProject = NativeStackNavigationProp<RootStackParamList, 'Project'>;
export type NavigationPropTask = NativeStackNavigationProp<RootStackParamList, 'Task'>;