// 1. for문

// for (초기식; 조건식; 증감식) {
//     console.log("반복");
// }

for (let idx = 0; idx < 5; idx++) {
    if (idx % 2 === 0) {
        continue;
        // continue 문을 만나게 되면 반복문 내의 다른 코드는 실행하지 않고 바로 다음 반복 회차로 넘어감
        // ex. idx가 2 이면 continue를 만나고, console 과 if 문은 실행하지 않고 넘어감 (바로 idx가 3인 경우의 for 문을 실행)
    }
    console.log(idx);

    if (idx >= 5) {
        break;
    }
}