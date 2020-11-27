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
})({"js/homeworkEvents.js":[function(require,module,exports) {
// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать.
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
window.onkeydown = function (event) {
  var sentence = document.getElementsByClassName("text")[0];
  var textEditor = document.getElementsByClassName("editor")[0];

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
}; // Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке.
// Учтите, что числовые значения должны сортироваться как числа, а не как строки.


var members = [{
  name: "Alex",
  age: 25,
  post: "accauntant",
  experience: "2 years"
}, {
  name: "Alexandra",
  age: 33,
  post: "senior accauntant",
  experience: "8 years"
}, {
  name: "Max",
  age: 20,
  post: "accauntant",
  experience: "1 year"
}, {
  name: "Sara",
  age: 19,
  post: "accauntant",
  experience: "1 year"
}, {
  name: "Mary",
  age: 27,
  post: "senior accauntant",
  experience: "6 years"
}];
var names = {
  0: "name",
  1: "age",
  2: "post",
  3: "expirience"
};
var table = document.getElementById("table");
table.setAttribute("border", "2");
table.style.border = "2px solid black";
var thead = document.createElement("thead");
table.appendChild(thead);
thead.id = "tableHead";

function createTableTitles(obj) {
  var tr = document.createElement("tr");
  thead.appendChild(tr);

  for (var i = 0; i < 4; i++) {
    var th = document.createElement("th");
    var title = document.createTextNode(obj[i]);
    th.appendChild(title);
    tr.appendChild(th);
    th.id = "title".concat(i + 1);
  }
}

createTableTitles(names);

function createBody(array) {
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  tbody.id = "tableInner";

  for (var i in array) {
    var tr = document.createElement("tr");
    tbody.appendChild(tr);

    for (var j in array[i]) {
      var td = document.createElement("td");
      var text = document.createTextNode(array[i][j]);
      td.appendChild(text);
      tr.appendChild(td);
    }
  }
}

createBody(members);

function remove() {
  var elem = document.getElementById("tableInner");
  elem.remove();
} // просто пробую разные сортировки


function sortByName(array) {
  array.sort(function (a, b) {
    var a1 = a.name.toUpperCase();
    var b2 = b.name.toUpperCase();
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

var title1 = document.getElementById("title1");

title1.onclick = function () {
  remove();
  createBody(members, sortByName(members));
};

var title2 = document.getElementById("title2");

title2.onclick = function () {
  remove();
  createBody(members, sortByAge(members));
};

var title3 = document.getElementById("title3");

title3.onclick = function () {
  remove();
  createBody(members, sortByPost(members));
};

var title4 = document.getElementById("title4");

title4.onclick = function () {
  remove();
  createBody(members, sortByExp(members));
}; // Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше


var resizeable = document.getElementById("resizeable");
var handle = document.getElementById("handle");
handle.addEventListener("mousedown", mousedown);

function mousedown(event) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);
  var x = event.clientX;
  var y = event.clientY;

  function mousemove(event) {
    var coords = resizeable.getBoundingClientRect();
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63224" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/homeworkEvents.js"], null)
//# sourceMappingURL=/homeworkEvents.0947064f.js.map