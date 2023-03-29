// In App.js in a new project

import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Login from './src/Screens/Login/Login';
import LoginForm from './src/Screens/Login/LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen  name="Login" component={Login} />
      <Stack.Screen  name="LoginForm" component={LoginForm} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App;