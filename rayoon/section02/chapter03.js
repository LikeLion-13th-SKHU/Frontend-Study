// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// 이걸 편하게

let [one, two, three, four] = arr;
//let [one, two, three, four = 4]
// 할당됨
console.log(one, two, three, four); // 1 2 3 undefined

// 2. 객체의 구조 분해 할당
let person = {
  name: "양라윤",
  age: 24,
  hobby: "테니스",
};

let { name, age: myAge, hobby, extra = "hello" } = person;
console.log(name, myAge, hobby, extra); // 양라윤 24 테니스 hello

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
