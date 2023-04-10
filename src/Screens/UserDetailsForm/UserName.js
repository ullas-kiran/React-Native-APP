import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react'
const UserName = ({navigation}) => {
  const [name, onChangeName] = useState('');

  const onPressContinue= async()=>{
    if(name){
      navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient style={{flex:1,justifyContent:'center'}}   locations={[100,100,0.6]} colors={['#C6B6EA', '#F5C9D9', '#FF72B638']} >
      <Text style={styles.cellText}>Hey</Text>
      <Text style={styles.cellText}>What Can I Call You?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
      />
      <TouchableOpacity style={styles.button}  onPress={onPressContinue}>
      <Text style={{fontSize:20}}>Continue</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red'
    },
  cellText:{
    textAlign:'center',
    fontSize:16,
    color:'black'
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  width:'80%',
  alignSelf:'center',
  padding: 10,
  borderRadius:10
},
button: {
  alignItems: 'center',
  borderRadius:10,
  backgroundColor: '#D2576D',
  width:'50%',
  alignSelf:'center',
  paddingVertical:10,
 justifyContent:'center',
  margin:10
},
})

export default UserName