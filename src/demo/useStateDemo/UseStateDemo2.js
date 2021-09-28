import React, { useState } from "react";

function useCount(initialValue) {
  const [count, setCount] = useState(initialValue);

  return [
    count,
    () => {
      setCount(count + 1);
    },
  ];
}

export default () => {
  // 把数据和行为关联在一起，是强关联
  // 而这种数据行为和UI之间的关系是弱关联。
  // 这样逻辑和UI就解耦了，这个UI不需要再去理解它会到底触发了什么行为，UI只是去思考我怎么去绘制和我去触发这个行为就可以了
  // 即UI只管外观和触发行为，而不需要去关心触发的行为做了哪些动作，你状态改成什么样和UI没啥关系了，UI只是个渲染函数，这就是hooks的目标
  const [count1, addCount1] = useCount(0);
  // 完全地完成了复用的目的，因为行为是一模一样的，所以本来就应该直接复用，而不是去再写一次
  const [count2, addCount2] = useCount(0);

  // 总结：什么是状态，状态背后一定有映射出来的行为，状态一定要和映射出的行为沟通在一起，这才是产生完整的独立的模块，一个完整的封装，这样才能和UI做到真正的解耦

  return (
    <div>
      your count1:{count1}
      <br />
      your count2:{count2}
      <br />
      <button onClick={() => addCount1()}>ADD1</button>
      <br />
      <button onClick={() => addCount2()}>ADD2</button>
    </div>
  );
};
