import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // useEffect(() => {
  //   console.log(`count : ${count} / input: ${input}`);
  // }, [count, input]);

  // 두번째 인수로 전달한 배열의 값이 바뀌면
  // 첫번째 인수인 콜백함수를 실행 시켜줌

  // 의존성 배열
  // dependency array
  // deps

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return; //-> 진짜 업데이트 상태에만 출력 (마운트시 출력 X)
    }
    console.log("update");
  }); // -> 배열을 제외하면, 리렌더링 할때마다 콘솔 출력

  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
