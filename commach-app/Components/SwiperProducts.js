import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View ,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import logo from '../assets/logo.png'

const { width } = Dimensions.get('window');
const data=[{name:"lowel",image:logo},{name:"lowel",image:logo},{name:"lowel",image:logo},{name:"lowel",image:logo},{name:"lowel",image:logo},{name:"lowel",image:logo},{name:"lowel",image:logo},{name:"lowel",image:logo}]

const headers = ['categories 1', 'categories  2', 'categories 3', 'categories 14', 'categories 5', 'categories  categories 6', 'categories 7', 'categories  categories 8', 'categories 9', 'categories 10']

let animationActive = true;
let animationActiveRef;
export default function ScrollableTabViewPager3({setVisible,visible}) {

    const navigation = useNavigation();

    const [headerWidths, setWidths] = useState([])
    const [active, setActive] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    const barTranslate = Animated.multiply(scrollX, -1)
    const barTranslate1 = useRef(new Animated.Value(0)).current;
    const headerScrollView = useRef();

    useEffect(() => {
        let leftOffset = 0
        for (let i = 0; i < active; i += 1) {
            leftOffset += headerWidths[i]
        }
        headerScrollView.current.scrollToIndex({ index: active, viewPosition: 0.5 });
        Animated.spring(barTranslate1, { toValue: leftOffset, useNativeDriver: true, bounciness: 0 }).start()
    }, [active])

    const onPressHeader = (index,item) => {
        if (animationActiveRef) { clearTimeout(animationActiveRef) }
     
        navigation.navigate("Categories",item1={item})
        LayoutAnimation.easeInEaseOut()
        setActive(index);
    }
    // const onScroll = (e) => {
    //     const x = e.nativeEvent.contentOffset.x;
    //     let newIndex = Math.floor((x / width) + 0.5)
    //     if (active != newIndex && animationActive) {
    //         LayoutAnimation.easeInEaseOut()
    //         setActive(newIndex)
    //     }
    // }
    const onHeaderLayout = (width, index) => {
        let newWidths = [...headerWidths];
        newWidths[index] = width
        setWidths(newWidths)
    }
    return (
        <View style={styles.container}>
            <View>
            {/* {console.log(item,"swiper1111111111")} */}
                <FlatList
                    data={headers}
                    ref={headerScrollView}
                    keyExtractor={(item) => item}
                    horizontal
                    // numColumns={2}
                    key={''}
                    style={styles.headerScroll}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false },
                    )}
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={() => (<View style={[styles.headerBar, {}]} />)}
                    renderItem={({ item, index }) => (
                        <View style={{ overflow: 'hidden' }} >
                            <TouchableOpacity
                                onLayout={(e) => onHeaderLayout(e.nativeEvent.layout.width, index)}
                                onPress={() => onPressHeader(index, item)}
                                key={item}
                                style={[styles.headerItem, { backgroundColor: active == index ? '#DAA520' : '#3b3b42' }]}
                            >

                                <Text style={{ color: '#fff' }}>{item} </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />



      
                <Animated.View style={[styles.headerBar, { width: headerWidths[active], transform: [{ translateX: barTranslate }, { translateX: barTranslate1 }] }]} />
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 50,
        marginBottom:-525,
    },
    headerScroll: {
        flexGrow: 0,
    },
    headerItem: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },

    headerBar: {
        height: 2,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: -1,
    }
})
