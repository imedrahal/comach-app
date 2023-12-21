import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import SwiperCategories from './SwiperProducts'
import SearchBar from "./SearchBar"
import { useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(true);
    return (
    <View style={styles.container}>
            <SearchBar setVisible={setVisible} visible={visible} /> 
            <SwiperCategories  setVisible={setVisible} visible={visible} />


        <ScrollView  style={{position:"relative",backgroundColor: 'white',opacity: visible ? 1 : 0}}>

      <Text style={{color:"red"}}>Home!</Text>


      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});