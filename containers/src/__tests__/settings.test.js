import Settings from "../settings";

describe('Settings', () => {
    it('должен возвращать default', () => {
        const settings = new Settings();
        expect(settings.settings.get('theme')).toBe('dark');
        expect(settings.settings.get('music')).toBe('trance');
        expect(settings.settings.get('difficulty')).toBe('easy');
    });

    it('должен возвращать settings с учётом пользовательских изменений', () => {
        const settings = new Settings();
        settings.setSettings('theme', 'light');
        expect(settings.settings.get('theme')).toBe('light');
        expect(settings.settings.get('music')).toBe('trance');
        expect(settings.settings.get('difficulty')).toBe('easy');
    });

    it('должен генерировать ошибку при попытке установить недопустимое значение', () => {
        const settings = new Settings();
        expect(() => settings.setSettings('theme', 'invalid')).toThrowError('Недопустимые параметры для настройки');
    });
});