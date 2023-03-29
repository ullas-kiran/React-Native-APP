import { Button, StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import Swiper from 'react-native-deck-swiper'

const Home = () => {

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const urlImageDetails=[
    {title:'Saran',url:'https://firebasestorage.googleapis.com/v0/b/vlmnacloudstorage.appspot.com/o/date1.png?alt=media&token=dff72d81-338b-49e3-bca0-d76a45b88e69'},
    {title:'Anuroop',url:'https://firebasestorage.googleapis.com/v0/b/vlmnacloudstorage.appspot.com/o/date1.png?alt=media&token=dff72d81-338b-49e3-bca0-d76a45b88e69'},
    {title:'Amal',url:'https://firebasestorage.googleapis.com/v0/b/vlmnacloudstorage.appspot.com/o/date1.png?alt=media&token=dff72d81-338b-49e3-bca0-d76a45b88e69'}
]

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Swiper
            cards={urlImageDetails}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                         <Image
        style={{width: 320, height: 500,alignSelf:'center'}}
        source={{
            uri:card.url ,
          }}
/>
                        <Text style={styles.text}>{card.title}</Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}>
        </Swiper>

    </View>
  )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5FCFF"
    },
    card: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "#E8E8E8",
      justifyContent: "center",
      backgroundColor: "white"
    },
    text: {
      textAlign: "center",
      fontSize: 50,
      color:'red',
      backgroundColor: "transparent"
    }
  });

export default Home