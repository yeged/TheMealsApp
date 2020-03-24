import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import {AppLoading} from "expo";
import MealsNavigator from "./navigation/MealsNavigator"

const fetchLayout = () => {
    Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regulat.ttf"),
        "open-sans-bold" : require("./assets/fonts/OpenSans-Bold.ttf")
    })

}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

    if(!fontLoaded){
        return <AppLoading startAsync={fetchLayout} onFinish={() => setFontLoaded(true)} />
    }

  return (
    //<MealsNavigator />
    <View style={styles.container}>
      <Text style={{fontFamily: "open-sans-bold"}}>Open up App.js to start working on your app!</Text>
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
