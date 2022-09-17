import { FC } from "react";
import { NavigatorParamList } from "../../TTTNavigationContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import TTTHeadline from "../../components/TTTHeadline";
import TTTGameField from "../../components/TTTGameField";

const TTTGameScreen: FC<
  NativeStackScreenProps<NavigatorParamList, "game">
> = () => {
  return (
    <View>
      <TTTHeadline text={"Spieler 1 vs. Spieler 2"} />
      <TTTGameField n={3} />
    </View>
  );
};

export default TTTGameScreen;
