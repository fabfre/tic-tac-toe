import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TTTHomeScreen from "./screens/Home/TTTHomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TTTGameScreen from "./screens/Game/TTTGameScreen";

export type NavigatorParamList = {
  home: undefined;
  game: { player1: string; player2: string };
};

const RootStack = createNativeStackNavigator<NavigatorParamList>();

const TTTNavigationContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="home"
          options={{ headerTitle: "Neues Spiel" }}
          component={TTTHomeScreen}
        />
        <RootStack.Screen
          options={{ headerTitle: "Tic Tac Toe" }}
          name="game"
          component={TTTGameScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default TTTNavigationContainer;
