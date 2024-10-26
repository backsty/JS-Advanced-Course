import Deamon from "../daemon.js";

test.each([
    [100, 1, true, 100],
    [100, 2, true, 85],
    [100, 1, false, 100],
    [100, 2, false, 90],
])('test', (attack, distance, stoned, expected) => {
    const deamon = new Deamon('John', 'Magician');
    deamon.attack = attack;
    deamon.distance = distance;
    deamon.stoned = stoned;
    expect(deamon.attack).toBe(expected);
});

test('Deamon stoned', () => {
    const deamon = new Deamon('Player', 'Deamon');
    deamon.stoned = false;
    expect(deamon.stoned).toBeFalsy();
});