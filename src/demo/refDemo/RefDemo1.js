// 使用ref来管react组件之外的对象

import { useRef } from "react";

export default function RefDemo1() {
  const refInput = useRef();

  return (
    <div>
      <input ref={refInput} />
      <button
        onClick={() => {
          refInput.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
}
