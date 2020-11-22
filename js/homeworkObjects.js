export const homeworkObjects = () => {
// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
const taskFiveBtnOne = document.getElementById("task5.1");
taskFiveBtnOne.addEventListener("click", () => {
  const car = {
    manufacturer: "Tesla",
    model: "Tesla Model x",
    "manufacture date": 2015,
    "averenge speed": 80,
  }
  function showInfo() {
    const info = [
      `Car information
      manufacturer: ${car.manufacturer} 
      model: ${car.model}
      manufacture date: ${car["manufacture date"]}
      averenge speed: ${car["averenge speed"]}`
    ]
    return info;
  }
  alert(showInfo());

  function roadTime() {
    let time = 0;
    let restTime = 0;
    const distance = Number(prompt("Enter distance to cross in km", 200));
    time = distance / car["averenge speed"];
    if(time <= 4) {
      return time;
    } else {
      restTime = Math.floor(time / 4);
      return time + restTime;
    }
  }
  alert(roadTime());
});

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.
const taskFiveBtnTwo = document.getElementById("task5.2");
taskFiveBtnTwo.addEventListener("click", () => {
  const fraction = {
    num: 2,
    denom: 4,
  }
  const firstValue = Number(prompt("Enter numerator", 2));
  const secondValue = Number(prompt("Enter denominator", 4));
  const fractionSecond = {
    num: firstValue,
    denom: secondValue,
  }
  let resultNum = 0;
  
  function lcm(a, b){
    let resultLCM = a * b
    while (a != 0 && b != 0){
      if (a > b && a % b === 0){
        resultLCM = a;
      } else if(a < b && b % a === 0) {
        resultLCM = b;
      } else if (a > b){
        a %= b
      } else {
        b %= a
      }
      return resultLCM;
    }
  }

  const sum = (a, b) => {
    let resValue = 0;
    let denomValue = 0;
    if( a.denom === b.denom) {
      resultNum = a.num + b.num;
      if(resultNum > a.denom) {
        resValue = Math.floor(resultNum / a.denom);
        resultNum -= resValue * a.denom;
        return `${resValue} ${resultNum}/${a.denom}`
      } else if(resultNum === a.denom) {
        return '1';
      } else {
        return `${resultNum}/${a.denom}`
      }
    }
    if(a !== b) {
      denomValue = lcm(a.denom, b.denom);
      resultNum = (a.num * (denomValue / a.denom)) + (b.num * (denomValue / b.denom));
      if(resultNum > denomValue) {
        resValue = Math.floor(resultNum / denomValue);
        resultNum -= resValue * denomValue;
        return `${resValue} ${resultNum}/${denomValue}`
      } else if(resultNum === denomValue) {
        return '1';
      } else {
        return `${resultNum}/${denomValue}`
      }
    }
  }
  alert(sum(fraction, fractionSecond));

  const minus = (a, b) => {
    let resValue = 0;
    let denomValue = 0;
    if( a.denom === b.denom) {
      resultNum = a.num - b.num;
      if(resultNum > a.denom) {
        resValue = Math.floor(resultNum / a.denom);
        resultNum -= resValue * a.denom;
        return `${resValue} ${resultNum}/${a.denom}`
      } else if(resultNum === a.denom) {
        return '1';
      } else {
        return `${resultNum}/${a.denom}`
      }
    }
    if(a.denom !== b.denom) {
      denomValue = lcm(a.denom, b.denom);
      resultNum = (a.num * (denomValue / a.denom)) - (b.num * (denomValue / b.denom));
      if(resultNum > denomValue) {
        resValue = Math.floor(resultNum / denomValue);
        resultNum -= resValue * denomValue;
        return `${resValue} ${resultNum}/${denomValue}`
      } else if(resultNum === denomValue) {
        return '1';
      } else {
        return `${resultNum}/${denomValue}`
      }
    }
  }
  alert(minus(fraction, fractionSecond));

  const mult = (a, b) => {
    let numValue = 0;
    let denomValue = 0;
    let resValue = 0;
    numValue = a.num * b.num;
    denomValue = a.denom * b.denom;
    if(numValue > denomValue) {
      resValue = Math.floor(numValue / denomValue);
      numValue -= resValue * denomValue;
      return `${resValue} ${numValue}/${denomValue}`
    } else if(numValue === denomValue) {
      return '1';
    } else {
      return `${numValue}/${denomValue}`
    }
  }
  alert(mult(fraction, fractionSecond));

  
  const div = (a, b) => {
    let numValue = 0;
    let denomValue = 0;
    let resValue = 0;
    numValue = a.num * b.denom;
    denomValue = a.denom * b.num;
    if(numValue > denomValue) {
      resValue = Math.floor(numValue / denomValue);
      numValue -= resValue * denomValue;
      return `${resValue} ${numValue}/${denomValue}`
    } else if(numValue === denomValue) {
      return '1';
    } else {
      return `${numValue}/${denomValue}`
    }
  }
  alert(div(fraction, fractionSecond));

  const reduction = (a, b) => {
    let gcd = 0;
    let resultNum = a;
    let resultDenom = b;
    if(a === b) {
      return '1';
    } else {
      while (resultNum != 0 && resultDenom != 0){
        resultNum > resultDenom? resultNum %= resultDenom : resultDenom %= resultNum;
        gcd = resultNum + resultDenom;
      }
    }
    return `${a / gcd}/${b / gcd}`;
  }
  alert(reduction(fractionSecond.num, fractionSecond.denom));
});


// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
const taskFiveBtnThree = document.getElementById("task5.3");
taskFiveBtnThree.addEventListener("click", () => {
  const time = {
    hours: 7,
    minutes: 13,
    seconds: 30,
  }

  function setTime() {
    const formattedTime = new Date();
    formattedTime.setHours(time.hours, time.minutes, time.seconds);
    return formattedTime.toLocaleString(navigator.language, {hour: '2-digit', minute: '2-digit', second: '2-digit'});
  }
  alert(setTime());

  const seconds = Number(prompt("Enter seconds to add", 45));
  function addSec() {
    const formattedTime = new Date();
    formattedTime.setHours(time.hours, time.minutes, time.seconds + seconds);
    return formattedTime.toLocaleString(navigator.language, {hour: '2-digit', minute: '2-digit', second: '2-digit'});
  }
  alert(addSec());
  
  const minutes = Number(prompt("Enter minutes to add", 45));
  function addMin() {
    const formattedTime = new Date();
    formattedTime.setHours(time.hours, time.minutes + minutes, time.seconds);
    return formattedTime.toLocaleString(navigator.language, {hour: '2-digit', minute: '2-digit', second: '2-digit'});
  }
  alert(addMin());
  
  const hours = Number(prompt("Enter hours to add", 5));
  function addHours() {
    const formattedTime = new Date();
    formattedTime.setHours(time.hours + hours, time.minutes, time.seconds);
    return formattedTime.toLocaleString(navigator.language, {hour: '2-digit', minute: '2-digit', second: '2-digit'});
  }
  alert(addHours());
});
}