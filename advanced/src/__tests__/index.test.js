import { orderByProps, getSpecials } from "../index.mjs";

describe('orderByProps', () => {
    it('should return an empty array for an empty object', () => {
        expect(orderByProps({}, [])).toEqual([]);
    });

    it('should return an array with one element for an object with one property', () => {
        expect(orderByProps({ a: 1 }, [])).toEqual([{ key: 'a', value: 1 }]);
    });

    it('should return an array with two elements for an object with two properties', () => {
        expect(orderByProps({ a: 1, b: 2 }, [])).toEqual([{ key: 'a', value: 1 }, { key: 'b', value: 2 }]);
    });

    it('should sort by the order array', () => {
        expect(orderByProps({ a: 1, b: 2 }, ['b', 'a'])).toEqual([{ key: 'b', value: 2 }, { key: 'a', value: 1 }]);
    });

    it('should sort by the alphabet for properties not in the order array', () => {
        expect(orderByProps({ a: 1, b: 2, c: 3 }, ['b'])).toEqual([{ key: 'b', value: 2 }, { key: 'a', value: 1 }, { key: 'c', value: 3 }]);
    });
});

describe('getSpecials', () => {
    it('should return an empty array for an empty special array', () => {
        expect(getSpecials({ special: [] }, [])).toEqual([]);
    });

    it('should return an array with one element for a special array with one element', () => {
        expect(getSpecials({ special: [{ id: 1, name: 'test', icon: 'http://...' }] })).toEqual([{ id: 1, name: 'test', description: 'Описание недоступно', icon: 'http://...' }]);
    });

    it('should return an array with two elements for a special array with two elements', () => {
        expect(getSpecials(
            { 
                special: [
                    { id: 1, name: 'test', icon: 'http://...' }, 
                    { id: 2, name: 'test2', description: 'test2 description', icon: 'http://...' }
                ] 
            }
        ))
        .toEqual([ 
            { id: 1, name: 'test', description: 'Описание недоступно', icon: 'http://...' },
            { id: 2, name: 'test2', description: 'test2 description', icon: 'http://...' }
        ]);
    });
});