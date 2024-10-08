import Magician from "../magician.mjs";

describe('Magician', () => {
    it('should create a new magician with default properties', () => {
        const magician = new Magician('John');
        expect(magician.name).toBe('John');
        expect(magician.type).toBe('Magician');
        expect(magician.health).toBe(100);
        expect(magician.level).toBe(1);
        expect(magician.getAttack('Magician')).toBe(10);
        expect(magician.getDefence('Magician')).toBe(40);
    });
});