import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//memoで囲むことでpropsが変更されない限り再レンダリングされない様になる
//肥大化が予測されるコンポーネントはmomoで囲む
export const ChildArea = memo((props) => {
  const { open ,onClickClose} = props;
  console.log("ChildAreaがレンダリングされた！！");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {/* コメントアウト。{}でjsにしてコメントアウト記号 */}
      {/*【三項演算子】判定?A:B[True->A,False->B] */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
