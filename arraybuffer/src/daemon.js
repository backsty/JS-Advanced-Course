import Character from "./character.js";

export default class Deamon extends Character {
    constructor(name, type='Daemon') {
        super(name, type);
        this.attack = 100;
        this.distance = null;
        this.stoned = false;
    }
}