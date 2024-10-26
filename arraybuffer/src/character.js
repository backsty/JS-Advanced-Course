export default class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.distance = 100;
        this.attack = null;
        this._stoned = false;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    set attack(value) {
        this._attack = value;
    }

    get attack() {
        if (this._attack === null || this._attack === undefined) {
            return null;
        }
        let attack = this._attack * (1 - (this.distance - 1) * 0.1);
        if (this._stoned) {
            attack -= Math.log2(this.distance) * 5;
        }
        return attack;
    }
}