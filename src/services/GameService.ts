import { GameState } from "../types/GameState";
import { Action } from "../types/Action";
import { GamefieldElement } from "../types/GamefieldElement";

export class GameService {
  private player1: string;
  private player2: string;
  private n: number;

  private actionsPlayer1: Array<Action>;
  private actionsPlayer2: Array<Action>;
  gameField: Array<Array<string>>;

  private currentGameState: GameState;
  private actionsCount: number;

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
    this.gameField = Array.from({ length: this.n }, (_) =>
      Array.from({ length: this.n }, (_) => GamefieldElement.Empty)
    );

    this.playerAction = this.playerAction.bind(this);
  }

  public playerAction(action: Action) {
    let isActionValid = this.isActionValid(action);
    let nextState = this.currentGameState;
    if (isActionValid) {
      this.actionsCount++;
      switch (this.currentGameState) {
        case GameState.ACTION_PLAYER1:
          this.actionsPlayer1.push(action);
          // update gamefield
          this.gameField[action.row][action.column] = GamefieldElement.P1;
          nextState = GameState.ACTION_PLAYER2;
          break;
        case GameState.ACTION_PLAYER2:
          this.actionsPlayer2.push(action);
          // update gamefield
          this.gameField[action.row][action.column] = GamefieldElement.P2;
          nextState = GameState.ACTION_PLAYER1;
          break;
      }
    }
    const checkFinishGameState = this.checkFinishGameState();
    if (isGameGameFinished(checkFinishGameState)) {
      nextState = checkFinishGameState;
    }
    this.updateCurrentGameState(nextState);
  }

  private updateCurrentGameState(newGameState: GameState) {
    this.currentGameState = newGameState;
    this.onNewState(newGameState);
  }

  private isActionValid(action: Action) {
    const allActions = this.actionsPlayer1.concat(this.actionsPlayer2);
    return (
      allActions.findIndex(
        ($0) => $0.row == action.row && $0.column == action.column
      ) === -1
    );
  }

  private checkFinishGameState() {
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

  private hasPlayerWon(playerActions: Action[]) {
    if (playerActions.length < 3) return false;

    //player has n in one row
    const wonThroughRow = isStraightWin(playerActions, "row", this.n);
    if (wonThroughRow) return true;

    // player has n in one column
    const wonThroughColumn = isStraightWin(playerActions, "column", this.n);
    if (wonThroughColumn) return true;

    // player won through diagonals
    const diagonalTopLeftBottomRightWin = isDiagonalTopLeftBottomRightWin(
      playerActions,
      this.n
    );
    if (diagonalTopLeftBottomRightWin) return true;

    const diagonalTopRightBottomLeftWin = isDiagonalTopRightBottomLeftWin(
      playerActions,
      this.n
    );
    if (diagonalTopRightBottomLeftWin) return true;

    return false;
  }
}

export const isGameGameFinished = (gameState: GameState) => {
  if (gameState === GameState.WON_PLAYER1) return true;
  if (gameState === GameState.WON_PLAYER2) return true;
  if (gameState === GameState.DRAW) return true;
  return false;
};

export function isStraightWin(
  playerActions: Action[],
  type: "row" | "column",
  n: number
) {
  const sortedPlayerActions = Array.from({ length: n }, (_) => 0);
  playerActions.forEach((a) => {
    const key = a[type];
    sortedPlayerActions[key]++;
  });
  const won = sortedPlayerActions.find((a) => a === n) > 0;
  return won;
}

export function isDiagonalTopLeftBottomRightWin(
  playerActions: Action[],
  n: number
) {
  const diagonalActions: Action[] = [];
  playerActions.forEach((action) => {
    if (action.row == action.column) {
      diagonalActions.push(action);
    }
  });
  const isWon = diagonalActions.length === n;
  return isWon;
}

export function isDiagonalTopRightBottomLeftWin(
  playerActions: Action[],
  n: number
) {
  const diagonalActions: Action[] = [];

  for (let i = 0; i < n; i++) {
    const playedAction = playerActions.find(
      (action) => action.row === i && action.column === n - 1 - i
    );
    if (playedAction) diagonalActions.push(playedAction);
  }
  return diagonalActions.length === n;
}
