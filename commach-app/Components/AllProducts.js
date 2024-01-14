import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import Card from "./CardItemAllProd"
import Search from './SearchBar'
import logo from '../assets/logo.png'

export default function AllProducts() {
  const navigation = useNavigation();
  const onPress = () => {
    // Handle press event here
    navigation.navigate("HomePage")
    console.log('olaaaa')
  };

  return (
    <View
    //  style={{marginTop:100}}
     >
              <View style={{height:210, backgroundColor: '#3b3b42',marginBottom:10}}>
            <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: "35%" }} />
            <View style={{marginBottom:90}}>
            {/* <Text style={{position:'absolute',paddingLeft:60,paddingTop:70,fontSize: 20,fontWeight: 'bold',color: "white" }}> All Products</Text> */}
            <Text style={{color:"#b19777",position:'absolute',paddingLeft:100,paddingTop:70,fontSize:30}}>
       <Text style={{color:"white"}}> OUR</Text> Products</Text>
      
  </View>
           </View>
        {/* <Search
        //  setVisible={setVisible} visible={visible}
         /> */}
        {/* {console.log(categories,"categoooo")} */}

     
  <View style={{marginTop:"-5%",backgroundColor: '#3b3b42',height:"100%",marginBottom:160}}>
  <Pressable onPress={onPress}>
        <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#DAA520',position:'relative',top:-65,left:0}}>
        <AntDesign name="back" size={24} style={{marginTop:14,marginLeft:10}}/>
    </View>
  </Pressable>
  <Card   />
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});