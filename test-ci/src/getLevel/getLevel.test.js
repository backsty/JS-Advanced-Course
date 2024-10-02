import { getLevel } from './getLevel';
import http from '../http/http.js';

jest.mock('../http/http.js', () => ({
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ status: 'ok', level: 10 })),
}));


describe('getLevel', () => {
    it('should return error message when fetch data throws an error', async () => {
        http.mockImplementationOnce(() => Promise.resolve({ status: 'error' }));
        const userId = 1;
        const result = await getLevel(userId);
        expect(result).toBe('Информация об уровне временно недоступна');
    });

    it('should return level when response status is ok', async () => {
        http.mockImplementationOnce(() => Promise.resolve({ status: 'ok', level: 10 }));
        const userId = 1;
        const result = await getLevel(userId);
        expect(result).toBe('Ваш текущий уровень: 10');
    });
    
    it('should return error message when an error occurs', async () => {
        http.mockImplementationOnce(() => Promise.reject(new Error('Mock error')));
        const userId = 1;
        const result = await getLevel(userId);
        expect(result).toBe('Произошла ошибка при получении информации об уровне');
    });
});
