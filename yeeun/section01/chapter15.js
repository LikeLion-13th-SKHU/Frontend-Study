// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; // 객체 리터럴
// 두 방식 모두 동일한 객체를 생성하지만 객체 리터럴 방식이 더 간단하다

// 2. 객체 프로퍼티 (객체 속성)
// -> key:value 형태로 사용
// -> key 값은 문자열, 숫자만 가능
// -> value 값은 어떤 것이든 가능 (문자, 숫자, 함수 등)

let person = {
    name: "박예은", // key: name, value: 박예은
    age: 27,
    hobby: "음악 듣기",
    job: "student",
    extra: {},
    10: 20,
    "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 점 표기법 (더 간단)
let name = person.name;
console.log(name); // 박예은

// let name = person.name1;
// console.log(name); // undefined
// 존재하지 않는 밸류 값에 접근하려고 했기 때문

// 괄호 표기법
let age = person["age"]; // 꼭 문자열로 써주어야 함 (쌍따옴표)
console.log(age);
// 존재하지 않는 밸류 값에 접근하려고 하면 undefined (점 표기법과 동일)

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 음악 듣기

// 3.2 새로운 프로퍼티를 추가하는 방법
person.favAnimal = "dog";
person["favFood"] = "떡볶이";
console.log(person); // 프로퍼티 추가됨

// 3.3 프로퍼티를 수정하는 방법
person.job = "homeProtector";
person["favFood"] = "마라탕";
console.log(person); // 프로퍼티 수정됨

// 3.4  프로퍼티를 삭제하는 방법
delete person.job;
delete person["favFood"];
console.log(person); // 프로퍼티 삭제됨

// 3.5 프로퍼티 존재 유무를 확인하는 방법 ( in연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1); // true
console.log(result2); // false