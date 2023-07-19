import {RFValue} from 'react-native-responsive-fontsize';
const height = 934;
export const GlobalSize = number => {
    const value = RFValue(number, height);
    return value;
   };