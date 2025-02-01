// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성 )
let person = {
  // key : value 형식 ('key'프로퍼티)
  name: "양라윤",
  age: 24,
  hobby: "테니스",
  "like cat": true,
  //프로퍼티에 띄어쓰기를 사용할때는 예외로 "" 사용해야함
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 점 표기법
let name = person.name;
console.log(name); // 가운데 줄은 타입스크립트와 관련된 경고

// 괄호 표기법
let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // true
let result2 = "cat" in person; // false
