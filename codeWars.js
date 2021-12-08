// Задача про любовь
// function lovefunc(flower1, flower2) {
//     let saraResult
//     let jimmResult
//     let isLove
//     if (flower1 % 2 == 0) {
//         saraResult = true
//     }
//     if (flower2 % 2 == 0) {
//         jimmResult = true
//     }
//     if (saraResult === jimmResult) {
//         isLove = false
//     }   else {
//         isLove = true
//     }
//     return isLove
// }
//
// console.log(lovefunc(2, 5));


// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


// function createPhoneNumber(numbers) {
//     let string = ''
//     string += '('
//
//     for (let i = 0; i < 3; i++) {
//         string += numbers[i]
//     }
//     string += ') '
//
//     for (let i = 6; i < 9; i++) {
//         string += numbers[i - 3]
//     }
//     string += '-'
//
//     for (let i = 10; i < 14; i++) {
//         string += numbers[i - 4]
//     }
//
//     return string
// }
//
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// for (let i = 0; i < 3; i++) {
//     string += numbers[i]
// }
// string += ') '
//
// for (let i = 6; i < 9; i++) {
//     string += numbers[i - 3]
// }
// string += '-'
//
// for (let i = 10; i < 14; i++) {
//     string += numbers[i - 4]
// }


// function countSheeps(arrayOfSheep) {
//     let sheepNum = 0
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] === true) {
//             sheepNum++
//         }
//     }
//     return sheepNum
// }
//
// console.log(countSheeps([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]));


// function highAndLow(numbers){
//     let newString = ''
//     let max = -Infinity
//     let min = Infinity
//
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] !== ' ') {
//             newString = newString + numbers[i]
//         }
//     }
//     console.log(newString)
//     for (let i = 0; i < newString.length; i++) {
//         if (newString[i] > max) {
//             max = newString[i]
//         }
//     }
//     console.log(max)
// }
//
// highAndLow("1 9 3 4 -5"); // return "9 -5"


// function diffBig2(arr) {
//     let firstMax = 0
//     let secondMax = 0
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstMax) {
//             firstMax = arr[i]
//         }
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] > secondMax) & (arr[i] !== firstMax)) {
//             secondMax = arr[i]
//         }
//     }
//     return firstMax - secondMax
// }
//
// console.log(diffBig2([1, 10, 7, 4]));


// function highAndLow(numbers){
//     let max = -Infinity
//     let min = Infinity
//     let str = numbers.split(' ')
//     let result
//
//     for (let i = 0; i < str.length; i++) {
//         if (Number(str[i]) > max) {
//             max = str[i]
//         }
//         if (parseInt(str[i], 10) < min) {
//             min = str[i]
//         }
//     }
//     result = `${max} ${min}`
//     return result
// }
//
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


// const obj = {
//     name: 'David',
//     age: 24,
//     bd: 1994,
// }
// const obj1 = {}
//
// let ar = Object.values(obj)
// console.log(ar)
//
// ar = Object.entries(obj)
// console.log(ar)
//
// ar.map((element, key) => {
//     obj1[element[0]] = element[1]
// })
// console.log(obj1)


// function pol(ar) {
//     const obj = {}
//
//     ar.map((element, key) => {
//         if (key % 2 == 0) {
//             obj[element] = ar[key + 1]
//         }
//     })
//     return obj
// }
//
// console.log(pol(['first', 'second', 'third', 'fourth']));


// const ava = (obj) => Object.entries(obj)
//
//
// console.log(ava({
//     name: 'David',
//     age: 24,
//     bd: 1994,
// }));

// const sortWord = (str) => str.split('').sort((a, b) => {
//     if (a < b) {
//         return -1
//     }   else if (a > b) {
//         return 1
//     }
//     return 0
// }).join('')
//
//
// const sortStr = (str) => {
//     const ar = str.split(' ')
//     return ar.sort((a, b) => a.length - b.length).map(word => sortWord(word))
//
// }
// console.log(sortStr('some words may be hereee'));



// const culcPhone = (phoneNum) => phoneNum.replace(/\D/g, '').split('').reduce((a, b) => Number(a) + Number(b))
// console.log(culcPhone('+7(985)334-99-62'));


// HW:
//     Написать функцию, принимающую два аргумента, массив чисел и одно число.
//     Внутри функции вернуть массив, из элементов, которые больше этого числа в обратном порядке(!).
//     Реализовать логику только с помощью методов высшего порядка

// const reverseFunc = (ar, num) => ar.filter(ar => ar > num).reverse()
// console.log(reverseFunc([10, 8, 6, 4, 2, 0], 4));



// Написать функцию, принимающую два аргумента, массив чисел и одно число (B).
//     Внутри функции вернуть сумму элементов массива, которые меньше данного числа (B)
// Реализовать логику только с помощью методов высшего порядка

// const sumElements = (ar, B) => ar.filter(ar => ar < B).reduce((a, b) => a + b)
// console.log(sumElements([10, 8, 6, 4, 2, 0], 4));


    // Написать функцию, принимающую два аргумента, массив чисел и массив строк одинаковой длины.
    // Внутри функции вернуть объект, в котором каждый i элемент массива чисел является значением
    // ключа каждого элемента массива строк


// const objChange = (ar, arString) => ar.map((num, key) => ({[num] : arString[key]}))
//     .reduce((result, obj) => ({...result, ...obj}))
//
//
// console.log(objChange([1, 2, 3, 4], ['строка1', 'строка2', 'строка3', 'строка4']));