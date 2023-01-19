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
// console.log(userInfo);
// let obj2 = userInfo;
// console.log(obj2);
// obj2.name = 'Петя';
// obj1.name = 'Оля'
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
// console.log(Object.fromEntries(myArray)) // преобразовали массив в объект
// console.log(myArray.map(el => el + '__'))// 
// let myArray = Object.entries(userInfo);
// console.log(Object.keys(userInfo));
// console.log(Object.values(userInfo));
// console.log(typeof myArray);


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


function sumSalaries(obj) {
    let sum = 0;
    let valuesObj = Object.values(obj);
    if (Object.keys(obj).length == 0) {
        console.log(0);
    }
    for (let value of valuesObj) {

        sum += value;
    }
    console.log(sum);
}
sumSalaries(salaries);
