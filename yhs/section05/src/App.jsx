import "./App.css";
import { useState } from "react";
import Register from "./components/Register";

// 컴포넌트로 기능을 나누어 저장하면 리렌더링 시 불필요한 반복적인 App 선언을 막을 수 있다.
function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;
