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

let value = prompt('Введи число!');
if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0)
}

