import { useState,useEffect } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,ActivityIndicator,Linking } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider, signInWithCredential,getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { user_google_login } from '../../Api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
  webClientId: '843672720732-qi6grqq67ds7gp0imjhqhtgtu8s6la4m.apps.googleusercontent.com',
});



const Login = ({navigation}) => {


  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onPress = () => {
    navigation.navigate('LoginForm')
  };

  const getUser = async () => {
    try{
    await GoogleSignin.signOut();
    await GoogleSignin.hasPlayServices(); // Check if Play Services are installed
    const user = await GoogleSignin.signIn(); // Start the sign-in process
    const {name,email,photo}=user.user;
    // console.log("user",user.user); // Do something with the user info
    if(user.user){
      try {
        const response = await user_google_login({  
            "user":{
            "name":"zack",
            "email":"devvlmna@gmail.com",
            "photo":"dsfsdfsdfsdfsdfsdf"
            }   
      })

      // fetch('https://vingle-taupe.vercel.app/auth/signin/google',{method:'POST',body: JSON.stringify({"user":{
      //   "name":"zack",
      //   "email":"devvlmna@gmail.com",
      //   "photo":"dsfsdfsdfsdfsdfsdf"
      //   } })}).then((res)=>{
      //   console.log("res",res)
      // })
    
        // const result = await response;
        console.log("Success:", response);
        // navigation.navigate('LoginForm')
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
    <View style={{ flex: 1, justifyContent: 'center'}}>
     {isLoading?<ActivityIndicator />: <LinearGradient style={{flex:1,justifyContent:'center'}}   locations={[100,100,0.6]} colors={['#C6B6EA', '#F5C9D9', '#FF72B638']} >
 

       <Image
        style={{width: 40, height: 40,alignSelf:'center'}}
      source={require('../../Assets/Images/loginLove.png')}
      />
      <Text style={styles.titleText}>Lets Chat</Text>
      {/* <Text numberOfLines={5} style={styles.titleParagraph}>People with same intrest will match Here with our algorithm</Text> */}
  
      <Image
        style={{width: 150, height: 150,marginLeft:'30%'}}
      source={require('../../Assets/Images/loginloveLetter.png')}
      />
      <TouchableOpacity style={[styles.button,{marginTop:300}]} onPress={getUser}>
        <Text style={{fontSize:20}}><Icon name="google" size={30} color="#900"  /> Login With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={{fontSize:20}}><Icon name='phone'style={{margin:10}} size={30} color="#900"  /> Login With Number</Text>
      </TouchableOpacity>

  
      </LinearGradient>}
    </View>
  )
}


const styles = StyleSheet.create({

  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    textAlign:'center',
    fontSize: 50,
    color:'black',
    fontWeight: 'bold',
  },
  titleParagraph:{
    textAlign:'center',
    padding:30    
  },
  button: {
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: '#D2576D',
    paddingHorizontal:50,
    paddingVertical:20,
   justifyContent:'center',
    margin:10
  },
});

export default Login