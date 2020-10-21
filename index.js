"use strict";

//Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const taskOneBtnOne = document.getElementById("task1.1");
taskOneBtnOne.addEventListener("click", () => {
  const name = prompt("Enter your name", "");
  alert('Привет,' + ' ' + name + '!');
});

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const taskOneBtnTwo = document.getElementById("task1.2");
taskOneBtnTwo.addEventListener("click", () => {
  const userBirthYear = prompt("Enter your birth year", 1700);
  const currentYear = (2020);
  alert(currentYear - userBirthYear);
});

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const taskOneBtnThree = document.getElementById("task1.3");
taskOneBtnThree.addEventListener("click", () => {
  const squareSideLength = prompt("Enter side length of a square to get perimiter", 0);
  alert(squareSideLength * 4);
});

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const taskOneBtnFour = document.getElementById("task1.4");
taskOneBtnFour.addEventListener("click", () => {
  const circleArea = prompt("Enter circle radius to get it's area", 0);
  alert((circleArea ** 2) * 3.1415);
});

// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
const taskOneBtnFive = document.getElementById("task1.5");
taskOneBtnFive.addEventListener("click", () => {
  const roadDistance = prompt("Enter road distance in km", 0);
  const roadTime = prompt("Enter time (in hours) you want to cross this distance to know required movement speed", 0);
  alert(roadDistance / roadTime + 'km/h');
});

// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const taskOneBtnSix = document.getElementById("task1.6");
taskOneBtnSix.addEventListener("click", () => {
  const amountDollar = prompt("Enter you dollar('s) amount", 0);
  const valueEuro = (0.8412);
  alert(amountDollar * valueEuro);
});

// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
const taskOneBtnSeven = document.getElementById("task1.7");
taskOneBtnSeven.addEventListener("click", () => {
  const fleshCardSpace = prompt("Enter your card space in GB", 0);
  alert(fleshCardSpace / 0.820);
});

// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
const taskOneBtnEight = document.getElementById("task1.8");
taskOneBtnEight.addEventListener("click", () => {
  const walletMoney = prompt("Enter amount of money in your wallet", 0);
  const chocolatePrice = prompt("Enter chocolate price");
  const chocolateAmount = (walletMoney / chocolatePrice);
  const moneyRest = (walletMoney % chocolatePrice);
  alert(chocolateAmount + ' ' + moneyRest + ' ' + 'остаток');
});

// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const taskOneBtnNine = document.getElementById("task1.9");
taskOneBtnNine.addEventListener("click", () => {
  let a = prompt("Enter any three-digit number to reverse it", 123);
  let b, c, d; 
  let result = 0;
  b = String(a % 10);
  a = ((a - b) / 10);
  c = String(a % 10);
  a = ((a - c) / 10);
  d = String(a % 10);
  result = (b + c + d);
  alert(result);
});

// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const taskOneBtnTen = document.getElementById("task1.10");
taskOneBtnTen.addEventListener("click", () => {
  const amountDeposit = prompt("Enter your deposit amount");
  const persentYearDeposit = (0.05);
  let amountTwoMonth = 0;
  amountTwoMonth = ((amountDeposit * persentYearDeposit * 61) / 365);
 alert(amountTwoMonth);
});



//LESSON SECOND

// // Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const taskTwoBtnOne = document.getElementById("task2.1");
taskTwoBtnOne.addEventListener("click", () => {
  const userAge = prompt("How old are you?");
  if (userAge < 0) {
    alert("you`re Benjamin Button");
  } else if (0 <= userAge && userAge < 2) {
    alert("you`re a baby");
  } else if (2 <= userAge && userAge < 12) {
    alert("you`re a child");
  } else if (12 <= userAge && userAge < 18) {
    alert("you`re a teenager");
  } else if (18 <= userAge && userAge < 60) {
    alert("you`re an adult");
  } else if (userAge >= 60) {
    alert("you`re a retiree");
  }
});

// // Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const taskTwoBtnTwo = document.getElementById("task2.2");
taskTwoBtnTwo.addEventListener("click", () => {
  const numberToSymbol = Number(prompt("Enter number from 0 to 9", 0));

  switch (numberToSymbol) {
    case 0:
      alert("0 is )");
      break;
    case 1:
      alert("1 is !");
      break;
    case 2:
      alert("2 is @");
      break;
    case 3:
      alert("3 is #");
      break;
    case 4:
      alert("4 is $");
      break;
    case 5:
      alert("5 is %");
      break;
    case 6:
      alert("6 is ^");
      break;
    case 7:
      alert("7 is &");
      break;
    case 8:
      alert("8 is *");
      break;
    case 9:
      alert("9 is (");
      break;
    default:
      alert("number should be from 0 to 9");
      break;
  }
});

// // Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const taskTwoBtnThree = document.getElementById("task2.3");
taskTwoBtnThree.addEventListener("click", () => {
  const threeDigNum = prompt("Enter any three-digit number", 0);
  threeDigNum[0] == threeDigNum[1] || threeDigNum[1] == threeDigNum[2] || threeDigNum[2] == threeDigNum[0]? alert("have same numbers"): alert("don`t have same numbers");
});
// // Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const taskTwoBtnFour = document.getElementById("task2.4");
taskTwoBtnFour.addEventListener("click", () => {
  const yearToCheck = Number(prompt("Enter expected year", 1700));
  yearToCheck % 400 == 0 || yearToCheck % 4 == 0 && yearToCheck % 100 !== 0? alert("Высокосный год"): alert("Не высокосный год");
});

// // Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом
const taskTwoBtnFive = document.getElementById("task2.5");
taskTwoBtnFive.addEventListener("click", () => {
  const palNum = prompt("Enter any five-digit number", 12345);
  palNum[0] == palNum[4] && palNum[1] == palNum[3]? alert("число палиндром"): alert("к сожалению это число не палиндром");
});

// // Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const taskTwoBtnSix = document.getElementById("task2.6");
taskTwoBtnSix.addEventListener("click", () => {
  const amountUSD = prompt("Enter your USD amount", "");
  const currency = prompt("Enter number of required currency: EUR = 1; UAH = 2; AZN = 3",1);

  switch (currency) {
    case "1":
      alert(amountUSD * 0.85 + " " + "EUR");
      break;
    case "2":
      alert(amountUSD * 28.37 + " " + "UAH");
      break;
    case "3":
      alert(amountUSD * 1.7 + " " + "AZN");
      break;
    default:
      alert("Choose one of the available currency number");
      break;
  }
});

// // Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%
const taskTwoBtnSeven = document.getElementById("task2.7");
taskTwoBtnSeven.addEventListener("click", () => {
  const price = Number(prompt('Enter expected price'));

  if (price >= 0 && price < 200) {
    alert('no discount for you!');
  } else if (price >= 200 && price <= 300) {
    alert(price - (price * 0.03) + ' ' + 'with discount');
  } else if (price > 300 && price <= 500) {
    alert(price - (price * 0.05) + ' ' + 'with discount');
  } else if (price > 500) {
    alert(price - (price * 0.05) + ' ' + 'with discount');
  } else {
    alert('incorrect price')
  }
});

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
const taskTwoBtnEight = document.getElementById("task2.8");
taskTwoBtnEight.addEventListener("click", () => {
  const perimeter = Number(prompt('Enter square perimeter', 0));
  const circleLength = Number(prompt('Enter circle length', 0));
  const squareSide = (perimeter / 4);
  const circleRadius = (circleLength / (2 * 3.1415));

  circleRadius < (squareSide / 2)? alert('Круг может быть вписан в квадрат'): alert('Круг не может быть вписан в квадрат');
});
// // Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
const taskTwoBtnNine = document.getElementById("task2.9");
taskTwoBtnNine.addEventListener("click", () => {
  const firstQ = Number(prompt('Сколько будет 1+1? 1) 2; 2) 4; 3) 5;', 0));
  const secondQ = Number(prompt('Сколько будет 1+2? 1) 2; 2) 3; 3) 5;', 0));
  const thirdQ = Number(prompt('Сколько будет 1+3? 1) 2; 2) 1; 3) 4;', 0));
  let rating = 0;

  if (firstQ == 1) {
    rating += 2;
  } if (secondQ == 2) {
    rating += 2;
  } if (thirdQ == 3) {
    rating += 2;
  }
  alert('Your rating is' + ' ' + rating);
});
// // Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
const taskTwoBtnTen = document.getElementById("task2.10");
taskTwoBtnTen.addEventListener("click", () => {
  let date = new Date(prompt('Enter any date in mm.dd.year format'));
  date.setDate(date.getDate() + 1);

  alert(date);
});