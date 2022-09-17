import { GameState } from "../types/GameState";
import { Action } from "../types/Action";

export class GameService {
  player1: string;
  player2: string;
  n: number;

  actionsPlayer1: Array<Action>;
  actionsPlayer2: Array<Action>;
  gameField: Array<Array<string>>;

  currentGameState: GameState;
  actionsCount: number;

  onNewState: (newState: GameState) => void;

  constructor(
    player1: string,
    player2: string,
    onNewState: (nextState: GameState) => void
  ) {
    this.player1 = player1;
    this.player2 = player2;

    this.onNewState = onNewState;
    this.actionsPlayer1 = [];
    this.actionsPlayer2 = [];
    this.actionsCount = 0;
    this.currentGameState = GameState.ACTION_PLAYER1;
    this.gameField = [
      ["e", "e", "e"],
      ["e", "e", "e"],
      ["e", "e", "e"],
    ];

    this.playerAction = this.playerAction.bind(this);
  }

  playerAction(action: Action) {
    let isActionValid = this.isActionValid(action);
    let nextState = this.currentGameState;
    if (isActionValid) {
      switch (this.currentGameState) {
        case GameState.ACTION_PLAYER1:
          this.actionsPlayer1.push(action);
          // update gamefield
          this.gameField[action.row][action.column] = "P1";
          nextState = GameState.ACTION_PLAYER2;
          break;
        case GameState.ACTION_PLAYER2:
          this.actionsPlayer2.push(action);
          // update gamefield
          this.gameField[action.row][action.column] = "P2";
          nextState = GameState.ACTION_PLAYER1;
          break;
      }
    }
    // @TODO check if game has finished
    this.currentGameState = nextState;
    this.onNewState(nextState);
  }

  isActionValid(action: Action) {
    const allActions = this.actionsPlayer1.concat(this.actionsPlayer2);
    return (
      allActions.findIndex(
        ($0) => $0.row == action.row && $0.column == action.column
      ) === -1
    );
  }
  }
}
