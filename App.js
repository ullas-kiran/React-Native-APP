// In App.js in a new project

import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Login from './src/Screens/Login/Login';
import LoginForm from './src/Screens/Login/LoginForm';
import Home from './src/Screens/Home/Home';
import OtpLogin from './src/Screens/Login/OtpLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserName from './src/Screens/UserDetailsForm/UserName';



const Stack = createNativeStackNavigator();

const stackStyle={
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation:'slide_from_right'
            }

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen   options={stackStyle} name="Login" component={Login} />
      <Stack.Screen   options={stackStyle} name="LoginForm" component={LoginForm} />
      <Stack.Screen   options={stackStyle} name="OtpLogin" component={OtpLogin} />
      <Stack.Screen   options={stackStyle} name="UserName" component={UserName} />
      <Stack.Screen   options={stackStyle}  name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App;