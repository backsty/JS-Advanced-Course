import GameSavingLoader from '../gameSavingLoader.js';

jest.mock('../reader.js', () => () => Promise.resolve(new Uint16Array()));
jest.mock('../parser.js', () => () => Promise.resolve('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));

describe('GameSavingLoader', () => {
    it('should load game saving data', async () => {
        const result = await GameSavingLoader.load();
        expect(result).toEqual({
            id: 9,
            created: 1546300800,
            userInfo: {
                id: 1,
                name: 'Hitman',
                level: 10,
                points: 2000,
            },
        });
    });
});