// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수는 변경 불가능 !
animal = { a: 1 }; // 객체 생성 오류

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제
// 모두 가능

// 상수 객체에서 프로퍼티의 값을 변화하는 것은 가능하다.

// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
  name: "양라윤",
  // 함수를 저장하는 프로퍼티
  // = 메서드
  sayHi: function () {
    console.log("안녕!");
  },
  sayHi1() {
    console.log("단축된 메서드 선언 방법");
  },
};

person.sayHi(); // 메서드 호출 가능
person["sayHi1"]; // 괄호 표기법으로도 호출 가능

// 메서드는 객체에 동작을 정의하는데 사용함
