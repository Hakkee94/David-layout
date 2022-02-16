'use strict'

export const newProductBtn = document.querySelector('.addNewBtn')
export const NewNameProduct = document.querySelector('#create-new-container .add-product-input')
const productsList = document.querySelector('.products-list > div')
const countItems = document.querySelector('#countItems')
const totalItems = document.querySelector('#totalItems')
export const addToCartBtn = document.querySelector('.add-to-cart-btn')
const cartList = document.querySelector('.cart-list > div')
export const clearCardBtn = document.querySelector('.clear-cart')
const addedItems = document.querySelector('.added-items')
export const newProductName = document.querySelector('#create-new-container .add-product-input')

export const viewProducts = (array, handleChangeCountProduct) => {
    productsList.innerHTML = ''
    NewNameProduct.value = ''
    newProductBtn.setAttribute('disabled', 'true')
    array.forEach((product) => {
        const productElement = document.createElement('div')
        const productName = document.createElement('span')
        productName.setAttribute('class', 'product-name')
        const productInput = document.createElement('input')
        productInput.setAttribute('class', 'item-count')
        productName.innerText = product.name
        productInput.setAttribute('type', 'number')
        productInput.value = product.count
        productInput.addEventListener('input', (event) => handleChangeCountProduct(product, event.target.value))
        productElement.append(productName, productInput)
        productsList.prepend(productElement)
    })
}

export const clearInput = () => {
    NewNameProduct.textContent = ''
}

export const showBtn = (event) => {
    if (event.target.value) {
        newProductBtn.removeAttribute('disabled')
    } else {
        newProductBtn.setAttribute('disabled', 'true')
    }
}

export const viewCardProducts = (array, count, allItems) => {
    cartList.innerHTML = ''
    array.forEach((product) => {
        const productElement = document.createElement('div')
        const productName = document.createElement('span')
        const productInput = document.createElement('input')
        productName.innerText = product.name
        productInput.value = product.count
        productElement.append(productName, productInput)
        cartList.prepend(productElement)
    })
    countItems.innerText = count
    totalItems.innerText = allItems
    console.log(allItems)
}

export const clearCard = () => {
    addedItems.innerHTML = ''
    countItems.innerText = 0
    totalItems.innerText = 0
    console.log(addedItems)
}