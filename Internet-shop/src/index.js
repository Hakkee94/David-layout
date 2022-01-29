'use strict'
import './style.css'


let items = 0
const newProductBtn = document.querySelector('.addNewBtn')
const NewNameProduct = document.querySelector('.add-product-input')
const productsList = document.querySelector('.products-list')
const inputProdName = document.querySelector('.add-product-input')

const addItem = () => {
    const newProd = document.createElement('div')
    const prodInput = document.createElement('input')
    const prodName = document.createElement('span')
    prodName.textContent = inputProdName.value
    newProd.append(prodInput)
    newProd.append(prodName)
    productsList.prepend(newProd)
    inputProdName.value = ''
}

newProductBtn.addEventListener('click', addItem)


const clearInput = () => {
    NewNameProduct.textContent = ''
}

newProductBtn.addEventListener('click', clearInput)

// if (NewNameProduct.textContent === ' ') {
//     newProductBtn.setAttribute('disabled', 'true')
// }   else {
//     newProductBtn.setAttribute('disabled', 'false')
// }