import "./App.css";
import { useState } from "react";

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
  // 리렌더링을 이용해 useState를 사용함

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
