import { useCallback, useState } from "react";

const s = new Set();
export default function CallbackDemo1() {
  const [count, setCount] = useState(0);

  //   function add() {
  //     setCount((x) => x + 1);
  //   }
  //   s.add(add);
  // //   由console.log可以看出，每次点击按钮就会创建一次add方法。如果追求性能的话可以使用callback方法来处理，见demo2
  //   console.log(s.size);

  // 使用useCallback的建议，当该函数运算或执行的内容超级多或超级大，则建议使用useCallback，否则不建议使用，因为代码的可读性很低
  // 这段代码只会运行一次
  const add = useCallback(() => {
    setCount((x) => x + 1);
  }, []);
  s.add(add);
  console.log(s.size);

  return (
    <div>
      <button onClick={add}>+</button>
    </div>
  );
}
