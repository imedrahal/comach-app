import React, { useEffect, useRef, useState } from 'react';
import Search from "../Components/SearchBar"
import About from '../Components/About'
import Home from '../Components/Home'
import Contact from '../Components/Contact'
import Categories from '../Components/Categories'
import Agence from '../Components/Agences'
import SearchPage from '../Components/SearchPage'
import ProductDetail from "../Components/ProductDetail"
import AllPriducts from "../Components/AllProducts"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAvoidingView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Animated, Dimensions, FlatList, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSafeArea } from "react-native-safe-area-context";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const Tab =createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  // keyboardHidesTabBar:true,
  tabBarHideOnKeyboard: true,

  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    // bottom: -10,
    // right: 0,
    // left: 0,
    // elevation:8,
    // height: 70,
    background: "#fff",
  }
}



 function BottomBar() {

return (

     <Tab.Navigator     
     screenOptions={screenOptions}
    //  initialRouteName="Welcome"
     >
        <Tab.Screen 
        name="Home"
        component={HomeStack} 
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}> 
                <Entypo name="home" size={24} color={focused ? "#DAA520": "#111"} />
                <Text style={{fonSize: 12, color: "#16247d"}}>HOME</Text>
          </View>
            )
          }
        }}/>
        <Tab.Screen 
        name="About" 
        component={About} 
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}> 
               <Entypo name="wallet" size={24} color={focused ? "#DAA520": "#111"} />
                <Text style={{fonSize: 12, color: "#16247d"}}>About US</Text>
          </View>
            )
          }
        }}
        />
        <Tab.Screen
         name="AllPriducts" 
         component={AllPriducts}
         options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}> 
               <MaterialIcons name="stacked-line-chart" size={24} color={focused ? "#DAA520": "#111"} />
                <Text style={{fonSize: 12, color: "#16247d"}}>Products</Text>
          </View>
            )
          }
        }}
         />
      
         
     </Tab.Navigator>
       )
    }


      function HomeStack() {
        return (
          <Stack.Navigator screenOptions={{ headerShown: false
          }}
          //  initialRouteName="HomePage"
          >
              <Stack.Screen name="HomePage" component={Home}/> 
              {/* <Stack.Screen name="Welcome" component={Welcome}/>  */}
              <Stack.Screen name="Categories" component={Categories} /> 
              <Stack.Screen name="SearchPage" component={SearchPage} />  
              <Stack.Screen name="ProductDetail" component={ProductDetail}/> 
              {/* <Stack.Screen name="AllPriducts" component={AllPriducts}/>  */}
              <Stack.Screen name="Agence" component={Agence}/> 

              
          </Stack.Navigator>
        );
      }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        headerScroll: {
            flexGrow: 0,
            marginTop:100
        },
        headerItem: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        mainItem: {
            width: width,
            borderWidth: 5,
            borderColor: '#fff',
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        headerBar: {
            height: 3,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 1,
        }
    })

    export default function Nav(){
      // const insets = useSafeArea();

        return (
          <SafeAreaProvider>
            <NavigationContainer>
         
              <BottomBar/>
            </NavigationContainer>
            </SafeAreaProvider>
        )
    }