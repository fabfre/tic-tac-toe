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
    this.n = 3;
    this.currentGameState = GameState.ACTION_PLAYER1;
    this.gameField = [
      ["e", "e", "e"],
      ["e", "e", "e"],
      ["e", "e", "e"],
    ];

    this.playerAction = this.playerAction.bind(this);
    this.checkFinishGameState = this.checkFinishGameState.bind(this);
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
    const checkFinishGameState = this.checkFinishGameState();
    if (this.isGameGameFinished(checkFinishGameState)) {
      nextState = checkFinishGameState;
    }
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

  isGameGameFinished(gameState: GameState) {
    if (gameState === GameState.WON_PLAYER1) return true;
    if (gameState === GameState.WON_PLAYER2) return true;
    if (gameState === GameState.DRAW) return true;
    return false;
  }

  checkFinishGameState() {
    // player 1 has won
    const player1Won = this.hasPlayerWon(this.actionsPlayer1);
    if (player1Won) return GameState.WON_PLAYER1;

    const player2Won = this.hasPlayerWon(this.actionsPlayer2);
    if (player2Won) return GameState.WON_PLAYER2;

    // draw
    const isDraw =
      this.actionsPlayer1.concat(this.actionsPlayer2).length ===
      this.n * this.n;
    if (isDraw) return GameState.DRAW;
  }

  hasPlayerWon(playerActions: Action[]) {
    if (playerActions.length < 3) return false;

    // player has n in one row
    const sortedPlayerActionsRow = Array.from({ length: this.n }, (_) => 0);
    const sortedPlayerActionsColumn = [...sortedPlayerActionsRow];

    playerActions.forEach((a) => {
      const key = a.row;
      sortedPlayerActionsRow[key]++;
    });

    const wonThroughRow = sortedPlayerActionsRow.find((a) => a === this.n) > 0;
    if (wonThroughRow) return true;

    // player has n in one column
    playerActions.forEach((a) => {
      const key = a.column;
      sortedPlayerActionsColumn[key]++;
    });

    const wonThroughColumn =
      sortedPlayerActionsColumn.find((a) => a === this.n) > 0;
    if (wonThroughColumn) return true;

    // player won through diagonals
    const diagonalActionsLeftTopToRightBottom: Action[] = [];
    playerActions.forEach((action) => {
      if (action.row == action.column) {
        diagonalActionsLeftTopToRightBottom.push(action);
      }
    });
    if (diagonalActionsLeftTopToRightBottom.length === this.n) return true;

    const diagonalActionsRightTopToLeftBottom: Action[] = [];

    for (let i = 0; i < this.n; i++) {
      const playedAction = playerActions.find(
        (action) => action.row === i && action.column === this.n - 1 - i
      );
      if (playedAction) diagonalActionsRightTopToLeftBottom.push(playedAction);
    }
    if (diagonalActionsRightTopToLeftBottom.length === this.n) return true;

    return false;
  }
}
