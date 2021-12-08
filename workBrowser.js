// document.querySelector('.tm-companies-rating')     // 1) Получить список лучших блогов
// document.querySelector('.tm-header__icon')     // 2) Получитть элемент логотипа
// document.getElementsByClassName('tm-article-snippet__title-link')[1].getElementsByTagName('span')[0]   // 3) получить заголовок второй статьи
// document.getElementsByClassName('tm-article-title tm-article-title_sidebar') // 5) Получить список заголовков популярных статей
//
//
//
// const bestBlogs = document.querySelector('.tm-companies-rating')
//
// HW:
//
// *)каждый функционал в отдельной функции

//     1) Добавить в список лучших блогов ещё одну позицию, которая идентична другим но со сторонним содержимым

// function addBlog(compRat) {
//     const a = document.createElement('a')
//     const div = document.createElement('div')
//     const span = document.createElement('span')
//     const span1 = document.createElement('span1')
//     div.prepend(span, span1)
//     a.prepend(div)
//     // const compRat = document.querySelector('.tm-companies-rating')
//     compRat.prepend(a)
//     // return compRat
// }
//
// addBlog(document.querySelector('.tm-companies-rating'))


// 2) Изменить текст заголовка второй статьи

// function changeText(newText) {
//     const secondTittle = document.getElementsByClassName('tm-article-snippet__title-link')[1].getElementsByTagName('span')[0]
//     secondTittle.innerText = newText
// }
// changeText('Другой текст')


// 3) добавить в начало списка популярных статей новую статью

// const pop = document.getElementsByClassName('tm-article-title')
// const h2 = document.createElement('h2')

// HW:
//     1) Поменять цвет фона самой верхней  на красный

// const element = document.querySelector('.tm-header')
// element.style.backgroundColor = 'red'

// 2) Удалить вторую шапку, которая начинается с пункта "моя лента"


// 3) Склонировать и продублировать описание первой статьи

// const listik = document.querySelector('.tm-articles-list__item')
// const cloneElem = listik.cloneNode(true)
// listik.append(cloneElem)


// HW:
//     Дана форма
// textInput, textarea, и две radio-button
//
// 1) Написать обработчик события для формы, который кликая на кнопку
// выводит в цикле все заполненные поля в всплывающем окне (alert)

// 2) и очистить поле после клика на button.
//
// HW2:
//     Дано текстовое поле, при вводе текста в это поле выводить текст в отдельный div
// (использовать событие input или change)
























