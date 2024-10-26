import Magician from "../Magician.js";

test.each([
    [100, 1, true, 100],
    [100, 2, true, 85],
    [100, 1, false, 100],
    [100, 2, false, 90],
])('test', (attack, distance, stoned, expected) => {
    const magician = new Magician('John', 'Magician');
    magician.attack = attack;
    magician.distance = distance;
    magician.stoned = stoned;
    expect(magician.attack).toBe(expected);
});

test('Magician stoned', () => {
    const magician = new Magician('Player', 'Magician');
    magician.stoned = false;
    expect(magician.stoned).toBeFalsy();
});