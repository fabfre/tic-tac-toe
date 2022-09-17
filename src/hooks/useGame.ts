import { useEffect, useRef, useState } from "react";
import { GameService } from "../services/GameService";
import { GameState } from "../types/GameState";

function useGame(player1: string, player2: string) {
  const game = useRef<GameService>();
  const [currentGameState, setCurrentGameState] = useState<GameState>(
    GameState.INIT
  );
  useEffect(() => {
    game.current = new GameService(player1, player2, (nextState) => {
      setCurrentGameState(nextState);
    });
    setCurrentGameState(GameState.ACTION_PLAYER1);
  }, []);

  if (game.current) {
    return {
      currentGameState,
      playerAction: game.current.playerAction,
      gameField: game.current.gameField,
    };
  } else {
    return {
      currentGameState: GameState.INIT,
      playerAction: () => {},
      gameField: [[""], [""], [""]],
    };
  }
}

export default useGame;
