import Team from '../team.js';

describe('Team', () => {
    it('должен создавать новый экземпляр команды', () => {
        const team = new Team();
        expect(team).toBeInstanceOf(Team);
    });

    it('должен добавлять персонажей в команду', () => {
        const team = new Team();
        const character = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
        team.add(character);
        expect(team.members.size).toBe(1);
    });

    it('должен итерировать по персонажам в команде', () => {
        const team = new Team();
        const character1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
        const character2 = { name: 'Мечник', type: 'Swordsman', health: 60, level: 1, attack: 30, defence: 20 };
        team.add(character1);
        team.add(character2);
        const members = Array.from(team);
        expect(members).toEqual([character1, character2]);
    });
});