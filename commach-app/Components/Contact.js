import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Contact() {

  return (
    <View style={styles.container}>
      <Text>Contact us!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54595F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});