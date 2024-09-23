"use strict";

import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "./game";

const game = new Game();
game.start();

const savedGameData = loadGame();

if (savedGameData) {
    game.character.name = savedGameData.name; 
    game.character.level = savedGameData.level;
    game.character.health = savedGameData.health;
}

saveGame(new GameSavingData(game.name, game.level, game.health));
