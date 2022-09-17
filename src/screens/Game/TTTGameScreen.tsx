import { FC } from "react";
import { NavigatorParamList } from "../../TTTNavigationContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import TTTHeadline from "../../components/TTTHeadline";
import TTTGameField from "../../components/TTTGameField";
import useGame from "../../hooks/useGame";
import GameContext from "../../contexts/GameContext";

const TTTGameScreen: FC<
  NativeStackScreenProps<NavigatorParamList, "game">
> = () => {
  const { currentGameState, gameField, playerAction } = useGame(
    "Spieler1",
    "Spieler2"
  );
  return (
    <View>
      <GameContext.Provider value={{ currentPlayerAction: playerAction }}>
        <TTTHeadline text={"Spieler 1 vs. Spieler 2"} />
        <TTTGameField gameField={gameField} />
      </GameContext.Provider>
    </View>
  );
};

export default TTTGameScreen;
