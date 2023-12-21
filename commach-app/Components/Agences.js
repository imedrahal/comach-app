import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Agences() {
  return (
    <View style={styles.container}>
      <Text>Searchhhh!</Text>
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