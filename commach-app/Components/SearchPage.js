// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function SearchPage(product) {


//   return (
//     <View style={styles.container}>
//       {console.log(product.route.params.searchValue,'boutton search')}
//       <Text>value searched {product.route.params.searchValue}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#54595F',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Pressable } from 'react-native';
import logo from '../assets/logo.png'
import Equipe from '../assets/Equipe-COMACHEM.jpg'
import { AntDesign } from '@expo/vector-icons';

export default function SearchPage(product) {

  const onPress = () => {
    // Handle press event here
    navigation.navigate("HomePage")
  };
    return (
        <View style={{
            backgroundColor: '#3b3b42', width: "100%",
            height: "100%"
        }}>
            <View style={{ height: 110, backgroundColor: '#3b3b42', marginBottom: 10 }}>
                <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: 160 }} />
                <View style={{ backgroundColor: "white", height: 1, width: "100%", marginTop: 40 }}></View>
            </View>
            <Pressable onPress={onPress}>
        <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#DAA520',position:'absolute',top:0,left:0}}>
        <AntDesign name="back" size={24} style={{marginTop:14,marginLeft:10}}/>
    </View>
  </Pressable>
            <ScrollView  >
             

            {console.log(product.route.params.searchValue,'boutton search')}
       <Text>value searched {product.route.params.searchValue}</Text>


            </ScrollView>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#54595F',
        width: "90%",
        height: "100%",
        // alignItems: 'center',
        justifyContent: 'center',
        // position:"absolute"
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        padding:10

        // Evenly distribute images
      },
});