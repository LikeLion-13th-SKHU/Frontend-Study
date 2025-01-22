// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1); // 현재 시간을 나타냄

let date2 = new Date("1997-01-07 / 10:10:10");
console.log(date2); // 설정 날짜

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC = 전세계의 표준 시간?
let ts1 = date1.getTime();
console.log(ts1); //숫자값으로 타임스탬프 출력

let date4 = new Date(ts1);
console.log(date1, date4); // 둘의 값이 같음

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // month -> 1월은 0 2월은 1 ... 그래서 month에는 +1 해주기
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds); //현재 시간 출력

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); //3월로 수정됨
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시간은 제외 하고 날짜만
console.log(date1.toLocaleString()); // 현지 시간
