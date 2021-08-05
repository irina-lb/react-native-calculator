
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
import { styles } from './theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style = {styles.background}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'/>
      <CalculatorScreen/>
    </SafeAreaView>
  );
}

