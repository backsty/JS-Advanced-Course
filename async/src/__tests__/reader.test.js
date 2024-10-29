import read from '../reader.js';

describe('reader', () => {
    it('should return ArrayBuffer with correct data', () => {
        const buffer = read();
        const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
        expect(buffer.byteLength).toBe(data.length * 2);
        expect(new Uint16Array(buffer)).toEqual(new Uint16Array(data.split('').map(c => c.charCodeAt(0))));
    });
});