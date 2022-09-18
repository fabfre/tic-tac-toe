import { FC } from "react";
import { NavigatorParamList } from "../../TTTNavigationContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import TTTHeadline from "../../components/TTTHeadline";
import TTTGameField from "../../components/TTTGameField";
import useGame from "../../hooks/useGame";
import GameContext from "../../contexts/GameContext";
import { GameState } from "../../types/GameState";
import { isGameGameFinished } from "../../services/GameService";
import TTTGameDescription from "../../components/TTTGameDescription";

const TTTGameScreen: FC<NativeStackScreenProps<NavigatorParamList, "game">> = ({
  route,
}) => {
  const { player1, player2 } = route.params;
  const { currentGameState, gameField, playerAction, startNewGame } = useGame(
    player1,
    player2
  );
  return (
    <View>
      <GameContext.Provider value={{ currentPlayerAction: playerAction }}>
        <TTTHeadline text={`${player1} vs. ${player2}`} />
        <TTTGameField gameField={gameField} />
        <TTTGameDescription
          player1={player1}
          player2={player2}
          gameState={currentGameState}
        />
        {isGameGameFinished(currentGameState) && (
          <Button title={"Nochmal Spielen"} onPress={startNewGame} />
        )}
      </GameContext.Provider>
    </View>
  );
};

export default TTTGameScreen;
