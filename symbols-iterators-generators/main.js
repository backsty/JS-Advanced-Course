import Team from './src/team.js';
import canIterate from './src/canIterate.js';

const team = new Team();

team.add({ name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 });
team.add({ name: 'Мечник', type: 'Swordsman', health: 60, level: 1, attack: 30, defence: 20 });

for (const member of team) {
    console.log(member.name);
}

console.log(canIterate(team));