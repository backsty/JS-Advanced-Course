import Bowman from "../bowerman.mjs";

describe('Bowman', () => {
    it('should create a new bowman with default properties', () => {
        const bowman = new Bowman('John');
        expect(bowman.name).toBe('John');
        expect(bowman.type).toBe('Bowman');
        expect(bowman.health).toBe(100);
        expect(bowman.level).toBe(1);
        expect(bowman.getAttack('Bowman')).toBe(25);
        expect(bowman.getDefence('Bowman')).toBe(25);
    });
});