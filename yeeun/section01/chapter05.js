// 1. Number Type (숫자)

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 나머지 연산 (모듈러 연산)

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number

console.log(1 * "hello"); // NaN

// 2. String Type
let myName = "박예은"; // 쌍따옴표(or 작은따옴표)를 쓰지 않으면 변수명으로 취급하기 때문에 에러가 날 수 있음
let myLocation = "파주";
let introduce = myName + myLocation; // 박예은파주

// +) 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;

console.log(introduceText);
// `` -> 백틱, 백틱으로 문자열을 만들게 되면 문자열 안에 변수 값을 동적으로 넣을 수 있음

// 3. Boolean Type (true, false 상태)
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);

// null과 undefined의  차이
// null: 직접 명시적으로 null이라는 값을 할당해야 사용할 수 있음 (개발자가 명시적으로 값이 없음을 표시할 때 사용)
// undefined: 값을 미처 초기화하지 못했거나 존재하지 않는 값을 불러오려고 할 때 발생하는 타입