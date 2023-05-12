import { View, Text,StyleSheet,Button,TouchableOpacity,TextInput,Pressable,Image, FlatList, SafeAreaView } from 'react-native'
import {useState} from 'react'


const values=['column', 'row', 'row-reverse', 'column-reverse']


  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const UserIntrest = ({navigation}) => {
    const [filterData,setFilterData]=useState([])
    const onPressContinue = () => {
     
      };
  return (
    <SafeAreaView style={styles.container}>
    <TextInput
          
          style={styles.searchBar}
    />
    {/* <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      numColumns={2}
    /> */}
     <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button]}>
          <Text
            style={[
              styles.buttonLabel,
             
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
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
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
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