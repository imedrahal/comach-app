import React, { useState } from 'react';
import { Button, Dimensions, Image, LayoutAnimation, Platform, StyleSheet, UIManager, View, Text, TouchableOpacity,Pressable } from 'react-native';
const { width } = Dimensions.get('screen');
import { ScrollView } from 'react-native-virtualized-view'
import { useNavigation } from "@react-navigation/native";
import logo from '../assets/logo.png'
import Equipe from '../assets/Equipe-COMACHEM.jpg'
import { FlatGrid } from "react-native-super-grid";

const data = [
    Equipe,
    Equipe,
    Equipe,
];
for (let i = 0; i < 50; i += 1) data.push(i)

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default function DynamicColumns() {
    const [columns, setColumns] = useState(2);
    // const categorie = categories
    const navigation = useNavigation();

    const setColumnCount = (val) => {
        LayoutAnimation.easeInEaseOut();
        setColumns(val)
    }

    const onPressProduct = (item) => {
        // Handle press event here
        navigation.navigate("ProductDetail",item={item})
    };

    const renderItem = ({ item, index }) => {
        return (
          <View>
            <View>
              <View>
                <Pressable
                  style={[styles.itemContainer, { backgroundColor: "white" }]}
                  onPress={() =>
                    navigation.navigate("ProductDetail",item={item})
                  }
                > 
                  <Image style={styles.image} resizeMode="contain" source={Equipe} />
                  <View style={{ alignItems: "center" }}>
                  {console.log(item ,'hellloooo')}
                    <Text style={styles.itemName}>name</Text>
                    <Text style={styles.itemName}>press to see more details </Text>

                 
                  </View>
                </Pressable>
              </View>
    
            </View>
          </View>
        );
      };



    return (
        <View style={styles.container} >
       

            <FlatGrid
        itemDimension={196}
        spacing={8}
        data={data}
        style={styles.gridView}
        renderItem={renderItem}
        key={(item) => `key-${item.id * Math.random()}`}
      />

        </View>
    )
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        height:"100%",
         marginBottom:560

      },
      item: {
        padding: 4,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 8,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      image: {
        width: "100%",
        height: 130,
        borderRadius: 8,
      },
      text: {
        color: "orange",
        fontWeight: "bold",
        // fontFamily: "sanFransisco"
    
      },
      searchContainer: {
        height: 48,
        width: "90%",
        borderRadius: 10,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // fontFamily:"sanFransisco"
    
      },
      gridView: {
        marginTop: 0,
        flex: 1,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
      },
      itemContainer: {
        // justifyContent: "flex-end",
        borderRadius: 10,
        height: 195,
        width:195
      },
      itemName: {
        fontSize: 16,
        color: "#3b3b42",
        marginLeft:-1
      },
      itemCode: {
        fontSize: 12,
        color: "grey",
        fontWeight: "400",
        // fontFamily: "openSansRegular"
      },
})

