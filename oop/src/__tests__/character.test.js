import Character from "../character.mjs";

describe('Character', () => {
    it('should create a new character with default properties', () => {
        const character = new Character('John', 'Bowman');
        expect(character.name).toBe('John');
        expect(character.type).toBe('Bowman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
    });

    it('should throw an error if name is not a string', () => {
        expect(() => new Character(123)).toThrowError('Некорректное имя');
    });

    it('should throw an error if name is too short or too long', () => {
        expect(() => new Character('a')).toThrowError('Некорректное имя');
        expect(() => new Character('abcdefghijklmnopqrstuvwxyz')).toThrowError('Некорректное имя');
    });

    it('should set type property correctly', () => {
        const character = new Character('John', 'Bowman');
        expect(character.type).toBe('Bowman');
    });

    it('should throw an error if type is not a valid type', () => {
        expect(() => new Character('Jhon', "InvalidType")).toThrowError('Некорректный тип персонажа');
    });

    it('should calculate attack and defence correctly', () => {
        const character = new Character('John', 'Bowman');
        expect(character.attack).toBe(25);
        expect(character.defence).toBe(25);
    });
})