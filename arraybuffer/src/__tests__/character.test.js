import Character from '../character.js';

describe('Character', () => {
    it('создаётся с заданными именем и типом', () => {
        const character = new Character('John', 'Character');
        expect(character.name).toBe('John');
        expect(character.type).toBe('Character');
    });

    it('начинает с расстоянием 100', () => {
        const character = new Character('John', 'Character');
        expect(character.distance).toBe(100);
    });

    it('начинает с атакой null', () => {
        const character = new Character('John', 'Character');
        expect(character.attack).toBeNull();
    });

    it('начинает не опьяненным', () => {
        const character = new Character('John', 'Character');
        expect(character.stoned).toBe(false);
    });

    it('может быть опьяненным', () => {
        const character = new Character('John', 'Character');
        character.stoned = true;
        expect(character.stoned).toBe(true);
    });

    it('атака рассчитывается правильно', () => {
        const character = new Character('John', 'Character');
        character.attack = 10;
        expect(character.attack).toBe(10 * (1 - (100 - 1) * 0.1));
    });

    it('атака рассчитывается правильно при опьянении', () => {
        const character = new Character('John', 'Character');
        character.attack = 10;
        character.stoned = true;
        expect(character.attack).toBe(10 * (1 - (100 - 1) * 0.1) - Math.log2(100) * 5);
    });
});