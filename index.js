"use strict";

// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// let userAge = prompt('How old are you?');
// if (userAge < 0) {
//     alert('you`re Benjamin Button');
// } else if (0 <= userAge && userAge < 2) {
//     alert('you`re a baby');
// } else if (2 <= userAge && userAge < 12) {
//     alert('you`re a child');
// } else if (12 <= userAge && userAge < 18) {
//     alert('you`re a teenager');
// } else if (18 <= userAge && userAge < 60) {
//     alert('you`re an adult');
// } else if (userAge >= 60) {
//     alert('you`re a retiree');
// }

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// let symbolNumber = prompt('Enter number from 0 to 9', 0);

// switch (Number(symbolNumber)) {
//     case 0:
//         alert('0 is )')
//         break;
//     case 1:
//         alert('1 is !')
//         break;
//     case 2:
//         alert('2 is @')
//         break;
//     case 3:
//         alert('3 is #')
//         break;
//     case 4:
//         alert('4 is $')
//         break;
//     case 5:
//         alert('5 is %')
//         break;
//     case 6:
//         alert('6 is ^')
//         break;
//     case 7:
//         alert('7 is &')
//         break;
//     case 8:
//         alert('8 is *')
//         break;
//     case 9:
//         alert('9 is (')
//         break;
//     default: 
//         alert('number should be from 0 to 9')
//         break;
// }

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// let threeDigNum = prompt('Enter any three-digit number', 0);
//     if (threeDigNum[0] == threeDigNum[1] || threeDigNum[1] == threeDigNum[2] || threeDigNum[2] == threeDigNum[0]) {
//         alert('have same numbers');
//     } else {
//         alert('don`t have same numbers');
//     }
// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// let yearCheck = prompt('Enter expected year');
// if (Number(yearCheck)%400 == 0 || Number(yearCheck)%4 == 0 && Number(yearCheck)%100 !==0) {
//     alert('Высокосный год');
// } else {
//     alert('Не высокосный год');
// }
// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом
// let palNum = prompt('Enter any five-digit number');
// if (palNum[0] == palNum[4] && palNum[1] == palNum[3]) {
//     alert('число палиндром');
// } else {
//     alert('к сожалению это число не палиндром');
// }
// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let amountUSD = prompt('Enter your USD amount');
