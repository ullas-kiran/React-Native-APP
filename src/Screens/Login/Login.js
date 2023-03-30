import { useState,useEffect } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity,ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onPress = () => {
    navigation.navigate('LoginForm')
  };

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://3d65-115-246-244-26.in.ngrok.io/auth');
      const json = await response.json();
      console.log(json)
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

 

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