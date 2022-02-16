'use strict'
import './style.scss'
import {viewCardProducts, viewProducts, showBtn, clearInput, clearCard, newProductBtn, addToCartBtn, NewNameProduct, clearCardBtn, newProductName} from "./view";
import {prodList, addItem, addToCard, cardList} from "./model";

NewNameProduct && NewNameProduct.addEventListener('input', showBtn)
newProductBtn && newProductBtn.addEventListener('click', () => addItem(prodList, newProductName.value, viewProducts))
newProductBtn && newProductBtn.addEventListener('click', clearInput)

addToCartBtn && addToCartBtn.addEventListener('click', () => addToCard(cardList, prodList, viewCardProducts))
clearCardBtn && clearCardBtn.addEventListener('click', clearCard)




