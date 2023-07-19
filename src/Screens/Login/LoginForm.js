import { View, Text,StyleSheet,ScrollView,KeyboardAvoidingView, SafeAreaView,Platform,FlatList,Keyboard ,TouchableWithoutFeedback,Image } from 'react-native'
import { useState,useEffect, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import { login,user_google_login } from '../../Api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import YourPhone from "../../Assets/svg/yourPhone.svg"
import CustomInput from '../../Component/Common/CustomInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DefaultButton from '../../Component/Common/CustomButton/DefaultButton';
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

 const loginFormSchema = Yup.object().shape({
  phone: Yup.string().required('phone required'),
});



const FormSubmit= async(values, resetForm)=>{

  if(route.params.signUpMethod=='google'){
    try {
      // const {data:{data:{accessToken}}} = await user_google_login({
      //   mobile:phoneNumber
      // })
      const data = await user_google_login({
        mobile:values.phone
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
      mobile:values.phone
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
    if(values.phone)
    navigation.navigate('OtpLogin')

  } catch (error) {
    console.error("Error:", error);
  }
  }
 
  
    
  
}



// const FormSubmit = (values, resetForm) => {
// console.log("values",values.phone)
// };
    

  return (
 
    <ScrollView style={{flex:1}} >  
    {/* <View> */}
    <Text style={styles.heading}>Your Phone Number </Text>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image
        style={styles.tinyLogo}
        source={require('../../Assets/Images/png/updatemobile.png')}
      />
    </View>
    <KeyboardAvoidingView
   behavior={'paading'}
   style={styles.container}>
      <Formik
            initialValues={{
              phone: '',
            }}
            validationSchema={loginFormSchema}
            onSubmit={(values, {resetForm}) => FormSubmit(values, resetForm)}
            >
            {({values, errors, handleChange, setFieldValue, handleSubmit}) => (
              <>
                 <CustomInput 
                   value={values.phone}
                  error={errors.phone} 
                   onChangeText={handleChange('phone')}
                  placeHolder="Enter Phone"
                  keyboardType="numeric"
                      /> 
                  <DefaultButton   style={{
             button: {
              marginVertical: 30,
             },
            }} onPress={handleSubmit}  label="Login"/>
              </>
            )}
          </Formik>
    </KeyboardAvoidingView>
    {/* </View> */}
    </ScrollView>

  )
}

const styles = StyleSheet.create({
   container:{
       flex:1,
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