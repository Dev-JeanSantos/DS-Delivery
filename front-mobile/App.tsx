import React from 'react';
import {useFonts, OpenSans_400Regular,OpenSans_700Bold} from '@expo-google-fonts/open-sans';
import { StatusBar} from 'expo-status-bar';
import { View } from 'react-native';
import {Header} from './src/Componets';
import {Home} from './src/Pages';
import AppLoading from 'expo-app-loading';

const App: React.FC = () => {
  
    let [fontsLoaded] = useFonts({
      OpenSans_400Regular,
      OpenSans_700Bold
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
 
  return (
    <View>
      <StatusBar />
      <Header />
      <Home />

    </View>
  );
}
 
export default App;