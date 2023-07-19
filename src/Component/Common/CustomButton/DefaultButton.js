import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';
  import { GlobalSize } from '../../../Utils/constants';
  import { Fonts } from '../../../Utils/fonts';
  
  const DefaultButton = ({onPress, label, style, loader}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.button, style?.button]}
        onPress={!loader ? onPress : undefined}>
        {loader ? (
          <ActivityIndicator size="small" color="#D4B051" />
        ) : (
          <Text style={[styles.textStyle, style?.textStyle]}>{label}</Text>
        )}
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
      borderRadius: 10,
      marginHorizontal:60,
    },
    textStyle: {
      fontFamily: Fonts.LF700,
      fontSize: GlobalSize(16),
      color: 'white',
      letterSpacing: 3,
    },
  });
  
  export default DefaultButton;