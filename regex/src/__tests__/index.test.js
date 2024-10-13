import Validator from "../index.mjs";

describe("Validator", () => {
    it('должен возвращать true для корректного имени пользователя', () => {
        const validator = new Validator();
        expect(validator.validateUsername("John_Doe-")).toBe(true);
    });

    it('должен возвращать false для имени пользователя, начинающегося с цифры', () => {
        const validator = new Validator();
        expect(validator.validateUsername("123John")).toBe(false);
    });

    it('должен возвращать false для имени пользователя, содержащего три подряд идущие цифры', () => {
        const validator = new Validator();
        expect(validator.validateUsername("John111")).toBe(false);
    });

    it('должен возвращать true для корректного номера телефона', () => {
        const validator = new Validator();
        expect(validator.cleanPhoneNumber("8 (927) 000-00-00")).toBe("+79270000000");
    });

    it('должен возвращать true для номера телефона без скобок', () => {
        const validator = new Validator();
        expect(validator.cleanPhoneNumber("+7 960 000 00 00")).toBe("+79600000000");
    });

    it('должен возвращать true для номера телефона с кодом страны не РФ', () => {
        const validator = new Validator();
        expect(validator.cleanPhoneNumber("+86 000 000 0000")).toBe("+860000000000");
    });
});