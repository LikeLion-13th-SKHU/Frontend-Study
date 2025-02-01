// math 모듈
export function add(a, b) {
  //이렇게 내보내기 가능
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  //기본값으로 내보냄
  return a * b;
}

// CJS
// module.exports = {
//   add,
//   sub,
// };

// ESM
// export { add, sub };
