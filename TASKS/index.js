//===================== JS Переменные===============================
// let num = 3;
// console.log(num);

// let a = 10;
// let b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// let c = 15;
// let d = 2;
// let result = c + d;
// console.log(result);

// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c);

// let a = 17;
// let b = 10;
// let c = (a - b);
// let d = 7;
// let result = c + d;
// console.log(result);

// JSR
// let admin;
// let name;
// name = 'Джон';
// admin = name;
// console.log(admin);

//===================== JS Типы данных ===============================
// console.log(NaN ** 0);
// let name = 'Ilya';
// console.log(`hello ${1}`);
// console.log(`hello ${'name'}`);
// console.log(`hello ${name}`);
// let name;
// console.log(name);
//===================== JS Операторы ===============================
// "" + 1 + 0 // '10'
// "" - 1 + 0 // -1
// true + false //1
// 6 / "3" // 2
// "2" * "3" //6
// 4 + 5 + "px" // '9px'
// "$" + 4 + 5 // '$45'
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // ' -9 5'
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2
//===================== JS Операторы сравнения ===============================
// console.log(10 % 6 === 1 ? true : false);
// let a = 30 % 2;
// console.log(a);
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(5 > 4); //true
// console.log("ананас" > "яблоко");// false
// console.log("2" > "12"); //false
// console.log(undefined == null);//true
// console.log(undefined === null); //false
// console.log(null == "\n0\n");// false
// console.log(null === +"\n0\n");//false

//===================== JS  Условные операторы ===============================
// let value = prompt('Какое "официальное" название Java Script?');
// if (value == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('ECMAScript');
// }

// let value = prompt('Введи число!');
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0)
// }

// resalt = (a + b < 4) ? 'Мало' : 'Много'

// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//         (login == '') ? 'Нет логина' :
//             "";

// let test = true;
// if (test) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// let test = false;
// console.log(test ? "Верно" : "Неверно");
// console.log(test != true ? "Верно" : "Неверно");

//===================== JS  логические операторы ===============================
// alert(null || 2 || undefined); // 2 оператор || выводит первое "правдивое" значение т.е true
// alert(alert(1) || 2 || alert(3)); // Ответ: сначала 1, затем 2.
// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

// Первый оператор ИЛИ || выполнит первый alert(1).
// Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного значения.
// Так как второй операнд 2 является истинным, то вычисления завершатся, результатом undefined || 2 будет 2, которое будет выведено внешним alert( .... ).
// Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет.
// let age = 33;
// if (age >= 14 && age <= 90) {
//     console.log("Ты еще так молода!")
// }
// if (!(age >= 14 && age <= 90)) {
//     console.log("Ты еще так молода!")
// }
// if (age < 14 || age > 90) {
//     console.log("!")
// }

// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//     let pass = prompt('Пароль?', '');

//     if (pass === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert("Я вас не знаю");
// }

// let a = 5;
// if (a > 0 && a < 5) {
//     console.log('Верно!')
// } else {
//     console.log('Неверно!')
// }

// let a = 3;
// let b = 5;
// if (a >= 1 && b >= 3) {
//     console.log(a + b)
// } else {
//     console.log(b - a)
// }

// let a = 5;
// let b = 6;
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('Верно!')

// } else {
//     console.log('Неверно!')
// }

// console.log(5 && 3);
// console.log(0 && 3);
// console.log(5 || 3);
// console.log(0 || 3);
// console.log(0 || 3 && 6);
// console.log(0 && 3 || 6);

//===================== JS  Циклы ===============================
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }

// }

// let i = 0;
// while (i < 3) {
//     console.log(`number: ${i}`);
//     i++;
// }


// let num;
// do {
//     num = prompt(' Введите число  больше 100!', 0)
// } while (num <= 100 && num)

// for (let i = 11; i <= 33; i++) {
//     console.log(i)
// }
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);
//===================== JS Конструкция "switch" ===============================
// let num = 5;
// switch (num) {
//     case 1: console.log('зима');
//         break;
//     case 2: console.log('весна');
//         break;
//     case 3: console.log('лето');
//         break;
//     case 4: console.log('осень');
//         break;


//     default: console.log('Нет совпадений');
// }

// let browser = "Chrome";
// if (browser === 'Edge') {
//     console.log("You've got the Edge!")
// } else if (browser === 'Edge' || browser === 'Chrome'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === "Opera") {
//     console.log('Okay we support these browsers too')
// } else {
//     console.log('We hope that this page looks ok!')
// }

// let number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0: console.log('Вы ввели число 0');
//         break;
//     case 1: console.log('Вы ввели число 0');
//         break;
//     case 2:
//     case 3:
//         console.log('Вы ввели число 2, а может и 3')
//         break;
// }

//===================== JS Функции ===============================

// function countEvenNumber(num) {
//     let arrayNum = [];
//     let count = 0;
//     for (let i = 1; i < num; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//             arrayNum.push(i);
//             count++;
//             if (count === 10) {
//                 break;
//             }
//         }
//     }

//     return arrayNum;
// }
// countEvenNumber(34);



// let n;
// function findNextSquare(sq) {
//     n = Math.sqrt(sq);// находим квадратный корень числа и присваиваем значение переменной n
//     console.log(n);
//     if (n % 2 === 0) {// проверяем, что полученное n тоже является целым числом
//         ++n; // делаем шаг, что бы получить следующее число, возведя которое в квадрат, получим целочисленный идеальный квадрат.
//         console.log(Math.pow(n, 2)) // возводим число в квадрат
//     } else if (n % 2 !== 0) { //если полученное n не является целым, возвращаем строку is not perfect
//         console.log((`-1 since ${sq} is not a perfect`))
//     }
// }
// findNextSquare(12);
// let n;
// function findNextSquare(sq) {
//     n = Math.sqrt(sq);// находим квадратный корень числа и присваиваем значение переменной n
//     console.log(n);
//     if (Math.sqrt(n) % 2 == 0) {// проверяем, что полученное корень квадратный из n тоже является целым числом
//         ++n; // делаем шаг, что бы получить следующее число, возведя которое в квадрат, получим целочисленный идеальный квадрат.
//         console.log(Math.pow(n, 2)) // возводим число в квадрат
//     } else if (Math.sqrt(n) % 2 !== 0) { //если полученной корень квадратный из n не является целым, возвращаем строку is not perfect
//         console.log((`-1 since ${sq} is not a perfect`))
//     }
// }
// findNextSquare(22);

// function findNextSquare(sq) {
//     let n = Math.sqrt(sq);
//     if (n % 1 == 0) {
//         console.log(Math.pow(n + 1, 2));
//     } else {
//         console.log(`-1 since ${sq} is not a perfect`);
//     }
// }
// findNextSquare(144);


// let a = 5;
// console.log(a <= 5 ? true : false);
// let num = 89;
// console.log(typeof (typeof num));

// console.log('3' != 3)
// let num = prompt(" Введи число");
// switch (num == 100) {
//     case 20: console.log('Тепло!');
//         break;
//     case 50: console.log("Горячо!!");
//         break;
//     case 100: console.log(" В точку!!");
//         break;
//     default: console.log(" Введи число, а не эту ерунду!")
// }

// function sum(a = 166, b = 56, c = 56) {
//     console.log(a + b + c);
// }
// sum();
//===================== JS Объекты ===============================
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Piter';
// delete user.name;

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// function findSum(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += salaries[key]
//     }
//     console.log(sum);
//     if (salaries == {}) {
//         console.log(0)
//     }
// }

// findSum(salaries);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }

//     }
//     console.log(obj)
// }
// multiplyNumeric(menu);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(obj['c']);
// console.log(obj.c);

// let obj = {
//     Коля: '1000',
//     Вася: '500',
//     Петя: '200',
// };
// console.log(`${obj.Коля} ${obj.Петя}`)

// let obj = {
//     1: 'понедельник',
//     2: 'вторник',
//     3: 'среда',
//     4: 'четверг',
//     5: 'пятница',
//     6: 'суббота',
//     7: 'воскресенье',
// }
// let day = 2;
// console.log(obj[day]);

// ---------------------------// Объекты-----------------------------------
// Object.assign()

// const userInfo = {
//     name: "Вася",
//     age: 34,
// }

// console.log(userInfo);
// userInfo.name = 'Юля';

// let obj1 = userInfo;
// // console.log(userInfo);
// let obj2 = userInfo;
// // console.log(obj2);
// obj2.name = 'Петя';
// // obj1.name = 'Оля'
// console.log(userInfo);
// console.log(obj1);
// console.log(obj2);
// console.log(obj1 === obj2);
// console.log(obj1 === userInfo);
// console.log(obj2 === userInfo);
// console.log(obj2['name'] === userInfo['name']);

// ---------------------------// Дублирование объектов-----------------------------------
// const userInfo = {
//     name: "Вася",
//     age: 34,
// }

// let user = userInfo;
// user.age = 26;

// let user2 = Object.assign({}, userInfo);
// user2.age = 18;
// console.log(user);
// console.log(user2);
// console.log(userInfo);
// console.log(user === userInfo);
// console.log(user2 === userInfo);
// console.log(user2 === user);

// let userInfo = {
//     name: "Юля",
//     age: 30,
//     57: ' значение свойства'

// }
// let myArray = []
// for (let key in userInfo) {

//     console.log(key)

// }
// console.log(Object.fromEntries(myArray)) // преобразовали массив в объект==========================
// console.log(myArray.map(el => el + '__'))//
// let myArray = Object.entries(userInfo);
// console.log(Object.keys(userInfo));
// console.log(Object.values(userInfo));
// console.log(typeof myArray);


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "Pete2": 300,
//     "Pete3": 300,
// };

// function count(obj) {
//     console.log(Object.keys(obj).length)

// }
// count(salaries);



// function sumSalaries(obj) {
//     let sum = 0;
//     for (let value of Object.values(obj)) {
//         if (Object.keys(obj).length == 0) {
//             console.log(0);
//         } else {
//             sum += value;
//         }
//     }
//     console.log(sum);
// }
// sumSalaries(salaries);


//====================================== Число=============================================

// let num1 = +prompt('Введите первое  число! ')
// let num2 = +prompt('Введите второе  число! ')
// console.log(num1 + num2)
// let num = 6.35;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.trunc(num));
// console.log((num * 10).toFixed(20));
// console.log(Math.round(6.35 * 10) / 10);

// function readNumber(num) {
//     if (!isFinite(num)) {
//         console.log('Введите число')

//     } else {
//         console.log(num)
//     }

// }

// let num = 58.858;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// ====================================Строки==================================================
// let str = 'Привет, я хочу стать разработчиком!'
// console.log(str.indexOf('хочу', 0))
// console.log(str.includes('я', 9))
// console.log(str.startsWith('П'))
// console.log(str.endsWith('!'))
// console.log(str.slice(0, 4))
// console.log(str.substring(0, 4))
// console.log(str.substr(0))


// function checkSpan(str) {
//     let newStr = str.toLowerCase()
//     if (newStr.includes('viagra', 0) || newStr.includes('xxx', 0)) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// checkSpan('buy ViAgRA now');
// checkSpan('free xxxxx');
// checkSpan("innocent rabbit");

// function truncate(str, maxLength) {
//     let newStr = ''
//     if (str.length > maxLength) {
//         newStr = str.slice(0, maxLength - 1)
//         console.log(`${newStr} ...`)
//     } else {
//         console.log(str)
//     }
// }

// function extractCurrencyValue(str) {
//     console.log(parseInt(str.match(/\d+/)))
// }

// extractCurrencyValue('pgjh120')

// let str = 'Привет, Мир!'
// console.log(str)

// let str1 = "Привет,"
// let str2 = "Мир!"
// console.log(`${str1} ${str2}`)

// let userName = 'Yulia';
// console.log(`Привет, %${userName}%!`)

// let userAge = 34;
// console.log(`Мне %${userAge}% года!`)

// let str = 'Я люблю маму';
// console.log(str.slice(2, 7));
// console.log(str.substring(2, 7));
// console.log(str.substr(2, 5));

// ============================================Конструктор ==========================================
// function User(name, age, adress) {
//     this.name = name;
//     this.age = age;
//     this.adress = adress;
//     this.sayHi = function () {
//         console.log(`Привет, меня зовут ${this.name}, мне ${this.age} года! Я живу в ${this.adress}.`)
//     }
//     return;
// };
// let user = new User('Юля', 34, 'Минск')
// console.log(user.sayHi());

// let userOne = new User('Yulia', 34, "Minsk")
// console.log(userOne.sayHi());

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += this.value;
//     }
// }
// let accumulator = new Accumulator(2);
// console.log(accumulator.read());

// function Calculator(a, b) {
//     this.read = function () {
//         this.a = a;
//         this.b = b;
//     };
//     this.sum = function () {
//         return this.a + this.b
//     };
//     this.mul = function () {
//         return this.a * this.b
//     }
// }
// let calculator = new Calculator(30, 50);
// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());




// function add(num1, num2) {
//     num1 = num1.toString().split('').reverse();
//     num2 = num2.toString().split('').reverse();

//     let max = Math.max(num1.length, num2.length)
//     let newArr = [];

//     for (let i = max - 1; i >= 0; i--) {

//         newArr.push(Number(num1[i] || 0) + Number(num2[i] || 0))

//     }

//     let sum = newArr.reduce((acc, el) => acc.toString() + el.toString())

//     return Number(sum)

// }
// add(122, 81);


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "Pete2": 300,
//     "Pete3": 300,
//     'sayHi': () => {
//         console.log('Гав-гав!');
//     }
// };
// console.log(`Привет, я создала объект ${salaries}`);
// let user = salaries;
// salaries.sayHi();
// let newArr = Object.assign({}, salaries);
// let newArr2 = { ...salaries };
// let newArr3 = JSON.parse(JSON.stringify(salaries));


// console.log(newArr3 === salaries);
// console.log(user === salaries);
// console.log(newArr === salaries);
// console.log(newArr2 === salaries);
// // console.log(newArr);
// // console.log(salaries);
// let arrKey = Object.keys(salaries);
// let arrVal = Object.values(salaries);
// let arrEntries = Object.entries(salaries);

// // console.log(arrKey);
// // console.log(arrVal);
// console.log(isNaN(NaN));
// console.log(45645634346n);

// function sayHi() {
//     return "ГАв-гав"
// }
// console.log(sayHi());


// function strCount(obj) {
//     let count = 0;
//     let newArr = [];
//     for (let key in obj) {
//         if (typeof obj[key] == 'string') {
//             newArr.push(obj[key])
//             // console.log(obj[key]);
//             // count++;
//         } else if (typeof obj[key] == 'object') {
//             for (let i in obj[key]) {
//                 newArr.push(obj[key][i])
//                 // if (typeof obj[key][i] == 'string')

//                 // console.log(obj[key][i]);

//             }
//         }
//         for (let value of newArr) {
//             if (typeof value == 'string') {
//                 // console.log(value)
//                 count++

//             }
//         }


//     }

//     console.log(newArr)

//     return count;


// }

// strCount({
//     first: '1',
//     second: '2',
//     third: false,
//     fourth: ['anytime', 2, 3, 4],
//     fifth: null,
//     sixth: undefined,
//     seventh: {}
// }
// ['1', 2, '3', '4']
// [
//     '1',
//     2,
//     '3',
//     ['and another', 2, 'and again', [undefined, 'and again'], false],
//     '4'
// ])

// const user = {
//     name: 'Yulia',
//     age: 34,
//     phone: 54840540650,
//     adress: 'Minsk',
//     sayhi: function () {
//         console.log('Hi')
//     }
// }

// function User(name, phone, adress) {
//     this.name = name
// }

// let user = {
//     name: 'Blad',
//     age: 23,
//     talents: ['js', 'html', 'css'],
//     sayName: () => this.name,
//     sayAge: function () {
//         return this.age
//     },
//     sayTalents: function () {
//         let fn = () => this.talents;
//         return fn()
//     },

// };
// console.log(user.sayAge());
// console.log(user.sayName());
// console.log(user.sayTalents());

// const user2 = Object.assign(user);
// const user3 = Object.assign({}, user);
// const user4 = { ...user }
// const user5 = JSON.parse(JSON.stringify(user))
// const user6 = Object.keys(user)
// const user7 = Object.values(user)
// const user8 = Object.entries(user)
// console.log(user === user2);
// console.log(user === user3);
// console.log(user === user4);
// console.log(user === user5);
// console.log(user6);
// console.log(user7);
// console.log(user8);
// console.log(user);


//================================== Массивы. Методы массивов=======================================


// let arr = ['a', 'b', 'c']
// console.log(arr.map((item) => item));
// for (let i of arr) {
//     console.log(i)
// }

// let arr2 = ['a', 'b', 'c', 'd']
// console.log(arr2.map((item) => item).join('+').split('').fill(',', 3, 4).join(' '));
// console.log((`${arr2[0]} + ${arr2[1]}, ${arr2[2]} + ${arr2[3]}`));

// let arr3 = [2, 5, 3, 9]
// let newArr = []
// newArr.push(arr3[0] * arr3[1], arr3[2] * arr3[3]);
// let result = newArr.reduce((acc, val) => acc + val)
// console.log(result);


// const myArr = ['yulia', 'rita', 'alise', 'raf']
// const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const myArr3 = [10, 11, 12, 13, 14]
// const myArr4 = [15, 16, 17, 18, 19, 120]
// let myString = 'I am a developer !'
// myArr4[0] = 33
// console.log(myArr4.toString());


//   =======================================================методы============================================================
// console.log(myArr4.includes('yes'))// ищет элемент с позиции и возвращает  true/false
// console.log(myArr4.indexOf(16))// ищет элемент с позиции и возвращает  индекс элемента или -1, если такого нет!


// console.log(myArr4.find((item, index, array) => item > 4)) // возвращает первый элемент, удовлетворяющий условию, в противном случаи undefined
// console.log(myArr4.forEach((item, index, array) => item )) // перебирает элементы, никогда ничего не возращает undefined
// console.log(myArr4.filter((item, index, array) => item < 15))// возвращает массив элементов, удовлетворяющих условию или []
// console.log(myArr4.map((item, index, array) => item + item)) //возвращает новый массив с  новыми элементами

// console.log(myArr4.join(' ')); из массива делает строку, параметр разделитель
// console.log(myString.split(',')); //  из строки делает массив, принимает разделитель
// console.log(myArr3.fill('9', 0));// заполняет массив определенным элементом от индекса до индекса

// console.log(myArr4.splice(4, 2, 1111));// возвращает массив из удленыых элементов,======= МЕНЯЕТ СТАРЫЙ МАССИВ ==========
// console.log(myArr2.slice(0, 5));// возвращает копию массива от start  до end(включая end ),======= НЕ МЕНЯЕТ СТАРЫЙ МАССИВ ==========

// console.log(myArr4.sort((a, b) => b - a));//  принимает параметры тeкущий элемент и следующий элемент . сортирует по UNICODE
// console.log(myArr4.reduce((acc, item,index, array) => acc + item, 400));  соединяет все элементы в одно значение, вернет сумму всех чисел

// console.log(Array.isArray(myString));
// const concatArray = myArr2.concat(myArr3).reverse()
// console.log(concatArray)



// console.log(typeof myArr2.toString())

//  перебор массива цикл for
// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }

// // пербор массива цикл for of
// for (let i of myArr) {
//     console.log(i);
// }

// myArr2.forEach((item, index, array) => {
//     console.log({ item, index });
//     console.log(item);
// })

// перебор массива и замена первой буквы на заглавную
// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i] = myArr[i][0].toUpperCase() + myArr[i].slice(1).toLowerCase());
// }

// метод forEach
// myArr.forEach((item, index, arr) => console.log(item[0].toUpperCase() + item.slice(1).toLowerCase()))

//  метод map()
// let correctName = myArr.map((item, index, arr) => item[0].toUpperCase() + item.slice(1).toLowerCase())
// console.log(correctName);
// console.log(myArr);

// const user = {
//     name: "Yulia",
//     age: 34,
//     phone: 845034583,
//     sayHi: function sayHi(){

//     }
// }
// const user2 = Object.assign({}, user)
// console.log(user2 === user);
// let str = 'привет, я хочу стать front-end разработчиком!'
// let a = []
// user.forEach((item) => {
//     a.push(item + 1)
// })
// console.log(a);

// console.log(user.slice(-4))
// console.log(user.splice(0, 2, '4444'))
// console.log(user)
// let user2 = user.concat(user)
// console.log(user2);
// console.log(user.indexOf(87, 2))
// console.log(user.includes(87))
// console.log(user.find((item, index, array) => item > 80))
// console.log(user.filter((item, index, array) => item > 100))
// console.log(user.map((item, index, array) => item * 2))
// console.log(user.sort((a, b) => b - a))
// console.log(str.split('-').length)
// console.log(user.join('======'))
// console.log(user.fill('======='));
// console.log(Array.isArray(str));



// ======================================================Задачи========================================================================


//  Зададча 2
// function deleteVowels(str) {
//     let phrase = str.replace(/[а,у,о,е,ё,и,о,ы,э,я]/gi, '')
//     console.log(phrase)
// }
// deleteVowels('Этот сайт для лузеров ЛОЛ!')

// Задача 3

// let list = "4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"
// let a = list.split(' ')
// console.log(a[0], a.at(-1))

// console.log(Math.max(...a).toString(), Math.min(...a).toString());

// console.log(Math.max(...a));
// Задача 4
// const accum = (str) => str.split('').map((el, index) => el.toUpperCase() + el.repeat(index)).join('-');
// console.log(accum('abcd'));

// Задача 5
// let correctPin = (str) => str == +str && (str.length === 4 || str.length === 6)
// console.log(correctPin('12736'))

// Задача 6

function printer_error(str) {
    if (str.length >= 1 && !str.match(/[0-9]/g)) {
        return String(str.match(/[n-z]/ig).length / str.length)
    } else {
        return 'неправильные данные!'
    }
}
console.log(printer_error('45aaaxbbbbyyhwawiwjjjwwm'))
// Задача 7
// let str = 'The world is not what we think it is';
// String.prototype.toJadenCase =  function(str)  {
//    return  this.split(' ').map((item)=>item.slice(0,1).toUpperCase()+item.slice(1)).join(' ')
// }
// console.log(str.toJadenCase());
// Задача 8
// function minMaxItem(arr) {
//     let newArr = []
//     newArr.push(Math.min(...arr))
//     newArr.push(Math.max(...arr))
//     return newArr
// }

// console.log(minMaxItem([-5, -7, -2, 5]))
// Задача 9
// const simple = (str) => Math.min(...str.split(' ').map(item => item.length));
// console.log(simple('Привет, я Юля!'));

// Задача 10
// const findNeedle = (array) => {
//     let indexNeedle = array.indexOf('needle')
//     return (`"Нашел иголку на позиции ${indexNeedle}"`)
// }
// console.log(findNeedle(["bla", "wekmvever", "needle", "bntyn", "qwd", "qfverv", "rtbrtb"]))

// Задача 11
// let myArr = [-1, 2, -3, 4, 5]
// function invert(arr) {
//     let newArr = []
//     for (let value of arr) {
//         if (value < 0) {
//             newArr.push(value * -1)
//         } else {
//             newArr.push(value * -1)
//         }

//     }
//     return newArr

// }
// console.log(invert(myArr))

// const invert2 = (arr) => arr.map((item) => item < 0 ? item * (-1) : item * (-1))
// console.log(invert2(myArr));

//  Задача 12

// const arrayDiff = (arr1, arr2) => arr1.filter((el) => !arr2.includes(el))
// console.log(arrayDiff([1, 2, 2, 2, 3, 4], [2, 3]))
// console.log(arrayDiff([1, 2], [1]))

// Задача 13
// function getString(n) {
//     let arr = []
//     for (let i = n; i >= 1; i--) {
//         arr.push(i)
//     }
//     return arr.join(',')
// }
// console.log(getString(5))
// Задача 14
// const sumMin = (arr) => {
//     const newArr = arr.filter((item) => item > 0)
//     if (newArr.length >= 4) {
//         newArr.sort((a, b) => a - b)
//     } else {
//         return 'мало положительных чисел'
//     }

//     return newArr.slice(0, 2).reduce((acc, el) => acc + el)

// }
// console.log(sumMin([12, 423, 54, 1235, 3, 15, 2, 52]))
// Задача 15
//


// function sortStr(str) {
//     const arrNum = str.match(/[1-9]/g).sort()
//     str = str.split(' ')
//     let newStr = ''
//     for (let value of arrNum) {
//         for (let k of str) {
//             if (k.includes(value)) {
//                 newStr += k + ' '
//             }
//         }

//     }
//     newStr = newStr.trim()
//     return newStr
// }
// console.log(sortStr('is2 Thi1s T4est 3a'))

//  Задача 16
// const reversString = (str) => str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// console.log(reversString('This is an example!'));
// console.log(arr);

// Задача 17
// const solition = (str) => {
// for(let char of str){
//     if(char === char.toUpperCase()){
//          str = str.replace(char, '_' + char.toLowerCase())
//         }
// }
// return str
// }
// console.log(solition('redevCourses'))


// Задача 18
// const palindrome = (str) =>  {
// let arr =  str.split('')
// return arr.join('') === arr.reverse().join('')
// }

// console.log(palindrome('43211234'))
// Задача 19
// function countCats(arr) {
//     let count = 0
//     let newArr = arr.flat(Infinity)
//     for (let key of newArr) {
//         if (key === '^^') {
//             count++
//         } else if (key !== '^^') {
//             count
//         }
//     }

//     return count
// }
// console.log(countCats([[0, 1, "^^"], [9, "^^", 2], ["^^", 8, 7]]))

// function countCats(arr) {
//     let newArr = arr.flat(Infinity).filter((item) => item === '^^')
//     return newArr.length

// }
// console.log(countCats([[0, 1, "^^"], [9, "^^", 2], ["^^", 8, 7]]))

// Задача 20
// function factorial  (n, res) {
//     res = res || 1
//  if(!n){
//     return res

//  }else{
//     return factorial(n - 1, res * n)
//  }
// }
// console.log(factorial(5))
// function f (n,res){
// res =res|| 1
//     for(let i = 1 ; i<=n; i++){

// res = res*i

//     }
//     return res
// }
// console.log(f(5))
// Задача 21
// const createDreamTeam = array => {
//     const arrStrings = array.filter((item) => typeof item === 'string');
//     console.log(arrStrings)
//     const arrFirstLetters = arrStrings.map((item) => item[0])
//     return arrFirstLetters
//         ? arrFirstLetters.sort().join('')
//         : false
// }



// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', null, 'Max']))
// console.log(createDreamTeam(['Olivia', true, 1111, NaN, 'Lily', 'Oscar']))
// console.log(typeof NaN)
// console.log(typeof null)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof Infinity)

// Задача 22
// function transform(arr) {
//     if (arr.includes('--double-next')) {
//         return arr.map((item, index, array) => item === '--double-next' ? array[index + 1] : item)
//     } else if (arr.includes('--double-prev')) {
//         return arr.map((item, index, array) => item === '--double-prev' ? array[index - 1] : item)
//     } else if (arr.includes('--discard-next')) {
//         arr.map((item, index, array) => item === '--discard-next' ? array.splice(index, 2) : item)
//         return arr
//     } else if (arr.includes('--discard-prev')) {
//         arr.map((item, index, array) => item === '--discard-prev' ? array.splice(index - 1, 2) : item)
//         return arr
//     }

// }
// console.log(transform([1, 3, '--double-next', 4]))
// console.log(transform([1, 3, '--double-prev', 4]))
// console.log(transform([1, 3, '--discard-next', 4]))
// console.log(transform([1, 3, '--discard-prev', 4]))


// let a = [6, 8, 4, 3, 2,]
// function f(arr) {
//     if (a.includes(8)) {
//         let ind = arr.indexOf(8)
//         console.log(arr.splice(ind, 1))
//         console.log(arr)
//     }

// }
// console.log(f(a))
// Задача 24
// const isUpperCase = (str, character) => str[character] === str[character].toUpperCase() ? true : false
// console.log(isUpperCase('tasks Java Script', 6))
// задача 25
// function capitalizeFirstLetter(str) {
//     return str.slice(0, 1).toUpperCase() + str.slice(1)
// }

// console.log(capitalizeFirstLetter('пример строки'))

// Задача 26

// let str = 'abc def ghi jkl mno pqr stu';

// String.prototype.startsWith = function(start) {
//     return this.substring(0,start.length)===start
// };

// console.log(str.startsWith('abc'))
// Задача 27
// let str = 'abc def lom abc abc def'
// const replaceAll = (find, replace, string) => {
//     return str.split(' ').map((item) => item == find ? replace : item)
// }
// console.log(replaceAll('abc', 'X', str))

// Задача 28

// let str = "вишня, груша, слива, груша";

// function removeDuplicate(str) {
// let arr = str.split(',')
// let set = new Set(arr)
// let newString = Array.from(set).join(',')
// return newString
// };

// console.log(removeDuplicate(str));

//  Задача 29
// function unique_letters(str) {
//     str = new Set(str)
//     return Array.from(str).join('')
// };

// console.log(unique_letters('anaconda'))

// Задача 30
// const alphabetize = str => str.split('').sort().join('')
// console.log(alphabetize('Europe'))


// Задача 31
// let str = "Сила тяжести приложена к центру масс тела";

// function cutString(str, n) {
//     return str.split(' ').splice(0, n).join(' ')
// };

// console.log(cutString(str, 5))

//  Задача 32
// let str = "    Pasha is a good      boy     "

// function strip(str) {
//     return str.split(' ').filter((item) => !item == ' ').join(' ')
// };

// console.log(strip(str))

// Задача 33

// function comparison(str1, str2) {
//     return str1.toLowerCase() === str2.toLowerCase()
// };

// Задача 34
// let str = "Каждый охотник желает знать";
// let str1 = "скрипт";
// let str2 = "знать";
// String.prototype.endsWith = function(substring) {

// return this.substr(this.length-substring.length) === substring
// };
// console.log(str.endsWith(str2))

// console.log(comparison('string', 'StRiNg'))
// Задача 35
// let vegetables = ['Капуста', 'Репа', 'Редиска'];
// function arrayClone(arr) {
//     let newArr = arr.slice()
//     return newArr
// }
// console.log(arrayClone(vegetables))

// Задача 36
// function colonOdd (num) {
// num = num.toString()

// return num.split('').map((item,index,array)=>array[index] % 2 === 1 && array[index+1] %  2 === 1? item + ':' : item).join('')


// }

// console.log(colonOdd(55639217))

// Задача 37
// let arr = ["php", "php", "css", "css",
//     "script", "script", "html", "html", "java"
// ];

// function removeDuplicates(arr) {
//     let array = new Set(arr);
//     return Array.from(array)
// }

// console.log(removeDuplicates(arr));

// Задача 38
// let array1 = [1, 2, 3, 4, 5];

// let array2 = [4, 5, 6];
// let array3 = []
// const sumArray = (arr1, arr2) => {
//     let num;
//     if (arr1.length > arr2.length) {
//         num = arr1.length;
//     } else {
//         num = arr2.length
//     }
//     for (let i = 0; i < num; i++) {

//         if (arr1[i] === 'undefined') {
//             arr1.push(0);
//             console.log(arr1[i])
//         } else if (arr2[i] === 'undefined') {

//             arr2.push(0);
//             console.log(arr2[i])
//         }
//         array3.push(arr1[i] + arr2[i]);
//     }
//     return array3
// }

// function f(arr1, arr2) {
//     arr1.length > arr2.length ? arr2.length = arr1.length : arr1.length = arr2.length
//     console.log(arr1)
//     console.log(arr2)
//     arr1.filter((item, index, array) => item === "undefined" ? arr1.push(0) : item)
//     console.log(arr1)
//     return arr2.filter((item, index, array) => item === "undefined" ?  : item)
//     console.log(arr2)
//     return arr1.map((item, index) => item + arr2[index])
// }
// console.log(f(array1, array2))



// Задача 39
// let arr1 = [1, [2, [3, [4]]]];

// let arr2 = [1, [2], [3, [[4]]], [5, 6]];

// function expand(arr) {
//     let newArr = arr.flat(Infinity)
//     return newArr.toString()
// }
// console.log(expand(arr2))

// Задача 40
// let array = ['a', 'a', 'z', 'z', 'z', 'a', 'z', 'c', 'z',];

// function f(arr) {

//     let map = new Map();
//     for (let value of arr) {
//         let counter = map.get(value);
//         map.set(value, counter ? counter + 1 : 1)

//     }


// }


// function a(arr) {
//     const obj = {};
//     let count = 0;
//     let max = 0;
//     let el = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] != true) {
//             for (let k = i; k < arr.length; k++) {
//                 if (arr[i] == arr[k]) {
//                     count++;
//                 }

//             }
//             if (count > max) {
//                 max = count;
//                 el = arr[i]
//             }
//             count = 0;
//         }
//         obj[arr[i]] = true;
//     }
//     return el
// }

// console.log(a(array))
// Задача 41

// function sum (arg){
//     const countSum = function (arg, res){
//     if(arg === undefined)
//     return res;
//         res = (res || 0) + arg
//         return function (arg){
//             return countSum(arg,res);
//         }
//     }
//     return countSum(arg)
// }


// console.log(sum(1)(2)(3)())

// function sum (n){
//     return (f)=> {
//         n
//         return f
//     }
//     return f
// }
// console.log(sum(1))
//  Задача 42
// const arrStrings = ([...arg]) => {
//     const newArr = arg.map((item, index, arr) => {
//         item.toLowerCase().split('').sort().join('')
//         if (item === item) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return newArr
// }
// console.log(arrStrings(['кто', "кто", 'кт']))
// const arr = ['кит', "котt"]
// function f(array) {
//     return array.filter((item) => item === item ? item : '---')
// }
// console.log(f(arr))
// Задача 43
// function maskify(str) {
//     let numbersItem = str.split('')
//     for (let i = 0; i < numbersItem.length - 4; i++) {

//         numbersItem[i] = +[i]
//         if (typeof numbersItem[i] === 'number') {
//             numbersItem[i] = '#'

//         } else {
//             return 'item  not a number!'
//         }

//     }
//     return numbersItem.join('')
// }
// console.log(maskify('4556364607935616'))

// Задача 44
// function squareDigits(num) {
//     let digit = num.toString().split('').map((item) => item ** 2).join('')
//     return Number(digit)
// }
// console.log(squareDigits(9119))

// Задача 45
// function findUniqueCharacter(str1, str2) {
//     let longest = str1 + str2
//     longest.split('')
//     let set = new Set(longest)
//     let newArray = Array.from(set)
//     return newArray.sort().join('')
// }

// console.log(findUniqueCharacter("xyaabbbccccdefww", "xxxxyyyyabklmopq"))

// Задача 46
// const busStops = (arr) => {
// let arrPeopleWhoCame =[];
// let arrPeopleWhoCameOut = [];
// let newArr = arr.flat(Infinity)

// newArr.map((item, index)=> index % 2 === 0 ? arrPeopleWhoCame.push(item): arrPeopleWhoCameOut.push(item))
// let a = arrPeopleWhoCame.reduce((acc, item)=> acc+item)
// let b = arrPeopleWhoCameOut.reduce((acc, item)=> acc+item)

// return a-b
// }
// console.log(busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));

// Задача 47

// const anagrams = (str,arr) => {
//     str = str.split('').sort().join('');
//     const arrAnagrams = arr.filter((item) => {
//     if(item.split('').sort().join('') === str) {
//         return item
//     }  else {
//         return ''
//     }
// }
//     )
//   return arrAnagrams
// }


// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa','ddat','dada']))
//  Задача 48

// const likes = (arr) => {
//      if (arr.length == 0) {
//         return 'no one like this'
//     }
// for(let i = 0; i < arr.length; i++){
//       if(arr.length === 1){
//         return `${arr[0]} like this`
//     }else if(arr.length === 2){
//         return `${arr[0]} and ${arr[1]} like this`
//     }else if(arr.length === 3){
//         return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`

//     }else if(arr.length >=4){
//         let a = arr.splice(2)
//         return `${arr[0]}, ${arr[1]} and ${a.length} others like this`

//     }

// }
// }

// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))



// Задача 49
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// function findMissingLetter(arr) {
//     let arrLetters = alphabet.split('')
//     arrLetters.length = arr.length
//     // console.log(arrLetters);
//     // console.log(arr);
//     let newArr = []
//     for (let i = 0; i < arrLetters.length; i++) {

//         for (let key of arr) {

//             if (arrLetters[i] !== key) {
//                 return arrLetters[i]
//             }
//         }

//     }
//     return newArr



// }
// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
// Задача 50
// function moveZeros(arr) {

//     const zeroItems = arr.filter((item, index) => {
//         if (item === 0) {
//             return arr.splice(item, 1)
//         }
//     })

//     return zeroItems
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));


// const arrv = [1, 2, 3]
// function a(arr) {
//     return arr.map((item) => item >= 2)
// }
// console.log(a(arrv))

// Задание на мини конкурс
// let phrase = "С 8 марта, прекрасные женщины! Желаем вам радости, любви и успехов во всех начинаниях!"
// let phrase2 = "С праздником, дорогие женщины! Желаем вам счастья, здоровья и исполнения всех желаний!"

// function getData(str) {
//     let congratulation = str.split('-').find((item) => +item === 08) ? phrase : phrase2
//     return congratulation
// }

// console.log(getData('2023-03-08'))


// =================================================Коллекции Set и Map==============================================================
// function unique(arr) {
//     let newValues = new Set(values)
//     return Array.from(newValues)
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values)); // Hare,Krishna,:-O
