import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log("unmount");
    }; // 클린업, 정리함수 = useEffect에 콜백함수가 반환하는 함수
    //끝날때 실행
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
