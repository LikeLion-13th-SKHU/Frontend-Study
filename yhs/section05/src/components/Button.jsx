const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  ); // 객체에 저장되어 있는 키값을 부르려면 점 표기법으로 부르자!
};

Button.defaultProps = {
  color: "black",
};
export default Button;
