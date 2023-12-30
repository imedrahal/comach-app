import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import logo from '../assets/logo.png'
import Equipe from '../assets/Equipe-COMACHEM.jpg'

export default function About() {
    return (
        <View style={{
            backgroundColor: '#3b3b42', width: "100%",
            height: "100%"
        }}>
            <View style={{ height: 110, backgroundColor: '#3b3b42', marginBottom: 10 }}>
                <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: 160 }} />
                <View style={{ backgroundColor: "white", height: 1, width: "100%", marginTop: 40 }}></View>
            </View>
            <ScrollView >
                <Text style={{
                    color: "white", marginTop: 20, marginBottom: -35, fontSize: 35, marginLeft: 105
                }}>
                    COMACHEM                </Text>
                <Text style={{
                    color: "#b19777", marginTop: 60, marginBottom: -110, fontSize: 35, marginLeft: 20
                }}>
                    LE SPÉCIALISTE DU MDF
                </Text>
                <Image source={Equipe} style={{
                    height: 170, width: 190, position: "relative", borderRadius: 35, marginBottom: 10, marginTop: 130, marginLeft: 110
                }} />
                <Text style={{ color: "white", marginTop: 10, marginBottom: 20, fontSize: 15, padding: 15 }}>
                    COMACHEM est une entreprise familiale qui propose aux professionnels et aux particuliers des produits MDF et dérivé pour la construction, la rénovation, l'aménagement intérieur (cuisine dressing, …).
                    COMACHEM est une entreprise familiale qui propose aux professionnels et aux particuliers des produits MDF et dérivé pour la construction, la rénovation, l'aménagement intérieur (cuisine dressing, …).</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: 20, color: "white" }}>Pourquoi acheter chez COMACHEM ?</Text>
                <Text style={{fontSize: 15,color:"white",marginTop:10,marginRight:15,marginLeft:15,marginBottom:200}}>Nous proposons des produits de qualité, utilisés par les pros du bois, du cuisine, du bâtiment et du Décoration,

                    Vous bénéficiez des conseils et du suivi de commande réalisé par une équipe dynamique,

                    Nous pratiquons le juste prix pour toute notre gamme.


                    COMACHEM. Vous souhaite une bonne visite sur le site, n'hésitez pas à contacter nos spécialistes par e-mail ou par téléphone.</Text>
                    <Text style={{fontSize: 15,color:"white",marginTop:10,marginRight:15,marginLeft:15,marginBottom:200}}>Nous proposons des produits de qualité, utilisés par les pros du bois, du cuisine, du bâtiment et du Décoration,

Vous bénéficiez des conseils et du suivi de commande réalisé par une équipe dynamique,

Nous pratiquons le juste prix pour toute notre gamme.


COMACHEM. Vous souhaite une bonne visite sur le site, n'hésitez pas à contacter nos spécialistes par e-mail ou par téléphone.</Text>
            </ScrollView>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#54595F',
        width: "100%",
        height: "100%",
        // alignItems: 'center',
        justifyContent: 'center',
        // position:"absolute"
    },
});