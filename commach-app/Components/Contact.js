// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View,Image } from 'react-native';
// // import { useNavigation } from "@react-navigation/native";
// // import logo from '../assets/logo.png'

// // export default function Contact() {

// //   return (
// //     <View style={styles.container}>
// //         <View style={{height:150, backgroundColor: '#3b3b42',marginBottom:10}}>
// //             <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: 160 }} />
// //            </View>
// //       <Text>Contact us!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     // flex: 1,
// //     // backgroundColor: '#54595F',
// //     // alignItems: 'center',
// //     // justifyContent: 'center',
// //   },
// // });



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, Pressable ,ScrollView} from 'react-native';
// import { useNavigation } from "@react-navigation/native";
// import { AntDesign, FontAwesome } from '@expo/vector-icons';
// import Map from '../assets/map.jpg'
// import logo from '../assets/logo.png'

// export default function Agence() {
//     const navigation = useNavigation();

 
//     return (
//         <View style={styles.container}>
//              <View style={{height:150, backgroundColor: '#3b3b42',marginBottom:10}}>
//             <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: 160 }} />
//             <View style={{ backgroundColor: "white", height: 10, width: "100%", marginTop: 400 }}></View>
//            </View>
//            <ScrollView>
//             <Text style={{
//                 color: "#b19777", marginBottom: 10, fontSize: 30, alignItems: 'center',
//                 justifyContent: 'center'
//             }}>
//                 <Text style={{ color: "white", marginLeft: 50 }}> Nos </Text> Agences</Text>

//             <View style={styles.imageRow}>
//                 <Image source={Map} style={{ height: 85, width: 85, marginLeft: 15 }} />
//                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100, marginBottom:10 }}>
//                 Agence Bizerte {"\n"}Telephone : 28 354 436 </Text>

//                 <Image source={Map} style={{ marginLeft: 90, height: 85, width: 85, marginRight: 0 }} />
//                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }} >Agence Manzel Bourigba{"\n"}Telephone :50 960 984</Text>

//             </View>
//             <View style={styles.imageRow}>
//                 <Image source={Map} style={{ height: 85, width: 85, marginLeft: 5 }} />
//                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 ,marginBottom:10}}>Agence  Mnihla {"\n"}Telephone :25 067 058</Text>

//                 <Image source={Map} style={{ marginLeft: 110, height: 85, width: 85 }} />
//                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }}>Agence Raoued {"\n"}Telephone :29 354 432
//                 </Text>
//             </View>
//             <View style={styles.imageRow}>
//                 <Image source={Map} style={{ height: 85, width: 85, marginLeft: 10 }} />
//                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 ,marginBottom:10}}>Agence Ezzahra {"\n"}Telephone :26 620 048</Text>

//                 <Image source={Map} style={{ marginLeft: 110, height: 85, width: 85 }} />
//                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }}>Agence Sidi Thabet {"\n"}Telephone :29 354 434
//                 </Text>
//             </View>
//             <View style={styles.imageRow}>
//                 <Image source={Map} style={{ height: 85, width: 85, marginLeft: 10 }} />
//                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }}>Agence BenArous {"\n"}Telephone :98 189 192 </Text>

//                 <Image source={Map} style={{ marginLeft: 110, height: 85, width: 85 }} />
//                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }}>Agence Sousse {"\n"}Telephone :98 146 866
//                 </Text>
//             </View>
//             {/* <Pressable onPress={onPressNav}>
//                 <Text style={{ marginTop: 20, left: -90, fontSize: 20, color: "white", marginLeft: -105, marginRight: -150 }}>Press to see more Agences
//                 </Text></Pressable>
//             <AntDesign style={styles.icon} name='arrowright' size={25} /> */}
//             <Text style={{
//                 color: "white", marginTop: 30, marginBottom: 10, fontSize: 30, alignItems: 'center',
//                 justifyContent: 'center'
//             }}>
//                 <Text style={{ color: "white", marginLeft: 50, marginTop: 50 }}> Horaire</Text> de travail</Text>
//             <Text style={{color: "white",fontSize: 20}}>Lundi – Vendredi : 8:00  – 18:00</Text>
//             <Text  style={{color: "white",fontSize: 20}}>Samedi: 8:00  – 15:00</Text>
//             <StatusBar style="auto" />
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#3b3b42',width: "100%",
//         height: "100%"
        
//     },
//     icon: {
//         color: "white",
//         marginLeft: 90,
//         marginTop: -22,
//         marginLeft: 125
//     },
//     imageRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10 // Evenly distribute images
//     },
// });

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import logo from '../assets/logo.png'
import Equipe from '../assets/Equipe-COMACHEM.jpg'
 import Map from '../assets/map.jpg'

export default function About() {
    return (
        <View style={{
            backgroundColor: '#3b3b42', width: "100%",
            height: "100%"
        }}>
            <View style={{ height: 110, backgroundColor: '#3b3b42', marginBottom: 10 }}>
                <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: 160 }} />
                <View style={{ backgroundColor: "white", height: 1, width: "100%", marginTop: 40 }}></View>
            </View>
            <ScrollView >
                <Text style={{
                    color: "white", marginTop: 20, marginBottom: 35, fontSize: 35, marginLeft: 105
                }}>
                  <Text style={{ color: "#b19777", marginLeft: 50 }}> Nos </Text> Agences                </Text>
              
                  <View style={styles.imageRow}>
                 <Image source={Map} style={{ height: 85, width: 85, marginLeft: 15 }} />
                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100, marginBottom:10 }}>
                 Agence Bizerte {"\n"}Telephone : 28 354 436 </Text>

                 <Image source={Map} style={{ marginLeft: 90, height: 85, width: 85, marginRight: 0 }} />
                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }} >Agence Manzel Bourigba{"\n"}Telephone :50 960 984</Text>

             </View>

                         <View style={styles.imageRow}>
                 <Image source={Map} style={{ height: 85, width: 85, marginLeft: 5 }} />
                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 ,marginBottom:10}}>Agence  Mnihla {"\n"}Telephone :25 067 058</Text>

                 <Image source={Map} style={{ marginLeft: 110, height: 85, width: 85 }} />
                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }}>Agence Raoued {"\n"}Telephone :29 354 432
                 </Text>
             </View>
             <View style={styles.imageRow}>
                 <Image source={Map} style={{ height: 85, width: 85, marginLeft: 10 }} />
                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 ,marginBottom:10}}>Agence Ezzahra {"\n"}Telephone :26 620 048</Text>

                 <Image source={Map} style={{ marginLeft: 110, height: 85, width: 85 }} />
                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }}>Agence Sidi Thabet {"\n"}Telephone :29 354 434
                 </Text>
             </View>
             <View style={styles.imageRow}>
                 <Image source={Map} style={{ height: 85, width: 85, marginLeft: 10 }} />
                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }}>Agence BenArous {"\n"}Telephone :98 189 192 </Text>

                 <Image source={Map} style={{ marginLeft: 110, height: 85, width: 85 }} />
                 <Text style={{ color: "white", marginTop: 90, marginLeft: -100 }}>Agence Sousse {"\n"}Telephone :98 146 866
                 </Text>
            </View>
               
            </ScrollView>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#54595F',
        width: "100%",
        height: "100%",
        // alignItems: 'center',
        justifyContent: 'center',
        // position:"absolute"
    },
    icon: {
                 color: "white",
             marginLeft: 90,
                 marginTop: -22,
                 marginLeft: 125
             },
             imageRow: {
                 flexDirection: 'row',
                 justifyContent: 'space-between',
                 marginBottom: 10 // Evenly distribute images
             },
});