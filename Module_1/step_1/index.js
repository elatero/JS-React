// 1
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

//2
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

let question_one = prompt('Один из последних просмотренных фильмов?', '')
let question_two = prompt('На сколько оцените его?', '')
let question_three = prompt('Один из последних просмотренных фильмов?', '')
let question_four = prompt('На сколько оцените его?', '')

personalMovieDB.movies[question_one] = question_two
personalMovieDB.movies[question_three] = question_four

console.log(personalMovieDB)
