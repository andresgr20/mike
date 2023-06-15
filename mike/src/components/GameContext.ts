import React, { createContext, useState } from "react";
import { Game } from "./Game";

enum Player {
  Mike = "M",
  Alyssa = "A",
}
interface GameSettings {
  player: Player;
  start: boolean;
  games: Game[];
}

interface GameContextSettingsProps {
  settings: GameSettings;
  updateSettings: (newSettings: GameSettings) => void;
}

export const GameContext = createContext<GameContextSettingsProps>({
  settings: {} as GameSettings,
  updateSettings: () => {},
});

// export const GameProvider: React.FC;
