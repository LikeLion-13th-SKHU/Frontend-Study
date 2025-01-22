function add10(num) {
  const promise1 = new Promise((resolve, reject) => {
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);

  return promise1;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  return newP; // then 메서드의 결과값이 됨
}).then((result) => {
  console.log(result);
  return add10(result);
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const promise = new Promise(
  (resolve /*성공상태로 바꿈 */, reject /*실패상태로 바꿈 */) => {
    // 비동기 작업 실행하는 함수
    // executor
    setTimeout(() => {
      console.log("안녕");
      // resolve("안녕");
      reject("왜 실패했는지 이유...");
    }, 2000);
  }
);

setTimeout(() => {
  console.log(promise);
}, 3000);

const promise1 = new Promise((resolve, reject) => {
  const num = 10;
  if (typeof num === "number") {
    resolve(num + 10);
  } else {
    reject("num이 숫자가 아닙니다");
  }
}, 2000);

// then 메서드 // 성공했을때만
// -> 그 후에
promise1.then((value) => {
  console.log(value);
});

// catch // then메서드의 실패 버전
promise1.catch((error) => {
  console.log(error);
});

// 연결도 가능 ~
promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
