import Movie from './src/movie';


const movie1 = new Movie('Мстители IMAX', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин / 02:17', 8.1, 500, 'Джосс Уидон', ['Роберт Дауни мл.', 'Крис Эванс', 'Марк Руффало']);

console.log(movie1.getInfo());

const cart = [];
cart.push(movie1);

console.log(cart);