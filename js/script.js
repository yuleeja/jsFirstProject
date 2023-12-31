'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (
        numberOfFilms == '' ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        //numberOfFilms == null - если пользователь нажмет "отмена", isNaN(numberOfFilms) - проверяет, что переменная не число (т.е. по факту можно убрать унарный плюс, если пользователь введет строку - это будет true)
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            //a.length длина строки а
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--; //если условие в if не выполнилось, тогда i-- возвращает нас на один шаг назад, т.е. еще 1 раз задаст вопросы
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) { //значение privat - false, !false = true
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); //i - 1, т.к. для пользователя цикл создан с 1, но в массиве первый элемент начинается с 0. Если убрать - 1, тогда в массиве будет 4 элемента, первый из которых  будет 'Empty'
    }
}

writeYourGenres();
