// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num + str;
//문자열 10과 문자열 20의 덧셈이 되어버림
//10이 묵시적 형 변환이 일어나게 된 것이다.

// 2. 명시적 형 변환
// -> 프로그램이 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
// Number()가 내장함수임

let str2 = "10개";
// 숫자 말고 다른 문자열 값이 포함되어 있을때는 parseInt 사용
let strToNum2 = parseInt(str2);
// 숫자가 앞 쪽에 있어야 잘 적용됨. 문자가 앞에 있으면 안될지도,,,

// 숫자 -> 문자열
let num1 = 20;
let num2 = String(num1);
