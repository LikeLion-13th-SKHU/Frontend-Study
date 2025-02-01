// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "양라윤", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

console.log(tennisPeople); // { name: "양라윤", hobby: "테니스" },{ name: "김효빈", hobby: "테니스" },

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1); // 0: 2, 1: 4, 2: 6

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전 순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); // ["a","b","c"]

let arr3$1 = [10, 3, 5];
// 사전 순이 아니라 숫자의 대소를 비교하고 싶으면
// 콜백함수로 기준을 만들어야함
arr3$1.sort((a, b) => {
  if (a > b) {
    //b가 a 앞에 와라
    return 1; //양수를 반환하면 둘 중 작은 값이 앞에 오게 설정됨
  } else if (a < b) {
    //a가 b 앞에 와라
    return -1; // 음수면 반대
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // 0을 반환하면 a와 b 자리 그대로 유지
  }
});

console.log(arr3$1); // [3, 5, 10]

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 매서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // ['c','a','b']
console.log(sorted); // ['a','b','c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join();
console.log(joined); //hi,im,winterlood
// 쉼표처럼 요소와 요소 사이에 들어가는 문자 = 구분자
// -> 구분자를 바꾸고 싶으면 join인수에 넣어주면 됨
const joined1 = arr6.join("-");
console.log(joined1); //hi-im-winterlood
