"use strict";
const AVAILABLESYMBOLS = '0123456789';

let inputStr = '-353879-sd'; // result: -35879
let sing = getSign(inputStr);
let digits = getDigits(inputStr);
let number = getNumber(digits);

function getSign(inputStr) {
    return inputStr[0] === '-' ? -1 : 1;
}

function getDigits(inputStr) {
    let numbers = [];
    let digitValues = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        0: 0
    };

    //1)(если элемент 0 = + или - то перебор с индексом 1 элемента, иначе с индексом 0
    let index = 0;
    if (inputStr[0] === '-'|| inputStr[0] === '+') {
        index = 1;
    }

    for (index; index < inputStr.length; index++) {
        let elem = inputStr[index];
        if (AVAILABLESYMBOLS.indexOf(elem) === -1) {
            break;
        }
        numbers.push(digitValues[elem])
    }
//2) перебор строки, беру элемент, если входит в available
//- беру этот элемент и  пушим в намебр


//}
//3) Если элемент не входит в available то делаем брейк

    return numbers;
//4) ретерн намбер

}
function getNumber(digits) {
// len 6
// 100000   10000    1000   100   10    1   ....
//     [3,      5,      3,    8,   7,   9   ....]
//      0       1       2     3    4    5   ....

// len 4
// 1000   100   10   1   ....
//   [3,    5,   3,  8,  ....]
//    0     1    2   3   ....

//
    if (digits.length === 0) {
        return NaN;
    }
    else if (digits.length === 1) {
        return digits[0]
    }
    else {
        let multiplier = 1;
        let sum = 0;

        for (let index = digits.length - 1; index >= 0; index--) {

            sum += digits[index] * multiplier;
            multiplier *= 10;
        }
        return sum * sing;
    }

}
//        1)Если массив пустой, то возвращаем
////NaN
////2)Если один элемент, то возвращаем элемент с индексом 0
////3)Если больше одного элемента, обрабатываем массив
//4)
//let multiplier = 1;
//let sum = 0;
//
//for (let index = arr.length - 1; index >= 0; index--)
//     let dig = arr[index];
//
//sum += dig * multiplier;
//multiplier *= 10;
//5)ретерн sum