import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Map from '../assets/map.jpg'
import like from '../assets/like.jpg'
import shipped from '../assets/shipped.jpg'
import stock from '../assets/in-stock.jpg'

export default function Services() {
    const images = [
        {image:Map,title:"PLUS DE 6 AGENCES"},
        {image:like,title:"99% SATISFACTION"},
        {image:shipped,title:"TRANSPORT ASSURÉ"},
        {image:stock,title:"STOCK DISPONIBLE"},
      ];
  return (

<View style={styles.container}>
       <Text style={{color:"#b19777",marginTop:20,marginBottom:20,fontSize:30}}>
       <Text style={{color:"white"}}> OUR</Text> SERVICES</Text>
           {/* <View style={{backgroundColor:"white",height:1,width:"100%",marginBottom:10}}></View> */}

  <View style={styles.imageRow}>
    <Image source={Map} style={{height:55,width:55,marginLeft:20}}  />
    <Text style={{color:"#b19777",marginTop:60,marginLeft:-90,marginBottom:50}}>
       PLUS DE 6 AGENCES</Text>
    <Image source={like} style={{marginLeft:120,height:55,width:55,marginRight:-30}} />
    
           <Text style={{color:"#b19777",marginTop:60,marginLeft:-60}} >99% SATISFACTION</Text>

  </View>
  <View style={styles.imageRow}>
    <Image source={shipped} style={{height:55,width:55,marginLeft:20}} />
       <Text style={{color:"#b19777",marginTop:60,marginLeft:-90}}>TRANSPORT ASSURÉ</Text>

    <Image source={stock} style={{marginLeft:120,height:55,width:55,marginRight:-30}} />
         <Text style={{color:"#b19777",marginTop:60,marginLeft:-60}}>STOCK DISPONIBLE
 </Text>
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:100
  },
//   containerVertical: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     marginTop:50
//      // Adjust spacing as needed
//   },
//   imageVertical: {
//     width: 100,
//     height: 99,
//     marginBottom:30
//   },


 
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Evenly distribute images
  },
//   image: {
//     width: '30%',  // Adjust width as needed
//     height: "100%",   // Adjust height as needed
//     resizeMode: 'cover', // Preserve aspect ratio
//     marginBottom:150,
//     marginTop:55,
// marginRight:35  },
});