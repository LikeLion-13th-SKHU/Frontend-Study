// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (
  item,
  idx,
  arr
) /*현재 요소의 값, 현재 반복 카운트, 전체 배열의 값*/ {
  console.log(idx, item * 2); // 0 2, 1 4, 2 6
});

let doubledArr = [];

arr1.forEach((item, idx, arr) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // 2 4 6

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude); // true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2);
console.log(index); // 0
// 배열에 없는 값일때는 -1을 반환함

// -> indexOf는 얕은비교로 진행해서 객체값을 찾지 못함

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

console.log(findedIndex); // 0

// -> 복잡한 객체 타입을 조건식을 이용해 찾아낼 수 있음

// 5. find
// 모든 요소를 순회하면서, 콜백함수를 만족하는 요소를 찾고
// 요소를 그대로 반환

let arr5 = [{ name: "이정환" }, { name: "양라윤" }];

const finded = arr5.find((item) => item.name === "이정환");

console.log(finded); // name : "이정환"
//인덱스 반환이 아니라 그 요소 자체를 반환해줌
