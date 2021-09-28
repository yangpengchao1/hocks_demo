import { useState, useEffect } from "react";

function useCount(initialValue) {
  const [count, setCount] = useState(initialValue);

  return [
    count,
    () => {
      setCount(count + 1);
    },
  ];
}

function log1(count) {
  console.log(`1.点击次数：${count}`);
}

function log2(count) {
  console.log(`2.点击次数：${count}`);
}

function log3(count) {
  console.log(`3.点击次数：${count}`);
}

export default function UseEffectDemo1() {
  const [count, addCount] = useCount(0);

  useEffect(() => {
    console.log(count);
  });

  // effect是依据xxx变化的“作用”，
  // 当effect依赖这个状态的时候，每次都会重新创建将要执行的函数，以确保最新的状态值被新函数调用到
  // 读作：依赖“空”变化的作用，因为“空”不会变化，所以只在页面加载的时候执行一次
  useEffect(log1.bind(null, count), []);
  // 读作：依赖“count”变化的作用，count每次发生变化都会触发这个方法
  useEffect(log2.bind(null, count), [count]);
  useEffect(log3.bind(null, count));

  return (
    <div>
      your count:{count}
      <br />
      <button onClick={() => addCount()}>ADD1</button>
    </div>
  );
}
