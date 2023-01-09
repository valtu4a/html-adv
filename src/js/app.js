'use strict';

const TAB_N = '07239',
    BIRTH_YEAR = 1987,
    CURRENT_YEAR = new Date().getFullYear();

let personName = 'Владимир',
    personPatronymic = 'Максимович',
    personSurname = 'Тучкевич',
    age = CURRENT_YEAR - BIRTH_YEAR,
    message;


message =  age + ' ' + personSurname + ' ' + personName + ' '+ personPatronymic;

let a = 'строка' * 0;


// 1. number
//let a = 5;
//let b = 1.5;

// NaN - не число
// Infinity - поделили на 0

// 2. string
let str = 'строка';

// 3. boolean
let a1 = 11,
    b1 = '11';

function test(a, b){
    return a === b;
}

// 4. undefined
let a3;

console.log(typeof(a3));

// 5. null
let a4 = null;

// 6. object

let car = {
    brand:'Audi',
    year: 2017,
    model:'Q5',
    engine:'2.0 TFSI',
    gearbox:'robot',
    price: 2750000
};
console.log(typeof(car));
