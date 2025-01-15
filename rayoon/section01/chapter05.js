// 1. Number Type
let num1 = 24;
let num2 = 1.5;
let num3 = -20;

//넘버 타입은 기본적인 사칙연산 지원
console.log(num1 + num2 - num3);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;
//not a number

// 2. String Type
let myName = "양라윤";
//따옴표가 없으면 변수명으로 착각해서 오류 발생
let myLocation = "인천";
let introduce = myName + myLocation;
console.log(int);
//덧셈도 지원함

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
//백틱을 사용하면 변수의 값을 동적으로 문자열에 포함시킬 수 있음
// = 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다.)
let empty = null;

// 5. Undefined Type
let none;
// -> undefined 출력됨

// undefined 아무 값도 없을 때 자동으로 지정
// null은 직접 아무 값도 없음을 증명하기 위해 지정해줘야하는 값
