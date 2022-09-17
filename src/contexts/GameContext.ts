import React from "react";
import { Action } from "../types/Action";

export type GameContext = {
  currentPlayerAction: (action: Action) => void;
};

const GameContext = React.createContext<GameContext>({
  currentPlayerAction: () => {},
});

export default GameContext;
