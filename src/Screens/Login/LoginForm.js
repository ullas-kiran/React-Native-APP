import { View, Text,StyleSheet,Image,TouchableOpacity,TextInput,Modal,KeyboardAvoidingView, SafeAreaView, FlatList, TouchableWithoutFeedback } from 'react-native'
import { useState,useEffect, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';

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



const LoginForm = ({navigation}) => {
 const defaultCodeCountry="+91";
 const defaultMaskCountry="902 901 901";
 const [phoneNumber,setPhoneNumber]=useState()
 const [focusInput,setFocusInput]=useState(true);
 const [modalVisible,setModalVisible]=useState(false);
 const [dataCountries,setDataCountries]=useState(Countries)
 const [codeCountry,setCodeCountry]=useState(defaultCodeCountry)
 const [placeholder,setPlaceHolder]=useState(defaultMaskCountry)
 const onShowHideModal=()=>{
  setModalVisible(!modalVisible)
 }

    const onPress = () => {
      navigation.navigate('Home')
      };

let textInput=useRef(null)

const onChangePhone=(number)=>{
  setPhoneNumber(number)
}

const onPressContinue=()=>{
  if(phoneNumber){
    navigation.navigate('OtpLogin')
  }
}

const onChangeFocus=()=>{
  setFocusInput(true)
}

const onChangeBlur=()=>{
  setFocusInput(false)
}

useEffect(()=>{
 textInput.focus()
},[])

const filterCountries=(value)=>{
  if(value){
    const countryData=dataCountries.filter((obj)=>(obj.name.indexOf(value)>-1||obj.dial_code.indexOf(value)>-1))
    setDataCountries(countryData)
  }else{
    setDataCountries(Countries)
  }
}

const onCountryChange=(item)=>{
   setCodeCountry(item.dial_code)
   setPlaceHolder(item.mask);
   onShowHideModal()
}

let renderModal=()=>{
  return(
    <Modal animationType='slide' transparent={false}  visible={modalVisible}>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.modalContainer}>
          <View style={styles.filterInputContainer}>
          <TextInput autoFocus={true} onChangeText={filterCountries} placeholder='filter' focusable={true} style={styles.filterInputStyle} />
          </View>
       
         <FlatList style={{flex:1}} 
        data={dataCountries} 
        extraData={dataCountries}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item})=>(
          <TouchableWithoutFeedback onPress={()=>onCountryChange(item)}>
            <View style={styles.countryModalStyle}>
             <View style={styles.modalItemContainer}>
              <Text style={styles.modalItem}>
                <Text style={styles.modalItemName}>{item.name }</Text>
                <Text style={styles.modalItemDialCode}>{item.dial_code}</Text>
              </Text>
             </View>
            </View>
            </TouchableWithoutFeedback>
        )}
        />
        </View>
        <TouchableOpacity onPress={onShowHideModal} style={styles.closeButtonStyle}>
          <Text style={styles.closeTextStyle}>{'CLOSE'}</Text>
          </TouchableOpacity>
      </SafeAreaView>      
    </Modal>
  )
}
    

  return (
   <View style={styles.container}>
     <LinearGradient style={{flex:1,justifyContent:'center'}}   locations={[100,100,0.6]} colors={['#C6B6EA', '#F5C9D9', '#FF72B638']} >
    <KeyboardAvoidingView keyboardVerticalOffset={50}
    behavior='padding'
    style={styles.containerAvoidView}
    >
      <Text style={styles.textTitle}>{"Please input your mobile "}</Text>
      <View style={[styles.containerInput,{borderBottomColor:focusInput?'#D2576D':'#ffffff'}]}>
        <TouchableOpacity onPress={onShowHideModal}>
        
           <View style={styles.openDialogueView} >
        <Text>{codeCountry + " |"}</Text>
      </View> 
       
        </TouchableOpacity>
        {renderModal()}
  
      <TextInput
      ref={(input)=>textInput=input}
      style={styles.phoneInputStyle}
      placeholder={placeholder}
      keyboardType='numeric'
      value={phoneNumber}
      onChangeText={onChangePhone}
      secureTextEntry={false}
      onFocus={onChangeFocus}
      onBlur={onChangeBlur}
      autoFocus={focusInput}
      />
      </View>
      <View style={styles.viewButton}>
      <TouchableOpacity onPress={onPressContinue}>
     <View style={[styles.btnContinue,{backgroundColor:phoneNumber?'#D2576D':'grey'}]}>
      <Text style={styles.textContinue}>Continue</Text>
     </View>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </LinearGradient>
   </View>
  )
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'red'
   },
   containerAvoidView:{
    flex:1,
    alignItems:'center',
    padding:10
   },
   textTitle:{
    marginBottom:50,
    marginTop:50,
    fontSize:15
   },
   containerInput:{
    flexDirection:'row',
    paddingHorizontal:12,
    borderRadius:10,
    backgroundColor:'white',
    alignItems:'center',
    borderBottomWidth:1.5,
    margin:20
   },
   openDialogueView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
   },
   phoneInputStyle:{
    marginLeft:5,
    flex:1,
    height:50,
   },
   viewButton:{
    flex:1,
    justifyContent:'flex-end',
    marginBottom:50,
    alignItems:'center'
   },
   btnContinue:{
    width:150,
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
   },
   textContinue:{
    color:'#ffffff',
    alignItems:'center'
   },
   modalContainer:{
   paddingTop:15,
   paddingLeft:25,
   paddingRight:25,
   flex:1,
   backgroundColor:'white'    
   },
   filterInputStyle:{
    flex:1,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#fff',
    color:'#424242'
   },
   countryModalStyle:{
    flex:1,
    borderColor:'black',
    borderTopWidth:1,
    padding:12,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
   },
   modalItemContainer:{
    flex:1,
    paddingLeft:5,
    flexDirection:'row'
   },
   modalItem:{
    flex:1,
    fontSize:16
   },
   filterInputContainer:{
   width:'100%',
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center'    
   },
   closeButtonStyle:{
    padding:12,
    alignItems:'center'
   },
   closeTextStyle:{
    padding:5,
    fontSize:20,
    color:'black',
    fontWeight:'bold'
   },
   modalItemName:{
    flex:1,
    fontSize:16
   },
   modalItemDialCode:{
    fontSize:16
   }
  });

export default LoginForm