export default class Movie {
    private title: string;
    private originalTitle: string; 
    private year: number;
    private country: string; 
    private slogan: string;
    private genres: string[]; 
    private duration: string; 
    private rating: number; 
    private price: number;
    private director: string; 
    private actors: string[];

    constructor(
        title: string, 
        originalTitle: string, 
        year: number, 
        country: string, 
        slogan: string, 
        genres: string[], 
        duration: string, 
        rating: number, 
        price: number, 
        director: string, 
        actors: string[]
    ) {
        this.title = title; 
        this.originalTitle = originalTitle; 
        this.year = year;
        this.country = country; 
        this.slogan = slogan;
        this.genres = genres; 
        this.duration = duration; 
        this.rating = rating; 
        this.price = price;
        this.director = director; 
        this.actors = actors;
    }

    public getInfo(): string {
        return `
            Фильм: ${this.title} (${this.originalTitle}) (${this.year}) - ${this.country},
            Слоган: ${this.slogan} - ${this.genres.join(', ')},
            Время: ${this.duration}, Рейтинг: ${this.rating},
            Цена: ${this.price} руб., 
            Режиссер: ${this.director},
            Актеры: ${this.actors.join(', ')}
        `;
    }

    public getPrice(): number {
        return this.price;
    }
}