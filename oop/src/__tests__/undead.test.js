import Undead from "../undead.mjs";

describe('Undead', () => {
    it('should create a new undead with default properties', () => {
        const undead = new Undead('John');
        expect(undead.name).toBe('John');
        expect(undead.type).toBe('Undead');
        expect(undead.health).toBe(100);
        expect(undead.level).toBe(1);
        expect(undead.getAttack('Undead')).toBe(25);
        expect(undead.getDefence('Undead')).toBe(25);
    });
});