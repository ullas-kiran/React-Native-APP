
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { GlobalSize } from '../../../Utils/constants'
import { Fonts } from '../../../Utils/fonts'

const CustomInput = ({value,error,keyboardType,onChangeText,style,...rest}) => {
  return (
    <View>
    <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    keyboardType={keyboardType ?? 'default'}
    placeholder='phone number'
    {...rest}
  />
  {error && <Text style={[styles.error, style?.errorLabel]}>{error}</Text>}
  </View>
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
        fontFamily: Fonts.LF400,
        fontSize: GlobalSize(16),
      },
      error: {
        color: 'red',
        // position: 'absolute',
        // top: 50,
        textAlign:'center',
        fontSize: GlobalSize(16),
        fontFamily: Fonts.LF400,
       },
})