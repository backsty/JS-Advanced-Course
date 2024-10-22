import Team from '../team.js';


describe("Team", () => {
    it("Дообавляем персонажа в команду", () => {
        const team = new Team();
        const character = { name : "Вася" };
        team.add(character);
        expect(team.member.has(character)).toBe(true);
    });

    it("Должен выводить ошибку при добавлении персонажа в команду", () => {
        const team = new Team();
        const character = { name : "Петя" };
        team.add(character);
        expect(() => {
            team.add(character);
        })
        .toThrowError(
            `Персонаж ${character.name} уже есть в команде`
        );
    });

    it("Дообавляем несколько персонажей в команду", () => {
        const team = new Team();
        const character1 = { name : "Коля" };
        const character2 = { name : "Дима" };
        team.addAll(character1, character2);
        expect(team.member.size).toBe(2);
        expect(team.member.has(character1)).toBe(true);
        expect(team.member.has(character2)).toBe(true);
    });

    it("Конвертируем Set в массив", () => {
        const team = new Team();
        const character1 = { name : "Коля" };
        const character2 = { name : "Дима" };
        team.addAll(character1, character2);
        const array = team.toArray();
        expect(array.length).toBe(2);
        expect(array[0]).toBe(character1);
        expect(array[1]).toBe(character2);
    });
});