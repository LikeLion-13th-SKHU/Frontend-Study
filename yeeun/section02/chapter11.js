console.log(1); // 동기

setTimeout(() => {
    console.log(2);
}, 3000); // 3초가 지난 후 2를 출력 (비동기)

console.log(3); // 동기