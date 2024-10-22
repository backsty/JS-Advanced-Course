export default class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music',  'trance'],
            ['difficulty', 'easy'],
        ]);

        this.userSettings = new Map();

        this.validSettings = {
            theme: ['dark', 'light', 'gray'],
            music: ['trance', 'pop', 'rock', 'chillout', 'off'],
            difficulty: ['easy', 'normal', 'hard', 'nightmare'],
        }
    }

    
    setSettings(key, value) {
        if (this.validSettings[key] && this.validSettings[key].includes(value)) {
            this.userSettings.set(key, value);
        } else {
            throw new Error('Недопустимые параметры для настройки');
        }
    }

    get settings() {
        const mergedSettings = new Map(this.defaultSettings);
        for (const [key, value] of this.userSettings) {
            mergedSettings.set(key, value);
        }
        return mergedSettings;
    }
}