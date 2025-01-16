// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// .length는 길이를 반환하는 내장 함수

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
    // for of 반복문은 of 뒤에 있는 배열의 값(value)을 하나씩 순서대로 꺼내서 item에 저장한다
    // 배열에서만 사용 가능 !!
    console.log(item); // 1 2 3
}

// 2. 객체 순회
let person = {
    name: "박예은",
    age: 24,
    hobby: "음악 듣기",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 변환
let keys = Object.keys(person);
console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     console.log(key);
// }

// for (let key of keys) {
//     console.log(key);
// }

for (let key of keys) {
    const value = person[key];
    console.log(key, value);
}

// 2.2  Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 변환
let values = Object.values(person);
console.log(values);

for (let value of values) {
    console.log(value);
}

// 2.3 for in
// -> for in 반복문은 in 뒤에 있는 배열의 키 값(key)을 하나씩 순서대로 꺼내서 key에 저장한다
// 객체에서만 사용 가능 !!
for (let key in person) {
    console.log(key);
}