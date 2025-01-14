// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2; // 모듈러 연산자

// 곱셈, 나눗셈, 나머지 연산자는 덧셈, 뺄셈 연산자보다 우선 순위가 높다
let num6 = 1 + 2 * 10;
console.log(num6); //21

let num6_1 = (1 + 2) * 10;
console.log(num6_1); // 30

// 3. 복합 대입 연산자
let num7 = 10;
num7 = num7 + 20;
num7 += 20; // num7의 값에 20을 더 추가하라는 의미의 연산자 //30
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
num8++; //변수명 뒤에 증감 연산자를 붙이면 해당 줄(29번째 줄)의 바로 뒷 줄(30번째 줄)에 연산이 적용됨
console.log(num8); // 11

let num8_1 = 10;
console.log(++num8_1); // 11, 전위 연산

let num8_2 = 10;
console.log(num8_2++); // 10, 후위 연산
console.log(num8_2); // 11
// 덧셈, 뺄셈 모두 사용 가능

// 5. 논리 연산자
let or = true || false; // or 연산자, 둘 중 하나만 true 여도 값이 true로 나옴

let and = true && false; // and 연산자, 둘 다 true 여야 true로 나옴

let not = !true; // not 연산자, 값 반전

console.log(or, and, not); // true false false

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자
console.log(comp1, comp2); // false true

// === 과 == 의 차이
// == 은 값의 자료형 차이는 비교해주지 않음 (값 자체만 비교)
// === 은 값의 자료형까지 비교해줌 (사용 권장)

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4); // true false

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;