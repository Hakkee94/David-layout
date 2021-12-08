// alert('blablabla')

// const onload = () => document.querySelector('#text').innerHTML = 'Другой совсем текст'

// window.addEventListener('load', onload)
// document.addEventListener('DOMContentLoaded', onload)
// window.addEventListener('beforeunload', onload) Пока человек не ушел(покидает страницу)
// window.addEventListener('unload', onload) Когда человек уже закрыл страницу

const btn = document.querySelector('button')
const pic = document.querySelector('img')
const area = document.querySelector('textarea')
const field = document.querySelector('.field-data')
let values = ''


const getNewImage = () => {
    pic.setAttribute('class', 'notHidden')
}

const changeImage = () => {
    pic.setAttribute('src', 'img/client3.png')
}

const diplayText = (event) => {
    field.innerHTML = event.target.value
    event.target.value = ''
    }

pic.addEventListener('click', changeImage)
btn.addEventListener('click', getNewImage)
area.addEventListener('blur', diplayText)