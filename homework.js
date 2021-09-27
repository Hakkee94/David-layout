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


// Boolean25
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

