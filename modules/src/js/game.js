"use strict";

// eslint-disable-next-line no-unused-vars
import Character from "./domain"; 

class Game {
    constructor() {
        this.character = new Character("Вася", "Warrior");
    }

    start() {
        console.log('game started');
    }
}

export class GameSavingData {
    constructor(name, level, health) {
        this.name = name;
        this.level = level;
        this.health = health;
    }
}

export function readGameSaving() {
    const data = JSON.parse(localStorage.getItem("savedGame"));
    if (!data) {
        return null;
    }
    return new GameSavingData(data.name, data.level, data.health);
}

export function writeGameSaving(data) {
    localStorage.setItem("savedGame", JSON.stringify(data));
}

export default Game;