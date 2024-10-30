import GameSavingLoader from './src/gameSavingLoader.js';

(async () => {
    try {
        const saving = await GameSavingLoader.load();
        console.log(saving);
    } catch (error) {
        console.log(error);
    }
})();




// try {
//     GameSavingLoader.load()
//         .then(saving => console.log(saving))
//         .catch(error => console.log(error));
// } catch (error) {
//     console.log(error);
// }