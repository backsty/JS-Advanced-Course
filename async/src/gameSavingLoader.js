import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
    static async load() {
        const data = await read();
        const value = await json(data);
        return JSON.parse(value);
    }
}



// export default class GameSavingLoader {
//     static async load() {
//         return read().then(json).then(data => JSON.parse(data));
//     }
// }