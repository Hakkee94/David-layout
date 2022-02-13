'use strict'

export let prodList = []
export let cardList = []

export const addItem = (array, name, renderElements) => {
    const count = 0
    const newProduct = {name, count}
    array.push(newProduct)
    renderElements(array, handleChangeCountProduct)
}

export const addToCard = (array, prodList, renderCard) => {
    let countElements = array.length
    prodList.map((product) => {
        if (product.count > 0) {
            array.map((cartProduct) => {
                if (cartProduct.name === product.name) {
                    cartProduct.count = Number(cartProduct.count) + Number(product.count)
                }
            })

            if (!array.find(f => f.name === product.name)) {
                const newItemCard = {name: product.name, count: product.count}
                console.log(newItemCard)
                countElements = array.push(newItemCard)
            }
        }

    })
    const reducer = (previousValue, product) => Number(previousValue) + Number(product.count)
    const allItems = array.reduce(reducer, 0)


    renderCard(array, countElements, allItems)
    console.log(countElements)
}

export const handleChangeCountProduct = (product, count) => {
    product.count = count
}