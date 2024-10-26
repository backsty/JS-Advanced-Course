import Magician from './src/magician.js';
import Daemon from './src/daemon.js';
import Character from './src/character.js';
import ArrayBufferConverter from './src/arrayBufferConverter.js';

const magician = new Magician('Magician', 100, 2);
console.log(magician.attack); // 90

const daemon = new Daemon('Daemon', 100, 3);
console.log(daemon.attack); // 80

const character = new Character('Character', 100, 2);
console.log(character.attack); // 90

const arrayBufferConverter = new ArrayBufferConverter();
arrayBufferConverter.load(getBuffer());
console.log(arrayBufferConverter.toString());