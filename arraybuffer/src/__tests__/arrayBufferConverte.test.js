import ArrayBufferConverter, { getBuffer } from "../arrayBufferConverter";

describe("ArrayBufferConverter", () => {
    it("Тестируем метод load(). Если объекты совпадают - sucess", () => {
        const buffer = getBuffer();
        const arrayBufferConverter = new ArrayBufferConverter();
        arrayBufferConverter.load(buffer);
        expect(arrayBufferConverter.buffer).toBe(buffer);
    });

    it("Тестируем метод toString(). Если строки совпадают - sucess", () => {
        const buffer = getBuffer();
        const arrayBufferConverter = new ArrayBufferConverter();
        arrayBufferConverter.load(buffer);
        const receivedString = arrayBufferConverter.toString();
        const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
        expect(receivedString).toBe(expectedString);
    });
});