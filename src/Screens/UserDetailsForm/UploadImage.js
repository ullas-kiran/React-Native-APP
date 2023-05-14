import { View, Text,StyleSheet,Button,TouchableOpacity,TextInput,Pressable,Image, FlatList, SafeAreaView } from 'react-native'
import {useState} from 'react'

const UploadImage = ({navigation}) => {

    const onPressContinue = () => {
        // navigation.navigate('UploadImage')
        };

  return (
    <View style={styles.container}>
      <Image
          style={{alignSelf:'center'}}
          source={require('../../Assets/Images/image-upload.png')}
          />
          <Text style={styles.heading}>UploadImage</Text>
          <Text style={styles.paragraph}>UploadImage</Text>
          <View style={[{flexDirection:'row'}]}>
            <Button  title="Upload"/>
            <Button  title="Remove"/>
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