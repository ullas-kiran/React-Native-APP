
import { StyleSheet, Text, View,TextInput } from 'react-native'

const CustomInput = ({value,onChangeText}) => {
  return (
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    placeholder='phone number'
  />
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        height: 40,
        // marginTop:10,
        marginHorizontal:60,
        borderRadius:10,
        borderWidth: 1,
        padding: 10,
      },
})