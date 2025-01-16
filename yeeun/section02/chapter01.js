// 1. falsy한 값 (조건문 내에서 거짓으로 판별되는 값)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
// let f7 = 0n; // 빅인티저, 아주 큰 숫자를 저장할 때 사용하는 값, 웹 개발에서는 잘 사용하지 않는다

if (!f1) {
    console.log("falsy");
}

// 2. truthy한 값 (조건문 내에서 참으로 판별되는 값)
// -> 7가지 falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
    console.log("truthy");
}

// 3. 활용 사례

function printName(person) {
    if (!person) {
        // not person 값이면(falsy 값이면) 아래 조건문을 실행 후 함수 종료
        // (person === undefined || person === null)
        console.log("person 값이 없음");
        return;
    } // falsy 에러 방지 코드

    console.log(person.name);
}

// let person = { name: "박예은" };
let person = null;
printName(person);