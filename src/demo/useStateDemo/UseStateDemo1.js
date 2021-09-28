import { useState } from "react";

const UseStateDemo1 = () => {
  const [a, setA] = useState(100);
  const [b, setB] = useState(200);

  const plus = () => {
    setA(a + 100);
  };

  const plusb = () => {
    setB(function (prev) {
      return prev + 200;
    });
  };

  return (
    <div>
      {a}
      <button onClick={plus}>增加a</button>

      {b}
      <button onClick={plusb}>增加b</button>
    </div>
  );
};

export default UseStateDemo1;
