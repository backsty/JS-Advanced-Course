import canIterate from '../canIterate.js';


describe('canIterate', () => {
    it('должен возвращать true для Map', () => {
        expect(canIterate(new Map())).toBe(true);
    });

    it('должен возвращать true для Set', () => {
        expect(canIterate(new Set())).toBe(true);
    });

    it('должен возвращать false для null', () => {
        expect(canIterate(null)).toBe(false);
    });

    it('должен возвращать false для числа', () => {
        expect(canIterate(10)).toBe(false);
    });

    it('должен возвращать true для строки', () => {
        expect(canIterate("netology")).toBe(true);
    });

    it('должен возвращать true для массива', () => {
        expect(canIterate([1, 2, 3])).toBe(true);
    });

    it('должен возвращать true для объекта с методом Symbol.iterator', () => {
        const obj = {
            [Symbol.iterator]() {
                return {
                    next() {
                        return {
                            done: true,
                            value: undefined,
                        };
                    }
                }
            }
        };
        expect(canIterate(obj)).toBe(true);
    });
});