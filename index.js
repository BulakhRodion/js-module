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
  threeDigNum[0] === threeDigNum[1] || threeDigNum[1] === threeDigNum[2] || threeDigNum[2] === threeDigNum[0]? alert("have same numbers"): alert("don`t have same numbers");
});
// // Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const taskTwoBtnFour = document.getElementById("task2.4");
taskTwoBtnFour.addEventListener("click", () => {
  const yearToCheck = Number(prompt("Enter expected year", 1700));
  yearToCheck % 400 === 0 || yearToCheck % 4 === 0 && yearToCheck % 100 !== 0? alert("Высокосный год"): alert("Не высокосный год");
});

// // Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом
const taskTwoBtnFive = document.getElementById("task2.5");
taskTwoBtnFive.addEventListener("click", () => {
  const palNum = prompt("Enter any five-digit number", 12345);
  palNum[0] === palNum[4] && palNum[1] === palNum[3]? alert("число палиндром"): alert("к сожалению это число не палиндром");
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
    alert('incorrect price');
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



// LESSON THIRD

// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
const taskThreeBtnOne = document.getElementById("task3.1");
taskThreeBtnOne.addEventListener("click", () => {
  let numericRangeStart = Number(prompt("Enter start of numeric range", 1));
  const numericRangeEnd = Number(prompt("Enter end of numeric range", 10));
  let numericRangeSumm = 0;
    while(numericRangeStart <= numericRangeEnd) {
      numericRangeSumm += numericRangeStart;
      numericRangeStart++;
    }
    alert(numericRangeSumm);
});

// Запросить 2 числа и найти только наибольший общий делитель.
const taskThreeBtnTwo = document.getElementById("task3.2");
taskThreeBtnTwo.addEventListener("click", () => {
  let firstDividedNumber = Number(prompt("Enter first number", 2));
  let secondDividedNumber = Number(prompt("Enter second number", 2));
    while(firstDividedNumber !== 0 && secondDividedNumber !== 0) {
      firstDividedNumber > secondDividedNumber? firstDividedNumber %= secondDividedNumber: secondDividedNumber %= firstDividedNumber;
    }
    alert(firstDividedNumber + secondDividedNumber);
});

// Запросить у пользователя число и вывести все делители этого числа
const taskThreeBtnThree = document.getElementById("task3.3");
taskThreeBtnThree.addEventListener("click", () => {
  const allDivisorNumbers = Number(prompt("Enter any number", 123));
  let i = 1;
  while(i <= allDivisorNumbers) {
    i++;
    allDivisorNumbers % i === 0 && i !== allDivisorNumbers? console.log(i): false;
  }
});


// Определить количество цифр в введенном числе
const taskThreeBtnFour = document.getElementById("task3.4");
taskThreeBtnFour.addEventListener("click", () => {
  let allNumbersSumm = Number(prompt("Enter any nubmer", 20));
  let i = 0;
  if(allNumbersSumm === 0) {
    i++;
  }
  for(; allNumbersSumm > 1 || allNumbersSumm < -1; i++) {
    allNumbersSumm /= 10
  } 
  alert(i);
});

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. 
// Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
const taskThreeBtnFive = document.getElementById("task3.5");
taskThreeBtnFive.addEventListener("click", () => {
  const tenNumbers = prompt("Enter ten numbers through a spacebar", "0 2 3").split(" ");
  let negNum = 0;
  let posNum = 0;
  let zeroNum = 0;
  let evenNum = 0;
  let oddNum = 0;
  let i = 0;
  for(; i < tenNumbers.length; i++) {
    if(tenNumbers[i] % 2 === 0 && tenNumbers[i] > 0) {
      evenNum++;
      posNum++;
    } else if(tenNumbers[i] % 2 !== 0 && tenNumbers[i] > 0) {
      oddNum++;
      posNum++;
    } else if(tenNumbers[i] % 2 == 0 && tenNumbers[i] < 0) {
      evenNum++;
      negNum++;
    } else if(tenNumbers[i] % 2 !== 0 && tenNumbers[i] < 0) {
      oddNum++;
      negNum++;
    } else if(tenNumbers[i] === 0) {
      zeroNum++;
    } else {
      alert('incorrect number');
      break
    }
  }
  alert('чётных чисел: ' + evenNum + ' нечётных чисел: ' + oddNum + ' нолей: ' + zeroNum + ' положительных чисел: ' + posNum + ' отрицательных чисел: ' + negNum);
});

// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется.
const taskThreeBtnSix = document.getElementById("task3.6");
taskThreeBtnSix.addEventListener("click", () => {
  do {
    const firstNum = Number(prompt("Enter first number", 1));
    const sign = prompt("Enter sign number", "+");
    const secNum = Number(prompt("Enter second number", 2));
    switch (sign) {
      case '+':
        alert(firstNum + secNum);
        break
      case '*':
        alert(firstNum * secNum);
        break
      case '/':
        alert(firstNum / secNum);
        break
      case '-':
        alert(firstNum - secNum);
        break
      case '%':
        alert(firstNum % secNum);
        break
      default:
        break
    }
  } while(confirm('Хотите ли вы решить еще один пример?'));
});

// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат 
// (если число 123456 сдвинуть на 2 цифры, то получится 345612).
const taskThreeBtnSeven = document.getElementById("task3.7");
taskThreeBtnSeven.addEventListener("click", () => {
  const numbers = prompt("Enter any number", 123).split("");
  const moveNum = Number(prompt("Enter value which will move numbers", 2));
  let i = 0;
  for(; i < numbers.length; i++) {
  numbers[i] = (numbers[i] * 1) + moveNum; 
  }
  alert(numbers.join(""));
});

// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
const taskThreeBtnEight = document.getElementById("task3.8");
taskThreeBtnEight.addEventListener("click", () => {
let i = 0;
do {
  let days = [0, 1, 2, 3 ,4 ,5 ,6 ,7];
  let day = "";
  switch (days[i]) {
    case 0:
      day = "Sun";
      alert(day);
      break;
    case 1:
      day = "Mon";
      alert(day);
      break;
    case 2:
       day = "Tue";
       alert(day);
      break;
    case 3:
      day = "Wed";
      alert(day);
      break;
    case 4:
      day = "Thu";
      alert(day);
      break;
    case 5:
      day = "Fri";
      alert(day);
      break;
    case 6:
      day = "Sat";
      alert(day);
      break;
    case 7:
      day = "Sun";
      i -= 7;
      alert(day);
    default:
      break;
  };
  i++;
} while(confirm("Хотите увидеть следующий день?"));
});


// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
const taskThreeBtnNine = document.getElementById("task3.9");
taskThreeBtnNine.addEventListener("click", () => {
let result = '';
for(let i = 2; i <= 9; i++) {
  for(let j = 1; j <= 10; j++) {
    result += ' ' + i * j;
    if (i * j < 10) {
      result += ' ';
    }
  }
  alert(result);
  result = '';
}
});

// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
// В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
// Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
const taskThreeBtnTen = document.getElementById("task3.10");
taskThreeBtnTen.addEventListener("click", () => {
  alert('Загадайте число от 0 до 100');
  let start = 0;
  let end = 100;
  let answer = 1;
  let guess = '';
  answer = Math.floor(start + (end - start) / 2);
  while(answer !== false){
    guess = prompt(`ваше число > ${answer}, < ${answer}, или == ${answer}?`, "> < ==");
    
    switch(guess) {
      case '>':
        start = answer;
        answer = Math.floor(start + (end - start) / 2);
        break;
      case '<':
        end = answer;
        answer = Math.floor(start + (end - start) / 2);
        break;
      case '==':
        alert(`ваше число ${answer}`);
        answer = confirm('Хотите попробовать еще раз?')
        break;
      case null:
        alert(':(')
        answer = false;
        break;
      default:
        alert('неправильный ввод')
        break;
    }
  }
});



//Function 

// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
const taskFourBtnOne = document.getElementById("task4.1");
taskFourBtnOne.addEventListener("click", () => {
  function getComprasion(a, b){
    if (a == b) {
      return 0;
    } else if (a > b) {
      return 1;
    } else {
      return -1;
    }
  };
  console.log(getComprasion(1, 2));
});

// Написать функцию, которая вычисляет факториал переданного ей числа
const taskFourBtnTwo = document.getElementById("task4.2");
taskFourBtnTwo.addEventListener("click", () => {
  function getFactorial(a){
    let b = 1;
    
    if(a === 0 || a === 1){
      return b;
    } else {
      for(let i = 1; i !== (a + 1);){
        b *= i;
        i++;
      }
      return b;
    };
  }
  console.log(getFactorial(5));
});

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
const taskFourBtnThree = document.getElementById("task4.3");
taskFourBtnThree.addEventListener("click", () => {
  function joinNumbers(a, b, c){
    const joinedNumbers = [a, b, c].join("");
    return parseInt(joinedNumbers);
  }
  console.log(joinNumbers(1, 4, 9));
});


// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
const taskFourBtnFour = document.getElementById("task4.4");
taskFourBtnFour.addEventListener("click", () => {
  function rectangleArea(rectangleLength, rectangleWidth){
    let areaSize = 0;
    let squarePerimiter = 0;
    
    if (rectangleLength === undefined || rectangleLength === 0) {
        squarePerimiter = (rectangleWidth * rectangleWidth);
        return squarePerimiter;
      } else if (rectangleWidth === undefined || rectangleWidth === 0) {
        squarePerimiter = (rectangleLength * rectangleLength);
        return squarePerimiter;
      } else if(rectangleLength < 0 || rectangleWidth < 0) {
        return "incorrect value";
      } else {
        areaSize = rectangleLength * rectangleWidth;
        return areaSize;
      }
  }
  console.log(rectangleArea(3, 5));
});

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
const taskFourBtnFive = document.getElementById("task4.5");
taskFourBtnFive.addEventListener("click", () => {
  function isNumberPerfect(a){
    let res = 0;
    if ( a === 0){
      return false;
    } 
  
    for (let i = a - 1; i >= 1; i--){
      if (a % i === 0){
      res += i; 
      } 
    }
  
    if (res === a){
      return "Number is perfect";
    } else {
      return "Number is not perfect";
    }
  }
  console.log(isNumberPerfect(28));
});

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
const taskFourBtnSix = document.getElementById("task4.6");
taskFourBtnSix.addEventListener("click", () => {
  function isNumberInRangePerfect(a, b){
    let perfectNumbers = [];
    function isNumberPerfect(a){
      let res = 0;
      if ( a === 0){
      return false;
      } 
  
      for (let i = a - 1; i >= 1; i--){
        if (a % i === 0){
        res += i; 
        } 
      }
  
      if (res === a){
        return "Number is perfect";
      } else {
        return "Number is not perfect";
      }
    }
  
    if( b > a && b !== 0){
      for (let i = b; i >= a; i--){
       if (isNumberPerfect(i) === "Number is perfect") {
         perfectNumbers.push(i);
       }
      }
    } else if( a > b && a !== 0){
      for (let i = a; i >= b; i--){
       if (isNumberPerfect(i) === "Number is perfect") {
         perfectNumbers.push(i);
       }
      }
    } else if( a === b){
      console.log(isNumberPerfect(a));
      }

    if( b > a && b === 0){
      return false;
    } else if( a > b && a === 0){
      return false;
    } else if( a === 0 && b === 0){
      return false;
    }
    return perfectNumbers.join(',');
  }
  console.log(isNumberInRangePerfect(1, 29));
});

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
const taskFourBtnSeven = document.getElementById("task4.7");
taskFourBtnSeven.addEventListener("click", () => {
    function setTime(hours,min = 0,sec = 0) {
        let date = new Date();
        date.setHours(hours, min, sec);
        return date.toLocaleString(navigator.language, {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    } 
   console.log(setTime(9,15,44));
});

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
const taskFourBtnEight = document.getElementById("task4.8");
taskFourBtnEight.addEventListener("click", () => {
    function toSeconds(hour,min = 0,sec = 0) {
      return 3600*hour+60*min+sec;
    } 
   console.log(toSeconds(10,15,44));
});

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
const taskFourBtnNine = document.getElementById("task4.9");
taskFourBtnNine.addEventListener("click", () => {
    function secToHours(sec = 0) {
      const hours = Math.floor(sec / 60 / 60);
      const minutes = Math.floor(sec / 60) - (hours * 60)
      const seconds = sec % 60;
      const formatted = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
      ].join(':');
      return formatted;
    } 
   console.log(secToHours(5374));
});

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
const taskFourBtnTen = document.getElementById("task4.10");
taskFourBtnTen.addEventListener("click", () => {
    function toSeconds(hour,min = 0,sec = 0) {
      return 3600*hour+60*min+sec;
    } 
    const timeOne = toSeconds(10,15,44);
    const timeTwo = toSeconds(9,10,40);
    const newTime = timeOne - timeTwo;
  
    function secToHours(sec = 0) {
      const hours = Math.floor(sec / 60 / 60);
      const minutes = Math.floor(sec / 60) - (hours * 60)
      const seconds = sec % 60;
      const formatted = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
      ].join(':');
      return formatted;
    } 
   console.log(secToHours(newTime));
});