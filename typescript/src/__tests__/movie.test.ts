import Movie from '../movie';


describe('Movie', () => {
    it('Создаёт новый фильм', () => {
        const movie = new Movie(
            'Название фильма',
            'Original Title',
            2022,
            'Россия',
            'Слоган',
            ['Комедия', 'Драма'],
            '1 час 30 минут',
            8.5,
            150,
            'Режиссер',
            ['Актер 1', 'Актер 2']
        );
        expect(movie.getInfo()).toContain('Название фильма');
        expect(movie.getInfo()).toContain('Original Title');
        expect(movie.getInfo()).toContain('2022');
        expect(movie.getInfo()).toContain('Россия');
        expect(movie.getInfo()).toContain('Слоган');
        expect(movie.getInfo()).toContain('Комедия, Драма');
        expect(movie.getInfo()).toContain('1 час 30 минут');
        expect(movie.getInfo()).toContain('8.5');
        expect(movie.getInfo()).toContain('150');
        expect(movie.getInfo()).toContain('Режиссер');
        expect(movie.getInfo()).toContain('Актер 1, Актер 2');
    });

    it('Создаёт новый фильм', () => {
        const movie = new Movie(
            'Название фильма',
            'Original Title',
            2022,
            'Россия',
            'Слоган',
            ['Комедия', 'Драма'],
            '1 час 30 минут',
            8.5,
            150,
            'Режиссер',
            ['Актер 1', 'Актер 2']
        );
        const expectedInfo = `
            Фильм: Название фильма (Original Title) (2022) - Россия,
            Слоган: Слоган - Комедия, Драма,
            Время: 1 час 30 минут, Рейтинг: 8.5,
            Цена: 150 руб., 
            Режиссер: Режиссер,
            Актеры: Актер 1, Актер 2
        `;
        expect(movie.getInfo()).toBe(expectedInfo);
    });

    it('возвращает цену фильма', () => {
        const movie = new Movie(
            'Название фильма',
            'Original Title',
            2022,
            'Россия',
            'Слоган',
            ['Комедия', 'Драма'],
            '1 час 30 минут',
            8.5,
            150,
            'Режиссер',
            ['Актер 1', 'Актер 2']
        );
        expect(movie.getPrice()).toBe(150);
    });
});