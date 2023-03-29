import { useState } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {


  const onPress = () => {
    navigation.navigate('LoginForm')
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
       <Image
        style={{width: 40, height: 40,alignSelf:'center'}}
      source={require('../../Assets/Images/loginLove.png')}
      />
      <Text style={styles.titleText}>Lets Chat</Text>
      {/* <Text numberOfLines={5} style={styles.titleParagraph}>People with same intrest will match Here with our algorithm</Text> */}
  
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{fontSize:20}}>Login</Text>
      </TouchableOpacity>

  
      <Image
        style={{width: 150, height: 150,marginLeft:200}}
      source={require('../../Assets/Images/loginloveLetter.png')}
      />
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
    backgroundColor: '#DDDDDD',
    paddingHorizontal:50,
    paddingVertical:20,
    justifyContent:'center',
    margin:30
  },
});

export default Login