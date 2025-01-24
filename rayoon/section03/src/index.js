// CJS
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2)); // moduleData안에 객체로 저장되어있던 add함수 점표기법으로 불러옴
// console.log(moduleData.sub(1, 2));
// console.log("안녕 Node.js");

// const { add, sub } = require("./math"); // 이렇게도 할 수 있다 ~
// console.log(add(1, 2));
// console.log(sub(1, 2));

import { add, sub } from "./math.js"; // .js처럼 확장자 명시 필수
import mul from "./math.js"; // 기본값은 중괄호 없이 이름 맘대로 불러오기 가능

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
