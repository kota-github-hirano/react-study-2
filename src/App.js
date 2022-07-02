import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.varue);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
//どんな時に再レンダリングされる？
//stateが更新されたコンポーネントは再レンダリング
//propsが変更されたコンポーネントは再レンダリング
//再レンダリングされたコンポーネント 配下の子要素は再レンダリング
