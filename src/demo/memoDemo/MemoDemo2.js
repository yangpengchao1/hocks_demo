import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const memorizedText = useMemo(() => {
    console.log("run useMemo function");
    return `this is a memorized text ${Date.now()}`;
  }, [Math.floor(count / 10)]);
  //当count为10，20，30...的时候，memorized text才发生变化

  return (
    <div>
      {memorizedText}
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default UseMemoExample;
