export enum GameState {
  ACTION_PLAYER1,
  ACTION_PLAYER2,
  WON_PLAYER1,
  WON_PLAYER2,
  DRAW,
  ERROR,
  INIT,
}

export class GameService {
  player1: string;
  player2: string;
  n: number;

  actionsPlayer1: Array<Array<number>>;
  actionsPlayer2: Array<Array<number>>;
  gameField: Array<Array<string>>;

  currentGameState: GameState;

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
    this.currentGameState = GameState.ACTION_PLAYER1;
    this.gameField = [
      ["e", "e", "e"],
      ["e", "e", "e"],
      ["e", "e", "e"],
    ];
  }

  playerAction(row: number, column: number) {
    const action = Array(row, column);
    // @TODO check Error
    let nextState = GameState.ERROR;
    switch (this.currentGameState) {
      case GameState.ACTION_PLAYER1:
        this.actionsPlayer1.push(action);
        // update gamefield
        this.gameField[row][column] = "P1";
        nextState = GameState.ACTION_PLAYER2;
      case GameState.ACTION_PLAYER2:
    }

    this.onNewState(nextState);
  }
}
