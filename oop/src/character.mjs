export default class Character {
    constructor(name, type) {
        this.name = this.validateName(name);
        this.type = this.validateType(type);
        this.health = 100;
        this.level = 1;
        this.attack = this.getAttack(type);
        this.defence = this.getDefence(type);
    }

    validateName(name) {
        if (typeof name != 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Некорректное имя');
        }
        return name;
    }

    validateType(type) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!types.includes(type)) {
            throw new Error('Некорректный тип персонажа');
        }
        return type;
    }

    getAttack(type) {
        const attacks = {
            Bowman: 25,
            Swordsman: 40,
            Magician: 10,
            Daemon: 10,
            Undead: 25,
            Zombie: 40,
        };
        return attacks[this.type];
    }

    getDefence() {
        const defences = {
            Bowman: 25,
            Swordsman: 10,
            Magician: 40,
            Daemon: 40,
            Undead: 25,
            Zombie: 10,
        };
        return defences[this.type];
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}