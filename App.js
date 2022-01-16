import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Business Search" }}
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          options={{ title: "Results" }}
          name="ResultsShow"
          component={ResultsShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
