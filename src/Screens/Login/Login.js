import { useState,useEffect } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,ActivityIndicator,Linking } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { login} from '../../Api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
GoogleSignin.configure({
  webClientId: '843672720732-qi6grqq67ds7gp0imjhqhtgtu8s6la4m.apps.googleusercontent.com',
});

import LoginIcon from '../../Assets/svg/login.svg'
import GoogleIcon from '../../Assets/svg/google.svg'
import PhoneIcon from '../../Assets/svg/phone.svg'
const Login = ({navigation}) => {


  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onPress = () => {
    navigation.navigate('LoginForm',{signUpMethod:'mobile'})
  };

  const getUser = async () => {
    try{
    await GoogleSignin.signOut();
    await GoogleSignin.hasPlayServices(); // Check if Play Services are installed
    const user = await GoogleSignin.signIn(); // Start the sign-in process
    const {name,email,photo}=user.user;
    console.log("user",user.user); // Do something with the user info
    if(user.user){
      try {
        const response = await login({  
          name:name,
          email:email,
          photo:photo,
          signUpMethod:'google',
      })

        console.log("Success:", response.status);
        if(response.status=='200'){
          AsyncStorage.setItem('AccessToken', JSON.stringify(response.data.data.accessToken), (err)=> {
            if(err){
                console.log("an error");
                throw err;
            }
            console.log("success");
            navigation.navigate('LoginForm',{signUpMethod:'google'})
        }).catch((err)=> {
            console.log("error is: " + err);
        });
        }
      } catch (error) {
        console.error("Error:1", error);
      }
    }
 
  } catch (error) {
    console.error("Error2:", error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
     
  }
}

  return (
  
    <View style={styles.container} >
      <Text style={styles.titleText}>Continue With</Text>
      <View style={{alignItems:'center',}}>
      <LoginIcon  width={300} height={300} />
      </View>
      <TouchableOpacity style={[styles.button,{marginTop:40}]} onPress={getUser}>
        <Text style={{fontSize:20}}><GoogleIcon  height={30}  /> Login With Google</Text>
      </TouchableOpacity>
      <Text style={{textAlign:'center'}}>OR</Text>
      <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={{fontSize:20}}><PhoneIcon height={30}/> Login With Number</Text>
      </TouchableOpacity>
      </View>
  
  )
}


const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F5F5F5'
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    textAlign:'center',
    fontSize: 50,
    color:'black',
    marginVertical:40
  },
  titleParagraph:{
    textAlign:'center',
    fontSize:20,
    // padding:30    
  },
  button: {
    alignItems: 'center',
    borderRadius:30,
    color:'red',
    backgroundColor: '#FFFFFF99',
    marginHorizontal:40,
    paddingVertical:10,
   justifyContent:'center',
    margin:10
  },
});

export default Login