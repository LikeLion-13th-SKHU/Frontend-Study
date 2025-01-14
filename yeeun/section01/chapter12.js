// 1. 함수 표현식

function funcA() {
    console.log("funcA");
}

let varA = funcA;

console.log(varA);
//function funcA() {
//     console.log("funcA");
// }
// -> 함수 자체가 출력됨

varA(); // funcA

let varB = function funcB() {
    console.log("funcB");
};

varB();
//funcB(); // 에러 (값으로써 취급되기 때문, funcB는 값으로 취급되기 때문에 호이스팅의 대상이 되지 않음)

// 2. 화살표 함수
let varC = () => {
    return 1;
};
// let varC = () => 1;
// // -> 위 함수와 같은 역할을 함

console.log(varC()); // 1

let varD = (value) => {
    console.log(value); // 10
    return value + 1;
};

console.log(varD(10)); // 11