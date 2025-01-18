// 함수선언

function greeting() {
  console.log("안녕하세요");
}

greeting();
//함수 호출시 꼭 소괄호와 함께 호출해야함

function getArea(width, height) {
  //width, height는 매개변수
  function another() {
    console.log("another");
  }

  another();
  //함수 안에 또 다른 함수를 선언하는 것도 가능 = 중첩함수
  let area = width * height;

  return area;
  //return 문이 함수 안에 있으면 반환 하고 함수가 끝나버림
  //그래서 return문 아래에 쓰이는 코드들은 다 수행 안된다...
}

let area1 = getArea(10, 20);
getArea(10, 20);

// 함수 호출과 선언의 순서가 뒤바뀌어도 상관없음
// 호이스팅 기능 -> 끌어올리다 라는 뜻
