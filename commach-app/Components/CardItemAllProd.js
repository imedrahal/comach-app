import React, { useState ,useEffect} from 'react';
import { Button, Dimensions, Image, LayoutAnimation, Platform, StyleSheet, UIManager, View, Text, TouchableOpacity,Pressable } from 'react-native';
const { width } = Dimensions.get('screen');
import { ScrollView } from 'react-native-virtualized-view'
import { useNavigation } from "@react-navigation/native";
import logo from '../assets/logo.png'
import Equipe from '../assets/Equipe-COMACHEM.jpg'
import { FlatGrid } from "react-native-super-grid";

const data = [
    {image:Equipe,categorie:"categories 7"},
    {image:Equipe,categorie:"categories 7"},
    {image:Equipe,categorie:"lowla"},
    {image:Equipe,categorie:"lowla"},
    {image:Equipe,categorie:"lowla"},
    {image:Equipe,categorie:"lowla"},
    {image:Equipe,categorie:"lowla"},
    {image:Equipe,categorie:"lowla"},
    {image:Equipe,categorie:"lowla"},
    {image:Equipe,categorie:"lowla"},
    {image:Equipe,categorie:"lowla"},
    {image:Equipe,categorie:"lowla"},
];
for (let i = 0; i < 50; i += 1) data.push(i)



if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default function CardItem() {
    const [columns, setColumns] = useState(2);
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
                  {/* <Image style={styles.image} resizeMode="contain" source={item} />
                  <View style={{ alignItems: "center" }}>
                  {console.log(item ,'hellloooo')}
                    <Text style={styles.itemName}>name</Text>
                    <Text style={styles.itemName}>press to see more details </Text>

        
                  </View> */}
                  <View key={item.id} style={{width:"100%",padding:0,marginTop:0,marginBottom:20}}>
     <Image source={ item.image } style={styles.image} />
     <View style={{backgroundColor:"#4a4747",width:"90%",height:"15%",top:-5,left:-2,position:"absolute"
    }}>
         <Text style={{color:"white",top:"20%"}}>{ item.categorie }</Text>
     </View>
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
         marginBottom:590,
         marginTop:"-9%"
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
        width:205,
        height: 190,
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
        height: 255,
        width:205,
        marginBottom:10
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

