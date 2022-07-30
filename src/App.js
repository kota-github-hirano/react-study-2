import { useState, useCallback, useMemo } from "react";
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

  const onClickClose = useCallback(() => {
    //useCallbackで囲むと2つ目の引数[]で指定した変数の変更があった場合に再レンダリング
    //[]が空白の場合再レンダリングなし、
    //[setOpen,setText]の場合setopenまたはsettextが呼ばれる場合に再レンダリング
    setOpen(false);
  }, []);
  //コンポーネントのメモ化->memo()
  //関数のメモ化->usecallback()
  //変数のメモ化->useMemo()
  const temp = useMemo(() => 1 + 3, []); //必要な時しか計算されない
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      {/* アロー関数で書いた関数は毎回新しく生成された関数を呼ばれたと認識される */}
      {/* ->再レンダリングされる */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
//どんな時に再レンダリングされる？
//stateが更新されたコンポーネントは再レンダリング
//propsが変更されたコンポーネントは再レンダリング
//再レンダリングされたコンポーネント 配下の子要素は再レンダリング
