function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); //그냥 변수에 함수를 담아놓기 가능 -> 함수 내용이 문자열로 출력
varA(); //함수를 변수의 이름으로 호출하는 것도 가능

// 1. 함수 표현식
// 이런 함수는 호이스팅 대상이 되지 않음

let var8 = function funcB() {
  //함수 이름 생략 가능
  console.log("funcB");
}; // 이건 함수의 선언식이 아님
// 변수의 값으로서 함수가 선언된 것이라서

//funcB(); //이렇게 함수 호출 하면 오류 발생
var8();

// 2. 화살표 함수

// let varC = () => {
//   return 1;
// };

//let varC = () => 1;

let varC = (value) => value + 1;

console.log(varC(10));
