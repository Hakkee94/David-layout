'use strict'
import './style.scss'
import {viewCardProducts, viewProducts, showBtn, clearInput, clearCard, newProductBtn, addToCartBtn, NewNameProduct, clearCardBtn, newProductName} from "./view";
import {prodList, addItem, addToCard, cardList} from "./model";

NewNameProduct.addEventListener('input', showBtn)
newProductBtn.addEventListener('click', () => addItem(prodList, newProductName, viewProducts))
newProductBtn.addEventListener('click', clearInput)

addToCartBtn.addEventListener('click', () => addToCard(cardList, prodList, viewCardProducts))
clearCardBtn.addEventListener('click', clearCard)




