const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  const { open } = props;
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
        </div>
      ) : null}
    </>
  );
};
