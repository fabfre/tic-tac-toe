import { FC } from "react";
import { NavigatorParamList } from "../../TTTNavigationContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import TTTHeadline from "../../components/TTTHeadline";
import TTTGameField from "../../components/TTTGameField";
import useGame from "../../hooks/useGame";

const TTTGameScreen: FC<
  NativeStackScreenProps<NavigatorParamList, "game">
> = () => {
  const { currentGameState, gameField, playerAction } = useGame(
    "Spieler1",
    "Spieler2"
  );
  console.log(currentGameState);
  return (
    <View>
      <TTTHeadline text={"Spieler 1 vs. Spieler 2"} />
      <TTTGameField gameField={gameField} />
    </View>
  );
};

export default TTTGameScreen;
