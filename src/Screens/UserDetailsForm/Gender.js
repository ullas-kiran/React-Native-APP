import { View, Text,StyleSheet,Button,TouchableOpacity,TextInput,Pressable,Image } from 'react-native'
import {useState} from 'react'
const Gender = () => {

  const [selectedGender,setSelectedGender]=useState("");

  const handleClick=(gender)=>{
    setSelectedGender(gender)
  }
  return (
    <View style={styles.container}>
      <Text  style={{  fontSize: 50,fontWeight: 'bold',textAlign:'center',color:'black',marginRight:'50%',marginTop:'40%'}}>I am</Text>
      <Image
          style={{alignSelf:'center',marginLeft:'10%'}}
          source={require('../../Assets/Images/gender-diversity.png')}
      />
        <View style={{flexDirection: "row", justifyContent: "space-between",margin:'10%'}}>
        <TouchableOpacity  onPress={()=>handleClick('male')}  style={[{},selectedGender=='male'?{borderRadius:10,padding:5,borderWidth: 4}:{}]}>
              <View>
              <Image
                        style={{alignSelf:'center'}}
                        source={require('../../Assets/Images/male.png')}
                    />
              <Text  style={{  fontSize: 20,fontWeight: 'bold',textAlign:'center',color:'black'}}>Male</Text>
              </View>
          </TouchableOpacity>  
          <TouchableOpacity  onPress={()=>handleClick('female')} style={[{},selectedGender=='female'?{borderWidth: 4, borderRadius:10,padding:5}:{}]}>  
              <View>
              <Image
                        style={{alignSelf:'center'}}
                        source={require('../../Assets/Images/male.png')}
                    />
                     <Text  style={[{  fontSize: 20,fontWeight: 'bold',textAlign:'center',color:'black'}]}>Female</Text>
              </View>
              </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}  >
      <Text style={{fontSize:20}}  >Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
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

export default Gender