import { useEffect, useRef, useState } from "react";
import { GameService } from "../services/GameService";
import { GameState } from "../types/GameState";
import { GamefieldElement } from "../types/GamefieldElement";

function useGame(player1: string, player2: string) {
  const game = useRef<GameService>();
  const [currentGameState, setCurrentGameState] = useState<GameState>(
    GameState.INIT
  );
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    game.current = new GameService(player1, player2, (nextState) => {
      setCurrentGameState(nextState);
    });
    setCurrentGameState(GameState.ACTION_PLAYER1);
  };

  if (game.current) {
    return {
      currentGameState,
      playerAction: game.current.playerAction,
      gameField: game.current.gameField,
      startNewGame: startNewGame,
    };
  } else {
    return {
      currentGameState: GameState.INIT,
      playerAction: () => {},
      gameField: [
        [GamefieldElement.Empty],
        [GamefieldElement.Empty],
        [GamefieldElement.Empty],
      ],
      startNewGame: startNewGame,
    };
  }
}

export default useGame;
