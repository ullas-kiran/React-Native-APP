import { View, Text,StyleSheet,Image,TouchableOpacity,TextInput,BackHandler,Alert } from 'react-native'
import { useState,useEffect } from 'react';

import { Dimensions } from 'react-native';


const LoginForm = ({navigation}) => {
 const [number,setNumber]=useState()
    const onPress = () => {

      };



    

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Image
     style={{width: 40, height: 40,alignSelf:'center'}}
   source={require('../../Assets/Images/loginLove.png')}
   />
   <Text style={styles.titleText}>Lets Chat</Text>
   {/* <Text numberOfLines={5} style={styles.titleParagraph}>People with same intrest will match Here with our algorithm</Text> */}

   <TextInput
   placeholderTextColor={'red'}
        style={styles.input}
        onChangeText={onPress}
        value={number}
        placeholder="email"
        keyboardType="numeric"
      />
   <TextInput
   placeholderTextColor={'red'}
        style={styles.input}
        onChangeText={onPress}
        value={number}
        placeholder="password"
        keyboardType="numeric"
      />

<TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{fontSize:20}}>Lets Chat</Text>
      </TouchableOpacity>
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
      backgroundColor: '#DDDDDD',
      paddingHorizontal:50,
      paddingVertical:20,
      justifyContent:'center',
      margin:30
    },
  });

export default LoginForm