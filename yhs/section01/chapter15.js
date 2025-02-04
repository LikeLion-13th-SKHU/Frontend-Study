// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "윤현승",
  age: 25,
  hobby: "football",
  job: "FE Developer",
  extra: {},
  "like cat": true, // 띄워쓰기 있는 키는 따옴표로 감싸준다.
};

// 3, 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 평상시엔 이렇게 쓰고
console.log(name);

let age = person["age"]; // 동적으로 써야할 때는 이렇게
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person);

//3.3 프로퍼티 수정법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티 삭제법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무 확인법 (in 연산자)
let result1 = "name" in person;
console.log(result1);
