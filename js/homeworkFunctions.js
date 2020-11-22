export const homeworkFunctions = () => {
// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
const taskFourBtnOne = document.getElementById("task4.1");
taskFourBtnOne.addEventListener("click", () => {
  const comparsionValues = prompt("Enter two digits in the specified format to get comparsion", "1, 2").split(", ");
  function getComprasion(a, b){
    if (a == b) {
      return 0;
    } else if (a > b) {
      return 1;
    } else {
      return -1;
    }
  };
  alert(getComprasion(comparsionValues[0], comparsionValues[1]));
});

// Написать функцию, которая вычисляет факториал переданного ей числа
const taskFourBtnTwo = document.getElementById("task4.2");
taskFourBtnTwo.addEventListener("click", () => {
  const factorial = Number(prompt("Enter any number to get its factorial", 5));
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
  alert(getFactorial(factorial));
});

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
const taskFourBtnThree = document.getElementById("task4.3");
taskFourBtnThree.addEventListener("click", () => {
  const numToJoin = prompt("Enter any 3 number in the specified format to join them", "1, 4, 9").split(", ");
  function joinNumbers(a, b, c){
    const joinedNumbers = [a, b, c].join("");
    return Number(joinedNumbers);
  }
  alert(joinNumbers(numToJoin[0], numToJoin[1], numToJoin[2]));
});


// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
const taskFourBtnFour = document.getElementById("task4.4");
taskFourBtnFour.addEventListener("click", () => {
  const rectangleLengthValue = Number(prompt("Enter rectangle length", 3));
  const rectangleWidthValue = Number(prompt("Enter rectangle width to get it`s area", 5));
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
  alert(rectangleArea(rectangleLengthValue, rectangleWidthValue));
});

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
const taskFourBtnFive = document.getElementById("task4.5");
taskFourBtnFive.addEventListener("click", () => {
  const numPerf = Number(prompt("Enter any number to check is it perfect or not", 28));
  function isNumberPerfect(a){
    let res = 0;
    if ( a <= 0){
      return "Number should be an ineger that is bigger than 0";
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
  alert(isNumberPerfect(numPerf));
});

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
const taskFourBtnSix = document.getElementById("task4.6");
taskFourBtnSix.addEventListener("click", () => {
  const numStart = Number(prompt("Enter starting numeric range value", 1));
  const numEnd = Number(prompt("Enter ending numeric range value to check if there is perfect numbers", 29));
  function isNumberInRangePerfect(a=0, b=0){
    const perfectNumbers = [];
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
  alert(isNumberInRangePerfect(numStart, numEnd));
});

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
const taskFourBtnSeven = document.getElementById("task4.7");
taskFourBtnSeven.addEventListener("click", () => {
  const time = prompt("Enter expected hours, minutes and seconds in the specified format to set time", "9, 15, 44").split(", ");
    function setTime(hours,min = 0,sec = 0) {
        const date = new Date();
        date.setHours(hours, min, sec);
        return date.toLocaleString(navigator.language, {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    } 
   alert(setTime(time[0],time[1],time[2]));
});

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
const taskFourBtnEight = document.getElementById("task4.8");
taskFourBtnEight.addEventListener("click", () => {
  const timeToSeconds = prompt("Enter expected hours, minutes and seconds in the specified format to transform them into seconds", "10, 15, 44").split(", ");
    function toSeconds(hour,min = 0,sec = 0) {
      return (3600 * hour + 60 * min + Number(sec));
    } 
   alert(toSeconds(timeToSeconds[0],timeToSeconds[1],timeToSeconds[2]));
});

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
const taskFourBtnNine = document.getElementById("task4.9");
taskFourBtnNine.addEventListener("click", () => {
  const secondsToTime = prompt("Enter seconds to transform them into expected time", 5374);
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
   alert(secToHours(secondsToTime));
});

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
const taskFourBtnTen = document.getElementById("task4.10");
taskFourBtnTen.addEventListener("click", () => {
  let timeOne = prompt("Enter expected hours, minutes and seconds in the specified format", "10, 15, 44").split(", ");
  let timeTwo = prompt("Enter expected hours, minutes and seconds in the specified format to get difference", "9, 10, 40").split(", ");
    function toSeconds(hour,min = 0,sec = 0) {
      return (3600 * hour + 60 * min + Number(sec));
    } 
    timeOne = toSeconds(timeOne[0],timeOne[1],timeOne[2]);
    timeTwo = toSeconds(timeTwo[0],timeTwo[1],timeTwo[2]);
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
   alert(secToHours(newTime));
});
}