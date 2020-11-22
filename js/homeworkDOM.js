document.body.style.background = "rgb(181, 117, 124)";

//FIRST TASK START
// 1. Создать страницу, которая выводит нумерованный список песен:
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

window.onload = function createPlayList() {
  songsTaskTitle.style.color = "#ffffff";
  const songsList = document.getElementById("songsList");
  songsList.style.padding = "20px";
  for (let i = 0; i < playList.length; i++) {
    const li = document.createElement("li");
    li.innerText = `${playList[i].author}\n ${playList[i].song}`;
    songsList.appendChild(li);
    li.style.color = "#ffffff";
  }
};
//FIRST TASK END

//SECOND TASK START
// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
//  Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает
const modalWindowButton = document.getElementById("modalBtn");
modalWindowButton.addEventListener("click", () => {
  const modal = document.getElementById("modalWindow");
  const close = document.getElementById("close");
  modal.style.display = "block";

  close.onclick = function () {
    modal.style.display = "none";
  };
});
//SECOND TASK END

//THIRD TASK START
// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
function createLights() {
  const lights = document.getElementById("lightsList");
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.classList.add("lights-item");
    lights.appendChild(li);
  }
}
document.addEventListener("DOMContentLoaded", createLights);

let switcher = null;
const prev = document.getElementById("lightsBtnPrev");
prev.addEventListener("click", () => {
  reset();
  const list = document.getElementById("lightsList");
  if (switcher === null) {
    switcher = list.lastChild;
    switcher.style.background = "green";
    return;
  }

  switcher = switcher.previousSibling;

  if (switcher !== null) {
    switcher.style.background = "yellow";
  }
  if (switcher === list.firstChild) {
    switcher.style.background = "red";
  }
});

const next = document.getElementById("lightsBtnNext");
next.addEventListener("click", () => {
  reset();
  const list = document.getElementById("lightsList");
  if (switcher === null) {
    switcher = list.firstChild;
    switcher.style.background = "red";
    return;
  }

  switcher = switcher.nextSibling;

  if (switcher !== null) {
    switcher.style.background = "yellow";
  }
  if (switcher === list.lastChild) {
    switcher.style.background = "green";
  }
});

const reset = () => {
  const reset = document.getElementsByClassName("lights-item");
  for (let i = 0; i < reset.length; i++) {
    reset[i].setAttribute("style", "color:white");
  }
}
