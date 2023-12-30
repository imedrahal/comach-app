import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import logo from '../assets/logo.png'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ProductDetail(product) {
    const navigation = useNavigation();

    const onPress = () => {
        // Handle press event here
        navigation.navigate("HomePage")
      };
  return (
    <View style={styles.container}>
      <View style={{height:150, backgroundColor: '#3b3b42',marginBottom:10}}>
            <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: 160 }} />
           </View>
           <View style={{marginBottom:90}}>
     <Pressable onPress={onPress}>
        <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#DAA520',position:'absolute',top:0,left:0}}>
        <AntDesign name="back" size={24} style={{marginTop:14,marginLeft:10}}/>
    </View>
  </Pressable>
  </View>
  {console.log(product.route.params,'olaaaaa')}
      <Text>{product.route.params}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#54595F',
    //     alignItems: 'center',
    // justifyContent: 'center',
  },
});