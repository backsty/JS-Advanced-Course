import GameSavingLoader from './src/gameSavingLoader.js';

(async () => {
    try {
        const saving = await GameSavingLoader.load();
        console.log(saving);
    } catch (error) {
        console.log(error);
    }
})();