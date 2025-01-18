// 1. if 조건문
let num = 10;

if (num <= 10) {
  //   console.log("num은 10 이상");
} else if (num > 5) {
  //   console.log("num은 5 이상");
} else {
  //   console.log("조건은 거짓");
}
// if로 시작해서 else로 끝나야만 함

// 2. Switch 문
// -> if문과 기능 동일
// -> 다수의 조건을 처리할 때 직관적

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물 없음");
  }
}

// 조건에 일치하는 값을 만나면 아래에 있는 모든 코드 실행함
// 이 기능을 막기 위해서 break 사용해야 하는 것임
// default 사용하여 else 기능 수행 가능
