// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2); // [4, 1, 2, 3, 5, 6]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };
console.log(obj2); // a: 1 b: 2 c: 3 d: 4

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
function funcB(one, ...rest) {
  // rest매개변수 뒤에는 추가로 매개변수 선언 불가
  //배열 형태로 전달됨
  console.log(rest); // 0: 2 1: 3
}

funcB(...arr1);
