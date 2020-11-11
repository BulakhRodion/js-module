export const homeworkBasics = () => {
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
}