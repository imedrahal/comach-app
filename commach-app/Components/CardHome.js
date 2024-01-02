// import { Button, Dimensions, Image, LayoutAnimation, Platform, StyleSheet, UIManager, View, Text, TouchableOpacity,Pressable,FlatList } from 'react-native';
// import { ScrollView } from 'react-native-virtualized-view'
// // import DraggableFlatList from 'react-native-draggable-flatlist'
// import { VirtualizedList } from 'react-native';
// const { width } = Dimensions.get('screen');
// import { useNavigation } from "@react-navigation/native";
// import logo from '../assets/logo.png'
// import Equipe from '../assets/Equipe-COMACHEM.jpg'
// import { FlatGrid } from "react-native-super-grid";

// const data = [
//     Equipe,
//     Equipe,
//     Equipe,
//     Equipe,
// ];
// const getItemCount = {data};

// if (Platform.OS === 'android') {
//     if (UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
// }

// export default function DynamicColumns(categories) {
//     const [columns, setColumns] = useState(2);
//     const categorie = categories
//     const [scrollEnabled, setScrollEnabled] = useState(true);
//     const navigation = useNavigation();

//     const setColumnCount = (val) => {
//         LayoutAnimation.easeInEaseOut();
//         setColumns(val)
//     }

//     const onPressProduct = (item) => {
//         // Handle press event here
//         navigation.navigate("ProductDetail",item={item})
//     };

//     const renderItem = ({ item, index }) => {
//         return (
//           <View>
//                 <Pressable
//                   style={[styles.itemContainer, { backgroundColor: "white" }]}
//                   onPress={() =>
//                     navigation.navigate("ProductDetail",item={item})
//                   }
//                 >
//                   <Image style={styles.image} resizeMode="contain" source={Equipe} />
//                   <View style={{ alignItems: "center" }}>
//                     <Text style={styles.itemName}>name</Text>
//                     <Text style={styles.itemName}>press to see more details </Text>

//                     {/* <Text style={styles.itemCode}>categorie</Text> */}
//                     {/* <TouchableOpacity     onPress={() =>
//                     navigation.navigate("ProductDetail",item={item})
//                   }>
//                                         <Text >  press to see more details    </Text>

//                                     </TouchableOpacity> */}
//                   </View>
//                 </Pressable>
    
//             </View>
//         );
//       };



//     return (
//         <ScrollView style={styles.container} >
//             {/* <ScrollView style={{ flexDirection: 'row',position:"absolute",backgroundColor:"black",width:"100%",height:"100%" }}>
//   {data.map((image, index) => (
//                     <View key={image} style={[styles.item, { width: width /2, height: width / 2}]}>
//                     <Image key={image} source={Equipe} style={{ width: '50%', height: 200 }} />
//                     <Text> see more details    </Text>
//     </View>

//   ))}
// </ScrollView> */}
//             {/* <View style={styles.btnContainer}>
//                 <Button title=' reduce  column ' onPress={() => setColumnCount(columns - 1)} disabled={columns <= 1} />
//                 <Button title=' add  column ' onPress={() => setColumnCount(columns + 1)} disabled={columns >= 20} />
//             </View> */}
//             {/* <ScrollView contentContainerStyle={styles.scrollView}>
//                 {data.map((item, i) => (
//                     <View style={{
//                         marginBottom: -25, justifyContent: 'space-around',
//                     }}>
//                         <View style={{ marginBottom: 30, width: "100%" }}>
//                             <View key={item} style={[styles.item, { width: width / 2, height: width / 2 }]}>
//                                 <View style={{ width: 205, borderWidth: 0.5, borderRadius: 5, borderColor: 'white', marginLeft: 5 ,marginBottom:20}}>
//                                     <Image style={styles.img}
//                                         source={Equipe} />
//                                     <Text> name    </Text>
//                                     <Text> stock    </Text>
//                                     <TouchableOpacity   onPress={() => onPressProduct(item)}>
//                                         <Text >  press to see more details    </Text>

//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>


//                 ))}
//             </ScrollView> */}
         

          
//                 <FlatGrid
//         itemDimension={196}
//         spacing={8}
//         data={data}
//         style={styles.gridView}
//         renderItem={renderItem}
//         key={(item) => `key-${item.id * Math.random()}`}
//       />


        

//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     // container: {
//     //     flex: 1,
//     //     marginBottom:260
//     // },
//     // scrollView: {
//     //     flexDirection: 'row',
//     //     flexWrap: 'wrap',
//     //     // justifyContent: 'space-evenly',
//     // },
//     // item: {
//     //     backgroundColor: 'white',
//     //     borderWidth: 2,
//     //     borderRadius: 25,
//     //     borderColor: 'white',
//     //     // justifyContent: 'space-around',

//     //     // padding:50
//     // },
//     // // btnContainer: {
//     // //     flexDirection: 'row',
//     // //     justifyContent: 'space-evenly',
//     // //     paddingTop: 5
//     // // },
//     // img: {
//     //     backgroundColor: "white",
//     //     width: "97%",
//     //     height: "80%",
//     //     borderRadius: 5,
//     //     marginLeft: 12,
//     //     marginLeft:3,
//     //     marginTop:2
//     //     // borderBottomEndRadius:25
//     // },
//     // container: {
//     //     flex: 1,
//     //     backgroundColor: "white",
//     //     marginBottom:270
//     //     // Ensure view expands to fill available space
//     // },
//     // image: {
//     //     width: '50%', // Adjust width as needed
//     //     height: 200,  // Adjust height as needed
//     //     resizeMode: 'cover', // Preserve aspect ratio
//     // },
//     container: {
//         flex: 1,
//                  marginBottom:270

//       },
//       item: {
//         padding: 4,
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "white",
//         marginTop: 8,
//         marginHorizontal: 5,
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
    
//         elevation: 5,
//       },
//       image: {
//         width: "100%",
//         height: 130,
//         borderRadius: 8,
//       },
//       text: {
//         color: "orange",
//         fontWeight: "bold",
//         // fontFamily: "sanFransisco"
    
//       },
//       searchContainer: {
//         height: 48,
//         width: "90%",
//         borderRadius: 10,
//         alignSelf: "center",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         // fontFamily:"sanFransisco"
    
//       },
//       gridView: {
//         marginTop: 0,
//         flex: 1,
//         elevation: 5,
//         shadowColor: "black",
//         shadowOffset: {
//           width: 0,
//           height: 3
//         },
//         shadowRadius: 2,
//         shadowOpacity: 0.2,
//       },
//       itemContainer: {
//         // justifyContent: "flex-end",
//         borderRadius: 10,
//         height: 195,
//         width:195
//       },
//       itemName: {
//         fontSize: 16,
//         color: "#3b3b42",
//         marginLeft:-1
//       },
//       itemCode: {
//         fontSize: 12,
//         color: "grey",
//         fontWeight: "400",
//         // fontFamily: "openSansRegular"
//       },
// })

// // import React, { Component, useEffect, useState } from 'react';
// // import {
// //   Animated,
// //   Button,
// //   Dimensions,
// //   FlatList,
// //   Image,
// //   LayoutAnimation,
// //   Modal,
// //   Platform,
// //   StyleSheet,
// //   TouchableOpacity,
// //   UIManager,
// //   View
// // } from 'react-native';
// // import Equipe from '../assets/Equipe-COMACHEM.jpg'

// // const { width } = Dimensions.get('screen');

// // let data = [
// //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// // ];

// // if (Platform.OS === 'android') {
// //   if (UIManager.setLayoutAnimationEnabledExperimental) {
// //     UIManager.setLayoutAnimationEnabledExperimental(true);
// //   }
// // }

// // export default function ItemPopup() {
// //   const [layoutData, setData] = useState(null);
// //   return (
// //     <View>
// //       <FlatList
// //         data={data}
// //         contentContainerStyle={{ paddingVertical: 20 }}
// //         keyExtractor={item => item}
// //         renderItem={() => <RenderItem toggleModal={data => setData(data)} />}
// //         numColumns={2}
// //       />
// //       {/* {layoutData !== null && (
// //         <ModalView layoutData={layoutData} close={() => setData(null)} />
// //       )} */}
// //     </View>
// //   );
// // }



// // class RenderItem extends Component {
// //   shouldComponentUpdate = () => false;

// //   render() {
// //     return (
// //       <View style={styles.item}>
// //         <View
// //           ref={e => (this.itemRef = e)}
// //           style={{ flex: 1, backgroundColor: '#ddd' }}
// //           onPress={this.onPress}
// //           onLongPress={this.onPress}
// //           activeOpacity={0.7}>
// //           <Image
// //             source={Equipe}
// //             resizeMode="cover"
// //             style={styles.fill}
// //           />
// //         </View>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   item: {
// //     height: width / 2,
// //     flex: 1,
// //     padding: 3,
// //     borderRadius:25
// //   },
// //   close: {
// //     position: 'absolute',
// //     right: 10,
// //     top: 10,
// //   },
// //   center: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   fill: {
// //     height: '100%',
// //     width: '100%',
// //   },
// // });
import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Pressable,TouchableOpacity ,FlatList,Button} from 'react-native';
import Equipe from '../assets/Equipe-COMACHEM.jpg'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Services() {
    const navigation = useNavigation();
    const [showMoreImages, setShowMoreImages] = useState(false);
    // const numImagesToShow = showMoreImages ? 4 : 4;
    const [renderedNames, setRenderedNames] = useState([]);
    const [numberOfNamesToDisplay, setNumberOfNamesToDisplay] = useState(4);

    const List =  (images) => {
        const renderedNames =  images.slice(0, numberOfNamesToDisplay);
        // console.log(renderedNames, "listtttt")
      };
    
    const images = [
        {image:Equipe,title:"PLUS DE 6 AGENCES"},
        {image:Equipe,title:"99% SATISFACTION"},
        {image:Equipe,title:"TRANSPORT ASSURÉ"},
        {image:Equipe,title:"STOCK "},
        {image:Equipe,title:"STOCK DISPONIBLE"},
        {image:Equipe,title:"STOCK DISPONIBLE"},
        {image:Equipe,title:"STOCK DISPONIBLE"},
        {image:Equipe,title:"STOCK DISPONIBLE"},
      ];

    //   const onPressNav = (item) => {
    //     // Handle press event here
    //     navigation.navigate("ProductDetail",item={item})
    //     console.log('yesss')
    // };
    const onPressProduct = () => {
        // Handle press event here
        navigation.navigate("AllPriducts")
        console.log('yesss')

    };

    useEffect(() => {
       
        List(images)
      }, []);
  return (

<View style={styles.container}>
       <Text style={{color:"#b19777",marginTop:20,marginBottom:20,fontSize:30}}>
       <Text style={{color:"white"}}> OUR</Text> Products</Text>
           {/* <View style={{backgroundColor:"white",height:1,width:"100%",marginBottom:10}}></View> */}

           {/* <FlatList
  data={images.slice(0, numImagesToShow)}
  renderItem={({ item }) => (
    <View>
    <Image source={ item.image } style={styles.image} />
    <View>
        <Text>{item.title}</Text>
    </View>
    </View>

  )}
  keyExtractor={(item) => item}
/> */}
{(images.slice(0, numberOfNamesToDisplay)).map((item,index) => (
     <View key={item.id} style={{width:"100%",padding:15}}>
     <Image source={ item.image } style={styles.image} />
     <View style={{backgroundColor:"#3b3b42",width:"40%",height:"15%",top:15,left:15,position:"absolute"}}>
         <Text style={{color:"white",top:"20%"}}>{item.title}</Text>
     </View>
     </View>
   
  ))} 
  <View>
  {images.length > numberOfNamesToDisplay && (
<TouchableOpacity onPress={() => setNumberOfNamesToDisplay(images.length)}>
                <Text style={{ marginTop: 10, left: 50, fontSize: 20, color: "white", marginLeft: 105 }}>See More    
  
                </Text>
                <AntDesign style={{marginTop: -30,left:250,color: "white"}} name='arrowright' size={40} />

                </TouchableOpacity>  )}
                <TouchableOpacity onPress={onPressProduct}>
                <Text style={{ marginTop: 50, left: 170, fontSize: 20, color: "white", marginLeft: -105, marginRight: -150 }}>Press to see all products      
                </Text></TouchableOpacity>
                <AntDesign style={{marginTop: -30,left:290,color: "white"}} name='arrowright' size={40} />
                </View>
                

{/* <Button title="See More" onPress={() => setShowMoreImages(true)} /> */}

  {/* <View style={styles.imageRow}>

  <View style={{backgroundColor:'white',borderRadius:25,height:210,width:200,marginBottom:25}}>
  <TouchableOpacity    onPress={() =>
                    navigation.navigate("ProductDetail",item="18")
                  }>

    <Image source={Equipe} style={{height:150,width:200,borderRadius:25}} />
       <Text style={{color:"#b19777",marginTop:10,marginLeft:30,marginBottom:-5}}>TRANSPORT ASSURÉ</Text>
       <Text style={{color:"#b19777",marginTop:10,marginLeft:30,marginBottom:5}}>TRANSPORT ASSURÉ</Text>
       </TouchableOpacity>

       </View>

       <View style={{backgroundColor:'white',borderRadius:25,height:210,width:200,marginLeft:10,marginRight:-30}}>
       <TouchableOpacity    onPress={() =>
                    navigation.navigate("ProductDetail",item=18)
                  }>

    <Image source={Equipe} style={{height:150,width:200,borderRadius:25}}/>
         <Text style={{color:"#b19777",marginTop:10,marginLeft:30,marginBottom:-5}}>STOCK DISPONIBLE
 </Text>
 <Text style={{color:"#b19777",marginTop:10,marginLeft:30,marginBottom:-5}}>STOCK DISPONIBLE
 </Text>
 </TouchableOpacity>

 </View>

 <TouchableOpacity onPress={onPressProduct}>
                <Text style={{ marginTop: 2300, left: -270, fontSize: 20, color: "white", marginLeft: -105, marginRight: -150 }}>Press to see more  products      
                </Text></TouchableOpacity>

                <TouchableOpacity onPress={onPressProduct}>
                <Text style={{ marginTop: 270, left: -270, fontSize: 20, color: "white", marginLeft: -105, marginRight: -150 }}>Press to see all products      
                </Text></TouchableOpacity>
                <AntDesign style={styles.icon} name='arrowright' size={30} />
  </View> */}
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom:100,
  },
 
  image: {
    width: '100%', // Adjust as needed
    height: 300, // Adjust as needed
    
  },

});




// import React, { useState } from 'react';
// import { Button, Dimensions, Image, LayoutAnimation, Platform, StyleSheet, UIManager, View, Text, TouchableOpacity,Pressable } from 'react-native';
// const { width } = Dimensions.get('screen');
// import { ScrollView } from 'react-native-virtualized-view'
// import { useNavigation } from "@react-navigation/native";
// import logo from '../assets/logo.png'
// import Equipe from '../assets/Equipe-COMACHEM.jpg'
// import { FlatGrid } from "react-native-super-grid";

// const data = [
//     Equipe,
//     Equipe,
//     Equipe,
// ];
// for (let i = 0; i < 50; i += 1) data.push(i)

// if (Platform.OS === 'android') {
//     if (UIManager.setLayoutAnimationEnabledExperimental) {
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
// }

// export default function DynamicColumns() {
//     const [columns, setColumns] = useState(2);
//     // const categorie = categories
//     const navigation = useNavigation();

//     const setColumnCount = (val) => {
//         LayoutAnimation.easeInEaseOut();
//         setColumns(val)
//     }

//     const onPressProduct = (item) => {
//         // Handle press event here
//         navigation.navigate("ProductDetail",item={item})
//     };

//     const renderItem = ({ item, index }) => {
//         return (
//           <View>
//             <View>
//               <View>
//                 <Pressable
//                   style={[styles.itemContainer, { backgroundColor: "white" }]}
//                   onPress={() =>
//                     navigation.navigate("ProductDetail",item={item})
//                   }
//                 > 
//                   <Image style={styles.image} resizeMode="contain" source={Equipe} />
//                   <View style={{ alignItems: "center" }}>
//                   {console.log(item ,'hellloooo')}
//                     <Text style={styles.itemName}>name</Text>
//                     <Text style={styles.itemName}>press to see more details </Text>

                 
//                   </View>
//                 </Pressable>
//               </View>
    
//             </View>
//           </View>
//         );
//       };



//     return (
//         <View style={styles.container} >
       

//             <FlatGrid
//         itemDimension={196}
//         spacing={8}
//         data={data}
//         style={styles.gridView}
//         renderItem={renderItem}
//         key={(item) => `key-${item.id * Math.random()}`}
//       />

//         </View>
//     )
// }

// const styles = StyleSheet.create({
 
//     container: {
//         flex: 1,
//         height:"100%",
//          marginBottom:560

//       },
//       item: {
//         padding: 4,
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "white",
//         marginTop: 8,
//         marginHorizontal: 5,
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
    
//         elevation: 5,
//       },
//       image: {
//         width: "100%",
//         height: 130,
//         borderRadius: 8,
//       },
//       text: {
//         color: "orange",
//         fontWeight: "bold",
//         // fontFamily: "sanFransisco"
    
//       },
//       searchContainer: {
//         height: 48,
//         width: "90%",
//         borderRadius: 10,
//         alignSelf: "center",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         // fontFamily:"sanFransisco"
    
//       },
//       gridView: {
//         marginTop: 0,
//         flex: 1,
//         elevation: 5,
//         shadowColor: "black",
//         shadowOffset: {
//           width: 0,
//           height: 3
//         },
//         shadowRadius: 2,
//         shadowOpacity: 0.2,
//       },
//       itemContainer: {
//         // justifyContent: "flex-end",
//         borderRadius: 10,
//         height: 195,
//         width:195
//       },
//       itemName: {
//         fontSize: 16,
//         color: "#3b3b42",
//         marginLeft:-1
//       },
//       itemCode: {
//         fontSize: 12,
//         color: "grey",
//         fontWeight: "400",
//         // fontFamily: "openSansRegular"
//       },
// })

