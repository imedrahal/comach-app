import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable,Linking } from 'react-native';
import Equipe from '../assets/Equipe-COMACHEM.jpg'
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';

export default function AboutUs() {
    const navigation = useNavigation();

    // const onPressNav = () => {
    //     // Handle press event here
    //     navigation.navigate("Contact")
    // };
    return (
        <View style={styles.container}>
            <Text style={{
                color: "white", marginTop: 30, marginBottom: 30, fontSize: 40, alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ color: "white",marginLeft:50}}> Contactez</Text> nous.</Text>
            {/* <Text style={{ color: "white", marginTop: 50, marginBottom: 20, fontSize: 15, padding: 15 }}>
                
                </Text> */}

<View style={styles.imageRow}>
                <Entypo  name='old-phone' size={60} style={{  marginLeft: 30,color:"#DAA520" }} />
                <Text style={{ color: "white", marginTop: 60, marginLeft: -100, marginBottom: 50 }}>
                Telephone : 98 189 189 </Text>

                {/* <MaterialCommunityIcons name="email" size={60} style={{ marginLeft: 80, height: 85, width: 85, marginRight: 0,color:"#DAA520" }} />
                <Text style={{ color: "white", marginTop: 60, marginLeft: -140 }} >agence.bizerte@comachem.com{"\n"}agence.sidithabet@comachem.com
</Text> */}
 <Pressable  onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100055051277733')}style={{marginLeft:110}} >
                <FontAwesome name="facebook-square" size={60} style={{ marginLeft: -30, color:"#DAA520",marginBottom:-60 }} />
                <Text style={{ color: "white", marginTop: 60, marginLeft: -80 }}>press to see facebook</Text>
                </Pressable>
            </View>
            {/* <View style={styles.imageRow}>
                <Pressable  onPress={() => Linking.openURL('https://www.facebook.com/imed.rahal.7/')}style={{marginLeft:50}} >
                <FontAwesome name="facebook-square" size={60} style={{ marginLeft: -30, color:"#DAA520",marginBottom:-60 }} />
                <Text style={{ color: "white", marginTop: 70, marginLeft: -80 }}>press to see facebook</Text>
                </Pressable>
            </View> */}
            {/* <Pressable  
            onPress={onPressNav}
            >
                <Text style={{ marginTop: -10, left: -90, fontSize: 20, color: "white", marginLeft: -105, marginRight: -150 }}>more deteils about agences    
                </Text></Pressable>
                <AntDesign style={styles.icon} name='arrowright' size={25} /> */}


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20
    },
    icon: {
        color: "white",
        marginLeft: 90,
        marginTop: -22,
        marginLeft: 125
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -10 // Evenly distribute images
    },
});