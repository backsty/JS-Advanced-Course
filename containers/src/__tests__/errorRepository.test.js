import ErrorRepository from "../errorRepository.js";

describe("ErrorRepository", () => {
    it('Должен возвращать текст ошибки по коду', () => {
        const errorRepository = new ErrorRepository();
        expect(errorRepository.translate(1)).toBe("Error 1");
    });

    it('Должен возвращать "Unknown error" при отсутствии кода', () => {
        const errorRepository = new ErrorRepository();
        expect(errorRepository.translate(4)).toBe("Unknown error");
    });
})