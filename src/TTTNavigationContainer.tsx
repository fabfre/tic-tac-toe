import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TTTHomeScreen from "./screens/Home/TTTHomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type NavigatorParamList = {
  home: undefined;
};

const RootStack = createNativeStackNavigator<NavigatorParamList>();

const TTTNavigationContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="home" component={TTTHomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default TTTNavigationContainer;
