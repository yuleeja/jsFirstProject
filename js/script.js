'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (
            personalMovieDB.count == '' ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            //numberOfFilms == null - если пользователь нажмет "отмена", isNaN(personalMovieDB.count) - проверяет, что переменная не число (т.е. по факту можно убрать унарный плюс, если пользователь введет строку - это будет true)
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),// метод trim() убирает возможность ввода пробелов
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) { //значение privat - false, !false = true
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
        personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase(); //i - 1, т.к. для пользователя цикл создан с 1, но в массиве первый элемент начинается с 0. Если убрать - 1, тогда в массиве будет 4 элемента, первый из которых  будет 'Empty'
            if (genres === '' || genres == null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
                personalMovieDB.genres.sort();
            }
        }
        
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i + 1} - ${item}`)
        });
    }
};

