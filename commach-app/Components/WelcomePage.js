import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function SearchPage() {
    const navigation = useNavigation();

    const onPressProduct = () => {
        // Handle press event here
        navigation.navigate("SearchPage")
        console.log('yesss')

    };

  return (
    <View style={styles.container}>
        <Pressable
       onPress={() =>
        navigation.navigate("HomePage")
      }
      >
                <Text>
SearchPage!
</Text>
</Pressable>
     
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