import React, { useState } from 'react';
import { Button, Dimensions, Image, LayoutAnimation, Platform, ScrollView, StyleSheet, UIManager, View,Text } from 'react-native';
const { width } = Dimensions.get('screen');
let data = [];
for (let i = 0; i < 20; i += 1) data.push(i)

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default function DynamicColumns(categories) {
    const [columns, setColumns] = useState(2);
    const categorie =categories
    const setColumnCount = (val) => {
        LayoutAnimation.easeInEaseOut();
        setColumns(val)
    }
    return (
        <View style={styles.container}>
             {/* <View style={styles.btnContainer}>
                <Button title=' reduce  column ' onPress={() => setColumnCount(columns - 1)} disabled={columns <= 1} />
                <Button title=' add  column ' onPress={() => setColumnCount(columns + 1)} disabled={columns >= 20} />
            </View> */}
            <ScrollView contentContainerStyle={styles.scrollView}>
                {data.map((item, i) => (
                    <View>
                    <View key={item} style={[styles.item, { width: width / columns, height: width / columns }]}>
                        <Image style={StyleSheet.absoluteFill}
                            source={{
                                uri: i % 2 == 0 ? 'https://preview.pixlr.com/images/800wm/356/2/356202449.jpg'
                                    : 'https://img10.joybuy.com/img/jfs/t15409/82/798473600/206221/734b5e2a/5a38b0b0N3855343e.jpg.dpg'
                            }} />
                             
                    </View>
                    {/* {console.log(categories.categories.item,"pufffff")} */}
                              <Text > prix</Text>
                              <Text> name    </Text>
                    </View>
                                                

                ))}
            </ScrollView>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:260
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    item: {
        backgroundColor: '#7e9e0b',
        borderWidth: 2,

        borderColor: '#fff'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 5
    }
})