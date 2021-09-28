import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return 0;
  }
}

export default function ReducerDemo1() {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      your counter is : {counter}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "sub" });
        }}
      >
        -
      </button>
    </div>
  );
}
