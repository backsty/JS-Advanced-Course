import json from '../parser.js';

describe('parser', () => {
    it('should convert Uint16Array to string', () => {
        const data = new Uint16Array([72, 101, 108, 108, 111]);
        expect(json(data)).toBe('Hello');
    });

    it('should throw error if input is not Uint16Array', () => {
        expect(() => json('Hello')).toThrowError('Некорректные данные');
    });
});