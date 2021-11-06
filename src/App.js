export const App = () => {
  //ボタンを押した際に実行する関数を定義
  const onClickButton = () => {
    alert();
  };

  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <p style={contentPinkStyle}>お元気ですか？</p>

      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};
