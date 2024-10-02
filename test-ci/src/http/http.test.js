import fetchData from './http.js';

jest.mock('./http.js', () => ({
    __esModule: true,
    default: jest.fn(() => Promise.reject(new Error('Mock error'))),
}));

describe('fetchData', () => {
    it('should throw an error', async () => {
        await expect(fetchData('https://example.com')).rejects.toThrowError('Mock error');
    });
});