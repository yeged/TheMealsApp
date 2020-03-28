import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigation/MealsNavigator"
import { createStore, combineReducers } from "redux"
import mealReducer from "./store/reducers/meals"
import { enableScreens } from "react-native-screens"

import { Provider } from "react-redux"

enableScreens(); // for better performance

const fetchLayout = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })

}

const rootReducer = combineReducers({
  meals: mealReducer
})

const store = createStore(rootReducer)

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchLayout} onFinish={() => setFontLoaded(true)} />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
