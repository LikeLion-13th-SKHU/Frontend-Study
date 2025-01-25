const Button = ({ text, color, children }) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  //합성 이벤트 = 모든 브라우저에서의 이벤트 객체를 하나로 통일함

  return (
    <button
      onClick={
        //이벤트 핸들러
        onClickButton
      }
      onMouseEnter={
        //커서 올리면 작동
        onClickButton
      }
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  // 기본값을 검정색으로 설정
  color: "black",
};

export default Button;
