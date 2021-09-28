// 使用ref来管react组件之外的对象

import { useState } from "react";
import { useRef } from "react";

export default function RefDemo2() {
  const prev = useRef(null);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>当前值：{counter}</p>
      <p>之前的值：{prev.current}</p>
      <button
        onClick={() => {
          prev.current = counter;
          setCounter((x) => x + 1);
        }}
      >
        Click me to add
      </button>
      <button
        onClick={() => {
          prev.current = counter;
          setCounter((x) => x - 1);
        }}
      >
        Click me to remove
      </button>
    </div>
  );
}
