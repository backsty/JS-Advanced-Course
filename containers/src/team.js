export default class Team {
    constructor() {
        this.member = new Set();
    }

    add(character) {
        if (this.member.has(character)) {
            throw new Error(`Персонаж ${character.name} уже есть в команде`);
        }
        this.member.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => {
            if (!this.member.has(character)) {
                this.member.add(character);
            }
        });
    }

    toArray() {
        return Array.from(this.member);
    }
}