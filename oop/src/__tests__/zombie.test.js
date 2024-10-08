import Zombie from "../zombie.mjs";

describe('Zombie', () => {
    it('should create a new zombie with default properties', () => {
        const zombie = new Zombie('John');
        expect(zombie.name).toBe('John');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.health).toBe(100);
        expect(zombie.level).toBe(1);
        expect(zombie.getAttack('Zombie')).toBe(40);
        expect(zombie.getDefence('Zombie')).toBe(10);
    });
});