export const homeworkClasses = () => {
  // 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
  // поле, хранящее радиус окружности;
  // get-свойство, возвращающее радиус окружности;
  // set-свойство, устанавливающее радиус окружности;
  // get-свойство, возвращающее диаметр окружности;
  // метод, вычисляющий площадь окружности;
  // метод, вычисляющий длину окружности.
  // Продемонстрировать работу свойств и методов.
  const taskSevenBtnOne = document.getElementById("task7.1");
  taskSevenBtnOne.addEventListener("click", () => {
    class Circle {
      constructor(params) {
        this.params = params;
      }
      get radius() {
        return alert(this.params);
      }
      set radius(value) {
        this.params = value;
      }
      get diameter() {
        return alert(2 * this.params);
      }
      getArea() {
        return alert(`area: ${3.14 * this.params * this.params}`);
      }
      getLenght() {
        return alert(`lenght: ${2 * 3.14 * this.params}`);
      }
    }
    const circle = new Circle(3);
    circle.getArea();
    circle.getLenght();
    circle.radius;
    circle.diameter;
  });
  // 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
  // поле, которое хранит цвет маркера;
  // поле, которое хранит количество чернил в маркере (в процентах);
  // метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
  // Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
  // Продемонстрировать работу написанных методов.
  const taskSevenBtnTwo = document.getElementById("task7.2");
  taskSevenBtnTwo.addEventListener("click", () => {
    class Marker {
      constructor(params) {
        this.color = params.color;
        this.fillLevel = params.fillLevel;
        this.text = params.text;
      }

      writeText() {
        let result = "";
        for (let i in this.text) {
          result += this.text[i];
          if (this.text[i] != " ") {
            this.fillLevel -= 0.5;
          }
          if (this.fillLevel === 0) {
            document.body.innerHTML = 'You need to fill you marker again'
            break;
          }
        }
        document.body.innerHTML = `<p style="color:${this.color}">${result}</p>`;
      }
    }

    class FillMarker extends Marker {
      constructor(params) {
        super(params);
      }
      reFill(answer) {
        if (answer === true) {
          return (this.fillLevel = 100);
        }
      }
    }
    //тест маркера
    const text = prompt("enter any text");
    const test = new Marker({ color: "red", fillLevel: 5, text: text });
    test.writeText();

    //тест перезаливки зависит от ответа confirm
    const filledMarker = new FillMarker({
      color: "red",
      fillLevel: 5,
      text: text,
    });
    const wantReFill = confirm("do you want to refill marker?");
    filledMarker.reFill(wantReFill);
    filledMarker.writeText();
  });
  // 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
  // Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
  // Создать объект класса EmpTable и вывести на экран результат работы метода getHtml()
  const taskSevenBtnThree = document.getElementById("task7.3");
  taskSevenBtnThree.addEventListener("click", () => {
    class Employee {
      constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.post = person.post;
        this.experience = person.experience;
      }
    }

    const stuffList = [
      new Employee({
        name: "Alex",
        age: "age: 25",
        post: "accauntant",
        experience: "experience: 2 years",
      }),
      new Employee({
        name: "Alexandra",
        age: "age: 33",
        post: "senior accauntant",
        experience: "experience: 11 years",
      }),
      new Employee({
        name: "Max",
        age: "age: 20",
        post: "accauntant",
        experience: "experience: 1 year",
      }),
    ];

    class EmpTable {
      constructor(stuffList) {
        this.array = stuffList;
      }

      getHtml() {
        let result = '<table border="2" bordercolor="red" style="margin: auto; background-color: white">';
        const table = "</table>";
        for (let i in this.array) {
          result += `<tr><td>${this.array[i].name}</td><td>${this.array[i].age}</td><td>${this.array[i].post}</td><td>(${this.array[i].experience})</td></tr>`;
        }
        document.body.innerHTML = `${result}${table}`;
      }
    }
    const stuffTable = new EmpTable(stuffList);
    stuffTable.getHtml();
  });
};
