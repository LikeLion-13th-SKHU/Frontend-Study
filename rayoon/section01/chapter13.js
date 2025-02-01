// 1. 콜백함수
function main(value) {
  value();
}

// 1)
function sub() {
  console.log("i am sub");
}

main(sub);

// 2) 1, 2 같음
main(() => {
  console.log("i am sub");
});

//main 함수가 언제든 원하는 타이밍에 호출시킬 수 있음

// 2. 콜백함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5);
repeatDouble(5);
// 이렇게 구조가 비슷한 함수들을 사용할 때 콜백 함수 사용

function repeat1(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat1(5, function (idx) {
  console.log(idx);
});

repeat1(5, (idx) => {
  console.log(idx * 2);
}); //위에 repeatDouble함수의 기능을 함
