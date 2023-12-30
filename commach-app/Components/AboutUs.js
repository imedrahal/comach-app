import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Equipe from '../assets/Equipe-COMACHEM.jpg'
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function AboutUs() {
    const navigation = useNavigation();

    const onPressNav = () => {
        // Handle press event here
        navigation.navigate("About")
    };
    return (
        <View style={styles.container}>
            <Text style={{
                color: "#b19777", marginTop: -30, marginBottom: -110, fontSize: 30, alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ color: "white",marginLeft:50 }}> COMACHEM {"\n"}</Text> LE SPÉCIALISTE DU MDF.</Text>
            <Image source={Equipe} style={{ height: 170, width: 190, position: "relative", borderRadius: 35, marginBottom: 10, marginTop: 130 }} />
            <Text style={{ color: "white", marginTop: 10, marginBottom: 20, fontSize: 15, padding: 15 }}>
                COMACHEM est une entreprise familiale qui propose aux professionnels et aux particuliers des produits MDF et dérivé pour la construction, la rénovation, l'aménagement intérieur (cuisine dressing, …).
                COMACHEM est une entreprise familiale qui propose aux professionnels et aux particuliers des produits MDF et dérivé pour la construction, la rénovation, l'aménagement intérieur (cuisine dressing, …).</Text>
            <Pressable onPress={onPressNav}>
                <Text style={{ marginTop: -30, left: -90, fontSize: 20, color: "white", marginLeft: -105, marginRight: -150 }}>Press to see more deteils      
                </Text></Pressable>
                <AntDesign style={styles.icon} name='arrowright' size={25} />


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
        marginLeft:90,
marginTop:-30 }
});