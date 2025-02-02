// 함수 선언문
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
console.log(varA);

// 1. 함수 표현식 -> 호이스팅 되지 않음.
let varB = function () {
  //   console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
