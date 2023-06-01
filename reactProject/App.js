import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app2</Text>
      <StatusBar style="auto" />


      <Text>--------------------------------------------</Text>
      <Text>How to make image pressable??</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://oceaniaesports.gg/wp-content/uploads/2021/07/logowebsite.png',
          width:100,
          height:100,
        }}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
