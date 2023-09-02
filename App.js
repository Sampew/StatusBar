import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>The cat is walking on the road</Text>
      <StatusBar
        style="dark"
        backgroundColor='red'
        hidden = {true}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,

    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
