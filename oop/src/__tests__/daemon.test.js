import Daemon from "../daemon.mjs";

describe('Daemon', () => {
    it('should create a new daemon with default properties', () => {
        const daemon = new Daemon('John');
        expect(daemon.name).toBe('John');
        expect(daemon.type).toBe('Daemon');
        expect(daemon.health).toBe(100);
        expect(daemon.level).toBe(1);
        expect(daemon.getAttack('Daemon')).toBe(10);
        expect(daemon.getDefence('Daemon')).toBe(40);
    });
});