const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    while (
      personalMovieDB.count === '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
  },
  rememberMyFilms: function () {
    for (i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '')
      const b = prompt('На сколько оцените его?', '')

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b
        console.log('done')
      } else {
        console.log('error')
        i--
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
      console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман')
    } else {
      console.log('Произошла ошибка')
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB)
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false
    } else {
      personalMovieDB.privat = true
    }
  },
  writeYourGenres: function () {
    for (i = 1; i <= 3; i++) {
      let genre = (personalMovieDB.genres[i - 1] = prompt(
        `Ваш любимый жанр под номером ${i}`
      ))
      if (genre === '' || genre === null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе')
        i--
      } else {
        personalMovieDB.genres[i - 1] = genre
      }
    }
    personalMovieDB.genres.forEach((item, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${item}`)
    })
  }
}
