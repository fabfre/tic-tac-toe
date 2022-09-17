import { useEffect, useRef, useState } from "react";
import { GameService, GameState } from "../services/GameService";

function useGame(player1: string, player2: string) {
  const game = useRef<GameService>();
  const [currentGameState, setCurrentGameState] = useState<GameState>(
    GameState.INIT
  );
  useEffect(() => {
    console.log("in use effect");
    game.current = new GameService(player1, player2, (nextState) => {
      setCurrentGameState(nextState);
    });
    setCurrentGameState(GameState.ACTION_PLAYER2);
  }, []);

  if (game.current) {
    return {
      currentGameState,
      playerAction: game.current.playerAction,
      gameField: game.current.gameField,
    };
  } else {
    return {
      currentGameState: GameState.ACTION_PLAYER1,
      playerAction: () => {},
      gameField: [[""], [""], [""]],
    };
  }
}

export default useGame;
