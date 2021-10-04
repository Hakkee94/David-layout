'use strict'

// Begin1. Дана сторона квадрата a. Найти его периметр P = 4·a

// let a = 5;
// let P = 4 * a;
// console.log(P);

// Begin2. Дана сторона квадрата a. Найти его площадь S

// const a = 5;
// const S = a * a;
// console.log(S);

// Begin3. Даны стороны прямоугольника a и b. Найти его площадь S = a·b, b периметр P = 2·(a + b)

// const a = 4;
// const  b = 3;
// const S = a * b;
// const P = 2 *(a + b);
// console.log(S, P);

// Begin4. Дан диаметр окружности d. Найти ее длину L = π·d. В качестве значения π использовать 3.14

// const p = 3.14;
// const d = 10;
// const L = p * d;
// console.log(L);

//Begin5. Дана длина ребра куба a. Найти объем куба V = a и площадь его поверхности S = 6·a

// const a = 10;
// const S = 6 * a;
// console.log(S);

//Begin6. Даны длины ребер a, b, c прямоугольного параллелепипеда.
// Найти его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c)

// const a = 2;
// const b = 4;
// const c = 10;
// const V = a * b * c;
// const S = 2 * (a * b + b * c + a * c);
// console.log(V, S);

// Integer1.
//     Дано расстояние L в сантиметрах.
//     Используя операцию деления нацело, найти количество полных метров в нем (1 метр = 100 см).

// const L = 30;
// console.log(L / 100);

// Integer4 .
//     Даны целые положительные числа A и B (A > B). На отрезке длины A размещено максимально
// возможное количество отрезков длины B (без наложений).
// Используя операцию деления нацело, найти количество отрезков B, размещенных на отрезке A.

// const A = 10;
// const B = 5;
// console.log(A / B);

// Integer5 .
//     Даны целые положительные числа A и B (A > B). На отрезке длины A размещено максимально возможное
// количество отрезков длины B (без наложений).
// Используя операцию взятия остатка от деления нацело, найти длину незанятой части отрезка A.

// const A = 10;
// const B = 5;
// console.log(B / A);

// Integer6 . ???
//     Дано двузначное число. Вывести вначале его левую цифру (десятки), а затем — его правую цифру (единицы).
//     Для нахождения десятков
// использовать операцию деления нацело, для нахождения единиц — опeрацию взятия остатка от деления.

// const number = 32;
// console.log(number[0]);
// console.log(number[1]);

// Integer19 .
//     С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.

// let seconds = 1;
// let minutes = 60 * seconds;
// let hours = 60 * minutes;


// let N = 46 * minutes;
// console.log(N);

// Integer20
// С начала суток прошло N секунд (N — целое). Найти количество полных часов, прошедших с начала суток.


// let seconds = 1;
// let minutes = 60 * seconds;
// let hours = 60 * minutes;
//
// let N = 50 * minutes;
//
// console.log(N/60/60);
// console.log(N);


// Integer21
// С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последней минуты.

// let seconds = 1;
// let minutes = 60 * seconds;
// let hours = 60 * minutes;
// let N = 50 * minutes;
// console.log(N/60/60);


// let seconds = 1;
// let minutes = 60 * seconds;
// let hours = 60 * minutes;
// let N = 50 * minutes + 14;
//
// // 00:50:14
//
// console.log(N);
// console.log(N - (50 * minutes));

// Integer22
// С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последнего часа.

// // 02:40:14

// const seconds = 1;
// const minutes = seconds * 60;
// const hours = minutes * 60;
//
//
//
// const N = (2 * hours) + (40 * minutes) + (14 * seconds);
//
// console.log(N - (2 * hours));


// Integer23
// С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала последнего часа.

// const seconds = 1;
// const minutes = seconds * 60;
// const hours = minutes * 60;
//
// const N = (2 * hours) + (40 * minutes) + (14 * seconds);
//
// console.log(N);
//
// console.log((N - (2 * hours)) / 60);
//


// Boolean1
// Дано целое число A. Проверить истинность высказывания: «Число A является положительным».

// let A = -28;
// if (A > 0) {
//     console.log(true)
// } else if (A < 0) {
//     console.log(false)
// }

// Boolean2
// Дано целое число A. Проверить истинность высказывания: «Число A является нечетным».

// let A = 41;
// if (A % 2 == 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Boolean4
// Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3»

// const A = 10;
// const B = 4;
//
// if ((A > 2 && B <= 3)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Boolean7
// Даны три целых числа: A, B, C. Проверить истинность высказывания: «Число B находится между числами A и C».

// const A = 5;
// const B = 11;
// const C = 20;
//
// if ((B > A && B < C)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Boolean8
// Даны два целых числа: A, B. Проверить истинность высказывания: «Каждое из чисел A и B нечетное».

// const A = 5;
// const B = 11;
//
// if ((A % 2 == 0 && B % 2 == 0)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Boolean9
// Даны два целых числа: A, B. Проверить истинность высказывания: «Хотя бы одно из чисел A и B нечетное».

// const A = 3;
// const B = 2;
//
// if ((A % 2 == 0 || B % 2 == 0)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Boolean12
// Даны три целых числа: A, B, C. Проверить истинность высказывания: «Каждое из чисел A, B, C положительное».

// const A = 3;
// const B = -2;
// const C = 10;
//
// if ((A > 0 && B > 0 && C > 0)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Boolean10
// Даны два целых числа: A, B. Проверить истинность высказывания: «Ровно одно из чисел A и B нечетное».

// const A = 2;
// const B = 11;
//
// if ((A % 2 == 0) && (B % 2 !== 0)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Boolean13
// Даны три целых числа: A, B, C. Проверить истинность высказывания: «Хотя бы одно из чисел A, B, C положительное».

// const A = 2;
// const B = -1;
// const C = -12;
//
// if ((A > 0 || B > 0 || C > 0)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Boolean25
// Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y)
// лежит во второй координатной четверти».


// const x = 10;
// const y = 10;

// if (x < 0 && y > 0) {
//     console.log(true)
// }   else {
//     console.log(false)
// }

// Boolean26
// if (x < 0 & y < 0) {
//     console.log(true)
// }   else {
//     console.log(false);
// }

// Boolean27
// if ((x < 0 && y > 0) || (x < 0 && y < 0)) {
//     console.log(true)
// }   else    {
//     console.log(false);
// }

// Boolean28
// if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
//     console.log(true)
// }   else {
//     console.log(false)
// }


// If17.
//     Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию или убыванию,
//     то удвоить их; в противном случае заменить значение каждой переменной на противоположное.
//     Вывести новые значения переменных A, B, C.

// let A = 15;
// let B = 10;
// let C = 20;
//
//
// if ((B > A && C > B) || (A > B && B > C)) {
//     A *= 2;
//     B *= 2;
//     C *= 2;
//     console.log(A, B, C)
// }   else {
//     A = A * -1;
//     B = B * -1;
//     C = C * -1;
//     console.log(A, B, C)
// }

// If18.
//     Даны три целых числа, одно из которых отлично от двух других, равных между собой.
//     Определить порядковый номер числа, отличного от остальных.

// let a = 5;
// let b = 5;
// let c = 10;
//
//
// if (a === b) {
//     console.log('Третье число')
// } else if (b === c) {
//     console.log('Первое число')
// } else if (a === c) {
//     console.log('Второе число')
// }


// If19.
// Даны четыре целых числа, одно из которых отлично от трех других, равных между собой.
// Определить порядковый номер числа, отличного от остальных.

// let a = 10;
// let b = 5;
// let c = 5;
// let d = 5;
//
// if ((a === b && b === c)) {
//     console.log('Четвертое число')
// } else if ((a === b & b === d)) {
//     console.log('Третье число')
// } else if ((a === c & c === d)) {
//     console.log('Второе число')
// } else if ((b === c & c === d)) {
//     console.log('Первое число')
// }


// Begin11
// Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.

// let a = 10;
// let b = 15;

// console.log(a + b, a - b, a * b);


// Begin14
// Дана длина L окружности. Найти ее радиус R и площадь S круга, ограниченного этой окружностью,
//     учитывая, что L = 2πR, S = π*R^2 . В качестве значения π использовать 3.14.

// let L = 10;
// let p = 3.14;
// let R = (2 * p) / L
// let S = p * Math.pow(R, 2)
// console.log(S)
// console.log(R)

// Integer8 (Не сделал)
// Дано двузначное число. Вывести число, полученное при перестановке цифр исходного числа.
// let a = 21;


// Boolean5
// Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A ≥ 0 или B < −2».

// let A = 0;
// let B = 3;
//
// if ((A >= 0 || B < -2)) {
//     console.log(true)
// } else {
//     false
// }


// if4
// Даны три целых числа. Найти количество положительных чисел в исходном наборе.

// let a = 3
// let b = 1
// let c = 4
// let positiveNumbers = 0;
//
// if (a > 0) {
//     positiveNumbers++
// } if (b > 0) {
//     positiveNumbers++
// } if (c > 0) {
//     positiveNumbers++
// }
//
// console.log(positiveNumbers)

// Integer30
// Дан номер некоторого года (целое положительное число). Определить соответствующий ему номер
// столетия, учитывая, что, к примеру, началом 20 столетия был 1901 год.

// let someYear = 1994
// let centuary = Math.floor(someYear/100) + 1
// console.log(centuary)

// Boolean31
// Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника.
//     Проверить истинность высказывания: «Треугольник со сторонами a, b, c является равнобедренным».

// let a = 10
// let b = 10
// let c = 10
//
// if (a === b && b === c) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Boolean33
// Даны целые числа a, b, c. Проверить истинность высказывания: «Существует треугольник со сторонами a, b, c».


// if20 (не сделал) Сделать самому
// На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних точек (B или C)
// расположена ближе к A, и вывести эту точку и ее расстояние от точки A.

// let A = 15
// let B = 8
// let C = 10
//
// if ((A - B) < (A - C)) {
//
// }

// if29
// Дано целое число. Вывести его строку-описание вида «отрицательное четное число»,
// «нулевое число», «положительное нечетное число» и т. д.

// let a = 11;
//
// if ((a < 0 && a % 2 !== 0)) {
//     console.log('отрицательное четное число')
// } if (a === 0) {
//     console.log('нулевое число')
// } if (a > 0 && a % 2 !== 0) {
//     console.log('положительное нечетное число')
// }

// for17
// Дано вещественное число A и целое число N (>0). Используя один цикл, найти сумму "1 + A + A^2 + A^3 + ... + A^N"

// let A = 2
// let N = 5
// let sum = 0
//
// for (let i = 0; i <= N; i++) {
//     console.log(sum += Math.pow(A, i));
// }
// console.log(sum)

// For3
// Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа,
// расположенные между A и B (не включая числа A и B), а также количество N этих чисел.

// let A = 1
// let B = 10
// let count = 1;
//
// for (let i = 10; i > A; i--) {
//     console.log(count++)
// }

// For7
// Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.

// let A = 1
// let B = 10
// let sum = 0
//
// for (let i = 0; i <= B; i++) {
//     sum += i
// }
// console.log(sum)


// Дано вещественное число A и целое число N (>0).
// Используя один цикл, вывести все степени числа A от 1 до N.

// let A = 5
// let N = 7
//
// for (let i = 1; i <= N; i++) {
//     console.log(Math.pow(A, i))
// }


// For37  ???
// Дано целое число N (> 0). Найти сумму " 1^1 + 2^2 + ... +N^N "
//
// let N = 2
// let sum = 0
//
// for (let i = 1; i <= N ; i++) {
//     sum += Math.pow(i, i)
// }
// console.log(sum)

// For37
// Дано целое число N (> 0). Найти сумму " 1^1 + 2^2 + ... +N^N "

// let N = 2
// let sum = 0
//
// for (let i = 1; i <= N ; i++) {
//     let pow = i
//     for (let j = 1; j < i; j++) {
//         pow *= i
//     }
//     sum += pow
// }
//
// console.log(sum)


// let pow = 2
//
// for (let i = 1; i <= 8; i++) {
//     pow *= 2
// }
//
// console.log(pow)


// base JS 4 Arrays.md

// Дан массив A размера N и целое число K (1 ≤ K ≤ N).
// Преобразовать массив, увеличив каждый его элемент на исходное значение элемента A[K]

// let A = []
// let N = Math.floor(Math.random() * 60)
// let K = Math.floor(Math.random() * N)
//
// for (let i = 0; i < N; i++) {
//     A[i] = Math.floor(Math.random() * 10)
// }
//
// console.log(A, A[K])
// const newArr = A.map(element => element = element + A[K])
// console.log(newArr)


// Дан целочисленный массив размера N. Увеличить все четные числа, содержащиеся в массиве,
//     на исходное значение первого четного числа.
//     Если четные числа в массиве отсутствуют, то оставить массив без изменений.

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let N = 7
// arr.length = N
// let sum = 0
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         sum = arr[i]
//         break
//     }
// }
//
// console.log(sum)
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arr[i] += sum
//     }
// }
//
// console.log(arr)


// Дан целочисленный массив размера N. Вывести все содержащиеся в данном массиве
// четные числа в порядке убывания их индексов, а также их количество.

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let N = 7
// let posNum = 0
// let posArr = []
//
// arr.forEach(element => {
//     if (element % 2 == 0) {
//         posArr.push(element)
//         posNum++
//     }
// })
//
// console.log(posNum)
// console.log(posArr.reverse())


// Дан массив ненулевых целых чисел размера N. Проверить, образуют ли его элементы число фибоначи.
// (Число фибоначи - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181)

// let arr = [89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
// let isFib = false
//
//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] === arr[i-1] + arr[i-2]) {
//             isFib = true
//         } else {
//             isFib = false
//             break
//         }
//     }
//
// console.log(isFib)


// Сформировать массив длинной N. Проверить чередуются ли в нем четные и нечетные числа

// let arr = [1, 2, 3, 4, 5, 6]
// let N = 7
// let isTemp = arr[0] % 2 === 0
// let firstTemp = isTemp
//
//     for (let i = 0; i < arr.length; i++) {
//         let mod = firstTemp ? arr[i] % 2 == 0 : arr[i] % 2 !== 0
//         if (isTemp === mod) {
//             isTemp = !isTemp
//
//         } else {
//             console.log(false)
//         }
//     }


// Сформировать массив длинной N. Проверить чередуются ли в нем отрицательные и положительные числа.

// let arr = [1, -1, 2, -3, 5, -8, 13]
// let isFirstPos = arr[0] > 0
//
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < 0 && arr[i + 1] > 0 || (arr[i] > 0 && arr[i + 1] < 0)) {
//             console.log(true)
//         } else console.log(false)
//     }


// Дан массив A размера N. Найти минимальный элемент из его
// элементов с четными номерами (с четным индексами)
//
// let arr = [1, 3, 18, 3, 5, 8, 13]
// let N = 7
// let evenArr = []
//
// arr.map((element,key) => {
//     if (key % 2 == 0) {
//         evenArr.push(element)
//     }
// })
//
// console.log(evenArr)
// console.log(Math.min())

// Сформировать объект формата {a: 1, b: 2, c: 3, d: 4...}

// let obj = {}
// let n = 4
//
// let asciiString = 'abcd'
//
// for (let i = 0; i < n; i++) {
//     obj[asciiString[i]] = i
// }
//
// console.log(obj)


// дан массив объектов [{name: "vasya", age: 33}, {name: "petya", age: 22}, {name: "Sacha": 23},
// {name: "kolya": age: 46}] 
// Сформировать новый массив объектов из объектов, у которых age < 30

let arrObj = [
    {name: 'Vasya', age: 33},
    {name: 'Petya', age: 22},
    {name: 'Sasha', age: 23},
    {name: 'Kolya', age: 46}
]

let newAr = []

arrObj.forEach(item => {
    for (let i = 0; i < arrObj.length; i++) {
        if (arrObj[i]["age"] > 30) {
            newAr.push(item)
        }
    }
})

console.log(newAr)



// let arr = [1, 3, 18, 3, 5, 8, 13]
// let N = 7
// let evenArr = []
//
// arr.map((element,key) => {
//     if (key % 2 == 0) {
//         evenArr.push(element)
//     }
// })


// Дан массив формата ['a','v','w','u','q','p','i'], перевести его в объект
// формата {a: 0, v:1, w:2,u:3, q:4, p:5, i:6}

// let ar = ['a','v','w','u','q','p','i']
// let obj = {}
//
// for (let i = 0; i < ar.length; i++) {
//     obj[ar[i]] = i
//
// }
//
// console.log(obj)
