import { GameState } from "../types/GameState";
import { StyleSheet, Text, View } from "react-native";

const getDescriptionForGameState = (
  gameState: GameState,
  player1: string,
  player2: string
) => {
  switch (gameState) {
    case GameState.ACTION_PLAYER1:
      return `${player1}, du bist dran`;
    case GameState.ACTION_PLAYER2:
      return `${player2}, du bist dran`;
    case GameState.DRAW:
      return "Spiel vorbei! Unentschieden!";
    case GameState.WON_PLAYER1:
      return `${player1}, du hast gewonnen`;
    case GameState.WON_PLAYER2:
      return `${player2}, du hast gewonnen`;
    default:
      return "";
  }
};

const TTTGameDescription = (props: {
  player1: string;
  player2: string;
  gameState: GameState;
}) => {
  const { player1, player2, gameState } = props;
  const description: string = getDescriptionForGameState(
    gameState,
    player1,
    player2
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default TTTGameDescription;
