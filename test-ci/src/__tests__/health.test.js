import { getHealthStatus } from "../health";

describe('getHealthStatus', () => {
    it('should return "healthy" for health > 50', () => {
        expect(getHealthStatus({ name: 'Маг',health: 60 })).toBe('healthy');
    });

    it('should return "wounded" for health >= 15 and <= 50', () => {
        expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
    });

    it('should return "critical" for health < 15', () => {
        expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
    });
});