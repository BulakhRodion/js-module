// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
"use strict"; //Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

var taskOneBtnOne = document.getElementById("task1.1");
taskOneBtnOne.addEventListener("click", function () {
  var name = prompt("Enter your name", "");
  alert('Привет,' + ' ' + name + '!');
}); // Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var taskOneBtnTwo = document.getElementById("task1.2");
taskOneBtnTwo.addEventListener("click", function () {
  var userBirthYear = prompt("Enter your birth year", 1700);
  var currentYear = 2020;
  alert(currentYear - userBirthYear);
}); // Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var taskOneBtnThree = document.getElementById("task1.3");
taskOneBtnThree.addEventListener("click", function () {
  var squareSideLength = prompt("Enter side length of a square to get perimiter", 0);
  alert(squareSideLength * 4);
}); // Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var taskOneBtnFour = document.getElementById("task1.4");
taskOneBtnFour.addEventListener("click", function () {
  var circleArea = prompt("Enter circle radius to get it's area", 0);
  alert(Math.pow(circleArea, 2) * 3.1415);
}); // Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var taskOneBtnFive = document.getElementById("task1.5");
taskOneBtnFive.addEventListener("click", function () {
  var roadDistance = prompt("Enter road distance in km", 0);
  var roadTime = prompt("Enter time (in hours) you want to cross this distance to know required movement speed", 0);
  alert(roadDistance / roadTime + 'km/h');
}); // Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

var taskOneBtnSix = document.getElementById("task1.6");
taskOneBtnSix.addEventListener("click", function () {
  var amountDollar = prompt("Enter you dollar('s) amount", 0);
  var valueEuro = 0.8412;
  alert(amountDollar * valueEuro);
}); // Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

var taskOneBtnSeven = document.getElementById("task1.7");
taskOneBtnSeven.addEventListener("click", function () {
  var fleshCardSpace = prompt("Enter your card space in GB", 0);
  alert(fleshCardSpace / 0.820);
}); // Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

var taskOneBtnEight = document.getElementById("task1.8");
taskOneBtnEight.addEventListener("click", function () {
  var walletMoney = prompt("Enter amount of money in your wallet", 0);
  var chocolatePrice = prompt("Enter chocolate price");
  var chocolateAmount = walletMoney / chocolatePrice;
  var moneyRest = walletMoney % chocolatePrice;
  alert(chocolateAmount + ' ' + moneyRest + ' ' + 'остаток');
}); // Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var taskOneBtnNine = document.getElementById("task1.9");
taskOneBtnNine.addEventListener("click", function () {
  var a = prompt("Enter any three-digit number to reverse it", 123);
  var b, c, d;
  var result = 0;
  b = String(a % 10);
  a = (a - b) / 10;
  c = String(a % 10);
  a = (a - c) / 10;
  d = String(a % 10);
  result = b + c + d;
  alert(result);
}); // Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var taskOneBtnTen = document.getElementById("task1.10");
taskOneBtnTen.addEventListener("click", function () {
  var amountDeposit = prompt("Enter your deposit amount");
  var persentYearDeposit = 0.05;
  var amountTwoMonth = 0;
  amountTwoMonth = amountDeposit * persentYearDeposit * 61 / 365;
  alert(amountTwoMonth);
}); //LESSON SECOND
// // Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

var taskTwoBtnOne = document.getElementById("task2.1");
taskTwoBtnOne.addEventListener("click", function () {
  var userAge = prompt("How old are you?");

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
}); // // Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var taskTwoBtnTwo = document.getElementById("task2.2");
taskTwoBtnTwo.addEventListener("click", function () {
  var numberToSymbol = Number(prompt("Enter number from 0 to 9", 0));

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
}); // // Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

var taskTwoBtnThree = document.getElementById("task2.3");
taskTwoBtnThree.addEventListener("click", function () {
  var threeDigNum = prompt("Enter any three-digit number", 0);
  threeDigNum[0] === threeDigNum[1] || threeDigNum[1] === threeDigNum[2] || threeDigNum[2] === threeDigNum[0] ? alert("have same numbers") : alert("don`t have same numbers");
}); // // Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var taskTwoBtnFour = document.getElementById("task2.4");
taskTwoBtnFour.addEventListener("click", function () {
  var yearToCheck = Number(prompt("Enter expected year", 1700));
  yearToCheck % 400 === 0 || yearToCheck % 4 === 0 && yearToCheck % 100 !== 0 ? alert("Высокосный год") : alert("Не высокосный год");
}); // // Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом

var taskTwoBtnFive = document.getElementById("task2.5");
taskTwoBtnFive.addEventListener("click", function () {
  var palNum = prompt("Enter any five-digit number", 12345);
  palNum[0] === palNum[4] && palNum[1] === palNum[3] ? alert("число палиндром") : alert("к сожалению это число не палиндром");
}); // // Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var taskTwoBtnSix = document.getElementById("task2.6");
taskTwoBtnSix.addEventListener("click", function () {
  var amountUSD = prompt("Enter your USD amount", "");
  var currency = prompt("Enter number of required currency: EUR = 1; UAH = 2; AZN = 3", 1);

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
}); // // Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%

var taskTwoBtnSeven = document.getElementById("task2.7");
taskTwoBtnSeven.addEventListener("click", function () {
  var price = Number(prompt('Enter expected price'));

  if (price >= 0 && price < 200) {
    alert('no discount for you!');
  } else if (price >= 200 && price <= 300) {
    alert(price - price * 0.03 + ' ' + 'with discount');
  } else if (price > 300 && price <= 500) {
    alert(price - price * 0.05 + ' ' + 'with discount');
  } else if (price > 500) {
    alert(price - price * 0.05 + ' ' + 'with discount');
  } else {
    alert('incorrect price');
  }
}); // Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

var taskTwoBtnEight = document.getElementById("task2.8");
taskTwoBtnEight.addEventListener("click", function () {
  var perimeter = Number(prompt('Enter square perimeter', 0));
  var circleLength = Number(prompt('Enter circle length', 0));
  var squareSide = perimeter / 4;
  var circleRadius = circleLength / (2 * 3.1415);
  circleRadius < squareSide / 2 ? alert('Круг может быть вписан в квадрат') : alert('Круг не может быть вписан в квадрат');
}); // // Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

var taskTwoBtnNine = document.getElementById("task2.9");
taskTwoBtnNine.addEventListener("click", function () {
  var firstQ = Number(prompt('Сколько будет 1+1? 1) 2; 2) 4; 3) 5;', 0));
  var secondQ = Number(prompt('Сколько будет 1+2? 1) 2; 2) 3; 3) 5;', 0));
  var thirdQ = Number(prompt('Сколько будет 1+3? 1) 2; 2) 1; 3) 4;', 0));
  var rating = 0;

  if (firstQ == 1) {
    rating += 2;
  }

  if (secondQ == 2) {
    rating += 2;
  }

  if (thirdQ == 3) {
    rating += 2;
  }

  alert('Your rating is' + ' ' + rating);
}); // // Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

var taskTwoBtnTen = document.getElementById("task2.10");
taskTwoBtnTen.addEventListener("click", function () {
  var date = new Date(prompt('Enter any date in mm.dd.year format'));
  date.setDate(date.getDate() + 1);
  alert(date);
}); // LESSON THIRD
// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

var taskThreeBtnOne = document.getElementById("task3.1");
taskThreeBtnOne.addEventListener("click", function () {
  var numericRangeStart = Number(prompt("Enter start of numeric range", 1));
  var numericRangeEnd = Number(prompt("Enter end of numeric range", 10));
  var numericRangeSumm = 0;

  while (numericRangeStart <= numericRangeEnd) {
    numericRangeSumm += numericRangeStart;
    numericRangeStart++;
  }

  alert(numericRangeSumm);
}); // Запросить 2 числа и найти только наибольший общий делитель.

var taskThreeBtnTwo = document.getElementById("task3.2");
taskThreeBtnTwo.addEventListener("click", function () {
  var firstDividedNumber = Number(prompt("Enter first number", 2));
  var secondDividedNumber = Number(prompt("Enter second number", 2));

  while (firstDividedNumber !== 0 && secondDividedNumber !== 0) {
    firstDividedNumber > secondDividedNumber ? firstDividedNumber %= secondDividedNumber : secondDividedNumber %= firstDividedNumber;
  }

  alert(firstDividedNumber + secondDividedNumber);
}); // Запросить у пользователя число и вывести все делители этого числа

var taskThreeBtnThree = document.getElementById("task3.3");
taskThreeBtnThree.addEventListener("click", function () {
  var allDivisorNumbers = Number(prompt("Enter any number", 123));
  var i = 1;

  while (i <= allDivisorNumbers) {
    i++;
    allDivisorNumbers % i === 0 && i !== allDivisorNumbers ? console.log(i) : false;
  }
}); // Определить количество цифр в введенном числе

var taskThreeBtnFour = document.getElementById("task3.4");
taskThreeBtnFour.addEventListener("click", function () {
  var allNumbersSumm = Number(prompt("Enter any nubmer", 20));
  var i = 0;

  if (allNumbersSumm === 0) {
    i++;
  }

  for (; allNumbersSumm > 1 || allNumbersSumm < -1; i++) {
    allNumbersSumm /= 10;
  }

  alert(i);
}); // Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. 
// Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

var taskThreeBtnFive = document.getElementById("task3.5");
taskThreeBtnFive.addEventListener("click", function () {
  var tenNumbers = prompt("Enter ten numbers through a spacebar", "0 2 3").split(" ");
  var negNum = 0;
  var posNum = 0;
  var zeroNum = 0;
  var evenNum = 0;
  var oddNum = 0;
  var i = 0;

  for (; i < tenNumbers.length; i++) {
    if (tenNumbers[i] % 2 === 0 && tenNumbers[i] > 0) {
      evenNum++;
      posNum++;
    } else if (tenNumbers[i] % 2 !== 0 && tenNumbers[i] > 0) {
      oddNum++;
      posNum++;
    } else if (tenNumbers[i] % 2 == 0 && tenNumbers[i] < 0) {
      evenNum++;
      negNum++;
    } else if (tenNumbers[i] % 2 !== 0 && tenNumbers[i] < 0) {
      oddNum++;
      negNum++;
    } else if (tenNumbers[i] === 0) {
      zeroNum++;
    } else {
      alert('incorrect number');
      break;
    }
  }

  alert('чётных чисел: ' + evenNum + ' нечётных чисел: ' + oddNum + ' нолей: ' + zeroNum + ' положительных чисел: ' + posNum + ' отрицательных чисел: ' + negNum);
}); // Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется.

var taskThreeBtnSix = document.getElementById("task3.6");
taskThreeBtnSix.addEventListener("click", function () {
  do {
    var firstNum = Number(prompt("Enter first number", 1));
    var sign = prompt("Enter sign number", "+");
    var secNum = Number(prompt("Enter second number", 2));

    switch (sign) {
      case '+':
        alert(firstNum + secNum);
        break;

      case '*':
        alert(firstNum * secNum);
        break;

      case '/':
        alert(firstNum / secNum);
        break;

      case '-':
        alert(firstNum - secNum);
        break;

      case '%':
        alert(firstNum % secNum);
        break;

      default:
        break;
    }
  } while (confirm('Хотите ли вы решить еще один пример?'));
}); // Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат 
// (если число 123456 сдвинуть на 2 цифры, то получится 345612).

var taskThreeBtnSeven = document.getElementById("task3.7");
taskThreeBtnSeven.addEventListener("click", function () {
  var numbers = prompt("Enter any number", 123).split("");
  var moveNum = Number(prompt("Enter value which will move numbers", 2));
  var i = 0;

  for (; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 1 + moveNum;
  }

  alert(numbers.join(""));
}); // Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

var taskThreeBtnEight = document.getElementById("task3.8");
taskThreeBtnEight.addEventListener("click", function () {
  var i = 0;

  do {
    var days = [0, 1, 2, 3, 4, 5, 6, 7];
    var day = "";

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
    }

    ;
    i++;
  } while (confirm("Хотите увидеть следующий день?"));
}); // Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

var taskThreeBtnNine = document.getElementById("task3.9");
taskThreeBtnNine.addEventListener("click", function () {
  var result = '';

  for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 10; j++) {
      result += ' ' + i * j;

      if (i * j < 10) {
        result += ' ';
      }
    }

    alert(result);
    result = '';
  }
}); // Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
// В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
// Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

var taskThreeBtnTen = document.getElementById("task3.10");
taskThreeBtnTen.addEventListener("click", function () {
  alert('Загадайте число от 0 до 100');
  var start = 0;
  var end = 100;
  var answer = 1;
  var guess = '';
  answer = Math.floor(start + (end - start) / 2);

  while (answer !== false) {
    guess = prompt("\u0432\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E > ".concat(answer, ", < ").concat(answer, ", \u0438\u043B\u0438 == ").concat(answer, "?"), "> < ==");

    switch (guess) {
      case '>':
        start = answer;
        answer = Math.floor(start + (end - start) / 2);
        break;

      case '<':
        end = answer;
        answer = Math.floor(start + (end - start) / 2);
        break;

      case '==':
        alert("\u0432\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(answer));
        answer = confirm('Хотите попробовать еще раз?');
        break;

      case null:
        alert(':(');
        answer = false;
        break;

      default:
        alert('неправильный ввод');
        break;
    }
  }
}); //Function 
// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

var taskFourBtnOne = document.getElementById("task4.1");
taskFourBtnOne.addEventListener("click", function () {
  var comparsionValues = prompt("Enter two digits in the specified format to get comparsion", "1, 2").split(", ");

  function getComprasion(a, b) {
    if (a == b) {
      return 0;
    } else if (a > b) {
      return 1;
    } else {
      return -1;
    }
  }

  ;
  alert(getComprasion(comparsionValues[0], comparsionValues[1]));
}); // Написать функцию, которая вычисляет факториал переданного ей числа

var taskFourBtnTwo = document.getElementById("task4.2");
taskFourBtnTwo.addEventListener("click", function () {
  var factorial = Number(prompt("Enter any number to get its factorial", 5));

  function getFactorial(a) {
    var b = 1;

    if (a === 0 || a === 1) {
      return b;
    } else {
      for (var i = 1; i !== a + 1;) {
        b *= i;
        i++;
      }

      return b;
    }

    ;
  }

  alert(getFactorial(factorial));
}); // Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

var taskFourBtnThree = document.getElementById("task4.3");
taskFourBtnThree.addEventListener("click", function () {
  var numToJoin = prompt("Enter any 3 number in the specified format to join them", "1, 4, 9").split(", ");

  function joinNumbers(a, b, c) {
    var joinedNumbers = [a, b, c].join("");
    return Number(joinedNumbers);
  }

  alert(joinNumbers(numToJoin[0], numToJoin[1], numToJoin[2]));
}); // Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

var taskFourBtnFour = document.getElementById("task4.4");
taskFourBtnFour.addEventListener("click", function () {
  var rectangleLengthValue = Number(prompt("Enter rectangle length", 3));
  var rectangleWidthValue = Number(prompt("Enter rectangle width to get it`s area", 5));

  function rectangleArea(rectangleLength, rectangleWidth) {
    var areaSize = 0;
    var squarePerimiter = 0;

    if (rectangleLength === undefined || rectangleLength === 0) {
      squarePerimiter = rectangleWidth * rectangleWidth;
      return squarePerimiter;
    } else if (rectangleWidth === undefined || rectangleWidth === 0) {
      squarePerimiter = rectangleLength * rectangleLength;
      return squarePerimiter;
    } else if (rectangleLength < 0 || rectangleWidth < 0) {
      return "incorrect value";
    } else {
      areaSize = rectangleLength * rectangleWidth;
      return areaSize;
    }
  }

  alert(rectangleArea(rectangleLengthValue, rectangleWidthValue));
}); // Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

var taskFourBtnFive = document.getElementById("task4.5");
taskFourBtnFive.addEventListener("click", function () {
  var numPerf = Number(prompt("Enter any number to check is it perfect or not", 28));

  function isNumberPerfect(a) {
    var res = 0;

    if (a <= 0) {
      return "Number should be an ineger that is bigger than 0";
    }

    for (var i = a - 1; i >= 1; i--) {
      if (a % i === 0) {
        res += i;
      }
    }

    if (res === a) {
      return "Number is perfect";
    } else {
      return "Number is not perfect";
    }
  }

  alert(isNumberPerfect(numPerf));
}); // Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

var taskFourBtnSix = document.getElementById("task4.6");
taskFourBtnSix.addEventListener("click", function () {
  var numStart = Number(prompt("Enter starting numeric range value", 1));
  var numEnd = Number(prompt("Enter ending numeric range value to check if there is perfect numbers", 29));

  function isNumberInRangePerfect() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var perfectNumbers = [];

    function isNumberPerfect(a) {
      var res = 0;

      if (a === 0) {
        return false;
      }

      for (var i = a - 1; i >= 1; i--) {
        if (a % i === 0) {
          res += i;
        }
      }

      if (res === a) {
        return "Number is perfect";
      } else {
        return "Number is not perfect";
      }
    }

    if (b > a && b !== 0) {
      for (var i = b; i >= a; i--) {
        if (isNumberPerfect(i) === "Number is perfect") {
          perfectNumbers.push(i);
        }
      }
    } else if (a > b && a !== 0) {
      for (var _i = a; _i >= b; _i--) {
        if (isNumberPerfect(_i) === "Number is perfect") {
          perfectNumbers.push(_i);
        }
      }
    } else if (a === b) {
      console.log(isNumberPerfect(a));
    }

    if (b > a && b === 0) {
      return false;
    } else if (a > b && a === 0) {
      return false;
    } else if (a === 0 && b === 0) {
      return false;
    }

    return perfectNumbers.join(',');
  }

  alert(isNumberInRangePerfect(numStart, numEnd));
}); // Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

var taskFourBtnSeven = document.getElementById("task4.7");
taskFourBtnSeven.addEventListener("click", function () {
  var time = prompt("Enter expected hours, minutes and seconds in the specified format to set time", "9, 15, 44").split(", ");

  function setTime(hours) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var sec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var date = new Date();
    date.setHours(hours, min, sec);
    return date.toLocaleString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  alert(setTime(time[0], time[1], time[2]));
}); // Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

var taskFourBtnEight = document.getElementById("task4.8");
taskFourBtnEight.addEventListener("click", function () {
  var timeToSeconds = prompt("Enter expected hours, minutes and seconds in the specified format to transform them into seconds", "10, 15, 44").split(", ");

  function toSeconds(hour) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var sec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return 3600 * hour + 60 * min + Number(sec);
  }

  alert(toSeconds(timeToSeconds[0], timeToSeconds[1], timeToSeconds[2]));
}); // Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

var taskFourBtnNine = document.getElementById("task4.9");
taskFourBtnNine.addEventListener("click", function () {
  var secondsToTime = prompt("Enter seconds to transform them into expected time", 5374);

  function secToHours() {
    var sec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var hours = Math.floor(sec / 60 / 60);
    var minutes = Math.floor(sec / 60) - hours * 60;
    var seconds = sec % 60;
    var formatted = [hours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')].join(':');
    return formatted;
  }

  alert(secToHours(secondsToTime));
}); // Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

var taskFourBtnTen = document.getElementById("task4.10");
taskFourBtnTen.addEventListener("click", function () {
  var timeOne = prompt("Enter expected hours, minutes and seconds in the specified format", "10, 15, 44").split(", ");
  var timeTwo = prompt("Enter expected hours, minutes and seconds in the specified format to get difference", "9, 10, 40").split(", ");

  function toSeconds(hour) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var sec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return 3600 * hour + 60 * min + Number(sec);
  }

  timeOne = toSeconds(timeOne[0], timeOne[1], timeOne[2]);
  timeTwo = toSeconds(timeTwo[0], timeTwo[1], timeTwo[2]);
  var newTime = timeOne - timeTwo;

  function secToHours() {
    var sec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var hours = Math.floor(sec / 60 / 60);
    var minutes = Math.floor(sec / 60) - hours * 60;
    var seconds = sec % 60;
    var formatted = [hours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')].join(':');
    return formatted;
  }

  alert(secToHours(newTime));
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51478" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-module.e31bb0bc.js.map