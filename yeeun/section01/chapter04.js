//  1. 변수 (let)
let age; //변수를 선언한다(초기화 한다)
console.log(age); //undefined

age = 24;
console.log(age);
// 24 출력됨

//let age=40;-> 에러, 중복 코드는 선언 불가

// 2. 상수 (const)
// 상수는 값을 변화 시킬 수 없음, 선언과 동시에 초기값을 할당해주어야 한다
const birth = "2002.03.22";
birth = "123"; //에러 (상수 값 변화 불가)

// 3. 변수 명명 규칙 (변수 네이밍 규칙)
// 3-1. $, _ 를 제외한 기호는 사용할 수 없다.

let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
// let 2name; ->에러

// 3-3. 예약어를 사용할 수 없다.
// let let;
//let if; -> 에러

// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b; // 위 변수명은 변수의 의미를 알 수 없기 때문에 적절하지 못한 변수명이다.

let salesCount = 1;
let refundCount = 1;
let totalSalesCout = salesCount - refundCount;
// 위와 같이 알아보기 편한 변수 명으로 설정해 주어야 편리하다.