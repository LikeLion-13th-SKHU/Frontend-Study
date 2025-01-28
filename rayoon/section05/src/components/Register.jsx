import { useState } from "react";
import { useRef } from "react"; // useState와 기능은 같지만 리렌더링 방지
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);

    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  const onChangeName = (e) => {
    setInput({
      ...input, //name과 관련없는 값들은 그대로 유지
      name: e.target.value,
    });
    //consol.log(e) -> target밑 value 속성에 있는 값을 가져옴
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option> {/*빈 옵션을 초기값으로 만들 때*/}
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
