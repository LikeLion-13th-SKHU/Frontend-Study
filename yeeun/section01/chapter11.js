// 함수 선언

function greeting() {
    console.log("안녕하세요");
}

console.log("호출 전");
greeting();
// 함수 호출 시 반드시 소괄호와 함께 선언해 주어야 한다
console.log("호출 후");

function getArea(width, height) {
    // (width, height)을 매개변수라고 부름

    function another() {
        // 중첩 함수
        console.log("another");
    }

    let area = width * height;

    return area; // 반환값

    // console.log(area); // 함수는 리턴문을 만나면 바로 종료되기 때문에 해당 줄은 수행되지 않는다
}

getArea(10, 20); //200, (10, 20)을 인수라고 부름

let area1 = getArea(10, 20);
console.log(area1);

getArea(120, 200); // 24000

// +) getArea 라는 함수의 선언을 함수의 호출보다 아래에 두어도 (함수 코드를 어떤 위치에 두어도) 아무런 문제 없이 실행이 된다
// -> 이유: 자바스크립트의 호이스팅 기능 때문
// -> 호이스팅이란 선언문들을 코드 실행 전에 최상단으로 끌어올려 실행 시켜주는 것