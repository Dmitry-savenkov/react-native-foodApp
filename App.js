// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from './assets/colors/color';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Details from './components/Details';
Icon.loadFont();
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={
          { headerShown: false }
        } />
        <Stack.Screen name="Details" component={Details} options={
          { headerShown: false }
        } />


      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
