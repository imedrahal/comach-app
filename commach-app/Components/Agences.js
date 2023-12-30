import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import logo from '../assets/logo.png'

export default function Agences() {
  return (
    <View style={styles.container}>
      <View style={{height:150, backgroundColor: '#3b3b42',marginBottom:10}}>
            <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: 160 }} />
           </View>
      <Text>Searchhhh!</Text>
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