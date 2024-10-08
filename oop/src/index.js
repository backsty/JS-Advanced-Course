import Charact from './character.mjs';
import Bowman from './bowerman.mjs';
import Swordsman from './swordsman.mjs';
import Magician from './magician.mjs';
import Daemon from './daemon.mjs';
import Undead from './undead.mjs';
import Zombie from './zombie.mjs';

const bowman = new Bowman('John');
const swordsman = new Swordsman('Alice');
const magician = new Magician('Bob');
const daemon = new Daemon('Charlie');
const undead = new Undead('David');
const zombie = new Zombie('Eve');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);