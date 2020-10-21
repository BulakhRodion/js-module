"use strict";

// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
let userAge = prompt('How old are you?');
if (userAge < 0) {
    alert('you`re Benjamin Button');
} else if (0 <= userAge && userAge < 2) {
    alert('you`re a baby');
} else if (2 <= userAge && userAge < 12) {
    alert('you`re a child');
} else if (12 <= userAge && userAge < 18) {
    alert('you`re a teenager');
} else if (18 <= userAge && userAge < 60) {
    alert('you`re an adult');
} else if (userAge >= 60) {
    alert('you`re a retiree');
}

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
let symbolNumber = prompt('Enter number from 0 to 9', 0);

switch (Number(symbolNumber)) {
    case 0:
        alert('0 is )')
        break;
    case 1:
        alert('1 is !')
        break;
    case 2:
        alert('2 is @')
        break;
    case 3:
        alert('3 is #')
        break;
    case 4:
        alert('4 is $')
        break;
    case 5:
        alert('5 is %')
        break;
    case 6:
        alert('6 is ^')
        break;
    case 7:
        alert('7 is &')
        break;
    case 8:
        alert('8 is *')
        break;
    case 9:
        alert('9 is (')
        break;
    default: 
        alert('number should be from 0 to 9')
        break;
}

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
let threeDigNum = prompt('Enter any three-digit number', 0);
    if (threeDigNum[0] == threeDigNum[1] || threeDigNum[1] == threeDigNum[2] || threeDigNum[2] == threeDigNum[0]) {
        alert('have same numbers');
    } else {
        alert('don`t have same numbers');
    }

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let yearCheck = prompt('Enter expected year');
if (Number(yearCheck)%400 == 0 || Number(yearCheck)%4 == 0 && Number(yearCheck)%100 !==0) {
    alert('Высокосный год');
} else {
    alert('Не высокосный год');
}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом
let palNum = prompt('Enter any five-digit number');
if (palNum[0] == palNum[4] && palNum[1] == palNum[3]) {
    alert('число палиндром');
} else {
    alert('к сожалению это число не палиндром');
}

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let amountUSD = prompt('Enter your USD amount');
let currency = prompt('Enter number of required currency: EUR = 1; UAH = 2; AZN = 3', 1);

switch(currency) {
    case '1':
        alert(amountUSD * 0.85 + ' ' + 'EUR')
        break;
    case '2':
        alert(amountUSD * 28.37 + ' ' + 'UAH')
        break;
    case '3':
        alert(amountUSD * 1.7 + ' ' + 'AZN')
        break;
    default:
        alert('Choose one of the available currency number')
        break;
}

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%
let p = Number(prompt('Enter expected price'));
    
p >= 0 && p < 200? alert('no discount for you!'): p >= 200 && p <= 300? alert(p - (p * 0.03) + ' ' + 'with discount'):
p > 300 && p <= 500? alert(p - (p * 0.05) + ' ' + 'with discount'): p > 500 ? alert(p - (p * 0.05) + ' ' + 'with discount'): alert('incorrect price');

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
let perimeter = Number(prompt('Enter square perimeter', 0));
let circleLength = Number(prompt('Enter circle length', 0));
const squareSide = (perimeter / 4);
const circleRadius = (circleLength / (2 * 3.1415));

circleRadius < (squareSide / 2)? alert('Круг может быть вписан в квадрат'): alert('Круг не может быть вписан в квадрат');

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let firstQ = Number(prompt('Сколько будет 1+1? 1) 2; 2) 4; 3) 5;', 0));
let secondQ = Number(prompt('Сколько будет 1+2? 1) 2; 2) 3; 3) 5;', 0));
let thirdQ = Number(prompt('Сколько будет 1+3? 1) 2; 2) 1; 3) 4;', 0));
let rating = 0;

if (firstQ == 1) {
    rating += 2;
} if (secondQ == 2) {
    rating += 2;
} if (thirdQ == 3) {
    rating += 2;
}
alert('Your rating is' + ' ' + rating);

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
let date = new Date(prompt('Enter any date in mm-dd-year format'));
date.setDate(date.getDate() + 1);

alert(date);
