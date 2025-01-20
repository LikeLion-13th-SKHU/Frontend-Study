// 1. Falsy한 값
// 조건문에서 거짓이 아니지만 거짓으로 평가되는 값
// 7가지 존재
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 아주아주 큰 값을 저장

if (!f1) {
  // f1 = false , !f1 = true
  console.log("falsy");
}

// 2. Truthy 한 값
// 조건문에서 참이 아니지만 참으로 평가되는 값
// -> 7가지 Falsy 한 값들 제외한 나머지 값

let t1 = "hello"; // 비어있지 않은 문자열
let t2 = 120; // 0이 아닌 숫자
let t3 = []; // 배열
let t4 = {}; // 객체
let t5 = () => {}; // 화살표 함수

if (t5) {
  //참이 되는 값
  console.log("Truthy");
}

// 3. 활용 사례

function printName(person) {
  //   if (person === undefined) {
  //     console.log("person의 값이 없음");
  //     return; //만약 person의 값이 null이면 또 오류 발생
  //   }

  if (!person) {
    console.log("person의 값이 없음");
    return;
  }

  console.log(person.name);
}

// let person = { name: "양라윤" };
// printName(person);

// 만약 person의 값이 undefined이 된다면
let person;
printName(person);
//타입 오류가 남 undefined값의 점표기법으로 프로퍼티 접근 불가
