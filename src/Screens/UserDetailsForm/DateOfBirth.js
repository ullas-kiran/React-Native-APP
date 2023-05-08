import { View, Text,StyleSheet,Button,TouchableOpacity,TextInput,Pressable } from 'react-native'
import DatePicker from 'react-native-date-picker';
import {useState} from 'react'


const DateOfBirth = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(true)
    console.log('date',date)
  return (
    <View style={styles.container}>
      <View style={{flex:1,justifyContent:'center'}}>
     <Pressable  style={[{alignItems:'center',justifyContent:'center',margin:10}]} onPress={()=>setOpen(!open)}>
    <TextInput  value={date.toDateString()} />
      </Pressable>
      </View>
      <DatePicker
       style={styles.datePickerStyle}
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <TouchableOpacity style={styles.button}  >
      <Text style={{fontSize:20}}>Continue</Text>
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
      datePickerStyle: {
        width: 400,
      },
})

export default DateOfBirth