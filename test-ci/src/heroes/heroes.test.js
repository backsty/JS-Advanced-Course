import { heroes, sortHeroes } from './heroes';

describe('Sort heroes by health', () => {
    it('should sort heroes by health in descending order', () => {
        const sortedHeroes = [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ];

        expect(sortHeroes(heroes)).toEqual(sortedHeroes);
    });
});