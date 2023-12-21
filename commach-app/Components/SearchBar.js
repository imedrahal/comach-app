import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useRef, useState,useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, FlatList, Pressable } from 'react-native';
import logo from '../assets/logo.png'
import { useNavigation } from "@react-navigation/native";
import SwiperProducts from './SwiperProducts'
import icon from "react-native-vector-icons/FontAwesome"

// const data = [{ name: "lowel", image: logo }, { name: "lowel", image: logo }, { name: "lowel", image: logo }, { name: "lowel", image: logo }, { name: "lowel", image: logo }, { name: "lowel", image: logo }, { name: "lowel", image: logo }, { name: "lowel", image: logo }]
const data = [
    'Aswin Cheriyala',
    'Alexander Nathaniel Johnson',
    'Isabella Penelope Thompson',
    'Benjamin Jeremiah Rodriguez',
    'Elizabeth Gabriella Davis',
    'Christopher Alexander Martinez',
    'Charlotte Anastasia Wilson',
    'Theodore Sebastian Taylor',
    'Lillian Penelope Turner',
    'Maximilian Nathaniel Mitchell',
    'Victoria Seraphina White',
    'Nicholas Benjamin Hall',
    'Genevieve Arabella Lewis',
    'William Sebastian Parker',
    'Madeline Penelope Adams',
    'Sebastian Oliver Mitchell',
    'Sophia Anastasia Walker',
    'Gabriel Nathaniel Turner',
    'Eleanor Seraphina Baker',
    'Benjamin Jeremiah Williams',
    'Seraphina Anastasia Hall',
    'Nathaniel Christopher Lee',
    'Isabella Penelope Anderson',
    'Christopher Alexander Harris',
    'Olivia Seraphina Wright',
    'Alessandro Maximilian Young',
    'Isabella Penelope Davis',
    'Sebastian Oliver Turner',
    'Adriana Seraphina Taylor',
    'Lucas Benjamin Adams',
    'Seraphina Anastasia Parker',
    'Theodore Benjamin Wright',
    'Lucia Seraphina Gonzalez',
    'Eliot Maximilian Foster',
    'Emilia Penelope Smith',
    'Henry Nathaniel Turner',
    'Sophia Seraphina Hall',
    'Liam Benjamin Wilson',
    'Charlotte Penelope Parker',
    'William Alexander Lee',
    'Amelia Seraphina Walker',
    'Ethan Benjamin Harris',
    'Ava Penelope Davis',
    'Lucas Nathaniel Thompson',
    'Olivia Penelope Harris',
    'Evelyn Seraphina Lewis',
    'Samuel Nathaniel Turner',
    'Scarlett Anastasia Baker',
    'Lucas Benjamin Wright',
    'Grace Seraphina Mitchell',
    'Mason Alexander White',
    'Emma Penelope Turner',
  ];
export default function SearchBar( {setVisible,visible}) {
    const [active, setActive] = useState(0)
    const navigation = useNavigation();
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();

  

  const filteredData = useMemo(() => {
    const searchLetterArray = searchValue
       .split('')
      .filter(x => x !== ' ')
      .map(letter => letter.toLowerCase());

    return data
      .map(item => {
        const itemArray = item.toLowerCase()
        .split('');
        let isValid = true;
        let strIndexSum = 0;

        for (let j = 0; j < searchLetterArray.length; j += 1) {
          const strLetter = searchLetterArray[j];
          const strIndex = itemArray.findIndex(x => x === strLetter);
          if (strIndex === -1) {
            isValid = false;
            break;
          }
          strIndexSum += strIndex;
          itemArray.splice(0, strIndex + 1);
        }

        return isValid ? {value: item, sortValue: strIndexSum} : null;
      })
      .filter(item => item !== null)
      .sort((a, b) => a.sortValue - b.sortValue);
  }, [searchValue]);

  const renderItem = ({item}) => {
    const {value} = item;
    const highlightedValue = highlightSearchedLetters(value, searchValue);
    return <Text>{highlightedValue}</Text>;
  };
  const show=()=>{
    if(searchValue===""){
        setVisible(true)
    }
    else{
        setVisible(false)    }
  }

  // Function to highlight searched letters in a string
  const highlightSearchedLetters = (text, searchTerm) => {
    if (!searchTerm) {
      return text;
    }

    const searchLetters = searchTerm.toLowerCase().split('');
    const lowerText = text.toLowerCase();

    let startIndex = 0;
    const highlightedParts = [];

    for (let i = 0; i < searchLetters.length; i++) {
      const searchLetter = searchLetters[i];

      const matchIndex = lowerText.indexOf(searchLetter, startIndex);
      if (matchIndex === -1) {
        // If a letter is not found, exit the loop
        break;
      }

      const beforeMatch = text.slice(startIndex, matchIndex);
      const match = text.slice(matchIndex, matchIndex + 1);

      highlightedParts.push(beforeMatch);
      highlightedParts.push(
        <Text key={i} style={styles.highlightColor}>
          {match}
        </Text>,
      );

      startIndex = matchIndex + 1;
    }

    highlightedParts.push(text.slice(startIndex));

    return <Text>{highlightedParts}</Text>;
  };

    useEffect(() => {
        show()
    // Code to be executed as a side effect
  }, [searchValue]); // Dependency array

    return (
        <View  >
            {/* {console.log(visible,"pffffffffffffffffff")} */}
            <View style={{ backgroundColor: '#3b3b42'}}>
            <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: 160 }} />
            <View style={styles.assembler}>

                <View style={styles.Main}>
                    <TouchableOpacity   >
                        <TextInput
                         placeholder='search' style={styles.input} 
                        value={searchValue}
                        onPress={() => {setVisible(false) }}
        //   placeholder="Search"
        //   style={styles.input}
        // onChangeText={() => {
        //     setSearchValue();
        //     setVisible(!visible);
        //   }}   
         onChangeText={setSearchValue}     
           placeholderTextColor="#ddd"
          ref={inputRef}
                         >

                        </TextInput>
                        {/* {console.log(visible,"nonnnnnn")} */}

                    </TouchableOpacity>

                </View>
                <View style={styles.Botton}>
                    <TouchableOpacity onPress={() => {navigation.navigate('SearchPage') }} >
                        <FontAwesome style={styles.icon} name='search' size={25} />
                    </TouchableOpacity>

                </View>
                    {/* <SwiperProducts  setVisible={setVisible} visible={visible} />  */}

            </View>
            
            </View>

            {searchValue!==''?( <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.value}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      />)
      :<></> }
           
            {/* <FlatList
                    data={data}
                    // ref={headerScrollView}
                    keyExtractor={(item) => item}
                //     style={{backgroundColor:'red',borderWidth:25,
                //     borderColor: "#C0C0C0"
                // }}
                    style={styles.headerScroll}
                    
                    renderItem={({ item, index }) => (
                        <View style={{ overflow: 'hidden' }} >
                            <TouchableOpacity
                                key={item}
                                style={[styles.headerItem, { backgroundColor: 'grey',width:350,marginLeft:50
                            }]}
                            >
                                <Text style={{ color: '#3b3b42' }}>{item.name} </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                /> */}
        </View>


    );
}

const styles = StyleSheet.create({
    assembler: {
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 10
    },
    Main: {
        backgroundColor: '#fff',
        width: 340,
        height: 45,
        borderWidth: 1,
        borderColor: "#C0C0C0",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
    },
    input: {
        marginLeft: 0,
        marginTop: 5,
        width:250
    },
    Botton: {
        height: 45,
        width: 70,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderColor: "#C0C0C0",
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        marginRight: 10
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 18,
        marginTop: 18
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "600"
    },
    headerScroll:{
        position:"absolute",
        Zindex:0,
        marginTop:170,
    },
    container:{
        flex:1,
        width:"100%",
        backgroundColor:"white"
    },
    contentContainer: {
            padding: 120,
            width:"100%",

          },
   
   
});




