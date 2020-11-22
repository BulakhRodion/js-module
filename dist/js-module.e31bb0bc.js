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
})({"js/homeworkBasicsJs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeworkBasics = void 0;

var homeworkBasics = function homeworkBasics() {
  //Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
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
  });
};

exports.homeworkBasics = homeworkBasics;
},{}],"js/homeworkDataTypes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeworkDataTypes = void 0;

var homeworkDataTypes = function homeworkDataTypes() {
  // Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
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
  });
};

exports.homeworkDataTypes = homeworkDataTypes;
},{}],"js/homeworkCycles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeworkCycles = void 0;

var homeworkCycles = function homeworkCycles() {
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
  });
};

exports.homeworkCycles = homeworkCycles;
},{}],"js/homeworkFunctions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeworkFunctions = void 0;

var homeworkFunctions = function homeworkFunctions() {
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
};

exports.homeworkFunctions = homeworkFunctions;
},{}],"js/homeworkObjects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeworkObjects = void 0;

var homeworkObjects = function homeworkObjects() {
  // 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
  // Функция для вывода на экран информации об автомобиле;
  // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
  // Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
  var taskFiveBtnOne = document.getElementById("task5.1");
  taskFiveBtnOne.addEventListener("click", function () {
    var car = {
      manufacturer: "Tesla",
      model: "Tesla Model x",
      "manufacture date": 2015,
      "averenge speed": 80
    };

    function showInfo() {
      var info = ["Car information\n      manufacturer: ".concat(car.manufacturer, " \n      model: ").concat(car.model, "\n      manufacture date: ").concat(car["manufacture date"], "\n      averenge speed: ").concat(car["averenge speed"])];
      return info;
    }

    alert(showInfo());

    function roadTime() {
      var time = 0;
      var restTime = 0;
      var distance = Number(prompt("Enter distance to cross in km", 200));
      time = distance / car["averenge speed"];

      if (time <= 4) {
        return time;
      } else {
        restTime = Math.floor(time / 4);
        return time + restTime;
      }
    }

    alert(roadTime());
  }); // Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
  // Функция сложения 2-х объектов-дробей;
  // Функция вычитания 2-х объектов-дробей;
  // Функция умножения 2-х объектов-дробей;
  // Функция деления 2-х объектов-дробей;
  // Функция сокращения объекта-дроби.

  var taskFiveBtnTwo = document.getElementById("task5.2");
  taskFiveBtnTwo.addEventListener("click", function () {
    var fraction = {
      num: 2,
      denom: 4
    };
    var firstValue = Number(prompt("Enter numerator", 2));
    var secondValue = Number(prompt("Enter denominator", 4));
    var fractionSecond = {
      num: firstValue,
      denom: secondValue
    };
    var resultNum = 0;

    function lcm(a, b) {
      var resultLCM = a * b;

      while (a != 0 && b != 0) {
        if (a > b && a % b === 0) {
          resultLCM = a;
        } else if (a < b && b % a === 0) {
          resultLCM = b;
        } else if (a > b) {
          a %= b;
        } else {
          b %= a;
        }

        return resultLCM;
      }
    }

    var sum = function sum(a, b) {
      var resValue = 0;
      var denomValue = 0;

      if (a.denom === b.denom) {
        resultNum = a.num + b.num;

        if (resultNum > a.denom) {
          resValue = Math.floor(resultNum / a.denom);
          resultNum -= resValue * a.denom;
          return "".concat(resValue, " ").concat(resultNum, "/").concat(a.denom);
        } else if (resultNum === a.denom) {
          return '1';
        } else {
          return "".concat(resultNum, "/").concat(a.denom);
        }
      }

      if (a !== b) {
        denomValue = lcm(a.denom, b.denom);
        resultNum = a.num * (denomValue / a.denom) + b.num * (denomValue / b.denom);

        if (resultNum > denomValue) {
          resValue = Math.floor(resultNum / denomValue);
          resultNum -= resValue * denomValue;
          return "".concat(resValue, " ").concat(resultNum, "/").concat(denomValue);
        } else if (resultNum === denomValue) {
          return '1';
        } else {
          return "".concat(resultNum, "/").concat(denomValue);
        }
      }
    };

    alert(sum(fraction, fractionSecond));

    var minus = function minus(a, b) {
      var resValue = 0;
      var denomValue = 0;

      if (a.denom === b.denom) {
        resultNum = a.num - b.num;

        if (resultNum > a.denom) {
          resValue = Math.floor(resultNum / a.denom);
          resultNum -= resValue * a.denom;
          return "".concat(resValue, " ").concat(resultNum, "/").concat(a.denom);
        } else if (resultNum === a.denom) {
          return '1';
        } else {
          return "".concat(resultNum, "/").concat(a.denom);
        }
      }

      if (a.denom !== b.denom) {
        denomValue = lcm(a.denom, b.denom);
        resultNum = a.num * (denomValue / a.denom) - b.num * (denomValue / b.denom);

        if (resultNum > denomValue) {
          resValue = Math.floor(resultNum / denomValue);
          resultNum -= resValue * denomValue;
          return "".concat(resValue, " ").concat(resultNum, "/").concat(denomValue);
        } else if (resultNum === denomValue) {
          return '1';
        } else {
          return "".concat(resultNum, "/").concat(denomValue);
        }
      }
    };

    alert(minus(fraction, fractionSecond));

    var mult = function mult(a, b) {
      var numValue = 0;
      var denomValue = 0;
      var resValue = 0;
      numValue = a.num * b.num;
      denomValue = a.denom * b.denom;

      if (numValue > denomValue) {
        resValue = Math.floor(numValue / denomValue);
        numValue -= resValue * denomValue;
        return "".concat(resValue, " ").concat(numValue, "/").concat(denomValue);
      } else if (numValue === denomValue) {
        return '1';
      } else {
        return "".concat(numValue, "/").concat(denomValue);
      }
    };

    alert(mult(fraction, fractionSecond));

    var div = function div(a, b) {
      var numValue = 0;
      var denomValue = 0;
      var resValue = 0;
      numValue = a.num * b.denom;
      denomValue = a.denom * b.num;

      if (numValue > denomValue) {
        resValue = Math.floor(numValue / denomValue);
        numValue -= resValue * denomValue;
        return "".concat(resValue, " ").concat(numValue, "/").concat(denomValue);
      } else if (numValue === denomValue) {
        return '1';
      } else {
        return "".concat(numValue, "/").concat(denomValue);
      }
    };

    alert(div(fraction, fractionSecond));

    var reduction = function reduction(a, b) {
      var gcd = 0;
      var resultNum = a;
      var resultDenom = b;

      if (a === b) {
        return '1';
      } else {
        while (resultNum != 0 && resultDenom != 0) {
          resultNum > resultDenom ? resultNum %= resultDenom : resultDenom %= resultNum;
          gcd = resultNum + resultDenom;
        }
      }

      return "".concat(a / gcd, "/").concat(b / gcd);
    };

    alert(reduction(fractionSecond.num, fractionSecond.denom));
  }); // Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
  // Функция вывода времени на экран;
  // Функция изменения времени на переданное количество секунд;
  // Функция изменения времени на переданное количество минут;
  // Функция изменения времени на переданное количество часов. 
  // Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

  var taskFiveBtnThree = document.getElementById("task5.3");
  taskFiveBtnThree.addEventListener("click", function () {
    var time = {
      hours: 7,
      minutes: 13,
      seconds: 30
    };

    function setTime() {
      var formattedTime = new Date();
      formattedTime.setHours(time.hours, time.minutes, time.seconds);
      return formattedTime.toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    alert(setTime());
    var seconds = Number(prompt("Enter seconds to add", 45));

    function addSec() {
      var formattedTime = new Date();
      formattedTime.setHours(time.hours, time.minutes, time.seconds + seconds);
      return formattedTime.toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    alert(addSec());
    var minutes = Number(prompt("Enter minutes to add", 45));

    function addMin() {
      var formattedTime = new Date();
      formattedTime.setHours(time.hours, time.minutes + minutes, time.seconds);
      return formattedTime.toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    alert(addMin());
    var hours = Number(prompt("Enter hours to add", 5));

    function addHours() {
      var formattedTime = new Date();
      formattedTime.setHours(time.hours + hours, time.minutes, time.seconds);
      return formattedTime.toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    alert(addHours());
  });
};

exports.homeworkObjects = homeworkObjects;
},{}],"js/homeworkArrays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeworkArrays = void 0;

var homeworkArrays = function homeworkArrays() {
  // 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
  // Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
  // Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
  // Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
  var taskSixBtnOne = document.getElementById("task6.1");
  taskSixBtnOne.addEventListener("click", function () {
    var shoppingList = [{
      name: "apple",
      quantity: 8,
      bought_status: false
    }, {
      name: "banana",
      quantity: 4,
      bought_status: true
    }, {
      name: "lemon",
      quantity: 10,
      bought_status: false
    }]; //FUNCTION 1

    function showShoppingList(array) {
      var formattedList = "";
      array.sort(function (a, b) {
        return a.bought_status === b.bought_status ? 0 : a.bought_status ? 1 : -1;
      });

      for (var i in array) {
        if (array[i].bought_status === false) {
          array[i].bought_status = "need to buy";
        }

        if (array[i].bought_status === true) {
          array[i].bought_status = "already bought";
        }

        formattedList += "".concat(array[i].name, ": ").concat(array[i].quantity, "pcs - ").concat(array[i].bought_status, "\n");
      }

      return formattedList;
    }

    alert(showShoppingList(shoppingList)); //FUNCTION 2

    function addPurchase(array) {
      var newProduct = prompt("Enter name of your purchase item", "tomato");
      var quan = Number(prompt("Enter item quantity", 3));
      var num = null;

      for (var i = 0; i < array.length; i++) {
        if (newProduct === array[i].name) {
          num = i;
        }
      } //FUNCTION 3


      if (num === null) {
        return shoppingList.push({
          name: newProduct,
          quantity: quan,
          bought_status: true
        });
      } else {
        array[Number(num)].quantity -= quan;
      }

      if (array[Number(num)].quantity <= 0) {
        return array[Number(num)].bought_status = true;
      } else if (array[Number(num)].quantity > 0 && num !== null) {
        return array[Number(num)].bought_status += " (".concat(quan, " already bought)");
      }
    }

    addPurchase(shoppingList);
    alert(showShoppingList(shoppingList)); //FUNCTION 4

    function Purchased(array) {
      var product = prompt("Enter name of item that you purchased", "lemon");
      var bought = null;

      for (var i = 0; i < array.length; i++) {
        if (product === array[i].name) {
          bought = i;
        }
      }

      return array[bought].bought_status = true;
    }

    Purchased(shoppingList);
    alert(showShoppingList(shoppingList));
  }); // 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
  // Распечатка чека на экран;
  // Подсчет общей суммы покупки;
  // Получение самой дорогой покупки в чеке;
  // Подсчет средней стоимости одного товара в чеке.

  var taskSixBtnTwo = document.getElementById("task6.2");
  taskSixBtnTwo.addEventListener("click", function () {
    var check = [{
      name: "plate",
      quantity: 4,
      price: 6.5
    }, {
      name: "glass",
      quantity: 2,
      price: 8.3
    }, {
      name: "bowl",
      quantity: 1,
      price: 14
    }]; //FUNCTION 1

    function printCheck(array) {
      var formattedList = "";

      for (var i in array) {
        formattedList += "".concat(array[i].name, ": ").concat(array[i].quantity, "pcs - ").concat(array[i].price, "USD\n");
      }

      return formattedList;
    }

    alert(printCheck(check)); //FUNCTION 2

    function getFullPrice(array) {
      var formattedList = "";
      var fullPrice = 0;

      for (var i = 0; i < array.length; i++) {
        formattedList += "".concat(array[i].name, ": ").concat(array[i].quantity, "pcs - ").concat(array[i].price, "USD\n");
        fullPrice += array[i].quantity * array[i].price;
      }

      formattedList += "Full price: ".concat(fullPrice, "USD");
      return formattedList;
    }

    alert(getFullPrice(check)); //FUNCTION 3

    function getMostExpensive(array) {
      var fullPrice = 0;
      var formattedList = "";
      var mostExpensive = array[0];

      for (var i = 0; i < array.length; i++) {
        formattedList += "".concat(array[i].name, ": ").concat(array[i].quantity, "pcs - ").concat(array[i].price, "USD\n");
        fullPrice += array[i].quantity * array[i].price;

        if (array[i].price * array[i].quantity > mostExpensive.price * mostExpensive.quantity) {
          mostExpensive = array[i];
        }
      }

      formattedList += "Full price: ".concat(fullPrice, "USD\n");
      formattedList += "Most Expensive: ".concat(mostExpensive.name, " - ").concat(mostExpensive.quantity * mostExpensive.price, "USD");
      return formattedList;
    }

    alert(getMostExpensive(check)); //FUNCTION 4

    function getAveragePrice(array) {
      var formattedList = "";
      var fullPrice = 0;
      var totalQuantity = 0;
      var average = 0;

      for (var i = 0; i < array.length; i++) {
        formattedList += "".concat(array[i].name, ": ").concat(array[i].quantity, "pcs - ").concat(array[i].price, "USD\n");
        fullPrice += array[i].quantity * array[i].price;
        totalQuantity += array[i].quantity;
        average = fullPrice / totalQuantity;
      }

      formattedList += "Average price: ".concat(average.toFixed(2), "USD");
      return formattedList;
    }

    alert(getAveragePrice(check));
  }); // 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
  // Вывод на экран всех аудиторий;
  // Вывод на экран аудиторий для указанного факультета;
  // Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
  // Функция сортировки аудиторий по количеству мест;
  // Функция сортировки аудиторий по названию (по алфавиту).

  var taskSixBtnFour = document.getElementById("task6.4");
  taskSixBtnFour.addEventListener("click", function () {
    var audience = [{
      name: 'first',
      seatsQuantity: 14,
      department: 'english'
    }, {
      name: 'second',
      seatsQuantity: 18,
      department: 'english'
    }, {
      name: 'third',
      seatsQuantity: 19,
      department: 'french'
    }, {
      name: 'fourth',
      seatsQuantity: 22,
      department: 'french'
    }, {
      name: 'fifth',
      seatsQuantity: 24,
      department: 'russian'
    }, {
      name: 'six',
      seatsQuantity: 20,
      department: 'russian'
    }];

    var showAudience = function showAudience(array) {
      var result = '';

      for (var i in array) {
        result += "".concat(array[i].department, ": audience - ").concat(array[i].name, " (").concat(array[i].seatsQuantity, " seats)\n");
      }

      return result;
    };

    alert(showAudience(audience));

    var showDepartmentAudience = function showDepartmentAudience(array) {
      var departmentName = prompt('Enter one of department`s name', 'english, french, russian');
      var result = '';
      var falseResult = '';

      for (var i in array) {
        if (departmentName === array[i].department) {
          result += "".concat(array[i].department, ": audience - ").concat(array[i].name, " (").concat(array[i].seatsQuantity, " seats)\n");
        } else {
          falseResult = 'theres no such department';
        }
      }

      if (result === '') {
        return falseResult;
      } else {
        return result;
      }
    };

    alert(showDepartmentAudience(audience));
    var groupA = {
      name: 'A',
      studentsQuantity: 16,
      department: 'english'
    };
    var groupB = {
      name: 'B',
      studentsQuantity: 18,
      department: 'french'
    };

    var showDepartment = function showDepartment(array, obj) {
      var result = '';
      var falseResult = '';

      for (var i in array) {
        if (obj.department === array[i].department && obj.studentsQuantity <= array[i].seatsQuantity) {
          result += "".concat(array[i].department, ": audience - ").concat(array[i].name, " (").concat(array[i].seatsQuantity, " seats)\n");
        } else {
          falseResult = "there's not enough seat's in our audiences for this department";
        }
      }

      if (result === '') {
        return falseResult;
      } else {
        return result;
      }
    };

    alert(showDepartment(audience, groupA));
    alert(showDepartment(audience, groupB));

    var sortQuantity = function sortQuantity(array) {
      array.sort(function (a, b) {
        return a.seatsQuantity > b.seatsQuantity ? 1 : -1;
      });
      var result = '';

      for (var i in array) {
        result += "".concat(array[i].department, ": audience - ").concat(array[i].name, " (").concat(array[i].seatsQuantity, " seats)\n");
      }

      return result;
    };

    alert(sortQuantity(audience));

    var sortName = function sortName(array) {
      array.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
      });
      var result = '';

      for (var i in array) {
        result += "".concat(array[i].department, ": audience - ").concat(array[i].name, " (").concat(array[i].seatsQuantity, " seats)\n");
      }

      return result;
    };

    alert(sortName(audience));
  });
};

exports.homeworkArrays = homeworkArrays;
},{}],"js/homeworkClasses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeworkClasses = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var homeworkClasses = function homeworkClasses() {
  // 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
  // поле, хранящее радиус окружности;
  // get-свойство, возвращающее радиус окружности;
  // set-свойство, устанавливающее радиус окружности;
  // get-свойство, возвращающее диаметр окружности;
  // метод, вычисляющий площадь окружности;
  // метод, вычисляющий длину окружности.
  // Продемонстрировать работу свойств и методов.
  var taskSevenBtnOne = document.getElementById("task7.1");
  taskSevenBtnOne.addEventListener("click", function () {
    var Circle = /*#__PURE__*/function () {
      function Circle(params) {
        _classCallCheck(this, Circle);

        this.params = params;
      }

      _createClass(Circle, [{
        key: "getArea",
        value: function getArea() {
          return alert("area: ".concat(3.14 * this.params * this.params));
        }
      }, {
        key: "getLenght",
        value: function getLenght() {
          return alert("lenght: ".concat(2 * 3.14 * this.params));
        }
      }, {
        key: "radius",
        get: function get() {
          return alert(this.params);
        },
        set: function set(value) {
          this.params = value;
        }
      }, {
        key: "diameter",
        get: function get() {
          return alert(2 * this.params);
        }
      }]);

      return Circle;
    }();

    var circle = new Circle(3);
    circle.getArea();
    circle.getLenght();
    circle.radius;
    circle.diameter;
  }); // 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
  // поле, которое хранит цвет маркера;
  // поле, которое хранит количество чернил в маркере (в процентах);
  // метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
  // Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
  // Продемонстрировать работу написанных методов.

  var taskSevenBtnTwo = document.getElementById("task7.2");
  taskSevenBtnTwo.addEventListener("click", function () {
    var Marker = /*#__PURE__*/function () {
      function Marker(params) {
        _classCallCheck(this, Marker);

        this.color = params.color;
        this.fillLevel = params.fillLevel;
        this.text = params.text;
      }

      _createClass(Marker, [{
        key: "writeText",
        value: function writeText() {
          var result = "";

          for (var i in this.text) {
            result += this.text[i];

            if (this.text[i] != " ") {
              this.fillLevel -= 0.5;
            }

            if (this.fillLevel === 0) {
              document.body.innerHTML = 'You need to fill you marker again';
              break;
            }
          }

          document.body.innerHTML = "<p style=\"color:".concat(this.color, "\">").concat(result, "</p>");
        }
      }]);

      return Marker;
    }();

    var FillMarker = /*#__PURE__*/function (_Marker) {
      _inherits(FillMarker, _Marker);

      var _super = _createSuper(FillMarker);

      function FillMarker(params) {
        _classCallCheck(this, FillMarker);

        return _super.call(this, params);
      }

      _createClass(FillMarker, [{
        key: "reFill",
        value: function reFill(answer) {
          if (answer === true) {
            return this.fillLevel = 100;
          }
        }
      }]);

      return FillMarker;
    }(Marker); //тест маркера


    var text = prompt("enter any text");
    var test = new Marker({
      color: "red",
      fillLevel: 5,
      text: text
    });
    test.writeText(); //тест перезаливки зависит от ответа confirm

    var filledMarker = new FillMarker({
      color: "red",
      fillLevel: 5,
      text: text
    });
    var wantReFill = confirm("do you want to refill marker?");
    filledMarker.reFill(wantReFill);
    filledMarker.writeText();
  }); // 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
  // Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
  // Создать объект класса EmpTable и вывести на экран результат работы метода getHtml()

  var taskSevenBtnThree = document.getElementById("task7.3");
  taskSevenBtnThree.addEventListener("click", function () {
    var Employee = function Employee(person) {
      _classCallCheck(this, Employee);

      this.name = person.name;
      this.age = person.age;
      this.post = person.post;
      this.experience = person.experience;
    };

    var stuffList = [new Employee({
      name: "Alex",
      age: "age: 25",
      post: "accauntant",
      experience: "experience: 2 years"
    }), new Employee({
      name: "Alexandra",
      age: "age: 33",
      post: "senior accauntant",
      experience: "experience: 11 years"
    }), new Employee({
      name: "Max",
      age: "age: 20",
      post: "accauntant",
      experience: "experience: 1 year"
    })];

    var EmpTable = /*#__PURE__*/function () {
      function EmpTable(stuffList) {
        _classCallCheck(this, EmpTable);

        this.array = stuffList;
      }

      _createClass(EmpTable, [{
        key: "getHtml",
        value: function getHtml() {
          var result = '<table border="2" bordercolor="red" style="margin: auto; background-color: white">';
          var table = "</table>";

          for (var i in this.array) {
            result += "<tr><td>".concat(this.array[i].name, "</td><td>").concat(this.array[i].age, "</td><td>").concat(this.array[i].post, "</td><td>(").concat(this.array[i].experience, ")</td></tr>");
          }

          document.body.innerHTML = "".concat(result).concat(table);
        }
      }]);

      return EmpTable;
    }();

    var stuffTable = new EmpTable(stuffList);
    stuffTable.getHtml();
  });
};

exports.homeworkClasses = homeworkClasses;
},{}],"index.js":[function(require,module,exports) {
"use strict"; //IMPORTS

var _homeworkBasicsJs = require("./js/homeworkBasicsJs");

var _homeworkDataTypes = require("./js/homeworkDataTypes");

var _homeworkCycles = require("./js/homeworkCycles");

var _homeworkFunctions = require("./js/homeworkFunctions");

var _homeworkObjects = require("./js/homeworkObjects");

var _homeworkArrays = require("./js/homeworkArrays");

var _homeworkClasses = require("./js/homeworkClasses");

//IMPORT FUNCTIONS
(0, _homeworkBasicsJs.homeworkBasics)();
(0, _homeworkDataTypes.homeworkDataTypes)();
(0, _homeworkCycles.homeworkCycles)();
(0, _homeworkFunctions.homeworkFunctions)();
(0, _homeworkObjects.homeworkObjects)();
(0, _homeworkArrays.homeworkArrays)();
(0, _homeworkClasses.homeworkClasses)();
},{"./js/homeworkBasicsJs":"js/homeworkBasicsJs.js","./js/homeworkDataTypes":"js/homeworkDataTypes.js","./js/homeworkCycles":"js/homeworkCycles.js","./js/homeworkFunctions":"js/homeworkFunctions.js","./js/homeworkObjects":"js/homeworkObjects.js","./js/homeworkArrays":"js/homeworkArrays.js","./js/homeworkClasses":"js/homeworkClasses.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60174" + '/');

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