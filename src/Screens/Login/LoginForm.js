import { View, Text,StyleSheet,ScrollView,KeyboardAvoidingView, SafeAreaView,Platform,FlatList,Keyboard ,TouchableWithoutFeedback,Image } from 'react-native'
import { useState,useEffect, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import { login,user_google_login } from '../../Api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import YourPhone from "../../Assets/svg/yourPhone.svg"
import CustomInput from '../../Component/Common/CustomInput';
const Countries= [{
  "name": "Afghanistan",
  "dial_code": "+93",
  "emoji": "🇦🇫",
  "code": "AF",
  "mask":"901 901 901"
},
{
  "name": "Aland Islands",
  "dial_code": "+358",
  "emoji": "🇦🇽",
  "code": "AX",
  "mask":"501 801 904"
},]



const LoginForm = ({ route, navigation}) => {
 const { signUpMethod } = route.params;
 const [phoneNumber,setPhoneNumber]=useState()



const onPressContinue= async()=>{

  if(route.params.signUpMethod=='google'){
    try {
      // const {data:{data:{accessToken}}} = await user_google_login({
      //   mobile:phoneNumber
      // })
      const data = await user_google_login({
        mobile:phoneNumber
      })
      console.log("hiiii",data.status)
   
      if(phoneNumber&&data.status=='200')
      navigation.navigate('OtpLogin')
    } catch (error) {
      console.error("Error:", error);
    }
  }
  if(route.params.signUpMethod=='mobile'){
 try {
    const {data:{data:{accessToken}}} = await login({
      signUpMethod,
      mobile:phoneNumber
    })
    AsyncStorage.setItem('AccessToken', JSON.stringify(accessToken), (err)=> {
      if(err){
          console.log("an error");
          throw err;
      }
      console.log("success");
  }).catch((err)=> {
      console.log("error is: " + err);
  });
    if(phoneNumber)
    navigation.navigate('OtpLogin')
  } catch (error) {
    console.error("Error:", error);
  }
  }
 
  
    
  
}




    

  return (
 
    <ScrollView style={{flex:1}}    keyboardShouldPersistTaps="always">
     
      <>
    <Text style={styles.heading}>Your Phone Number </Text>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image
        style={styles.tinyLogo}
        source={require('../../Assets/Images/png/updatemobile.png')}
      />
    </View>
    <KeyboardAvoidingView
   behavior={'height'}
   style={styles.container}>
    <CustomInput/> 
    </KeyboardAvoidingView>
    </>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
   container:{
       flex:1,
      //  backgroundColor:'red',
   },
   heading:{
    color:'black',
    textAlign:'center',
    fontSize: 50,
    color:'black',
    marginVertical:40
   },
   tinyLogo: {
    width: '90%',
  },
 
  
  });

export default LoginForm