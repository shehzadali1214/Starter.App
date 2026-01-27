import React, { useCallback, useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import SplashScreen from './src/components/SplashScreen';
import 'react-native-gesture-handler';
import { Text } from 'react-native-gesture-handler';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [showSplash, setShowSplash] = useState(true);

  const onSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} hidden={true} />
      <View style={styles.container} className='bg-yellow-500'>
        {showSplash ? (
          <SplashScreen onFinish={onSplashFinish} />
        ) : (
          <NavigationContainer>
            <BottomTabs />
          </NavigationContainer>
        )}
      </View>
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },


});

export default App;
