
// //===================== JS Переменные===============================
// // let num = 3;
// // console.log(num);

// // let a = 10;
// // let b = 2;
// // console.log(a + b);
// // console.log(a - b);
// // console.log(a * b);
// // console.log(a / b);

// // let c = 15;
// // let d = 2;
// // let result = c + d;
// // console.log(result);

// // let a = 10;
// // let b = 2;
// // let c = 5;
// // console.log(a + b + c);

// // let a = 17;
// // let b = 10;
// // let c = (a - b);
// // let d = 7;
// // let result = c + d;
// // console.log(result);

// // JSR
// // let admin;
// // let name;
// // name = 'Джон';
// // admin = name;
// // console.log(admin);

// //===================== JS Типы данных ===============================
// // console.log(NaN ** 0);
// // let name = 'Ilya';
// // console.log(`hello ${1}`);
// // console.log(`hello ${'name'}`);
// // console.log(`hello ${name}`);
// // let name;
// // console.log(name);
// //===================== JS Операторы ===============================
// // "" + 1 + 0 // '10'
// // "" - 1 + 0 // -1
// // true + false //1
// // 6 / "3" // 2
// // "2" * "3" //6
// // 4 + 5 + "px" // '9px'
// // "$" + 4 + 5 // '$45'
// // "4" - 2 // 2
// // "4px" - 2 // NaN
// // "  -9  " + 5 // ' -9 5'
// // "  -9  " - 5 // -14
// // null + 1 // 1
// // undefined + 1 // NaN
// // " \t \n" - 2
// //===================== JS Операторы сравнения ===============================
// // console.log(10 % 6 === 1 ? true : false);
// // let a = 30 % 2;
// // console.log(a);
// // console.log(null == undefined);
// // console.log(null === undefined);
// // console.log(5 > 4); //true
// // console.log("ананас" > "яблоко");// false
// // console.log("2" > "12"); //false
// // console.log(undefined == null);//true
// // console.log(undefined === null); //false
// // console.log(null == "\n0\n");// false
// // console.log(null === +"\n0\n");//false

// //===================== JS  Условные операторы ===============================
// // let value = prompt('Какое "официальное" название Java Script?');
// // if (value == 'ECMAScript') {
// //     alert('Верно!');
// // } else {
// //     alert('ECMAScript');
// // }

// // let value = prompt('Введи число!');
// // if (value > 0) {
// //     alert(1);
// // } else if (value < 0) {
// //     alert(-1);
// // } else {
// //     alert(0)
// // }

// // resalt = (a + b < 4) ? 'Мало' : 'Много'

// // let message = (login == 'Сотрудник') ? 'Привет' :
// //     (login == 'Директор') ? 'Здравствуйте' :
// //         (login == '') ? 'Нет логина' :
// //             "";

// // let test = true;
// // if (test) {
// //     console.log('Верно');
// // } else {
// //     console.log('Неверно');
// // }

// // let test = false;
// // console.log(test ? "Верно" : "Неверно");
// // console.log(test != true ? "Верно" : "Неверно");

// //===================== JS  логические операторы ===============================
// // alert(null || 2 || undefined); // 2 оператор || выводит первое "правдивое" значение т.е true
// // alert(alert(1) || 2 || alert(3)); // Ответ: сначала 1, затем 2.
// // Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

// // Первый оператор ИЛИ || выполнит первый alert(1).
// // Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного значения.
// // Так как второй операнд 2 является истинным, то вычисления завершатся, результатом undefined || 2 будет 2, которое будет выведено внешним alert( .... ).
// // Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет.
// // let age = 33;
// // if (age >= 14 && age <= 90) {
// //     console.log("Ты еще так молода!")
// // }
// // if (!(age >= 14 && age <= 90)) {
// //     console.log("Ты еще так молода!")
// // }
// // if (age < 14 || age > 90) {
// //     console.log("!")
// // }

// // let userName = prompt("Кто там?", '');

// // if (userName === 'Админ') {

// //     let pass = prompt('Пароль?', '');

// //     if (pass === 'Я главный') {
// //         alert('Здравствуйте!');
// //     } else if (pass === '' || pass === null) {
// //         alert('Отменено');
// //     } else {
// //         alert('Неверный пароль');
// //     }

// // } else if (userName === '' || userName === null) {
// //     alert('Отменено');
// // } else {
// //     alert("Я вас не знаю");
// // }

// // let a = 5;
// // if (a > 0 && a < 5) {
// //     console.log('Верно!')
// // } else {
// //     console.log('Неверно!')
// // }

// // let a = 3;
// // let b = 5;
// // if (a >= 1 && b >= 3) {
// //     console.log(a + b)
// // } else {
// //     console.log(b - a)
// // }

// // let a = 5;
// // let b = 6;
// // if (a > 2 && a < 11 || b >= 6 && b < 14) {
// //     console.log('Верно!')

// // } else {
// //     console.log('Неверно!')
// // }

// // console.log(5 && 3);
// // console.log(0 && 3);
// // console.log(5 || 3);
// // console.log(0 || 3);
// // console.log(0 || 3 && 6);
// // console.log(0 && 3 || 6);

// //===================== JS  Циклы ===============================
// // for (let i = 2; i <= 10; i++) {
// //     if (i % 2 == 0) {
// //         console.log(i)
// //     }

// // }

// // let i = 0;
// // while (i < 3) {
// //     console.log(`number: ${i}`);
// //     i++;
// // }


// // let num;
// // do {
// //     num = prompt(' Введите число  больше 100!', 0)
// // } while (num <= 100 && num)

// // for (let i = 11; i <= 33; i++) {
// //     console.log(i)
// // }
// // let sum = 0;
// // for (let i = 1; i <= 100; i++) {
// //     sum += i;
// // }
// // console.log(sum);
// //===================== JS Конструкция "switch" ===============================
// // let num = 5;
// // switch (num) {
// //     case 1: console.log('зима');
// //         break;
// //     case 2: console.log('весна');
// //         break;
// //     case 3: console.log('лето');
// //         break;
// //     case 4: console.log('осень');
// //         break;


// //     default: console.log('Нет совпадений');
// // }

// // let browser = "Chrome";
// // if (browser === 'Edge') {
// //     console.log("You've got the Edge!")
// // } else if (browser === 'Edge' || browser === 'Chrome'
// //     || browser === 'Firefox'
// //     || browser === 'Safari'
// //     || browser === "Opera") {
// //     console.log('Okay we support these browsers too')
// // } else {
// //     console.log('We hope that this page looks ok!')
// // }

// // let number = +prompt('Введите число между 0 и 3', '');
// // switch (number) {
// //     case 0: console.log('Вы ввели число 0');
// //         break;
// //     case 1: console.log('Вы ввели число 0');
// //         break;
// //     case 2:
// //     case 3:
// //         console.log('Вы ввели число 2, а может и 3')
// //         break;
// // }

// //===================== JS Функции ===============================

// // function countEvenNumber(num) {
// //     let arrayNum = [];
// //     let count = 0;
// //     for (let i = 1; i < num; i++) {
// //         if (i % 2 === 0) {
// //             console.log(i);
// //             arrayNum.push(i);
// //             count++;
// //             if (count === 10) {
// //                 break;
// //             }
// //         }
// //     }

// //     return arrayNum;
// // }
// // countEvenNumber(34);



// // let n;
// // function findNextSquare(sq) {
// //     n = Math.sqrt(sq);// находим квадратный корень числа и присваиваем значение переменной n
// //     console.log(n);
// //     if (n % 2 === 0) {// проверяем, что полученное n тоже является целым числом
// //         ++n; // делаем шаг, что бы получить следующее число, возведя которое в квадрат, получим целочисленный идеальный квадрат.
// //         console.log(Math.pow(n, 2)) // возводим число в квадрат
// //     } else if (n % 2 !== 0) { //если полученное n не является целым, возвращаем строку is not perfect
// //         console.log((`-1 since ${sq} is not a perfect`))
// //     }
// // }
// // findNextSquare(12);
// // let n;
// // function findNextSquare(sq) {
// //     n = Math.sqrt(sq);// находим квадратный корень числа и присваиваем значение переменной n
// //     console.log(n);
// //     if (Math.sqrt(n) % 2 == 0) {// проверяем, что полученное корень квадратный из n тоже является целым числом
// //         ++n; // делаем шаг, что бы получить следующее число, возведя которое в квадрат, получим целочисленный идеальный квадрат.
// //         console.log(Math.pow(n, 2)) // возводим число в квадрат
// //     } else if (Math.sqrt(n) % 2 !== 0) { //если полученной корень квадратный из n не является целым, возвращаем строку is not perfect
// //         console.log((`-1 since ${sq} is not a perfect`))
// //     }
// // }
// // findNextSquare(22);

// // function findNextSquare(sq) {
// //     let n = Math.sqrt(sq);
// //     if (n % 1 == 0) {
// //         console.log(Math.pow(n + 1, 2));
// //     } else {
// //         console.log(`-1 since ${sq} is not a perfect`);
// //     }
// // }
// // findNextSquare(144);


// // let a = 5;
// // console.log(a <= 5 ? true : false);
// // let num = 89;
// // console.log(typeof (typeof num));

// // console.log('3' != 3)
// // let num = prompt(" Введи число");
// // switch (num == 100) {
// //     case 20: console.log('Тепло!');
// //         break;
// //     case 50: console.log("Горячо!!");
// //         break;
// //     case 100: console.log(" В точку!!");
// //         break;
// //     default: console.log(" Введи число, а не эту ерунду!")
// // }

// // function sum(a = 166, b = 56, c = 56) {
// //     console.log(a + b + c);
// // }
// // sum();
// //===================== JS Объекты ===============================
// // let user = {};
// // user.name = 'John';
// // user.surname = 'Smith';
// // user.name = 'Piter';
// // delete user.name;

// // let salaries = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130
// // }
// // function findSum(obj) {
// //     let sum = 0;
// //     for (let key in obj) {
// //         sum += salaries[key]
// //     }
// //     console.log(sum);
// //     if (salaries == {}) {
// //         console.log(0)
// //     }
// // }

// // findSum(salaries);

// // let menu = {
// //     width: 200,
// //     height: 300,
// //     title: "My menu"
// // };
// // function multiplyNumeric(obj) {
// //     for (let key in obj) {
// //         if (typeof obj[key] == 'number') {
// //             obj[key] *= 2;
// //         }

// //     }
// //     console.log(obj)
// // }
// // multiplyNumeric(menu);

// // let obj = {
// //     a: 1,
// //     b: 2,
// //     c: 3
// // };
// // console.log(obj['c']);
// // console.log(obj.c);

// // let obj = {
// //     Коля: '1000',
// //     Вася: '500',
// //     Петя: '200',
// // };
// // console.log(`${obj.Коля} ${obj.Петя}`)

// // let obj = {
// //     1: 'понедельник',
// //     2: 'вторник',
// //     3: 'среда',
// //     4: 'четверг',
// //     5: 'пятница',
// //     6: 'суббота',
// //     7: 'воскресенье',
// // }
// // let day = 2;
// // console.log(obj[day]);

// // ---------------------------// Объекты-----------------------------------
// // Object.assign()

// // const userInfo = {
// //     name: "Вася",
// //     age: 34,
// // }

// // console.log(userInfo);
// // userInfo.name = 'Юля';

// // let obj1 = userInfo;
// // // console.log(userInfo);
// // let obj2 = userInfo;
// // // console.log(obj2);
// // obj2.name = 'Петя';
// // // obj1.name = 'Оля'
// // console.log(userInfo);
// // console.log(obj1);
// // console.log(obj2);
// // console.log(obj1 === obj2);
// // console.log(obj1 === userInfo);
// // console.log(obj2 === userInfo);
// // console.log(obj2['name'] === userInfo['name']);

// // ---------------------------// Дублирование объектов-----------------------------------
// // const userInfo = {
// //     name: "Вася",
// //     age: 34,
// // }

// // let user = userInfo;
// // user.age = 26;

// // let user2 = Object.assign({}, userInfo);
// // user2.age = 18;
// // console.log(user);
// // console.log(user2);
// // console.log(userInfo);
// // console.log(user === userInfo);
// // console.log(user2 === userInfo);
// // console.log(user2 === user);

// // let userInfo = {
// //     name: "Юля",
// //     age: 30,
// //     57: ' значение свойства'

// // }
// // let myArray = []
// // for (let key in userInfo) {

// //     console.log(key)

// // }
// // console.log(Object.fromEntries(myArray)) // преобразовали массив в объект==========================
// // console.log(myArray.map(el => el + '__'))//
// // let myArray = Object.entries(userInfo);
// // console.log(Object.keys(userInfo));
// // console.log(Object.values(userInfo));
// // console.log(typeof myArray);


// // let salaries = {
// //     "John": 100,
// //     "Pete": 300,
// //     "Mary": 250,
// //     "Pete2": 300,
// //     "Pete3": 300,
// // };

// // function count(obj) {
// //     console.log(Object.keys(obj).length)

// // }
// // count(salaries);



// // function sumSalaries(obj) {
// //     let sum = 0;
// //     for (let value of Object.values(obj)) {
// //         if (Object.keys(obj).length == 0) {
// //             console.log(0);
// //         } else {
// //             sum += value;
// //         }
// //     }
// //     console.log(sum);
// // }
// // sumSalaries(salaries);


// //====================================== Число=============================================

// // let num1 = +prompt('Введите первое  число! ')
// // let num2 = +prompt('Введите второе  число! ')
// // console.log(num1 + num2)
// // let num = 6.35;
// // console.log(Math.floor(num));
// // console.log(Math.ceil(num));
// // console.log(Math.round(num));
// // console.log(Math.trunc(num));
// // console.log((num * 10).toFixed(20));
// // console.log(Math.round(6.35 * 10) / 10);

// // function readNumber(num) {
// //     if (!isFinite(num)) {
// //         console.log('Введите число')

// //     } else {
// //         console.log(num)
// //     }

// // }

// // let num = 58.858;
// // console.log(Math.floor(num));
// // console.log(Math.ceil(num));
// // console.log(Math.round(num));

// // ====================================Строки==================================================
// // let str = 'Привет, я хочу стать разработчиком!'
// // console.log(str.indexOf('хочу', 0))
// // console.log(str.includes('я', 9))
// // console.log(str.startsWith('П'))
// // console.log(str.endsWith('!'))
// // console.log(str.slice(0, 4))
// // console.log(str.substring(0, 4))
// // console.log(str.substr(0))


// // function checkSpan(str) {
// //     let newStr = str.toLowerCase()
// //     if (newStr.includes('viagra', 0) || newStr.includes('xxx', 0)) {
// //         console.log(true)
// //     } else {
// //         console.log(false)
// //     }
// // }
// // checkSpan('buy ViAgRA now');
// // checkSpan('free xxxxx');
// // checkSpan("innocent rabbit");

// // function truncate(str, maxLength) {
// //     let newStr = ''
// //     if (str.length > maxLength) {
// //         newStr = str.slice(0, maxLength - 1)
// //         console.log(`${newStr} ...`)
// //     } else {
// //         console.log(str)
// //     }
// // }

// // function extractCurrencyValue(str) {
// //     console.log(parseInt(str.match(/\d+/)))
// // }

// // extractCurrencyValue('pgjh120')

// // let str = 'Привет, Мир!'
// // console.log(str)

// // let str1 = "Привет,"
// // let str2 = "Мир!"
// // console.log(`${str1} ${str2}`)

// // let userName = 'Yulia';
// // console.log(`Привет, %${userName}%!`)

// // let userAge = 34;
// // console.log(`Мне %${userAge}% года!`)

// // let str = 'Я люблю маму';
// // console.log(str.slice(2, 7));
// // console.log(str.substring(2, 7));
// // console.log(str.substr(2, 5));

// // ============================================Конструктор ==========================================
// // function User(name, age, adress) {
// //     this.name = name;
// //     this.age = age;
// //     this.adress = adress;
// //     this.sayHi = function () {
// //         console.log(`Привет, меня зовут ${this.name}, мне ${this.age} года! Я живу в ${this.adress}.`)
// //     }
// //     return;
// // };
// // let user = new User('Юля', 34, 'Минск')
// // console.log(user.sayHi());

// // let userOne = new User('Yulia', 34, "Minsk")
// // console.log(userOne.sayHi());

// // function Accumulator(startingValue) {
// //     this.value = startingValue;
// //     this.read = function () {
// //         this.value += this.value;
// //     }
// // }
// // let accumulator = new Accumulator(2);
// // console.log(accumulator.read());

// // function Calculator(a, b) {
// //     this.read = function () {
// //         this.a = a;
// //         this.b = b;
// //     };
// //     this.sum = function () {
// //         return this.a + this.b
// //     };
// //     this.mul = function () {
// //         return this.a * this.b
// //     }
// // }
// // let calculator = new Calculator(30, 50);
// // console.log(calculator.read());
// // console.log(calculator.sum());
// // console.log(calculator.mul());




// // function add(num1, num2) {
// //     num1 = num1.toString().split('').reverse();
// //     num2 = num2.toString().split('').reverse();

// //     let max = Math.max(num1.length, num2.length)
// //     let newArr = [];

// //     for (let i = max - 1; i >= 0; i--) {

// //         newArr.push(Number(num1[i] || 0) + Number(num2[i] || 0))

// //     }

// //     let sum = newArr.reduce((acc, el) => acc.toString() + el.toString())

// //     return Number(sum)

// // }
// // add(122, 81);


// // let salaries = {
// //     "John": 100,
// //     "Pete": 300,
// //     "Mary": 250,
// //     "Pete2": 300,
// //     "Pete3": 300,
// //     'sayHi': () => {
// //         console.log('Гав-гав!');
// //     }
// // };
// // console.log(`Привет, я создала объект ${salaries}`);
// // let user = salaries;
// // salaries.sayHi();
// // let newArr = Object.assign({}, salaries);
// // let newArr2 = { ...salaries };
// // let newArr3 = JSON.parse(JSON.stringify(salaries));


// // console.log(newArr3 === salaries);
// // console.log(user === salaries);
// // console.log(newArr === salaries);
// // console.log(newArr2 === salaries);
// // // console.log(newArr);
// // // console.log(salaries);
// // let arrKey = Object.keys(salaries);
// // let arrVal = Object.values(salaries);
// // let arrEntries = Object.entries(salaries);

// // // console.log(arrKey);
// // // console.log(arrVal);
// // console.log(isNaN(NaN));
// // console.log(45645634346n);

// // function sayHi() {
// //     return "ГАв-гав"
// // }
// // console.log(sayHi());


// // function strCount(obj) {
// //     let count = 0;
// //     let newArr = [];
// //     for (let key in obj) {
// //         if (typeof obj[key] == 'string') {
// //             newArr.push(obj[key])
// //             // console.log(obj[key]);
// //             // count++;
// //         } else if (typeof obj[key] == 'object') {
// //             for (let i in obj[key]) {
// //                 newArr.push(obj[key][i])
// //                 // if (typeof obj[key][i] == 'string')

// //                 // console.log(obj[key][i]);

// //             }
// //         }
// //         for (let value of newArr) {
// //             if (typeof value == 'string') {
// //                 // console.log(value)
// //                 count++

// //             }
// //         }


// //     }

// //     console.log(newArr)

// //     return count;


// // }

// // strCount({
// //     first: '1',
// //     second: '2',
// //     third: false,
// //     fourth: ['anytime', 2, 3, 4],
// //     fifth: null,
// //     sixth: undefined,
// //     seventh: {}
// // }
// // ['1', 2, '3', '4']
// // [
// //     '1',
// //     2,
// //     '3',
// //     ['and another', 2, 'and again', [undefined, 'and again'], false],
// //     '4'
// // ])

// // const user = {
// //     name: 'Yulia',
// //     age: 34,
// //     phone: 54840540650,
// //     adress: 'Minsk',
// //     sayhi: function () {
// //         console.log('Hi')
// //     }
// // }

// // function User(name, phone, adress) {
// //     this.name = name
// // }

// // let user = {
// //     name: 'Blad',
// //     age: 23,
// //     talents: ['js', 'html', 'css'],
// //     sayName: () => this.name,
// //     sayAge: function () {
// //         return this.age
// //     },
// //     sayTalents: function () {
// //         let fn = () => this.talents;
// //         return fn()
// //     },

// // };
// // console.log(user.sayAge());
// // console.log(user.sayName());
// // console.log(user.sayTalents());

// // const user2 = Object.assign(user);
// // const user3 = Object.assign({}, user);
// // const user4 = { ...user }
// // const user5 = JSON.parse(JSON.stringify(user))
// // const user6 = Object.keys(user)
// // const user7 = Object.values(user)
// // const user8 = Object.entries(user)
// // console.log(user === user2);
// // console.log(user === user3);
// // console.log(user === user4);
// // console.log(user === user5);
// // console.log(user6);
// // console.log(user7);
// // console.log(user8);
// // console.log(user);


// //================================== Массивы. Методы массивов=======================================


// // let arr = ['a', 'b', 'c']
// // console.log(arr.map((item) => item));
// // for (let i of arr) {
// //     console.log(i)
// // }

// // let arr2 = ['a', 'b', 'c', 'd']
// // console.log(arr2.map((item) => item).join('+').split('').fill(',', 3, 4).join(' '));
// // console.log((`${arr2[0]} + ${arr2[1]}, ${arr2[2]} + ${arr2[3]}`));

// // let arr3 = [2, 5, 3, 9]
// // let newArr = []
// // newArr.push(arr3[0] * arr3[1], arr3[2] * arr3[3]);
// // let result = newArr.reduce((acc, val) => acc + val)
// // console.log(result);


// // const myArr = ['yulia', 'rita', 'alise', 'raf']
// // const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // const myArr3 = [10, 11, 12, 13, 14]
// // const myArr4 = [15, 16, 17, 18, 19, 120]
// // let myString = 'I am a developer !'
// // myArr4[0] = 33
// // console.log(myArr4.toString());


// //   =======================================================методы============================================================
// // console.log(myArr4.includes('yes'))// ищет элемент с позиции и возвращает  true/false
// // console.log(myArr4.indexOf(16))// ищет элемент с позиции и возвращает  индекс элемента или -1, если такого нет!


// // console.log(myArr4.find((item, index, array) => item > 4)) // возвращает первый элемент, удовлетворяющий условию, в противном случаи undefined
// // console.log(myArr4.forEach((item, index, array) => item )) // перебирает элементы, никогда ничего не возращает undefined
// // console.log(myArr4.filter((item, index, array) => item < 15))// возвращает массив элементов, удовлетворяющих условию или []
// // console.log(myArr4.map((item, index, array) => item + item)) //возвращает новый массив с  новыми элементами

// // console.log(myArr4.join(' ')); из массива делает строку, параметр разделитель
// // console.log(myString.split(',')); //  из строки делает массив, принимает разделитель
// // console.log(myArr3.fill('9', 0));// заполняет массив определенным элементом от индекса до индекса

// // console.log(myArr4.splice(4, 2, 1111));// возвращает массив из удленыых элементов,======= МЕНЯЕТ СТАРЫЙ МАССИВ ==========
// // console.log(myArr2.slice(0, 5));// возвращает копию массива от start  до end(включая end ),======= НЕ МЕНЯЕТ СТАРЫЙ МАССИВ ==========

// // console.log(myArr4.sort((a, b) => b - a));//  принимает параметры тeкущий элемент и следующий элемент . сортирует по UNICODE
// // console.log(myArr4.reduce((acc, item,index, array) => acc + item, 400));  соединяет все элементы в одно значение, вернет сумму всех чисел

// // console.log(Array.isArray(myString));
// // const concatArray = myArr2.concat(myArr3).reverse()
// // console.log(concatArray)



// // console.log(typeof myArr2.toString())

// //  перебор массива цикл for
// // for (let i = 0; i < myArr.length; i++) {
// //     console.log(myArr[i]);
// // }

// // // пербор массива цикл for of
// // for (let i of myArr) {
// //     console.log(i);
// // }

// // myArr2.forEach((item, index, array) => {
// //     console.log({ item, index });
// //     console.log(item);
// // })

// // перебор массива и замена первой буквы на заглавную!!!!!!--------------------------------------------

// // for (let i = 0; i < myArr.length; i++) {
// //     console.log(myArr[i] = myArr[i][0].toUpperCase() + myArr[i].slice(1).toLowerCase());
// // }

// // метод forEach
// // myArr.forEach((item, index, arr) => console.log(item[0].toUpperCase() + item.slice(1).toLowerCase()))

// //  метод map()
// // let correctName = myArr.map((item, index, arr) => item[0].toUpperCase() + item.slice(1).toLowerCase())
// // console.log(correctName);
// // console.log(myArr);

// // const user = {
// //     name: "Yulia",
// //     age: 34,
// //     phone: 845034583,
// //     sayHi: function sayHi(){

// //     }
// // }
// // const user2 = Object.assign({}, user)
// // console.log(user2 === user);
// // let str = 'привет, я хочу стать front-end разработчиком!'
// // let a = []
// // user.forEach((item) => {
// //     a.push(item + 1)
// // })
// // console.log(a);

// // console.log(user.slice(-4))
// // console.log(user.splice(0, 2, '4444'))
// // console.log(user)
// // let user2 = user.concat(user)
// // console.log(user2);
// // console.log(user.indexOf(87, 2))
// // console.log(user.includes(87))
// // console.log(user.find((item, index, array) => item > 80))
// // console.log(user.filter((item, index, array) => item > 100))
// // console.log(user.map((item, index, array) => item * 2))
// // console.log(user.sort((a, b) => b - a))
// // console.log(str.split('-').length)
// // console.log(user.join('======'))
// // console.log(user.fill('======='));
// // console.log(Array.isArray(str));



// // ======================================================Задачи========================================================================


// //  Зададча 2
// // function deleteVowels(str) {
// //     let phrase = str.replace(/[а,у,о,е,ё,и,о,ы,э,я]/gi, '')
// //     console.log(phrase)
// // }
// // deleteVowels('Этот сайт для лузеров ЛОЛ!')

// // Задача 3

// // let list = "4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"
// // let a = list.split(' ')
// // console.log(a[0], a.at(-1))

// // console.log(Math.max(...a).toString(), Math.min(...a).toString());

// // console.log(Math.max(...a));
// // Задача 4
// // const accum = (str) => str.split('').map((el, index) => el.toUpperCase() + el.repeat(index)).join('-');
// // console.log(accum('abcd'));

// // Задача 5
// // let correctPin = (str) => str == +str && (str.length === 4 || str.length === 6)
// // console.log(correctPin('12736'))

// // Задача 6

// // function printer_error(str) {
// //     if (str.length >= 1 && !str.match(/[0-9]/g)) {
// //         const numError = str.match(/[n-z]/ig).length
// //         return `${numError}/${str.length}`
// //     } else {
// //         return 'неправильные данные!'
// //     }
// // }
// // console.log(printer_error('aaaxbbbbyyhwawiwjjjwwm'))
// // Задача 7
// // let str = 'The world is not what we think it is';
// // String.prototype.toJadenCase =  function(str)  {
// //    return  this.split(' ').map((item)=>item.slice(0,1).toUpperCase()+item.slice(1)).join(' ')
// // }
// // console.log(str.toJadenCase());
// // Задача 8
// // function minMaxItem(arr) {
// //     let newArr = []
// //     newArr.push(Math.min(...arr))
// //     newArr.push(Math.max(...arr))
// //     return newArr
// // }

// // console.log(minMaxItem([-5, -7, -2, 5]))
// // Задача 9
// // const simple = (str) => Math.min(...str.split(' ').map(item => item.length));
// // console.log(simple('Привет, я Юля!'));

// // Задача 10
// // const findNeedle = (array) => {
// //     let indexNeedle = array.indexOf('needle')
// //     return (`"Нашел иголку на позиции ${indexNeedle}"`)
// // }
// // console.log(findNeedle(["bla", "wekmvever", "needle", "bntyn", "qwd", "qfverv", "rtbrtb"]))

// // Задача 11
// // let myArr = [-1, 2, -3, 4, 5]
// // function invert(arr) {
// //     let newArr = []
// //     for (let value of arr) {
// //         if (value < 0) {
// //             newArr.push(value * -1)
// //         } else {
// //             newArr.push(value * -1)
// //         }

// //     }
// //     return newArr

// // }
// // console.log(invert(myArr))

// // const invert2 = (arr) => arr.map((item) => item < 0 ? item * (-1) : item * (-1))
// // console.log(invert2(myArr));

// //  Задача 12

// // const arrayDiff = (arr1, arr2) => arr1.filter((el) => !arr2.includes(el))
// // console.log(arrayDiff([1, 2, 2, 2, 3, 4], [2, 3]))
// // console.log(arrayDiff([1, 2], [1]))

// // Задача 13
// // function getString(n) {
// //     let arr = []
// //     for (let i = n; i >= 1; i--) {
// //         arr.push(i)
// //     }
// //     return arr.join(',')
// // }
// // console.log(getString(5))
// // Задача 14
// // const sumMin = (arr) => {
// //     const newArr = arr.filter((item) => item > 0)
// //     if (newArr.length >= 4) {
// //         newArr.sort((a, b) => a - b)
// //     } else {
// //         return 'мало положительных чисел'
// //     }

// //     return newArr.slice(0, 2).reduce((acc, el) => acc + el)

// // }
// // console.log(sumMin([12, 423, 54, 1235, 3, 15, 2, 52]))
// // Задача 15
// //


// // function sortStr(str) {
// //     const arrNum = str.match(/[1-9]/g).sort()
// //     str = str.split(' ')
// //     let newStr = ''
// //     for (let value of arrNum) {
// //         for (let k of str) {
// //             if (k.includes(value)) {
// //                 newStr += k + ' '
// //             }
// //         }

// //     }
// //     newStr = newStr.trim()
// //     return newStr
// // }
// // console.log(sortStr('is2 Thi1s T4est 3a'))

// //  Задача 16
// // const reversString = (str) => str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// // console.log(reversString('This is an example!'));
// // console.log(arr);

// // Задача 17
// // const solition = (str) => {
// // for(let char of str){
// //     if(char === char.toUpperCase()){
// //          str = str.replace(char, '_' + char.toLowerCase())
// //         }
// // }
// // return str
// // }
// // console.log(solition('redevCourses'))


// // Задача 18
// // const palindrome = (str) =>  {
// // let arr =  str.split('')
// // return arr.join('') === arr.reverse().join('')
// // }

// // console.log(palindrome('43211234'))
// // Задача 19
// // function countCats(arr) {
// //     let count = 0
// //     let newArr = arr.flat(Infinity)
// //     for (let key of newArr) {
// //         if (key === '^^') {
// //             count++
// //         } else if (key !== '^^') {
// //             count
// //         }
// //     }

// //     return count
// // }
// // console.log(countCats([[0, 1, "^^"], [9, "^^", 2], ["^^", 8, 7]]))

// // function countCats(arr) {
// //     let newArr = arr.flat(Infinity).filter((item) => item === '^^')
// //     return newArr.length

// // }
// // console.log(countCats([[0, 1, "^^"], [9, "^^", 2], ["^^", 8, 7]]))

// // Задача 20
// // function factorial  (n, res) {
// //     res = res || 1
// //  if(!n){
// //     return res

// //  }else{
// //     return factorial(n - 1, res * n)
// //  }
// // }
// // console.log(factorial(5))
// // =======================================================
// // function f(n, res) {
// //     res = res || 1
// //     for (let i = 1; i <= n; i++) {

// //         res = res * i

// //     }
// //     return res
// // }
// // console.log(f(5))
// // ==========================================================
// // function f(n) {
// //     return n > 1 ? n * f(n - 1) : 1
// //     }
// //     console.log(f(5))
// // Задача 21
// // const createDreamTeam = array => {
// //     const arrStrings = array.filter((item) => typeof item === 'string');
// //     console.log(arrStrings)
// //     const arrFirstLetters = arrStrings.map((item) => item[0])
// //     return arrFirstLetters
// //         ? arrFirstLetters.sort().join('')
// //         : false
// // }



// // console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', null, 'Max']))
// // console.log(createDreamTeam(['Olivia', true, 1111, NaN, 'Lily', 'Oscar']))
// // console.log(typeof NaN)
// // console.log(typeof null)
// // console.log(typeof true)
// // console.log(typeof undefined)
// // console.log(typeof Infinity)

// // Задача 22
// // function transform(arr) {
// //     if (arr.includes('--double-next')) {
// //         return arr.map((item, index, array) => item === '--double-next' ? array[index + 1] : item)
// //     } else if (arr.includes('--double-prev')) {
// //         return arr.map((item, index, array) => item === '--double-prev' ? array[index - 1] : item)
// //     } else if (arr.includes('--discard-next')) {
// //         arr.map((item, index, array) => item === '--discard-next' ? array.splice(index, 2) : item)
// //         return arr
// //     } else if (arr.includes('--discard-prev')) {
// //         arr.map((item, index, array) => item === '--discard-prev' ? array.splice(index - 1, 2) : item)
// //         return arr
// //     }

// // }
// // console.log(transform([1, 3, '--double-next', 4]))
// // console.log(transform([1, 3, '--double-prev', 4]))
// // console.log(transform([1, 3, '--discard-next', 4]))
// // console.log(transform([1, 3, '--discard-prev', 4]))


// // let a = [6, 8, 4, 3, 2,]
// // function f(arr) {
// //     if (a.includes(8)) {
// //         let ind = arr.indexOf(8)
// //         console.log(arr.splice(ind, 1))
// //         console.log(arr)
// //     }

// // }
// // console.log(f(a))

// // Задача 23

// // const chainMaker = {
// //     chain: [],
// //     getLength: function () {
// //         this.chain.length;
// //         return this;
// //     },
// //     addLink: function (value) {
// //         if (!value) {
// //             this.chain.push(`()`)

// //         } else {
// //             this.chain.push((`(${value})`));
// //         }
// //         return this
// //     },
// //     removeLink: function (position) {
// //         if (typeof position !== 'number' || position > this.chain.length) {
// //             console.log('недопустимая позиция')
// //             return this
// //         } else {
// //             this.chain.splice(position - 1, 1)
// //             return this;
// //         }


// //     },
// //     reverseChain: function () {
// //         this.chain.reverse();
// //         return this
// //     },
// //     finishChain: function () {
// //         return this.chain.join(' ~~ ');
// //     },


// // }

// // console.log(chainMaker.addLink(1).addLink(4).addLink(8).removeLink(6).addLink(3).finishChain())




// // Задача 24
// // const isUpperCase = (str, character) => str[character] === str[character].toUpperCase() ? true : false
// // console.log(isUpperCase('tasks Java Script', 6))
// // задача 25
// // function capitalizeFirstLetter(str) {
// //     return str.slice(0, 1).toUpperCase() + str.slice(1)
// // }

// // console.log(capitalizeFirstLetter('пример строки'))

// // Задача 26

// // let str = 'abc def ghi jkl mno pqr stu';

// // String.prototype.startsWith = function(start) {
// //     return this.substring(0,start.length)===start
// // };

// // console.log(str.startsWith('abc'))
// // Задача 27
// // let str = 'abc def lom abc abc def'
// // const replaceAll = (find, replace, string) => {
// //     return str.split(' ').map((item) => item == find ? replace : item)
// // }
// // console.log(replaceAll('abc', 'X', str))

// // Задача 28

// // let str = "вишня, груша, слива, груша";

// // function removeDuplicate(str) {
// // let arr = str.split(',')
// // let set = new Set(arr)
// // let newString = Array.from(set).join(',')
// // return newString
// // };

// // console.log(removeDuplicate(str));

// //  Задача 29
// // function unique_letters(str) {
// //     str = new Set(str)
// //     return Array.from(str).join('')
// // };

// // console.log(unique_letters('anaconda'))

// // Задача 30
// // const alphabetize = str => str.split('').sort().join('')
// // console.log(alphabetize('Europe'))


// // Задача 31
// // let str = "Сила тяжести приложена к центру масс тела";

// // function cutString(str, n) {
// //     return str.split(' ').splice(0, n).join(' ')
// // };

// // console.log(cutString(str, 5))

// //  Задача 32
// // let str = "    Pasha is a good      boy     "

// // function strip(str) {
// //     return str.split(' ').filter((item) => !item == ' ').join(' ')
// // };

// // console.log(strip(str))

// // Задача 33

// // function comparison(str1, str2) {
// //     return str1.toLowerCase() === str2.toLowerCase()
// // };

// // Задача 34
// // let str = "Каждый охотник желает знать";
// // let str1 = "скрипт";
// // let str2 = "знать";
// // String.prototype.endsWith = function(substring) {

// // return this.substr(this.length-substring.length) === substring
// // };
// // console.log(str.endsWith(str2))

// // console.log(comparison('string', 'StRiNg'))
// // Задача 35
// // let vegetables = ['Капуста', 'Репа', 'Редиска'];
// // function arrayClone(arr) {
// //     let newArr = arr.slice()
// //     return newArr
// // }
// // console.log(arrayClone(vegetables))

// // Задача 36
// // function colonOdd (num) {
// // num = num.toString()

// // return num.split('').map((item,index,array)=>array[index] % 2 === 1 && array[index+1] %  2 === 1? item + ':' : item).join('')


// // }

// // console.log(colonOdd(55639217))

// // Задача 37
// // let arr = ["php", "php", "css", "css",
// //     "script", "script", "html", "html", "java"
// // ];

// // function removeDuplicates(arr) {
// //     let array = new Set(arr);
// //     return Array.from(array)
// // }

// // console.log(removeDuplicates(arr));

// // Задача 38
// //

// // let array1 = [1, 2, 3, 4, 5];
// // let array2 = [4, 5, 6];
// // let array3 = []
// // let newArr = []
// // const sumArray = (arr1, arr2) => {

// //     let num;
// //     if (arr1.length > arr2.length) {
// //         num = arr2.length
// //         newArr = arr1.slice(arr2.length)

// //     } else if (arr1.length < arr2.length) {
// //         num = arr1.length
// //         newArr = arr2.slice(arr1.length)

// //     }
// //     for (let i = 0; i < num; i++) {
// //         array3.push(arr1[i] + arr2[i])
// //     }
// //     return array3.concat(newArr)
// // }
// // console.log(sumArray(array1, array2))






// // Задача 39
// // let arr1 = [1, [2, [3, [4]]]];

// // let arr2 = [1, [2], [3, [[4]]], [5, 6]];

// // function expand(arr) {
// //     let newArr = arr.flat(Infinity)
// //     return newArr.toString()
// // }
// // console.log(expand(arr2))

// // Задача 40
// // let array = ['a', 'a', 'z', 'z', 'z', 'a', 'z', 'c', 'z',];

// // function f(arr) {

// //     let map = new Map();
// //     for (let value of arr) {
// //         let counter = map.get(value);
// //         map.set(value, counter ? counter + 1 : 1)

// //     }


// // }


// // function a(arr) {
// //     const obj = {};
// //     let count = 0;
// //     let max = 0;
// //     let el = '';
// //     for (let i = 0; i < arr.length; i++) {
// //         if (obj[arr[i]] != true) {
// //             for (let k = i; k < arr.length; k++) {
// //                 if (arr[i] == arr[k]) {
// //                     count++;
// //                 }

// //             }
// //             if (count > max) {
// //                 max = count;
// //                 el = arr[i]
// //             }
// //             count = 0;
// //         }
// //         obj[arr[i]] = true;
// //     }
// //     return el
// // }

// // console.log(a(array))
// // Задача 41

// // function sum(arg) {
// //     const countSum = function (arg, res) {
// //         if (arg === undefined)
// //             return res;
// //         res = (res || 0) + arg
// //         return function (arg) {
// //             return countSum(arg, res);
// //         }
// //     }
// //     return countSum(arg)
// // }


// // console.log(sum(1)(2)(3)())
// // function sum(arg1, arg2, arg3) {
// //     return arg1 + arg2 + arg3
// // }

// // function carrySum(f) {
// //     return function (arg1) {
// //         return function (arg2) {
// //             return function (arg3) {
// //                 return f(arg1, arg2, arg3)
// //             };
// //         };
// //     };

// // }
// // console.log(carrySum(sum)(1)(5)(3))

// //  Задача 42
// // const arrStrings = ([...arg]) => {
// //     if ([...arg].length <= 1) {
// //         return false
// //     }
// //     const firstWord = arg[0].split('').sort().join('')

// //     const newArr = arg.map((item, index, arr) => item.toLowerCase().split('').sort().join('')).find((item) => item !== firstWord) ? false : true

// //     return newArr
// // }
// // console.log(arrStrings(["кто", "кто", "тОк"]))

// // Задача 43
// // function maskify(str) {
// //     let numbersItem = str.split('')
// //     for (let i = 0; i < numbersItem.length - 4; i++) {

// //         numbersItem[i] = +[i]
// //         if (typeof numbersItem[i] === 'number') {
// //             numbersItem[i] = '#'

// //         } else {
// //             return 'item  not a number!'
// //         }

// //     }
// //     return numbersItem.join('')
// // }

// // console.log(maskify('4556364607935616'))

// // Задача 44
// // function squareDigits(num) {
// //     let digit = num.toString().split('').map((item) => item ** 2).join('')
// //     return Number(digit)
// // }
// // console.log(squareDigits(9119))

// // Задача 45
// // function findUniqueCharacter(str1, str2) {
// //     let longest = str1 + str2
// //     longest.split('')
// //     let set = new Set(longest)
// //     let newArray = Array.from(set)
// //     return newArray.sort().join('')
// // }

// // console.log(findUniqueCharacter("xyaabbbccccdefww", "xxxxyyyyabklmopq"))

// // Задача 46
// // const busStops = (arr) => {
// // let arrPeopleWhoCame =[];
// // let arrPeopleWhoCameOut = [];
// // let newArr = arr.flat(Infinity)

// // newArr.map((item, index)=> index % 2 === 0 ? arrPeopleWhoCame.push(item): arrPeopleWhoCameOut.push(item))
// // let a = arrPeopleWhoCame.reduce((acc, item)=> acc+item)
// // let b = arrPeopleWhoCameOut.reduce((acc, item)=> acc+item)

// // return a-b
// // }
// // console.log(busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));

// // Задача 47

// // const anagrams = (str,arr) => {
// //     str = str.split('').sort().join('');
// //     const arrAnagrams = arr.filter((item) => {
// //     if(item.split('').sort().join('') === str) {
// //         return item
// //     }  else {
// //         return ''
// //     }
// // }
// //     )
// //   return arrAnagrams
// // }


// // console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa','ddat','dada']))
// //  Задача 48

// // const likes = (arr) => {
// //      if (arr.length == 0) {
// //         return 'no one like this'
// //     }
// // for(let i = 0; i < arr.length; i++){
// //       if(arr.length === 1){
// //         return `${arr[0]} like this`
// //     }else if(arr.length === 2){
// //         return `${arr[0]} and ${arr[1]} like this`
// //     }else if(arr.length === 3){
// //         return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`

// //     }else if(arr.length >=4){
// //         let a = arr.splice(2)
// //         return `${arr[0]}, ${arr[1]} and ${a.length} others like this`

// //     }

// // }
// // }

// // console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))



// // Задача 49


// // const alphabet = "abcdefghijklmnopqrstuvwxyz";

// // function findMissingLetter(arr) {
// //     if (arr.length < 2) {
// //         return false
// //     }
// //     let newString = arr.join('')
// //     let index = alphabet.indexOf(newString[0]);
// //     let partStr = alphabet.substr(index, newString.length + 1)
// //     let el = []
// //     for (let i = 0; i < partStr.length; i++) {

// //         if (newString.indexOf(partStr[i]) === -1)
// //             el.push(partStr[i])
// //     }
// //     return el
// // }
// // console.log(findMissingLetter(['g', 'h', 'i', 'j', 'l']))
// // Задача 50
// // function moveZeros(arr) {

// //     const zeroItems = arr.filter((item, index) => {
// //         if (item === 0) {
// //             return arr.splice(item, 1)
// //         }
// //     })

// //     return zeroItems
// // }

// // console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));


// // const arrv = [1, 2, 3]
// // function a(arr) {
// //     return arr.map((item) => item >= 2)
// // }
// // console.log(a(arrv))

// // Задание на мини конкурс
// // let phrase = "С 8 марта, прекрасные женщины! Желаем вам радости, любви и успехов во всех начинаниях!"
// // let phrase2 = "С праздником, дорогие женщины! Желаем вам счастья, здоровья и исполнения всех желаний!"

// // function getData(str) {
// //     let congratulation = str.split('-').find((item) => +item === 08) ? phrase : phrase2
// //     return congratulation
// // }

// // console.log(getData('2023-03-08'))


// // =================================================Коллекции Set и Map==============================================================
// // function unique(arr) {
// //     let newValues = new Set(values)
// //     return Array.from(newValues)
// // }

// // let values = ["Hare", "Krishna", "Hare", "Krishna",
// //     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// // ];

// // console.log(unique(values)); // Hare,Krishna,:-O
// ----------------------------------------------------------------------------
// const user = {
//     name: "Yulia",
//     age: 34,
//     phone: ' 456834653405',
//     adress: { country: 'Belarus', city: 'Minsk' },
//     isman: false,
//     sayHi: function () {
//         return 6
//     }
// }
// console.log(new Map(Object.entries(user)))
// const map = new Map()

// map.set('firstName', 'Bob')
//     .set('lastName', 'Robins')
// console.log(typeof map.keys())
// console.log(map.values())
// console.log(map.entries())
// map.forEach((value, key, map) => console.log(`${key}====${value}`))

// for (let [key, values] of map) {
//     console.log(`${key}: ${values}`)
// }
// map.forEach((key, value) => console.log(`${value}: ${key}`))
// console.log(map.forEach(element => {
//     element
// }))

// console.log(map)
// const a = structuredClone(user)
// console.log(a);

// const user1 = Object.entries(user);
// const userMap = new Map(user1)

// userMap.set('one', 1)
// console.log(userMap)
// // let a = userMap.get('adress')
// // console.log(user1);
// // console.log(userMap);
// // console.log(a);

// const a = {
//     name: 'Bob',
//     age: 35,
// }
// let str = 'Yulia';
// const [first, second, ...rest] = str
// console.log(second)
// console.log(rest)
// // const myUser = new Map(Object.entries(a)); // преобразовываем объект в массив!!!
// // console.log(myUser);
// // console.log(myUser.keys())
// // console.log(myUser.values())
// // console.log(myUser.entries())

// const map = new Map();

// map
//     .set('one', 1)
//     .set('two', 2)
//     .set('three', 3)
// // console.log(map.get('two'));
// // console.log(map.size)
// // console.log(map.has('two'))
// // map.delete('three')
// // console.log(map.size);
// console.log(map);
// const modObj = Object.fromEntries(map)
// console.log(modObj);
// const newArr = [6, 8, 8, 9, 0, 6]
// const b = new Set(newArr)

// b.add('name')

// console.log(b.size);
// console.log(b)


// // function countWords(str) {
// //     let count = {};
// //     let arr = str.split(' ').map((item) => item.toLowerCase())
// //     // str.split(' ').map((item, index, array) => count[item.toLowerCase()] === undefined ? count[item] = 1 : count[item]++);
// //     for (let el of arr) {
// //         if (count[el] === undefined) {
// //             count[el] = 1;
// //         } else {
// //             count[el]++
// //         }
// //     }
// //     return new Map(Object.entries(count))
// // }
// // console.log(countWords("Я люблю маму, а так же я люблю JavaScript"))
// // ==============================Деструктурирующее присваивание ===========================
// // const arr = ["Minsk", 'Grodno', 'Mogilev', ' Brest', 'Vitebsk', 'Gomel'];


// // let [seven, four, six, ...all] = arr;
// // console.log(seven);
// // console.log(six);
// // console.log(all);


// // const user = {
// //     name: "Yulia",
// //     age: 34,
// //     phone: '796-13-55',

// // }
// // let { age: myAge, ...rest } = user;
// // console.log(myAge);
// // console.log(rest);

// // let user = {
// //     name: 'John',
// //     years: 30,
// // }
// // let { name, years: age, isAdmin = false } = user;
// // console.log(name);
// // console.log(age);
// // console.log(isAdmin);

// // let salaries = {
// //     "John": 100,
// //     "Pete": 300,
// //     "Mary": 250,
// // };
// // const topSalary = (obj) => {
// //     let max = 0;
// //     let maxName = '';
// //     for (let [name, salary] of Object.entries(obj)) {

// //         if (max < salary) {
// //             max = salary;
// //             maxName = name

// //         }

// //     }
// //     return maxName

// // }

// // console.log(topSalary(salaries));


// // ============================================JSON формат=======================================================
// // const strJs = JSON.parse(JSON.stringify(salaries))
// // console.log(typeof strJs)

// // let room = {
// //     number: 23
// // };

// // let meetup = {
// //     title: "Совещание",
// //     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
// //     place: room
// // };
// // // цикличные ссылки
// // room.occupiedBy = meetup;
// // meetup.self = meetup;
// // const strJs = JSON.stringify(meetup, function replacer(key, value) {
// //     if (key != '' && value == meetup) {
// //         value = undefined
// //     }
// //     return value
// // })

// // console.log(strJs)

// //  ========================================== Object Date =============================================
// let date = new Date();
// let date2 = new Date(Date.parse(date))
// console.log(date);
// console.log(date2);
// // console.log(date.getFullYear());
// // console.log(date.getMonth());
// // console.log(date.getDate());
// // console.log(date.getHours());
// // console.log(date.getDay());


// // ============================================= __proto__===================
// // 1.  false --- false
// // 2.false -- false
// // 3. false --true
// // 4. true---true false!!!
// // 5. true---false
// // 6. true ---false
// // 7. false--true
// // 8. false--(true)
// // 9. Object__proto__Function.prototype
// // 10.Number__proto__Number.prototype
// //-----------------------------------
// // Любой объект создается при помощи функции конструктора (класса   )
// // let man = {} // new Object()
// // let users = [] // new Array()
// // let age = 34 // new Number()(если обращаемся к age как к объекту age.__proto__)
// // // 1. у любого объекта есть свойство __proto__ и оно равно  prototype того класса, с помощью которого создан этот объект !!!!!!!!!!!!!!!!!!!
// // У стрелочной функции нет prototype!!!!
// // 2. Что бы понимать, что за __proto__ ,нужно ТОЧНО знать с помощью какой функции-конструктора (класса) создан данный обхект
// // 3. Каждый prototype - это независимый объект, сам по себе, с определенным набором свойств и методов
// // 4. prototype есть только у класса или функции
// // 5. __proto__ любого объекта ссылается на prototype класса, (функции-конструктора)с помощью которой этот объект был создан
// // let man = {}// man.__proto__
// // let users = [] // users.__proto__
// // let age = 18 // age.__proto__
// // let youtube = 'it-kamasutra' // youtube.__proto__
// // function fn() { } //fn.__proto__
// // let myFn = function () { } // myFn.__proto__
// // let foo = () => { }// foo.__proto__
// // class YouTubeChannel { } // YouTubeChannel.__proto__ (Класс -это функция, синтаксический сахар)
// // let areYouOk = true // areYouOk.__proto__

// // class Samurai {
// //     constructor(name) {
// //         this.name = name
// //     }
// //     hello() { console.log(this.name) }
// // }
// // let shogun = new Samurai('Yulia')
// // console.log(Object.getPrototypeOf(myFn));
// // console.log(shogun.__proto__.__proto__ === Object.prototype);
// // console.log(shogun.__proto__.__proto__.constructor.__proto__);

// // let user = {   // экземпляр прототипа
// //     name: "Pavel"
// // };

// // let admin = {   // прототип
// //     isAdmin: true
// // };

// // user.__proto__ = admin; // связь экземпляра с прототипом
// // console.log(user.isAdmin); // true
// // console.log(user.name)
// // ======================================= try... catch...===========================
// // Контрукция, позволяющая отлавливать ошибки в блоке кода. Try/catch может обрабатывать только ошибки, которые возникают в корректном коде, он не сработает , если код синтаксически неверен, например(содержит несовпадающее количество скобок)
// // function fn() {
// //     return a
// // }
// // try {
// //     console.log(fn())
// // }
// // catch (error) {
// //     throw new Error(' O Боже, ошибка!')
// // } finally {
// //     console.log('HI-HI')
// // }

// // const fnWithError = () => {
// //     throw new Error(' Some error')
// //     // console.log('Hi')
// // }
// // try {
// //     console.log(fnWithError());
// // }
// // catch (error) {
// //     console.error(error)
// // }




// // =============================== ЗамыканиЯ===========================
// // Функциональная область видимости — это область видимости в пределах тела функции.Можно сказать, что она ограничена { и } функции.К переменной b есть доступ только внутри функции scoped.Функциональная область видимости — очень мощный инструмент для разделения кода
// // // Scope - Область видимости
// // Замыкание - это функция внутри другой функции, замыкание даёт вам доступ к Scope (en-US) внешней функции из внутренней функции.
// // 1.  Функция возвращает новые функции.
// // 2. Возвращаемые функции помнят контекст, где были созданы.

// // function finedSum(a) {
// //     const c = 5;
// //     return function (b) {
// //         return (a * b) - c;
// //     }
// // }

// // const sumOne = finedSum(5);
// // const sumTwo = finedSum(10)
// // console.log(sumTwo(10));
// // console.log(typeof sumOne)
// // console.log(sumOne(3))


// // function createFun() {
// //     function greeting() {
// //         return 'Hello world'
// //     }
// //     return greeting;
// // }
// const func = a => {
//     return function (b) {
//         return a + b
//     }

// };
// const myFunc = func(5);
// // const myFunc2 = myFunc(4);
// // const myFunc3 = myFunc(4);
// console.log(myFunc(8));
// // console.log(myFunc2);


// // =============================Привязка контекста с помощью методов bind(context), call(context), applay(context)===============
// // 1.call
// // Методы вызова функции и передача ей контекста и аргументов
// // Контекст- это this  в функции, некий объект
// // function sum(a, b, c) {
// //     return a + b + c
// // }
// // console.log(sum.call(null, 1, 2, 3))  вызываем функцию с помощью метода call, в качестве контекста null(или объект)  и аргументы
// // 2.applay
// // --------------------------------------------
// // console.log(sum.applay(null,[1, 2, 3]))  вызываем функцию с помощью метода applay, в качестве контекста null(или объект)  и аргументы  в виде массива, остально все тоже, что и у call!!!!!
// Метод bind() создает новую функцию, которая связана с определенным контекстом (объектом), и может быть вызвана позже. Оригинальный метод остается неизменным.

// Метод call() вызывает функцию с определенным контекстом и передает аргументы в виде списка.

// Метод apply() вызывает функцию с определенным контекстом и передает аргументы в виде массива.

// Основная разница между методами call() и apply() заключается в том, как они принимают аргументы. Метод call() принимает аргументы в виде списка, а метод apply() принимает аргументы в виде массива.

// В целом, все эти методы позволяют управлять контекстом вызова функции и передавать ей аргументы. Однако, выбор метода зависит от того, как вы хотите передать аргументы - в виде списка или массива, и нужна ли вам возможность вызвать функцию позже с сохранением контекста.

// // ---------------------------------------------------------------
// // let user = {
// //     name: 'Yulia',
// //     age: 34,
// //     sayHi: function () {
// //         console.log('Hello')
// //     }
// // };
// // function fn() {
// //     console.log(this.sayHi());
// // }
// // let newFn = fn.bind(user)
// // console.log(newFn())

// // ----------------------------------------------------------------
// // function askPassword(ok, fail) {
// //     let password = 'rockstar'
// //     if (password == "rockstar") ok();
// //     else fail();
// // }

// // let user = {
// //     name: 'Вася',

// //     loginOk() {
// //         console.log(`${this.name} logged in`);
// //     },

// //     loginFail() {
// //         console.log(`${this.name} failed to log in`);
// //     },

// // };

// // console.log(askPassword(user.loginOk.bind(user), user.loginFail.bind(user)))

// // -----------------------------------------------------------------------
// // function askPassword(ok, fail) {
// //     let password = 'rockstar';
// //     if (password == "rockstar") ok();
// //     else fail();
// // }

// // let user = {
// //     name: 'John',

// //     login(result) {
// //         console.log(this.name + (result ? ' logged in' : ' failed to log in'));
// //     }
// // };

// // console.log(askPassword(user.login.bind(user, true), user.login.bind(user, false))); // ?

// // ======================================== Pекурсия =====================================
// // Рекурсия - это процесс, когда функция вызывает саму себя
// // Обязательно наличие базового условия
// // Сценарий органиации движения рекурсии
// //  На примере факториала
// // 0! = 1;
// // n! = n * (n-1)!
// // 2! = 1*2 = 2;
// // 3! = 1*2*3 =6;
// // 4! = 1*2*3*4 = 24;
// // 5! = 1*2*3*4*5 = 120;
// // function fuctorial(a) {
// //     if (a === 0)
// //         return 1;
// //     return a * fuctorial(a - 1)

// // }
// // fuctorial(4) = 4 * fuctorial(3);
// // fuctorial(3) = 3 * fuctorial(2);
// // fuctorial(2) = 2 * fuctorial(1);
// // fuctorial(1) = 1 * fuctorial(0);
// // // Узнали, что фак-л от 0 = 1 и далее подставляем в формулу вычисления
// // fuctorial(0) = 1;
// // fuctorial(1) = 1 * 1 = 1;
// // fuctorial(2) = 1 * 2 =  2;
// // fuctorial(3) = 3 * 2 = 6;
// // fuctorial(4) = 4 * 6 = 24;

// // console.log(fuctorial(4))
// // ------------------------------
// // На примере fibonacci
// // fibonacci(0) = 0;
// // fibonacci(1) = 1;
// // fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
// // function fibonacci(n) {
// //     return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
// // }
// // console.log(fibonacci(6))

// // ------------------------------------

// function fuctorial(n) {
//     return n ? n * fuctorial(n - 1) : 1
// }

// fuctorial(5) = 5 * fuctorial(4) => 120
// fuctorial(4) = 4 * fuctorial(3) => 24
// fuctorial(3) = 3 * fuctorial(2) => 6
// fuctorial(2) = 2 * fuctorial(1) => 2
// fuctorial(1) = 1 * fuctorial(0) => 1
// fuctorial(0) = 1
// console.log(fuctorial(5));
// // ======================================== Каррирование============================
// // Каррирование - это уменьшение арности функции (уменьшение числа аргументов).Если начальная фу-ция будет принимать 3 аргумента, то  кар-нная фу-ция будет принимать только один аргумент и  будет возвращать фу-цию, которая примет второй аргумент и вернет  тоже функцию, которая примет 3-ий аргумент.

// -------------------------------------
//  const sum = (a,b,c) => a + b + c;
// console.log(sum(3, 3, 4))

// const curry = (a) => (b) => (c) => (a + b + c)
// console.log(curry(3)(3)(4))
// ----------------------------------------

// function fn(a, b, c) {
//     return a + b + c
// }
// console.log(fn(3, 6, 4));

// function carry(a) {
//     return function (b) {
//         return function (c) {
//             return fn(a, b, c) // return (a + b + c)
//         }
//     }
// }
// console.log(carry(3));
// console.log(carry(3)(6));
// console.log(carry(3)(6)(4));
// ------------------------------------------------
// Пример Паши
// function sum(a, b, c) {
//     return a + b + c
// }
// function currySum(func) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return func(a, b, c)
//             }
//         }
//     }
// }

// const curriedSum = currySum(sum);
// console.log(curriedSum(2)(4)(2));

// let str = 'hi, my name is YULIA'
// function findIndex(str) {
//     let bigItem = str.match(/[A-Z]/g)
//     let newArr = str.split('')
//     let arr = []
//     for (let i = 0; i < newArr.length; i++) {
//         for (let k = 0; k < bigItem.length; k++) {
//             if (newArr[i] === bigItem[k]) {

//                 arr.push(newArr[i])
//             }
//         }
//     }

//     return arr
// }
// console.log(findIndex(str))
// const user = {
//     name: 'Yulia',
//     age: 34,
// }
// const admin = {
//     isAdmin: true,
//     sayHi() {
//         return('Hi')
//     }
// }
// admin.__proto__ = user
// Object.setPrototypeOf(admin, user)
// const newUser = Object.create(user, { job: { get: () => "I am developer" } })
// console.log(newUser.job);
// function User(name, age, phone) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
// }
// User.prototype = admin
// const userOne = new User('Bob', 26, '73454854');

// console.log(userOne.sayHi())
// -------------------настройка прототипа----------------
// function Robot(name, year, owner) {
//     this.name = name;
//     this.year = year;
//     this.owner = owner;
// }
// Robot.prototype.maker = 'ObjectsRUS';
// Robot.prototype.speak = function () { return 'speak' };
// Robot.prototype.makeCoffee = function () { return 'make coffee' };
// Robot.prototype.blinkLights = function () { return 'code 4 lights' };

// let robby = new Robot('Robby', 1956, 'Dr.Morbius');
// let rosie = new Robot('Rosie', 1962, ' George Jetson');

// robby.onOffSwitch = true;
// robby.makeCoffee = function () { return ' make coffee  in starbucks' }

// rosie.cleanHouse = function () { return 'clean house' }
// console.log(robby.hasOwnProperty('name'))
// // console.log(robby.name + ' was made by' + robby.maker + ' in ' + robby.year + ' and is owner by ' + robby.owner)
// // console.log(robby.makeCoffee())

// -----------------------------------------
// function Person(firstName, lastName, born) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.born = born;
// }
// Person.prototype.age = function () {
//     var now= new Date();
//     return now.getFullYear() = this.born;
// }
// var iam = new Person('Yulia', 'Balkis', 1989)

// Map. В чем особенность? Какие свойства и методы есть? Как перебрать?


// Set. В чем особенность? Какие свойства и методы есть? Как перебрать?
// Пример деструктурирующего присваивания (ДП)?
// В каких случаях используется ДП?
// Как присвоить значение по умолчанию в ДП?
// Как записываются остаточные параметры?
// Что такое Date()? Для чего используется?
// Какие методы есть у Date()?
// Что такое JSON?
// Метод JSON.stringify(). Когда используется?
// Метод JSON.parse(). Когда используется?
// Для чего нужен прототип?
// Как присвоить прототип объекту?
// Что такое __proto__?
// Каким типом может быть значение __proto__ ?
// Как работает this для прототипов объекта?
// Как задать прототип конструктору?

// Встроеные прототипы у объектов
// Прототипы у примитивов. Пример
// Откуда у примитивов взялись методы и свойства?
// Для чего try…catch?
// Что содержит объект ошибки?
// Для чего используется объект ошибки?
// throw. Для чего?
// Блок finally? Для чего? Когда выполняется?
// В чем особенность .call()? Написать пример
// В чем особенность .bind()? Написать пример
// В чем особенность .apply()? Написать пример
// Написать пример замыкания
// Написать пример рекурсии
// Написать пример каррирования


// function sum(a, b, c) {
//     return a + b + c
// }
// console.log(sum(3, 7, 4));
// function currySum(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c)
//             }
//         }
//     }
// }
// const curriedFn = currySum(sum)
// console.log(curriedFn(4)(3)(7))


// const person = {
//     name: 'Yulia',
//     age: 34,
//     phone: '2435345435',
//     isMan: false,
// }
// const map = new Map(Object.entries(person))
// console.log(map);
// map.set('isAdmin', false)
//     .set('lastName', "Balkis")

// console.log(map.values());
// for ([key, value] of map) {
//     console.log(`${key}____${value}`)
// }

// const result = map.forEach((value, key) => console.log(`${key}++++${value}`))
// console.log(result)

// const arr = [1, 4, 5, 5, 4, 1, 'Hi']
// const set = new Set(arr)
// set.add(68)
//     .add(1)
//     .add('Yulia')
//     .add(false)

// console.log(set);
// for (let value of set) {
//     console.log(value)
// }
// set.forEach((value) => console.log(value))
// function f(array) {
//     return Array.from(new Set(array))

// }
// console.log(f(arr))

// ---------------------------------------- Class----------------------------------------

//создание класса/ основные блоки
// 1. При вызове new User создается объект c  базовыми свойствами( isAdmin=false) оперделено перед constructor
// 2. автоматически вызывается метод constructor, расширяется объект (добовляется новое свойство name и перезаписывается свойство isAdmin = true)
// 3. в prototype записываются методы (method1/method2)
// class User {
//     isAdmin = false;
//     constructor(name) {
//         this.isAdmin = true;
//         this.name = name;
//     }
//     method1() {
//         console.log('Hello')
//     }
//     method2() {
//         console.log('Hi')
//     }

// }
// const person = new User('Bob') // создаем объект \ экземпляр класса User
// // console.log(person.isAdmin);// true

//---------------------------------------------------------

// class Animal {
//     // через static записываются персональные свойства и методы для класса, они так же НАСЛЕДУЮТСЯ от класса к классу!!!
//     static printName = ' Это  свойство класса Animal';
//     static method3() {
//         console.log(this.name)
//     }
//     constructor(name) {
//         this.name = name;
//         this.speed = 0;
//     }
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} бежит со скоростью ${this.speed}`);
//     }
//     stop() {
//         this.speed = 0;
//         console.log('Животное остановилось!');
//     }

// }

// class Rabbit extends Animal {
//     // если мы не записали constructor() в ручную, то
//     //  в момент наследования("под копотом") такая запись создается сама и все свойства наследуются от родителя(т.е в данном примере constructor() берется от Animal)
//     //    constructor(...arg) {
//     //     super(...arg)
//     // }
//     //расширяем функционал у объекта rabbit
//     constructor(name, age) {
//         super(name)// означает, что наследуемся от родительского свойства
//         this.age = age// добавили новое свойство age, тем самым мы расширили функционал класса Rabbit по отношению к классу Animal
//     }

//     hide() {
//         console.log('Я спрятался');
//     }
//     stop() {
//         super.stop(); //
//         this.hide()
//     }
// }


// const rabbit = new Rabbit('Кролик', 7)
// // console.log(rabbit.run(5));
// //
// // --------------------------------------------------------
// // //  Создание приватных и защищенных методов и свойств для класса
// class CoffeeMachine {
//     _waterAmount = 0; // _waterAmount -защищенное свойство( договоренность между разрабами), может использоваться вне  класса СoffeeMachine
//     // #waterAmount -  приватное свойство, такая запись ЗАПРЕЩАЕТ извне  использовать данное свойство или метод, только внутри класса!!!
//     constructor(power) {
//         this.power = power
//     }
//     set addWatter(value) { // с помощью set  добавили сеттер
//         this._waterAmount += value;
//     }
//     get waterAmount() {
//         return this._waterAmount;
//     }
//     createCoffee() {
//         if (this._waterAmount >= 200) {
//             this._waterAmount -= 200
//             console.log("Готова одна чашка кофе! ");
//         } else {
//             console.log('Залейте воду');
//         }
//     }
// }
// class newClass extends CoffeeMachine {

// }
// const coffeeMachine = new CoffeeMachine(100)
// coffeeMachine.addWatter = 1000;
// console.log(coffeeMachine.createCoffee());
// console.log(coffeeMachine instanceof CoffeeMachine)//  проверка является ли объект экземпляром класса
// console.log(newClass instanceof CoffeeMachine)


// class Rabbit extends Object {
//     super() {
//         this.name = name
//     }
// }

// let rabbit = new Rabbit("Кроль");

// console.log(rabbit.hasOwnProperty('name')); // Ошибка
//--------------------------------------------------------------------------------

// class Animal {
//     constructor(name) {
//         this.name = name;

//     }

//     run(speed) {
//         this.speed = speed
//         return `${this.name} бежит со скоростью ${this.speed} км/ч`;
//     }
// }


// class Rabbit extends Animal {
//     constructor(name, age) {
//         super(name)
//         this.age = age;
//     }
//     get age() {
//         return this._age
//     }
//     set age(value) {
//         return this._age = value
//     }

//     run(speed) {

//         return (` ${super.run(speed)}. Животному - ${this.age} лет`)
//     }
// }
// const rabbit = new Rabbit('Кролик', 8)
// console.log(rabbit.run(6))
// ---------------------------------------------------------------------------------
// наследоване от класса Error

// class MyCustomError extends Error {
//     constructor(message) {
//         super(message)
//         this.name = 'MyError';
//     }

// }

// class Student {
//     //  создание класса Studdent с валидацией
//     #validAge = { min: 18, max: 65 }
//     #validGender = ["male", "female"];
//     constructor(name, age, isMan, createdData) {
//         if (name.length < 2 || name.length > 16) {
//             throw new MyCustomError('Невалидное значение имени!')
//         }

//         this.name = name;
//         if (isNaN(age) || age < this.#validAge.min || age > this.#validAge.max) {
//             throw new MyCustomError('Невалидное значение возраста!')
//         }
//         this.age = age;

//         if (typeof isMan !== 'boolean') {
//             throw new MyCustomError('Невалидное значение пола!')
//         }
//         this.isMan = isMan;

//         if (!isValidDate(createdData)) {
//             throw new MyCustomError('Невалидное значение даты!')
//         }
//         this.createdData = createdData

//     }

//     showInfo() {
//         const gender = this.isMan ? this.#validGender[0] : this.#validGender[1]
//         const newDataForm = isValidDate(this.createdData)
//         return `${this.name}, ${this.age}, ${gender}, ${newDataForm}`
//     }

// }


// function isValidDate(val) {
//     if (typeof val == 'string') {
//         const dataString = val.split('/')
//         const [day, month, year] = dataString;
//         const isValidData = new Date(year, month - 1, day)

//         const isValidDay = isValidData.getDate();
//         const isValidMonth = isValidData.getMonth();
//         const isValidYear = isValidData.getFullYear();

//         if (isValidDay === +day && isValidMonth === +month - 1 && isValidYear === +year) {
//             return `${isValidDay < 10 ? '0' : ''}${isValidDay}-${isValidMonth + 1 < 10 ? '0' : ''}${isValidMonth + 1}-${isValidYear}`
//         }
//         else {
//             return false
//         }
//     } else {
//         throw new MyCustomError('Проверьте формат вводимой даты!')
//     }

// }


// // // Создаем массив с данными о студентах
// const peopleData = [
//     { name: 'Bob', age: 40, isMan: true, createdData: 9 },
//     { name: 'Yulia', age: 3, isMan: false, createdData: "30/05/2023" },
//     { name: 'Rita', age: 19, isMan: false, createdData: "30/05/2023" },
//     { name: 'Alice', age: 21, isMan: false, createdData: "15/05/2023" },
//     { name: 'V', age: 26, isMan: true, createdData: "15/05/2023" }

// ]
// // деструктуризация

// const students = peopleData.map(({ name, age, isMan, createdData }) => {
//     try {
//         return new Student(name, age, isMan, createdData)
//     } catch (error) {
//         console.log(`Ошибка в данных студента ${name}: ${error.message}`)
//         return null
//     }
// }).filter(item => item !== null).forEach(item => {
//     console.log(item.showInfo())
// })
// console.log(students);



// ==========================================================




// ===============================================================

// ------------------------------------- Задания из учебника---------------------------------
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height
//     }
// }
// const rectangle = new Rectangle(10, 10)

// --------------------------------------
// class Square extends Rectangle {
//     constructor(sideLength) {
//         super()
//         this.sideLength = sideLength;
//     }
//     getArea() {
//         return this.sideLength ** 2
//     }
// }
// const square = new Square(50)
// console.log(square.getArea());

// -------------------------------------
// class Teacher {
//     student = []
//     constructor(name) {
//         this.name = name;
//     }
//     gradeStudent(student, grade) {

//         this.student.push(this.grade)
//         return `${this.name}: ${student} `
//     }

// }
// const teacher = new Teacher('Yulia')
// console.log(teacher.gradeStudent(8));
// -----------------------------------------
// class BanckAccount {

//     constructor(balance, ownerName) {
//         this.balance = balance;
//         this.ownerName = ownerName;
//     }
//     deposit(amount) {
//         return this.balance += amount

//     }
//     withdrow(amount) {
//         return this.balance -= amount
//     }
//     getBalance() {
//         return this.balance
//     }
// }
// const account = new BanckAccount(5, "bob")
// --------------------------------------------
//  с защищенным свойством tax
// class Product {

//     constructor(name, price) {

//         this.name = name;
//         this.price = price;
//         this._tax = 10;
//     }
//     get tax() {

//         return this._tax
//     }
//     set tax(value) {

//         this._tax = value
//     }
//     priceWithTax() {
//         console.log(this.price + (this.price * this._tax / 100))
//     }
// }
// const product = new Product('Egg', 12)

// console.log(product.priceWithTax());

// ---------------
// class Product {
//     #tax = 10
//     constructor(name, price) {

//         this.name = name;
//         this.price = price;

//     }

//     priceWithTax() {
//         console.log(this.price + (this.price * this.#tax / 100))
//     }
// }
// const product = new Product('Egg', 12)

// console.log(product.priceWithTax());
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Данный код представляет класс`Student`, который имеет конструктор и метод`showInfo()`.

// Конструктор принимает аргумент`createdDate`, который должен быть датой в формате "день/месяц/год".Перед созданием объекта класса`Student`, проверяется корректность формата даты с помощью функции`isValidDate()`.Если дата не соответствует заданному формату, выбрасывается исключение с сообщением "Invalid date format".Если же дата корректна, она сохраняется в свойстве `createdDate` объекта.

//     Метод `showInfo()` возвращает строку с информацией о дате создания студента.Для форматирования даты используется функция`formatDate()`, которая принимает строку с датой в формате "день/месяц/год" и возвращает строку в формате "день-месяц-год".

// Также в коде есть функция`isValidDate()`, которая проверяет корректность формата даты и её существование.Функция использует регулярное выражение для проверки формата даты, а затем создает объект `Date` и проверяет его корректность.Если дата не соответствует заданному формату или не существует, функция возвращает`false`, иначе - `true`.

// Пример использования класса `Student` показывает, как создать объект класса и вызвать метод`showInfo()`, который вернет строку с информацией о дате создания студента в заданном формате.
// class Student {
//     constructor(createdDate) {
//         if (!isValidDate(createdDate)) {
//             throw new Error('Invalid date format');
//         }
//         this.createdDate = createdDate;
//     }

//     showInfo() {
//         const formattedDate = formatDate(this.createdDate);
//         return `Student created on ${formattedDate}`;
//     }
// }

// function isValidDate(dateString) {
//     const regex = /^\d{2}\/\d{2}\/\d{4}$/;
//     if (!regex.test(dateString)) {
//         return false;
//     }

//     const [day, month, year] = dateString.split('/');
//     const date = new Date(year, month - 1, day);
//     if (isNaN(date.getTime())) {
//         return false;
//     }

//     return true;
// }

// function formatDate(dateString) {
//     const [day, month, year] = dateString.split('/');
//     return `${day}-${month}-${year}`;
// }

// // Пример использования:
// const student = new Student('31/12/2021');
// console.log(student.showInfo()); // Student created on 31-12-2021

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. Создается пустой объект {}
// 2. Вызывается функция, this = {}
// 3.{} связывается с прототипом
// 4. Функция автоматически возвращает {}


// class User {
//     #name
//     constructor(name, age) {
//         this.#name = name
//         this.age = age
//     }
//     get name() {
//         return this.#name
//     }
//     sayHi() {
//         return `${this.name} ${this.age} ${this.isAdmin} `
//     }
// }


// class User2 extends User {
//     constructor(name, age, isAdmin) {
//         super(name, age)
//         this.isAdmin = isAdmin

//     }
//     sayHello() {
//         console.log(`Привет, ${super.sayHi()}`)
//     }
// }
// const person = new User2('Yulia', 34, false)
// console.log(person.sayHello())
// ======================================================callback=========================================
// Задания из учебника
// function sumNumders(a, b, callback) {
//     let result = a + b
//     callback(result)
// }
// function fn(result) {
//     console.log(result)
// }
// console.log(sumNumders(3, 8, fn))
// ________________________________________________________
// function dataGenerator(firstName, lastName, callback) {
//     let result = `${firstName} ${lastName}: `
//     callback(result)
// }

// function fn1(val) {
//     console.log(val + 34)
// }
// console.log(dataGenerator('Yulia', 'Balkis', fn1))
// ----------------------------------------------------------
// const arr1 = [1, 3, 4, 56, 767, 89]
// function findSum(arr, callback) {
//     const sum = arr.map((item) => {
//         callback(item)
//         return item
//     })

//     return sum

// }
// function fn2(val) {
//     console.log(val)
// }
// console.log(findSum(arr1, fn2))
// -------------------------------------
// const str = ['Yulia', 'Rita', 'Alice', 'Oleg']
// function strToUpperCase(arr, callback) {
//     const newStr = arr.map((item) => {
//         callback(item)
//         return item
//     })
//     return newStr
// }
// function fn3(val) {
//     console.log(val.toUpperCase())
// }
// console.log(strToUpperCase(str, fn3))

// -----------------------------------

// const arrNum = [1, 2, 4, 6, 7, 8, 9, 5]
// function findEvenNum(arr, callback) {
//     const evenNum = arr.filter((item) => {
//         return callback(item) % 2 === 0

//     })
//     return evenNum
// }
// function fn4(val) {
//     return val
// }
// console.log(findEvenNum(arrNum, fn4))
// --------------------------------------------------
// const arrObj = [
//     { name: "Yulia", age: 34 },
//     { name: "Rita", age: 15 },
//     { name: "Alice" }
// ]
// function checkAge(arr, callback) {
//     const valAge = arr.filter((item) => {
//         return callback(item)

//     })
//     return valAge
// }
// function fn5(val) {
//     if (val.age) {
//         console.log(val.age)
//     }
// }
// console.log(checkAge(arrObj, fn5))
// ____________________________________________________Promise___________________________________
// Промис(Promise) - это объект в JavaScript, который представляет собой неопределенное значение, которое будет вычислено в будущем.Промисы используются для работы с асинхронным кодом, который выполняется не сразу, а после выполнения какой - то операции, которая может занять время.Например, загрузка данных с сервера.
// // Создание нового Promise
// const promise = new Promise((resolve, reject) => {
//     // Асинхронная операция (например, загрузка данных с сервера)
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       // Если операция выполнена успешно, вызываем resolve и передаем данные
//       resolve(data);
//       // Если операция не удалась, вызываем reject и передаем ошибку
//       // reject("Ошибка загрузки данных");
//     }, 2000);
//   });

//   // Обработка результата Promise
//   promise
//     .then((data) => {
//       console.log(data); // Выводим данные в консоль
//     })
//     .catch((error) => {
//       console.log(error); // Выводим ошибку в консоль
//     });
// -----------------------------------------------------------------------------------
// // Создание нового Promise
// const promise = new Promise((resolve, reject) => {
//     // Асинхронная операция (например, запрос к API)
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => {
//             // Если операция выполнена успешно, вызываем resolve и передаем данные
//             resolve(data);
//         })
//         .catch(error => {
//             // Если операция не удалась, вызываем reject и передаем ошибку
//             reject(error);
//         });
// });

// // Обработка результата Promise
// promise
//     .then(data => {
//         console.log(data); // Выводим данные в консоль
//     })
//     .catch(error => {
//         console.log(error); // Выводим ошибку в консоль
//     });


//   В этом примере мы создаем новый Promise, который выполняет асинхронную операцию(запрос к API).Мы используем метод fetch для отправки GET - запроса на сервер и получения данных в формате JSON.Если запрос выполнен успешно, мы вызываем функцию resolve и передаем полученные данные.Если запрос не удался, мы вызываем функцию reject и передаем ошибку.

//   Затем мы обрабатываем результат Promise с помощью методов then и catch. Если Promise выполнен успешно, метод then вызывается с переданными данными.Если Promise завершается с ошибкой, вызывается метод catch с переданной ошибкой.

// function findSum(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject(new Error(' Oppps!'))
//         } else {
//             setTimeout(() => resolve(a + b), 1000)
//         }
//     })
// }

// findSum('i', 6)
//     .then(result => console.log(result))
//     .catch(error => console.log(error.message))

// ============================================
const promises = [
    Promise.resolve('Promise 1 resolved'),
    Promise.reject('Promise 2 rejected'),
    Promise.resolve('Promise 3 resolved')
];

Promise.allSettled(promises)
    .then(results => {
        console.log(results);
    });

// =========================================

// const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 2000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 1000));
// const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 3000));

// const result = Promise.race([promise1, promise2, promise3]);

// result.then(data => console.log(data));
// =======================================================

// const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 2000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 1000));
// const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 3000));

// const result = Promise.all([promise1, promise2, promise3]);

// result.then(data => console.log(data)); // [1, 2, 3]


// =========================================================!
// Напиши функцию, которая получает на вход два числа и возвращает Promise, который разрешается через 1 секунду с результатом суммы этих чисел. Если одно из чисел не является числом, Promise должен быть отклонен с ошибкой.
// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== "number" || typeof b !== "number") {
//             reject(new Error("One or both arguments are not numbers"));
//         } else {
//             setTimeout(() => {
//                 resolve(a + b);
//             }, 1000);
//         }
//     });
// }

// ===================================================!
// Напиши функцию getUser(id), которая возвращает промис, который разрешается (resolve) пользователем с заданным идентификатором, или отклоняется с ошибкой, если пользователь не найден.
// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         // здесь должен быть код для поиска пользователя по id
//         const user = users.find(user => user.id === id);
//         if (user) {
//             resolve(user);
//         } else {
//             reject(new Error("User not found"));
//         }
//     });
// }

// ================================!
// Напиши функцию delayedGreeting(name, delay), которая будет возвращать Promise, который будет разрешаться (resolve) через заданный промежуток времени delay и выводить на экран приветствие Hello, ${name}!.Ошибка в коде!!!!!!!!!!
// function delayedGreeting(name, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (name) {
//                 resolve(Hello, ${name}!)
//               } else {
//                 reject(new Error("Name is not provided"));
//               }
//         }, delay);
//     });
// }
// =====================================!
// Напиши функцию sumNumbers, которая принимает два числа a и b и callback - функцию.Функция должна сложить числа a и b и передать результат в callback - функцию которая выведет результат в консоль.

// function sumNumbers(a, b, callback) {
//     const result = a + b;
//     callback(result);
//   }

//   sumNumbers(3, 5, function(result) {
//     console.log(result);
//   }); // выводит в консоль 8

// Напиши функцию, которая принимает массив строк и callback - функцию, а затем вызывает переданную callback - функцию для каждой строки в массиве.Сallback - функция должна преобразовывать строку в верхний регистр и выводить ее в консоль.
// function processStrings(arr, callback) {
//     arr.forEach(function(str) {
//       const upperCaseStr = str.toUpperCase();
//       callback(upperCaseStr);
//     });
//   }
  
//   const strings = ['hello', 'world', 'javascript'];
//   processStrings(strings, function(str) {
//     console.log(str);
//   }); // Выводит в консоль: HELLO WORLD JAVASCRIPT

// Напиши функцию, которая принимает массив чисел и callback-функцию, а затем вызывает переданную callback-функцию для каждого элемента в массиве. Сallback-функция должна проверять, является ли число четным, и выводить его в консоль, если это так.
// function processNumbers(arr, callback) {
//     arr.forEach(function(num) {
//       if(num % 2 === 0) {
//         callback(num);
//       }
//     });
//   }
  
//   const numbers = [1, 2, 3, 4, 5, 6];
//   processNumbers(numbers, function(num) {
//     console.log(num);
//   }); // Выводит в консоль: 2 4 6

// Напиши функцию, которая принимает массив объектов и callback-функцию, а затем вызывает переданную callback-функцию для каждого объекта в массиве. Сallback-функция должна проверять, есть ли у объекта свойство "age" и выводить его значение в консоль, если это так.
// function processObjects(arr, callback) {
//     arr.forEach(function(obj) {
//       callback(obj);
//     });
//   }
  
//   const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", gender: "female" },
//     { name: "Bob", age: 40 }
//   ];
  
//   processObjects(people, function(obj) {
//     if(obj.age) {
//       console.log(obj.age);
//     }
//   }); // Выводит в консоль: 25 40
// =========================================================

// setTimeout(() => console.log(5), 0);

// new Promise((res) => res(1)).then((data) => console.log(data));

// setTimeout(() => console.log(2), 1000);

// Promise.resolve(3).then((data) => console.log(data));

// console.log(4);

// new Promise((res) => setTimeout(() => res(7), 2000)).then((data) =>
//   console.log(data)
// );

// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }

// console.log(1);

// setTimeout(() => console.log(2), 1000);

// console.log(3);

// new Promise((res) => res(4)).then((data) => console.log(data));

// setTimeout(() => console.log(5), 2000);

// Promise.resolve(6).then((data) => console.log(data));

// new Promise((res) => setTimeout(() => res(7), 3000)).then((data) =>
//   console.log(data)
// );

// ===========================
// const order = {
//     item: ['Peperoni'],
//     city: "Minsk",
//     telNumber: "+375291231231"
// }

// const sendPostRequest = async () => {
//     try {
//         const response = await fetch('URL', {
//             method: "POST",
//             headers: {
//                 Authorization: "Bearer token"
//             },
//             body: JSON.stringify(order)
//         });
//         const data = await response.json();
//         console.log("data: ", data);
//     } catch (error) {
//         console.log("error: ", error);
//     }
// }
// ===============================
// const editOrder = {
//     item: ['Peperoni'],
//     city: "Brest",
//     telNumber: "+375291231231"
// }

// const sendPutRequest = async () => {
//     try {
//         const response = await fetch('URL', {
//             method: "PUT",
//             headers: {
//                 Authorization: "Bearer token"
//             },
//             body: JSON.stringify(editOrder)
//         });
//         const data = await response.json();
//         console.log("data: ", data);
//     } catch (error) {
//         console.log("error: ", error);
//     }
// }
// =================
// const editOrder = {
//     city: "Brest",
// }

// const sendPatchRequest = async () => {
//     try {
//         const response = await fetch('URL', {
//             method: "PATCH",
//             headers: {
//                 Authorization: "Bearer token"
//             },
//             body: JSON.stringify(editOrder)
//         });
//         const data = await response.json();
//         console.log("data: ", data);
//     } catch (error) {
//         console.log("error: ", error);
//     }
// }
// // async function asyncFunction() {
//     return 1;
// }
// ===========================================
// asyncFunction().then(d => console.log(d))

// // это тоже самое что и этот код

// const promise = new Promise(resolve => resolve(1));

// promise.then(d => console.log(d))
// =============================================

