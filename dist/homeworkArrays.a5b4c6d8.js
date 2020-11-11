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
})({"js/homeworkArrays.js":[function(require,module,exports) {
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
  }); // 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
  // Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
  // Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
  //  добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

  var taskSixBtnFour = document.getElementById("task6.4");
  taskSixBtnFour.addEventListener("click", function () {});
};

exports.homeworkArrays = homeworkArrays;
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58879" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/homeworkArrays.js"], null)
//# sourceMappingURL=/homeworkArrays.a5b4c6d8.js.map