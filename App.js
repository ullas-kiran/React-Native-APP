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
import DateOfBirth from './src/Screens/UserDetailsForm/DateOfBirth';
import Gender from './src/Screens/UserDetailsForm/Gender';
import UserIntrest from './src/Screens/UserDetailsForm/UserIntrest';
import UploadImage from './src/Screens/UserDetailsForm/UploadImage';


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
      <Stack.Screen   options={stackStyle} name="DateOfBirth" component={DateOfBirth} />
      <Stack.Screen   options={stackStyle} name="Gender" component={Gender} />
      <Stack.Screen   options={stackStyle} name="UserIntrest" component={UserIntrest} />
      <Stack.Screen   options={stackStyle} name="UploadImage" component={UploadImage} />
      <Stack.Screen   options={stackStyle}  name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App;