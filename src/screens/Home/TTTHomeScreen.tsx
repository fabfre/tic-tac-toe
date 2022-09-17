import { FC } from "react";
import { NavigatorParamList } from "../../TTTNavigationContainer";
import { StackScreenProps } from "@react-navigation/stack";
import { View, Text } from "react-native";

const TTTHomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Welcome to Tic Tac Toe</Text>
    </View>
  );
};

export default TTTHomeScreen;
