import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,ScrollView ,Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import Card from "./CardItem"
import Search from './SearchBar'
import logo from '../assets/logo.png'

export default function Categories(categories) {
  const navigation = useNavigation();
  const onPress = () => {
    // Handle press event here
    navigation.navigate("Home")
  };
  return (
    <View
    //  style={{marginTop:100}}
     >
              <View style={{height:150, backgroundColor: '#3b3b42',marginBottom:10}}>
            <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: 160 }} />
           </View>
        {/* <Search
        //  setVisible={setVisible} visible={visible}
         /> */}
        {/* {console.log(categories,"categoooo")} */}

        <View style={{marginBottom:90}}>
            <Text style={{position:'absolute',paddingLeft:120,paddingTop:20}}> Categorie selected: {categories.route.params.item}</Text>
     <Pressable onPress={onPress}>
        <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#DAA520',position:'absolute',top:0,left:0}}>
        <AntDesign name="back" size={24} style={{marginTop:14,marginLeft:10}}/>
    </View>
  </Pressable>
  </View>
  <ScrollView>
  <Card categories={item1}  style={{marginTop:"50%"}}/>
  </ScrollView>
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