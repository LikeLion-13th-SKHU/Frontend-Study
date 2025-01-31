// 구조 분해 할당

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three] = arr;
console.log(one, two, three); // 1 2 3

// let [one, two] = arr;
// console.log(one, two); // 1 2

// let [one, two, three, four] = arr;
// console.log(one, two, three, four); // 1 2 3 undefined

// let [one, two, three, four=4] = arr;
// console.log(one, two, three, four); // 1 2 3 4

// 2. 객체의 구조 분해 할당
let person = {
    name: "박예은",
    age: 24,
    hobby: "음악 듣기",
};

let { name, age, hobby } = person;
// 객체의 구조 분해 할당은 중괄호 이용
console.log(neme, age, hobby);

// let { name, age, hobby, extra = "hello" } = person;
// console.log(neme, age, hobby, extra);

// let { name, age:myAge, hobby, extra = "hello" } = person;
// console.log(neme, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra);
};

func(person);