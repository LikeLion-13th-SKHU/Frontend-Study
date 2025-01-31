// 1. spread 연산자
// -> spread: 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2); // 4 1 2 3 5 6

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2);
/*
a: 1
b: 2
c: 3
d: 4
*/

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1); // 1 2 3

// 2. rest 매개변수
// -> rest는 나머지, 나머지 매개변수

function funcB(...rest) {
    // rest는 arr1의 매개변수를 한 번에 모두 받아온다(배열 형태로)
    console.log(rest);
    /*
              0: 1
              1: 2
              2: 3
              */
}

funcB(...arr1);

function funcB(one, ...rest) {
    // rest는 arr1의 매개변수를 한 번에 모두 받아온다(배열 형태로)
    console.log(rest);
    /*
              one : 1
              1: 2
              2: 3
              */
}

funcB(...arr1);

// * rest 매개변수 뒤에는 추가적인 매개변수가 올 수 없다
// ex. function funcB(one, ...rest, three) { -> 불가

// * 현재는 매개변수 이름을 ...rest로 설정했지만, 매개변수의 맨 마지막에 ..."rest 변수명"의 형태로 사용하면 자동으로 rest 매개변수로 인식한다.
// ex. function funcB(one, ...yeeun) {
// console.log(yeeun);
// }
// -> 여기선 yeeun이 rest 매개변수