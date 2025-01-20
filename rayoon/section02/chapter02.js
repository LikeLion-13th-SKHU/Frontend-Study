let varA = false;
let varB = true;

console.log(varA && varB);
// 첫번째 피연산자 varA가 false
// -> varB를 볼 필요도 없이 false

// 첫번째 피연산자만으로도 값이 확정이면 두번째 피연산자에는 접근 할 필요가 없음
// -> 단락평가

function returnFalse() {
  console.log("False함수");
  return false;
}
function returnTrue() {
  console.log("True함수");
  return true;
}

console.log(returnFalse() && returnTrue()); //False함수 //false
// 단락평가가 작동하여 True함수라는 값이 출력 되지 않은 것임

console.log(returnTrue() && returnFalse()); //True함수 //False함수 //false

function returnFalse1() {
  console.log("False함수");
  return undefined;
}
function returnTrue1() {
  console.log("True함수");
  return 10;
}

console.log(returnTrue() && returnFalse()); //True 함수 // 10
console.log(returnFalse() && returnTrue()); //False 함수 // undefined

//단락 평가 활용 사례
function printName(person) {
  //   if (!person) {
  //     console.log("person의 값이 없음");
  //     return;
  //   }
  //   console.log(person.name);
  // -> 단락 평가로 간단하게
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "양라윤" }); // 양라윤

// *Truthy || Truthy -> 첫번째 값 (두번째까지 볼 필요 없음)
// Truthy && *Truthy -> 두번쨰 값 (두번째 값도 꼭 필요)
