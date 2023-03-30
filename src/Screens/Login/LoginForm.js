import { View, Text,StyleSheet,Image,TouchableOpacity,TextInput,BackHandler,Alert,KeyboardAvoidingView } from 'react-native'
import { useState,useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';


const LoginForm = ({navigation}) => {
 const [number,setNumber]=useState()
 const [focusInput,setFocusInput]=useState(true)
    const onPress = () => {
      navigation.navigate('Home')
      };

const onChangeText=(number)=>{
  setNumber(number)
}

const onPressContinue=()=>{

}

    

  return (
    <View style={{ flex: 1}}>
    <Image
     style={{width: 40, height: 40,alignSelf:'center'}}
   source={require('../../Assets/Images/loginLove.png')}
   />
   <Text style={styles.titleText}>Lets Chat</Text>
   {/* <Text numberOfLines={5} style={styles.titleParagraph}>People with same intrest will match Here with our algorithm</Text> */}

<KeyboardAvoidingView
keyboardVerticalOffset={50}
behavior='padding'
style={{flex:1,alignItems:'center',padding:10}}
>
<Text style={{marginBottom:50,marginTop:50,fontSize:15,color:'black'}}>{"please input your mobile number"}</Text>
<View style={{flexDirection:'row',paddingHorizontal:12,borderRadius:10,backgroundColor:'white',alignItems:'center',}}>
  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'black'}}>{"+91 |"}</Text>
  </View>
  <TextInput placeholder='number' keyboardType='numeric' 
  style={{flex:1,height:50,marginLeft:5,color:'black'}}
  value='234' onChangeText={onChangeText} secureTextEntry={false}/>

</View>
<View style={{flex:1,justifyContent:'flex-end',marginBottom:50,alignItems:'center'}}>
 <TouchableOpacity  onPress={onPressContinue}>
  <View style={{width:150,height:50,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'#244DB7'}}>

      <Text style={{fontSize:20,alignItems:'center'}}>Lets Chat</Text>
  </View>
      </TouchableOpacity>
</View>

</KeyboardAvoidingView>

 </View>
  )
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 50,
      color:'black',
      fontWeight: 'bold',
      textAlign:'center'
    },
    titleParagraph:{
      textAlign:'center',
      padding:30    
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 15,
        color:'red',
        borderRadius:15
      },
    button: {
      alignItems: 'center',
      borderRadius:10,
      backgroundColor: '#FF597B',
      paddingHorizontal:50,
      paddingVertical:20,
      justifyContent:'center',
      margin:30
    },
  });

export default LoginForm