import "./App.css";
import { useState } from "react";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

const Bulb = ({ light }) => {
  console.log(light); //count 값을 바꿔도 리렌더링 됨
  //리렌더링 되는 3가지 조건
  // 1. state 값이 변경될 때
  // 2. props의 값이 변경될 때
  // 3. 부모 컴포넌트가 리렌더링 될 때 -> 3번 때문에 light의 값이 리렌더링 됨
  //-> 다른 컴포넌트로 분리하는 것이 좋음

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
    </div>
  );
};

const Counter = () => {
  // 3번 문제를 해결하기 위한 방법 -> 새로운 파일을 생성하는 것도 가능 ! 그게 더 좋음 ,, ㅎ
  const [count, setCount] = useState(0);

  <div>
    <h1>{count}</h1>
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      +
    </button>
  </div>;
};

function App() {
  //부모컴포넌트
  // const buttonProps = {
  //   text: "카페",
  //   color: "green",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };
  // return (
  //   <>
  //     <Button text={"메일"} color={"red"} />
  //     <Button {...buttonProps} />
  //     <Button text={"블로그"}>
  //       <Header />
  //     </Button>
  //   </>
  // );

  const [count, setCount] = useState(0);
  // useState함수는 두개 요소를 담은 배열 반환
  // 첫 번째 요소는 초기값 두 번째 요소는 상태 변화 함수

  const [light, setLight] = useState("OFF");
  // 리렌더링을 위해 useState를 사용함

  return (
    <>
      <HookExam />
      <Register />
    </>
  );
}

export default App;
