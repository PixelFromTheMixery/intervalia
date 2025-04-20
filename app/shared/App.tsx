import { styles } from '@shared/style'
import Web from '@bases/Web';
import Android from '@bases/Android';


import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaProvider style={styles.lightTheme}>
      <SafeAreaView>
        {Platform.OS === 'web' ? <Web /> : <Android />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}