console.log(1);
console.log(3);
// 동기적인 실행

setTimeout(() => {
  console.log(2);
}, 3000);
//원하는 코드를 특정시간이 지난 후 비동기적으로 실행시켜주는 함수

// 비동기 작업은 자바스크립트 엔진이 아니라 Web APIs에서 실행
