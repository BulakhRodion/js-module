export const homeworkArrays = () => {
  // 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

  // Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
  // Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
  // Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
  const taskSixBtnOne = document.getElementById("task6.1");
  taskSixBtnOne.addEventListener("click", () => {
    const shoppingList = [
      {
        name: "apple",
        quantity: 8,
        bought_status: false,
      },
      {
        name: "banana",
        quantity: 4,
        bought_status: true,
      },
      {
        name: "lemon",
        quantity: 10,
        bought_status: false,
      },
    ];

    //FUNCTION 1
    function showShoppingList(array) {
      let formattedList = "";
      array.sort((a, b) =>
        a.bought_status === b.bought_status ? 0 : a.bought_status ? 1 : -1
      );
      for (let i in array) {
        if (array[i].bought_status === false) {
          array[i].bought_status = "need to buy";
        }
        if (array[i].bought_status === true) {
          array[i].bought_status = "already bought";
        }
        formattedList += `${array[i].name}: ${array[i].quantity}pcs - ${array[i].bought_status}\n`;
      }
      return formattedList;
    }
    alert(showShoppingList(shoppingList));

    //FUNCTION 2
    function addPurchase(array) {
      const newProduct = prompt("Enter name of your purchase item", "tomato");
      const quan = Number(prompt("Enter item quantity", 3));
      let num = null;
      for (let i = 0; i < array.length; i++) {
        if (newProduct === array[i].name) {
          num = i;
        }
      }

      //FUNCTION 3
      if (num === null) {
        return shoppingList.push({
          name: newProduct,
          quantity: quan,
          bought_status: true,
        });
      } else {
        array[Number(num)].quantity -= quan;
      }
      if (array[Number(num)].quantity <= 0) {
        return (array[Number(num)].bought_status = true);
      } else if (array[Number(num)].quantity > 0 && num !== null) {
        return (array[
          Number(num)
        ].bought_status += ` (${quan} already bought)`);
      }
    }
    addPurchase(shoppingList);
    alert(showShoppingList(shoppingList));

    //FUNCTION 4
    function Purchased(array) {
      const product = prompt("Enter name of item that you purchased", "lemon");
      let bought = null;
      for (let i = 0; i < array.length; i++) {
        if (product === array[i].name) {
          bought = i;
        }
      }
      return (array[bought].bought_status = true);
    }
    Purchased(shoppingList);
    alert(showShoppingList(shoppingList));
  });

  // 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

  // Распечатка чека на экран;
  // Подсчет общей суммы покупки;
  // Получение самой дорогой покупки в чеке;
  // Подсчет средней стоимости одного товара в чеке.
  const taskSixBtnTwo = document.getElementById("task6.2");
  taskSixBtnTwo.addEventListener("click", () => {
    let check = [
      {
        name: "plate",
        quantity: 4,
        price: 6.5,
      },
      {
        name: "glass",
        quantity: 2,
        price: 8.3,
      },
      {
        name: "bowl",
        quantity: 1,
        price: 14,
      },
    ];

    //FUNCTION 1
    function printCheck(array) {
      let formattedList = "";
      for (let i in array) {
        formattedList += `${array[i].name}: ${array[i].quantity}pcs - ${array[i].price}USD\n`;
      }
      return formattedList;
    }
    alert(printCheck(check));

    //FUNCTION 2
    function getFullPrice(array) {
      let formattedList = "";
      let fullPrice = 0;
      for (let i = 0; i < array.length; i++) {
        formattedList += `${array[i].name}: ${array[i].quantity}pcs - ${array[i].price}USD\n`;
        fullPrice += array[i].quantity * array[i].price;
      }
      formattedList += `Full price: ${fullPrice}USD`;
      return formattedList;
    }
    alert(getFullPrice(check));

    //FUNCTION 3
    function getMostExpensive(array) {
      let fullPrice = 0;
      let formattedList = "";
      let mostExpensive = array[0];
      for (let i = 0; i < array.length; i++) {
        formattedList += `${array[i].name}: ${array[i].quantity}pcs - ${array[i].price}USD\n`;
        fullPrice += array[i].quantity * array[i].price;
        if (
          array[i].price * array[i].quantity >
          mostExpensive.price * mostExpensive.quantity
        ) {
          mostExpensive = array[i];
        }
      }
      formattedList += `Full price: ${fullPrice}USD\n`;
      formattedList += `Most Expensive: ${mostExpensive.name} - ${
        mostExpensive.quantity * mostExpensive.price
      }USD`;
      return formattedList;
    }
    alert(getMostExpensive(check));

    //FUNCTION 4
    function getAveragePrice(array) {
      let formattedList = "";
      let fullPrice = 0;
      let totalQuantity = 0;
      let average = 0;
      for (let i = 0; i < array.length; i++) {
        formattedList += `${array[i].name}: ${array[i].quantity}pcs - ${array[i].price}USD\n`;
        fullPrice += array[i].quantity * array[i].price;
        totalQuantity += array[i].quantity;
        average = fullPrice / totalQuantity;
      }
      formattedList += `Average price: ${average.toFixed(2)}USD`;
      return formattedList;
    }
    alert(getAveragePrice(check));
  });

  // 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
  // Вывод на экран всех аудиторий;
  // Вывод на экран аудиторий для указанного факультета;
  // Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
  // Функция сортировки аудиторий по количеству мест;
  // Функция сортировки аудиторий по названию (по алфавиту).
  const taskSixBtnFour = document.getElementById("task6.4");
  taskSixBtnFour.addEventListener("click", () => {
    const audience = [
      {
        name: 'first',
        seatsQuantity: 14,
        department: 'english',
      },
      {
        name: 'second',
        seatsQuantity: 18,
        department: 'english',
      },
      {
        name: 'third',
        seatsQuantity: 19,
        department: 'french',
      },
      {
        name: 'fourth',
        seatsQuantity: 22,
        department: 'french',
      },
      {
        name: 'fifth',
        seatsQuantity: 24,
        department: 'russian',
      },
      {
        name: 'six',
        seatsQuantity: 20,
        department: 'russian',
      },
    ];
    const showAudience = (array) => {
      let result = '';
      for(let i in array) {
        result+=`${array[i].department}: audience - ${array[i].name} (${array[i].seatsQuantity} seats)\n`;
      }
      return result;
    }
    alert(showAudience(audience));
    
    const showDepartmentAudience = (array) => {
      const departmentName = prompt('Enter one of department`s name', 'english, french, russian');
      let result = '';
      let falseResult = '';
      for(let i in array) {
        if(departmentName === array[i].department) {
          result+=`${array[i].department}: audience - ${array[i].name} (${array[i].seatsQuantity} seats)\n`;
        } else {
          falseResult = 'theres no such department';
        }
      }
      if(result === '') {
        return falseResult;
      } else {
        return result;
      }
    }
    alert(showDepartmentAudience(audience));

    const groupA = {
      name: 'A',
      studentsQuantity: 16,
      department: 'english',
    }
    const groupB = {
      name: 'B',
      studentsQuantity: 18,
      department: 'french',
    }
    const showDepartment = (array, obj) => {
      let result = '';
      let falseResult = '';
      for(let i in array) {
        if(obj.department === array[i].department && obj.studentsQuantity <= array[i].seatsQuantity) {
          result+=`${array[i].department}: audience - ${array[i].name} (${array[i].seatsQuantity} seats)\n`;
        } else {
          falseResult = `there's not enough seat's in our audiences for this department`;
        }
      }
      if(result === '') {
        return falseResult;
      } else {
        return result;
      }
    }
    alert(showDepartment(audience, groupA));
    alert(showDepartment(audience, groupB));

    const sortQuantity = (array) => {
      array.sort((a, b) => a.seatsQuantity > b.seatsQuantity ? 1 : -1);
      let result = '';
      for(let i in array) {
        result+=`${array[i].department}: audience - ${array[i].name} (${array[i].seatsQuantity} seats)\n`;
      }  
      return result;
    }
    alert(sortQuantity(audience));
    
    const sortName = (array) => {
      array.sort((a, b) => a.name > b.name ? 1 : -1);
      let result = '';
      for(let i in array) {
        result+=`${array[i].department}: audience - ${array[i].name} (${array[i].seatsQuantity} seats)\n`;
      }  
      return result;
    }
    alert(sortName(audience));
  });
};
    
  
