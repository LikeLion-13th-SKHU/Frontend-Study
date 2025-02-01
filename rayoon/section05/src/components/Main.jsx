import "./Main.css";
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
  const user = {
    name: "양라윤",
    isLogin: true,
  };
  const number = 10;
  const obj = { a: 1 };

  if (user.isLogin) {
    return (
      <div
        className="logout"
        /* style={{ backgroundColor: "red" //연결되는 단어 첫글자는 대문자  }}*/
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

  //   return (
  //     <main>
  //       {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  //       <h1>main</h1>
  //       <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
  //       {/* if문과 for문은 한줄로 값이라고 표현될 수 없기때문에 표현식이 아니당 */}
  //       {/*{obj} 객체값은 점표기법 사용해서 숫자나 문자열 렌더링만 가능 */}
  //     </main>
  //   );
};

export default Main;
