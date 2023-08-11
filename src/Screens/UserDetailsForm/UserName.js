import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native'
import {useState} from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../../Component/Common/CustomInput';
import DefaultButton from '../../Component/Common/CustomButton/DefaultButton';
const UserName = ({navigation}) => {
  const [name, onChangeName] = useState('');

  const userFormSchema = Yup.object().shape({
    name: Yup.string().required('user name required'),
  });

  const FormSubmit= async(values, resetForm)=>{
    if(values.name){
      navigation.navigate('DateOfBirth')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cellText}>Hey</Text>
      <Text style={styles.cellText}>What Can I Call You?</Text>
      <View style={{justifyContent:'center',alignItems:'center'}}>
    <Image
        style={styles.tinyLogo}
        source={require('../../Assets/Images/png/updatename.png')}
      />
    </View>
    <Formik
            initialValues={{
              name: '',
            }}
            validationSchema={userFormSchema}
            onSubmit={(values, {resetForm}) => FormSubmit(values, resetForm)}
            >
            {({values, errors, handleChange, setFieldValue, handleSubmit}) => (
              <>
                 <CustomInput 
                   value={values.name}
                  error={errors.name} 
                   onChangeText={handleChange('name')}
                   placeHolder="Enter User Name "
                      /> 
       <DefaultButton   style={{
             button: {
              marginVertical: 30,
             },
            }} onPress={handleSubmit}  label="Next"/>
      </>
            )}
                  </Formik>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5F5F5',
    justifyContent:'center'
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
tinyLogo: {
  width: '90%',
},
})

export default UserName