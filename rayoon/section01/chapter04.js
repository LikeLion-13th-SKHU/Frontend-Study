console.log("chapter 4");

//1. 변수
let age = 24;
//변수 선언 완료 = 초기화
//console.log(age);

//초기화없이 선언 가능
// let age;
// let age = 40; 이렇게 한번 더 선언하면 오류

age = 30;
//console.log(age);
//변수의 값 변경 가능

//2. 상수
//상수는 변경 불가능

const birth = "2002.11.22";
// 초기화 이후 변경 불가능 => 변하면 안되는 값 저장함

//3. 변수 명명규칙(네이밍 규칙)
//3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

//3-2. 숫자로 시작할 수 없다.
let n2am3e2;

//3-3. 예약어를 사용할 수 없다.
//특수한 의미로 사용하기로 약속한 단어들 let, const 등
//let let ; //x

//4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
//직관적인 변수명 사용하는 것이 좋음!!!
