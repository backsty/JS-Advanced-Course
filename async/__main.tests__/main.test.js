import GameSavingLoader from '../src/gameSavingLoader.js';

jest.mock('../src/reader.js', () => () => Promise.resolve(new Uint16Array()));
jest.mock('../src/parser.js', () => () => Promise.resolve('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));

describe('GameSavingLoader', () => {
    it('должен загрузить сохранение игры', async () => {
        try {
            const saving = await GameSavingLoader.load();
            expect(saving).toBeDefined();
            expect(saving.id).toBeGreaterThan(0);
            expect(typeof saving.created).toBe('number');
            expect(saving.userInfo).toBeDefined();
            console.log(saving);
        } catch (error) {
            console.log(error);
            expect(error).toBeNull();
        }
    });
});