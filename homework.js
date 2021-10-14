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

// let arrObj = [
//     {name: 'Vasya', age: 33},
//     {name: 'Petya', age: 22},
//     {name: 'Sasha', age: 23},
//     {name: 'Kolya', age: 46},
// ]
//
//
// let newAr = []
//
// for (let i = 0; i < arrObj.length; i++) {
//     if (arrObj[i].age < 30) {
//         newAr.push(arrObj[i])
//     }
// }
//
// console.log(newAr)


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


// Дан массив объектов(учеников в классе)
// поменять score в объекте с минимальным значением на максимальное

// let pupils = [
//     {name: 'Vasya', age: 12, score: 4},
//     {name: 'Petya', age: 13, score: 3},
//     {name: 'Sasha', age: 12, score: 5},
//     {name: 'Kolya', age: 13, score: 6},
// ]
//
// let minScore = Infinity
// let maxScore = -Infinity
// let minItem
// let maxItem
//
// for (let i = 0; i < pupils.length; i++) {
//     if (pupils[i].score < minScore) {
//         minScore = pupils[i].score
//         minItem = i
//     }
//     if (pupils[i].score > maxScore) {
//         maxScore = pupils[i].score
//         maxItem = i
//     }
// }
//
// pupils[minItem].score = maxScore
// pupils[maxItem].score = minScore
//
//
// console.log(pupils)


// Дан объект координат, вида {a: 1,5, b: 3,6, c: 7,2, d: 8,2, e: 1,2}
// вычислить среднюю координату в заданном объекте


// let crdn = {a: 1.5, b: 3.6, c: 7.2, d: 8.2, e: 1.2}
// let sum = 0
// let average = 0
// let i = 0
//
// for (const crdnKey in crdn) {
//     console.log(sum += crdn[crdnKey])
//     i++
// }
//
// console.log(average = sum / i);


// Дан массив объектов [{a: 1, b: 3, c: 2},{a: 4, b: 3, c: 7},{a:2, b: 3, c: 5}]
// Продублировать объект, содержащий ее максимальный элемент


// let ar = [{a: 1, b: 3, c: 2}, {a: 4, b: 3, c: 7}, {a:2, b: 3, c: 5}]
//
// let max = 0
// let maxI = 0
//
// for (let i = 0; i < ar.length; i++) {
//     for (const arKey in ar[i]) {
//
//         if (ar[i][arKey] > max) {
//             max = ar[i][arKey]
//             maxI = i
//         }
//     }
// }
//
// console.log(ar.push(ar[maxI]));
// console.log(ar)

// HW:
//     1)  Дан объект вида
// {
//     name: "Sam",
//         surname: "Bones"
//     age: 20
// }
// Получить строку вида:
// //     This is mr Sam with Bones family, he is 2001 years burn

// let obj = {
//     name: "Sam",
//     surname: "Bones",
//     age: 20,
// }
//
// console.log(`This is mr ${obj["name"]} with ${obj['surname']} family, he is ${obj["age"]}01 years born`)
//


// 2) Дан массив объектов [{name: 'jack', age: 25}, {name: 'max', age: 22}, {name: 'Janne', age: 43}]
// Получить объект с минимальным полем age и удалить его из изначального массива

// let ar = [{name: 'Jack', age: 25}, {name: 'Max', age: 22}, {name: 'Bobby', age: 43}]
// let minAge = Infinity
// let minObj
//
// for (let i = 0; i < ar.length; i++) {
//     if (ar[i].age < minAge) {
//         minAge = ar[i].age
//         minObj = i
//     }
// }
//
// console.log(minObj)
// console.log(minAge)
// ar.splice(minObj, minObj)
// console.log(ar)

// Дан массив формата ['a','v','w','u','q','p','i'], перевести его в объект формата {a: 0, v:1, w:2,u:3, q:4, p:5, i:6}

// let ar = ['a','v','w','u','q','p','i']
// let obj = {}
//
// for (let i = 0; i < ar.length; i++) {
//     console.log(ar[i], i)
//     obj[ar[i]] = i
// }
//
// console.log(obj)

// let obj = {a: 0, v:1, w:2,u:3, q:4, p:5, i:6}
// let ar = []
//
// for (const key in obj) {
//     console.log(key)
//     ar[obj[key]] = key
// }
//
// console.log(ar)


// Дан массив объектов [{a: 5, b: 4, c:6},{a: 2, b: 1, c: 7},{a:2, b: 3, c: 5}]
// Получить объект с максимальной суммой значений и Сформировать массив из сумм отбъектов (a + b + c)

// let ar = [{a: 5, b: 4, c:6},{a: 2, b: 1, c: 7},{a:2, b: 3, c: 5}]
// let obj = {}
// let newAr = []
//
// function arrayIteration(arr) {
//     let newArr = []
//     let index = 0
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         let tempSum = objectIteration(arr[i])
//         if (tempSum > sum) {
//             sum = tempSum
//             index = i
//         }
//         newArr.push(tempSum)
//     }
//     return newArr
// }
//
// newAr = arrayIteration(ar)
// function objectIteration(obj) {
//     let tempSum = 0
//     for (const key in obj) {
//         tempSum += obj[key]
//     }
//     return tempSum
// }
//
// console.log(newAr)


// Есть массив, формата [4,8,2,8,6] получить из него массив, формата [[2,2],[4,4],[1,1],[4,4],[3,3]]

// let ar = [4, 8, 2, 8, 6]
//
// function split(arr) {
//     let newAr = []
//     let halfNum = 0
//     for (let i = 0; i < ar.length; i++) {
//         halfNum = arr[i] / 2
//         newAr.push([halfNum, halfNum])
//     }
//     return newAr
// }
//
// console.log(split(ar));
// console.log(newAr)
// console.log(split(ar));


// Есть массив, формата [2,3,1,4,2] получить из него массив, формата [[1,2],[1,2,3],[1],[1,2,3,4],[1,2]]


// let ar = [4, 3, 3, 4, 5, 1]
// let newAr = []
// let testAr = []
//
// for (let i = 0; i < ar.length; i++) {
//     let testAr = []
//     for (let j = 1; j <= ar[i]; j++) {
//         testAr.push(j)
//     }
//     newAr.push(testAr)
// }
//
// console.log(newAr)


// console.log(testAr)
// console.log(newAr)


// Есть массив, формата [4,8,2,8,6] получить из него объект, формата { '2':2, '4':4, '1':1, '4':4, '3':3} (Не до конца)

// let ar = [4,8,2,8,6]
// let obj = {}
//
//
//
// for (let i = 0; i < ar.length; i++) {
//     let halfSum = 0
//     halfSum = ar[i] / 2
//     obj[halfSum] = halfSum
//
// }
//
// console.log(obj)


// Найти в данном массиве объект title с самым длинным normalized_job_title и поменять
// местами объекты массива первый с последним
//
//     let hugeArr = [
//     {
//         "uuid": "26bc4486dfd0f60b3bb0d8d64e001800",
//         "title": "1st Grade Teacher",
//         "normalized_job_title": "1st grade teacher",
//         "parent_uuid": "51cc95467c1844c7dc1d923265c023b2"
//     },
//         {
//             "uuid": "9be6e14491305132c175cb1781a3356c",
//             "title": "1st Pressman",
//             "normalized_job_title": "1st pressman",
//             "parent_uuid": "96f1cf15fe5880d8660c70f0756944ab"
//         },
//         {
//             "uuid": "d38d16bab3f9f25ae34ae3e2aad254d4",
//             "title": "1st Pressman On Web Press",
//             "normalized_job_title": "1st pressman on web press",
//             "parent_uuid": "96f1cf15fe5880d8660c70f0756944ab"
//         },
//         {
//             "uuid": "8576a78b5c1cae3a567ca7fd34500357",
//             "title": "21 Dealer",
//             "normalized_job_title": "21 dealer",
//             "parent_uuid": "4be080220c824dcb435d59ebf1c3ce80"
//         },
//         {
//             "uuid": "a59278d7f653db37e54a270345a91a05",
//             "title": "2nd Grade Teacher",
//             "normalized_job_title": "2nd grade teacher",
//             "parent_uuid": "51cc95467c1844c7dc1d923265c023b2"
//         },
//         {
//             "uuid": "9c631442c4966cd3e5a9e52fc70aff1c",
//             "title": "2nd Pressman",
//             "normalized_job_title": "2nd pressman",
//             "parent_uuid": "96f1cf15fe5880d8660c70f0756944ab"
//         },
//         {
//             "uuid": "f5a2151d370ebca7b49778e036a287e8",
//             "title": "2 Year Olds Preschool Teacher",
//             "normalized_job_title": "2 year olds preschool teacher",
//             "parent_uuid": "d78b3ba8b749686d739480ee77f9e219"
//         },
//         {
//             "uuid": "af2e31c2c64ae223b06eb7f0cbf59a98",
//             "title": "3D Animator",
//             "normalized_job_title": "3d animator",
//             "parent_uuid": "caa551520f21c7c220716a8f82806246"
//         },
//         {
//             "uuid": "ac029293b0ea43f168b004c4f04fca31",
//             "title": "3D Artist",
//             "normalized_job_title": "3d artist",
//             "parent_uuid": "caa551520f21c7c220716a8f82806246"
//         },
//         {
//             "uuid": "7d37dfe2eface4ae79db093b0a79385d",
//             "title": "3D Designer",
//             "normalized_job_title": "3d designer",
//             "parent_uuid": "caa551520f21c7c220716a8f82806246"
//         },
//         {
//             "uuid": "6cb0a6786c08d6c91a4fc9f61e19f62d",
//             "title": "3D Modeler",
//             "normalized_job_title": "3d modeler",
//             "parent_uuid": "caa551520f21c7c220716a8f82806246"
//         },
//         {
//             "uuid": "ec45194ae348e1bb21415064364f038b",
//             "title": "3D Specialist",
//             "normalized_job_title": "3d specialist",
//             "parent_uuid": "caa551520f21c7c220716a8f82806246"
//         },
//         {
//             "uuid": "4266e89fcaf06973fa23fc6f75b27682",
//             "title": "3D Technologist",
//             "normalized_job_title": "3d technologist",
//             "parent_uuid": "ce1c0fc273d3c803e94a73ff0b54816e"
//         },
//         {
//             "uuid": "0cfb09fa1c6691fd6d77a3d3743fa8bc",
//             "title": "3rd Grade Reading Teacher",
//             "normalized_job_title": "3rd grade reading teacher",
//             "parent_uuid": "51cc95467c1844c7dc1d923265c023b2"
//         },
//         {
//             "uuid": "ac668f6dc8795ace795b2c1f7c889ba4",
//             "title": "3rd Grade Teacher",
//             "normalized_job_title": "3rd grade teacher",
//             "parent_uuid": "51cc95467c1844c7dc1d923265c023b2"
//         },
//         {
//             "uuid": "7826ba3a7150817935915f63b861936b",
//             "title": "3rd Pressman",
//             "normalized_job_title": "3rd pressman",
//             "parent_uuid": "96f1cf15fe5880d8660c70f0756944ab"
//         },
//         {
//             "uuid": "90bc1d89aaee33a96c1b70fef0750d62",
//             "title": "411 Directory Assistance Operator",
//             "normalized_job_title": "411 directory assistance operator",
//             "parent_uuid": "f0fc66d367f370fa64da4780019702cd"
//         },
//         {
//             "uuid": "814eb6844cf824e6945fb02a48f0e569",
//             "title": "4-H Youth Development Specialist",
//             "normalized_job_title": "4h youth development specialist",
//             "parent_uuid": "1028b80a2ce2bfb940b2198f487c6abb"
//         },
//         {
//             "uuid": "772053d8bb2c6e127b0bf216e50285ed",
//             "title": "4th Grade Math Teacher",
//             "normalized_job_title": "4th grade math teacher",
//             "parent_uuid": "51cc95467c1844c7dc1d923265c023b2"
//         },
//         {
//             "uuid": "de0a3e90cdd112dd78120d4c8a9422b2",
//             "title": "4th Grade Teacher",
//             "normalized_job_title": "4th grade teacher",
//             "parent_uuid": "51cc95467c1844c7dc1d923265c023b2"
//         }
//     ]
//
//  Найти в данном массиве объект title с самым длинным normalized_job_title
//
// let maxIndex = 0
// let maxTittle = 'a'
//
// for (let i = 0; i < hugeArr.length; i++) {
//     for (const key in hugeArr[i]) {
//         console.log(hugeArr[i].normalized_job_title.length)
//         if (maxTittle.length < hugeArr[i].normalized_job_title.length) {
//             maxTittle === hugeArr[i].normalized_job_title
//             console.log(maxTittle)
//         }
//     }
// }

// console.log(maxTittle.length)


// HomeWork

// Даны целые числа K, N, а также K наборов целых чисел по N эле-                   сделать!
// ментов в каждом наборе. Для каждого набора вывести сумму его элемен-
// тов. Нужно 2 цикла

// let K = 4
// let N = 3
// let ar = [[1,2,3], [4, 5, 6], [10, 15, 16], [30, 50, 60]]


// console.log(ar)


// Дано целое число N и набор из N целых чисел.
// Вывести в том же порядке все четные числа из данного набора и количество K таких чисел.
// 1 цикл

// let N = 5
// let ar = [1, 5, 2, 3, 6]
// let newAr = []
// let count = 0
//
// for (let i = 0; i < ar.length; i++) {
//     if (ar[i] % 2 == 0) {
//         newAr.push(ar[i])
//         count++
//     }
// }
//
// console.log(newAr)
// console.log(count)


// Дано целое число N (>1) и набор из N целых чисел.
//     Вывести те элементы в наборе, которые меньше своего правого соседа, и количество K таких элементов.
// 1 цикл

// let N = 4
// let ar = [10, 6, 18, 42]
// let newAr = []
//
// for (let i = 0; i < ar.length; i++) {
//     let nextNum = 0
//
//     if (ar[i] < ar[i + 1]) {
//         newAr.push(ar[i])
//     }
// }
//
// console.log(newAr)


//      Дано целое число K, а также K наборов ненулевых целых чисел.
//     Признаком завершения каждого набора является число 0.
//     Для каждого набора вывести количество его элементов.                     Не сделал
//     Вывести также общее количество элементов во всех наборах.

// let K = 5
// let ar = [ [1,10,3,0,3], [1,20,3,4,0], [1,30,3,4,35], [1,40,20,0,1], [15,50,3,4,0] ]
// let newAr = []

// let K = 5
// let ar = [ [1,10,3,0,3], [1,20,3,4,0], [1,30,3,4,35], [1,40,20,0,1], [15,50,3,4,0] ]
// let count = 0
// let arr = []
//
// for (let i = 0; i < ar.length; i++) {
//     let ariSum = 0
//     for (let j = 0; j < ar[i].length; j++) {
//         let correntNum = ar[i][j]
//         // console.log(correntNum)
//         if (correntNum !== 0) {
//             count++
//             ariSum++
//         } else {
//             break
//         }
//     }
//     arr.push(ariSum)
// }
//
// console.log(count)
// console.log(arr)


// console.log(newAr)


// Даны целые положительные числа N и K. Найти сумму 1^K +2^K +...+N^K.                 Сделать до конца!!!


// let N = 3
// let K = 5
// let pow = N
//
//
// for (let i = 0; i < K; i++) {
//     pow = pow * N
// }
//
// console.log(pow)


// Дана строка. Подсчитать количество содержащихся в ней цифр.
// let string = 'wergjwl123fnqejgfnjqlewg2456262dgw'
// let countNum = 0
// // console.log(parseInt(string));
//
// // NaN > -Infinity
//
// for (let i = 0; i < string.length; i++) {
//     let wholeNum = 0
//     wholeNum = parseInt(string[i])
//     console.log(wholeNum)
//     if (wholeNum > -Infinity) {
//         countNum++
//     }
// }
//
// console.log(countNum)


// Дана строка. Преобразовать в ней все прописные латинские буквы в строчные.

// let string = 'vwrbw123'
//
// console.log(string.toUpperCase());


// Дана строка, содержащая по крайней мере один символ пробела.
//     Вывести подстроку, расположенную между первым и вторым пробелом исходной строки. Если строка содержит только один пробел, то вывести пустую строку.

// let string = 'a bcdfbq'
// let firstSpace = false
// let secondSpace = false
// let rightString = ''
//
// for (let i = 0; i < string.length; i++) {
//     if (string[i] == ' ' && firstSpace == false) {
//         firstSpace = true
//         continue
//     }
//     if (firstSpace == true && secondSpace == false && string[i] == ' ') {
//         secondSpace = true
//         continue
//     }
//     if (firstSpace == true && secondSpace == false && string[i] !== ' ') {
//         rightString += string[i]
//         continue
//     }
// }
//
// if (firstSpace == true && secondSpace == false) {
//     rightString = ''
// }
//
// console.log(rightString)


// HomeWork


// 2) Дана строка, состоящая из русских слов, разделенных пробелами (одним или несколькими). Найти количество слов в строке.
// let string = 'Три случайных числа'
// let count = 0
// let spaces = 0
//
// for (let i = 0; i < string.length; i++) {
//     if (string[i] == ' ') {
//         spaces++
//     } else {
//         count++
//     }
// }
//
// console.log(count)
// console.log(spaces)

// TODO: количество слов в строке не найдено

// 3) Даны строки S, S1 и S2. Заменить в строке S все вхождения строки S1 на строку S2.

// Предположим, что есть строка S - "Дана строка, содержащая полное имя файла, то есть имя диска, список каталогов"
// S1 - "полное имя файла"
// S2 - "имя и расширение"
// Итоговая строка будет - "Дана строка, содержащая имя и расширение, то есть имя диска, список каталогов"

// let S = 10
// let S1 = 20
// let S2 = 30




// 4) Дана строка, содержащая полное имя файла, то есть имя диска, список каталогов (путь),
// собственное имя и расширение. Выделить из этой строки имя файла (без расширения).

// let string = 'D://folder/myFiles/game.exe'
// let count = 0
// let resultString = ""
// for (let i = 2; i < string.length; i++) {
//     count++
//     if (string[i] === '.') {
//         // console.log(count)
//         break
//         }
//     }
// for (let i = count; i > 0; i--) {
//     // console.log(string[i])
//     if (string[i] === '/') {
//         break
//
//     }
//      // console.log(string[i])
//     resultString += string[i]
// }

// console.log(resultString) // TODO: нужно перевернуть строку











