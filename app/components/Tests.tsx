import { Platform, Text} from 'react-native';

export default function OS_Check() {
  return (
        <Text>This is the {Platform.OS} app!</Text>
  );
}
