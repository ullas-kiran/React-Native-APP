import { View, Text,StyleSheet,Button,TouchableOpacity,TextInput,Pressable,Image, FlatList, SafeAreaView } from 'react-native'
import {useState} from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const UploadImage = ({navigation}) => {

  const [picture,setPicture]=useState('')

    const onPressContinue = () => {
        // navigation.navigate('UploadImage')
        };

    const uploadImage=async()=>{
      let options={
        mediaType:'photo',
        quality:1,
        includeBase64:true
      }

      const result = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      },(response)=>{
        if(response.didCancel){
          console.log("cancelled image selection")
        }else if(response.errorCode=='permission'){
          console.log("permission not satisfied")
        }else if(response.errorCode=='others'){
          console.log(response.errorMessage)
        }else if(response.assets[0].fileSize>2097152){
       console.log("max size exceeed");
        }else{
          console.log("res",response.assets[0])
          setPicture(response.assets[0].base64)
        }
      })

    } 
    
    const removeImage=()=>{
      setPicture('')
    }
    
    console.log(picture)

  return (
    <View style={styles.container}>
      <Image
          style={{alignSelf:'center',width: 200,height: 200,}}
          
          source={{uri:'data:image/png;base64,' + picture}}
          />
          <Text style={styles.heading}>Upload Profile</Text>
          {/* <Text style={styles.paragraph}>UploadImage</Text> */}
          <View style={[{flexDirection:'row',justifyContent:'center',alignItems:'center',columnGap:5}]}>
            <Button  title="Upload" onPress={()=>uploadImage()}/>
            <Button  title="Remove" onPress={()=>removeImage()} />
          </View>
          <TouchableOpacity style={styles.continuebutton}  >
      <Text style={{fontSize:20}}  onPress={onPressContinue}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      heading:{
        textAlign:'center',
        fontSize:20
      },
      paragraph:{
        textAlign:'center',
        marginTop:'10%',
        fontSize:15
      },
      continuebutton: {
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

export default UploadImage