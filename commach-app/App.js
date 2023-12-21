import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "./Components/SearchBar"
import Nav from './Navigation/TabBar'

// import SwiperCategories from './Components/SwiperProducts'
export default function App() {

  return (
    <View style={styles.container}>
      {/* <SearchBar  /> */}
      <Nav style={styles.bar}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3b42',
    justifyContent: 'center',
  },
  bar:{
    width:'100%'
  },
  

});


