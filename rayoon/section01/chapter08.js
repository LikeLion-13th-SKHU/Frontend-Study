// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아냄

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// var = undefined 라서 var2의 값인 10이 출력되게 됨
let var5 = var1 ?? var3;
// 20이 출력됨
let var6 = var2 ?? var3;
// 둘 다 값이 있으면 앞에 적힌 값을 출력함

// 2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
// -> string 이라고 출력됨
// 타입을 알려주는 연산자임

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환

let var8 = 10;
//요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"

let res = var8 % 2 === 0 ? "짝수" : "홀수";
// 물음표를 기준으로 왼쪽 항에는 조건식
// 콜론을 기준으로 왼쪽에는 조건식이 참일때, 오른쪽은 거짓일때 반환값
