import { View, Text,StyleSheet,Button,TouchableOpacity,TextInput,Pressable,Image, FlatList, SafeAreaView } from 'react-native'
import {useState} from 'react'


const userIntrests=['Pets', 'Gardening', 'Coding', 'Yoga','Traveling','Photography','Cooking','Reading','Shopping','Sports','Music','Arts','Gaming']


  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const UserIntrest = ({navigation}) => {
    const [filterData,setFilterData]=useState(userIntrests)
    const [selectedValue, setSelectedValue] = useState('Pets');

    const onPressContinue = () => {
      navigation.navigate('UploadImage')
      };
      
  return (
    <SafeAreaView style={styles.container}>
    {/* <TextInput
          
          style={styles.searchBar}
    /> */}
    {/* <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      numColumns={2}
    /> */}
     <View style={styles.row}>
      {userIntrests.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,  
              selectedValue === value && {color:'black'}
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <TouchableOpacity style={styles.continuebutton}  >
      <Text style={{fontSize:20}}  onPress={onPressContinue}>Continue</Text>
      </TouchableOpacity>
  </SafeAreaView>
  )
}

export default UserIntrest

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      searchBar: {
        fontSize: 24,
        margin: 10,
        height: 50,
        backgroundColor: 'white',
        borderRadius:10
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    
      box: {
        width: 50,
        height: 50,
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 10,
        margin:'5%',
        color:'black',
        backgroundColor: '#E8E6EA',
        alignItems:'center',
        marginBottom: 6,
        minWidth: '40%',
        minHeight:'9%',
        textAlign: 'center',
        justifyContent:'center',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
      selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
      },
      buttonLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'coral',
      },
      selectedLabel: {
        color: 'white',
      },
      label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
      },
})