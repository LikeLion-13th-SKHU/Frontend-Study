// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020
// num이 묵시적으로 string 타입으로 형 변환 됨

// 2. 명시적 형 변환
// -> 프로그래머가 내장 함수 등을 이용해서 직접 형 변환을 명시

// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

let str2 = "10개";
// let strToNum2= Number(str2); //NaN
let strToNum2 = parseInt(str2); //10
console.log(strToNum2);
// parseInt-> 숫자 값이 아닌 값을 포함하고 있는 문자열도 숫자 값으로 변환해줌
// 그러나 "숫자 10" 이런 식으로 문자가 숫자 앞에 있게 되면 형 변환이 잘 되지 않을 수 있음

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다"); // 20입니다