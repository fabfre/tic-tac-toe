import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TTTHomeScreen from "./screens/Home/TTTHomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TTTGameScreen from "./screens/Game/TTTGameScreen";

export type NavigatorParamList = {
  home: undefined;
  game: undefined;
};

const RootStack = createNativeStackNavigator<NavigatorParamList>();

const TTTNavigationContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="home" component={TTTHomeScreen} />
        <RootStack.Screen name="game" component={TTTGameScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default TTTNavigationContainer;
