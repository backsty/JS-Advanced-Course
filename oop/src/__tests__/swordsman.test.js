import Swordsman from "../swordsman.mjs";

describe('Swordsman', () => {
    it('should create a new bowman with default properties', () => {
        const swordsman = new Swordsman('John');
        expect(swordsman.name).toBe('John');
        expect(swordsman.type).toBe('Swordsman');
        expect(swordsman.health).toBe(100);
        expect(swordsman.level).toBe(1);
        expect(swordsman.getAttack('Swordsman')).toBe(40);
        expect(swordsman.getDefence('Swordsman')).toBe(10); // Update this line
    });
});