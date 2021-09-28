import { useState } from "react";

const s = new Set();
export default function CallbackDemo1() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((x) => x + 1);
  }
  s.add(add);
  //   由console.log可以看出，每次点击按钮就会创建一次add方法。如果追求性能的话可以使用callback方法来处理，见demo2
  console.log(s.size);

  return (
    <div>
      <button onClick={add}>+</button>
    </div>
  );
}
