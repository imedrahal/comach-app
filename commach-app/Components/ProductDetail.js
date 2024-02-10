import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Pressable } from 'react-native';
import logo from '../assets/logo.png'
import Equipe from '../assets/Equipe-COMACHEM.jpg'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ProductDetail(item) {
    const navigation = useNavigation();

    const onPress = () => {
        // Handle press event here
        navigation.navigate("HomePage")
      };
    return (
        <View style={{
            backgroundColor: '#3b3b42', width: "100%",
            height: "100%"
        }}>
          {console.log(item.route.params)}
            <View style={{ height: 110, backgroundColor: '#3b3b42', marginBottom: 10 }}>
                <Image source={logo} style={{ width: 125, height: 85, marginBottom: -45, marginTop: 35, margin: "37%" }} />
                <View style={{ backgroundColor: "white", height: 1, width: "100%", marginTop: 40 }}></View>
            </View>
            <Pressable onPress={onPress}>
        <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#DAA520',position:'relative',top:5,left:0}}>
        <AntDesign name="back" size={24} style={{marginTop:14,marginLeft:10}}/>
    </View>
  </Pressable>
            <ScrollView  >
                <Text style={{
                    color: "white", marginTop: 5, marginBottom: -35, fontSize: 35, marginLeft: "24%"
                }}>COMACHEM</Text>
                <Text style={{
                    color: "#b19777", marginTop: 60, marginBottom: -110, fontSize: 35, marginLeft: 20
                }}>
                    LE SPÉCIALISTE DU MDF
                </Text>
                <Image source={Equipe} style={{
                    height: 170, width: 190, position: "relative", borderRadius: 35, marginBottom: 10, marginTop: 130, marginLeft: "22%"
                }} />
                <Text style={{ color: "white", marginTop: 10, marginBottom: 20, fontSize: 15, padding: 15 }}>
                    COMACHEM est une entreprise familiale qui propose aux professionnels et aux particuliers des produits MDF et dérivé pour la construction, la rénovation, l'aménagement intérieur (cuisine dressing, …).
                    COMACHEM est une entreprise familiale qui propose aux professionnels et aux particuliers des produits MDF et dérivé pour la construction, la rénovation, l'aménagement intérieur (cuisine dressing, …).</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: 20, color: "#DAA520" }}>Pourquoi acheter chez COMACHEM ?</Text>
                <Text style={{ fontSize: 15, color: "white", marginTop: 10, marginRight: 15, marginLeft: 15, marginBottom: 20}}>COMACHEM est principalement fournisseur et distributeur de MDF, de Placage, High Gloss et Digital Polylac.

COMACHEM s’est axé sur l’innovation à travers la satisfaction des besoins des professionnels du bois, des consultants, des cuisinistes, des architectes, et les décorateurs.

COMACHEM se positionne comme une référence montante du marché des fournisseurs de MDF et de placage avec un stock de large gamme de produits, un service exceptionnel et une expertise unique renforcée par un réseau solide de partenaires internationaux.

COMACHEM essaye de croître sa notoriété et sa réputation sur le marché essentiellement par la sélection des fournisseurs présentant le meilleur rapport qualité-prix ainsi que la recherche permanente de produits innovants.</Text>
               
                    <Text style={{
                    color: "#b19777", marginTop: 6, marginBottom: 20, fontSize: 35, marginLeft: 90
                }}>
                    Mission & Vision
                </Text>
               
                <Text style={{
                    color: "white",marginBottom: 10, fontSize: 25, marginLeft: 10
                }}>
                    Animé par l’excellence … conduit par les valeurs.
                </Text>
                <Text style={{
                    color: "#DAA520", marginTop: 6, fontSize: 29, marginLeft: 10
                }}>
                    Mission:
                </Text>
                <Text style={{ fontSize: 15, color: "white", marginTop: 10, marginRight: 15, marginLeft: 15, marginBottom: 20}}>COMACHEM est principalement fournisseur et distributeur de MDF, de Placage, High Gloss et Digital Polylac.
                Continuer à fournir à nos clients le meilleur en matière et une grande variété de choix d’avant-garde grâce à notre recherche continuelle de la prochaine nouvelle innovation.
</Text>
<Text style={{
                    color: "#DAA520", marginTop: 6, fontSize: 29, marginLeft: 10
                }}>
                    Vision:
                </Text>
                <Text style={{ fontSize: 15, color: "white", marginTop: 10, marginRight: 15, marginLeft: 15, marginBottom: 20}}>COMACHEM est principalement fournisseur et distributeur de MDF, de Placage, High Gloss et Digital Polylac.
                Continuer à croître comme une société de distribution de première classe qui offre d’excellents produits incorporant un service à valeur ajoutée et une expertise pour assurer la satisfaction du client.</Text>
                <Text style={{
                    color: "#b19777", marginTop: 6, marginBottom: 20, fontSize: 35, marginLeft: "5%"
                }}>
                Famille COMACHEM
                </Text>

            </ScrollView>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#54595F',
        width: "90%",
        height: "100%",
        // alignItems: 'center',
        justifyContent: 'center',
        // position:"absolute"
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        padding:"2.5%"

        // Evenly distribute images
      },
});