import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import SwiperCategories from './SwiperProducts'
import SearchBar from "./SearchBar"
import Services from "./Services"
import AboutUs from "./AboutUs"
import CardItem from "./CardHome"
import Agence from './AgenceHome'
import Contact from "./ContactHome"
import { useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(true);
    return (
    <View style={styles.container}>
            <SearchBar setVisible={setVisible} visible={visible} /> 
            <SwiperCategories  setVisible={setVisible} visible={visible} />


        <ScrollView  style={{position:"relative",backgroundColor: '#3b3b42',opacity: visible ? 1 : 0,width:"100%",marginTop:403}}>

      {/* <Text style={{color:"red",fontSize:30,textAlign: 'center'  }}>COMACHEM</Text> */}
      {/* <Text style={{color:"yellow",fontSize:30,textAlign: 'center'  }}>Vente de panneaux MDF</Text> */}
      {/* <Services /> */}
      {/* <AboutUs/> */}

      <CardItem/>
      {/* <Agence/> */}
      {/* <Contact/> */}
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