import Character from "./character.js";

export default class Magician extends Character {
    constructor(name, type='Magician') {
        super(name, type);
        this.attack = 100;
        this.distance = null;
        this.stoned = false;
    }
}