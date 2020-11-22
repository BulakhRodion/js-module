// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать.
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
window.onkeydown = function (event) {
  const sentence = document.getElementsByClassName("text")[0];
  const textEditor = document.getElementsByClassName("editor")[0];
  if (event.ctrlKey && event.keyCode === 69) {
    event.preventDefault();
    sentence.setAttribute("style", "display: none");
    textEditor.setAttribute("style", "display: block");
    return;
  }
  if (event.ctrlKey && event.keyCode === 188) {
    //я не понял какая тут должна быть кнопка, так что поставил сочетание ктрл и запятой, потому что там пустота какаято "При нажатии Ctrl + , "
    event.preventDefault();
    sentence.setAttribute("style", "display: block");
    textEditor.setAttribute("style", "display: none");
    sentence.innerHTML = textEditor.value;
    return;
  }
};

// Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке.
// Учтите, что числовые значения должны сортироваться как числа, а не как строки.

const members = [
  {
    name: "Alex",
    age: 25,
    post: "accauntant",
    experience: "2 years",
  },
  {
    name: "Alexandra",
    age: 33,
    post: "senior accauntant",
    experience: "8 years",
  },
  {
    name: "Max",
    age: 20,
    post: "accauntant",
    experience: "1 year",
  },
  {
    name: "Sara",
    age: 19,
    post: "accauntant",
    experience: "1 year",
  },
  {
    name: "Mary",
    age: 27,
    post: "senior accauntant",
    experience: "6 years",
  },
];

const names = {
  0: "name",
  1: "age",
  2: "post",
  3: "expirience",
};

const table = document.getElementById("table");
table.setAttribute("border", "2");
table.style.border = "2px solid black";

const thead = document.createElement("thead");
table.appendChild(thead);
thead.id = "tableHead";

function createTableTitles(obj) {
  const tr = document.createElement("tr");
  thead.appendChild(tr);
  for (let i = 0; i < 4; i++) {
    const th = document.createElement("th");
    const title = document.createTextNode(obj[i]);
    th.appendChild(title);
    tr.appendChild(th);
    th.id = `title${i + 1}`;
  }
}
createTableTitles(names);

function createBody(array) {
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  tbody.id = "tableInner";

  for (let i in array) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j in array[i]) {
      const td = document.createElement("td");
      const text = document.createTextNode(array[i][j]);
      td.appendChild(text);
      tr.appendChild(td);
    }
  }
}

createBody(members);

function remove() {
  const elem = document.getElementById("tableInner");
  elem.remove();
}

// просто пробую разные сортировки
function sortByName(array) {
  array.sort(function (a, b) {
    const a1 = a.name.toUpperCase();
    const b2 = b.name.toUpperCase();
    return a1 == b2 ? 0 : a1 > b2 ? 1 : -1;
  });
}

function sortByPost(array) {
  array.sort(function (a, b) {
    if (a.post > b.post) {
      return 1;
    }
    if (a.post < b.post) {
      return -1;
    }
    return 0;
  });
}

function sortByExp(array) {
  array.sort(function (a, b) {
    if (a.experience > b.experience) {
      return 1;
    }
    if (a.experience < b.experience) {
      return -1;
    }
    return 0;
  });
}

function sortByAge(array) {
  array.sort(function (a, b) {
    return a.age - b.age;
  });
}

const title1 = document.getElementById("title1");
title1.onclick = () => {
  remove();
  createBody(members, sortByName(members));
};
const title2 = document.getElementById("title2");
title2.onclick = () => {
  remove();
  createBody(members, sortByAge(members));
};

const title3 = document.getElementById("title3");
title3.onclick = () => {
  remove();
  createBody(members, sortByPost(members));
};
const title4 = document.getElementById("title4");
title4.onclick = () => {
  remove();
  createBody(members, sortByExp(members));
};

// Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше

const resizeable = document.getElementById("resizeable");
const handle = document.getElementById("handle");

handle.addEventListener("mousedown", mousedown);

function mousedown(event) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let x = event.clientX;
  let y = event.clientY;

  function mousemove(event) {
    const coords = resizeable.getBoundingClientRect();
    resizeable.style.width = coords.width - (x - event.clientX) + "px";
    resizeable.style.height = coords.height - (y - event.clientY) + "px";

    x = event.clientX;
    y = event.clientY;
  }
  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}
