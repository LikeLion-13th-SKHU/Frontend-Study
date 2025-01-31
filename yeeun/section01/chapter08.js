// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ? ? var2; // ?? -> null 병합 연산자
// var1 = undefined, var2 = 10
console.log(var4); // 20

let var5 = var1 ? ? var3;
console.log(var5); // 20

let var6 = var2 ? ? var3;
console.log(var6); // 10
// 두 개의 피연산자가 null이나 undefined가 아니면 앞에 적힌 피연산자(var2)의 값이 적용된다

let userName = "박예은";
let userNickName = "yengniws";

let displayName = userName ? ? userNickName;
// 만약 유저의 이름 값이 없다면 닉네임을 화면에 출력하도록 하는 변수

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는(값의 타입을 알려주는) 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
console.log(t1); // string

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항: 변수 res에 var8의 값이 짝수-> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res); // 짝