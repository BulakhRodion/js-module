export const homeworkCycles = () => {
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
}