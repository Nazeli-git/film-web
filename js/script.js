/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// 1

const img = document.querySelectorAll(".promo__adv img");

img.forEach(item => item.remove())

// 2

const changeGenre= document.querySelector(".promo__genre");

changeGenre.textContent= "Драма"

// 3

const backImg = document.querySelector(".promo__bg");

backImg.style.backgroundImage="url(img/bg.jpg)"

// 4, 5

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const movieList= document.querySelector(".promo__interactive-list");

movieDB.movies.sort().forEach((movie, index)=>{
movieList.innerHTML +=`
   <li class="promo__interactive-item">
   ${index + 1}.
   ${movie}
        <div class="delete"></div>
   </li>`
})


