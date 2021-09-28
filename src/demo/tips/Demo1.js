// 多使用hook去封装行为
// 什么是状态？
// 和状态关联的动作都属于这个状态，我们希望在渲染视图的时候看到的是一个值，而且这个值会变化，但是这个值变化的逻辑是要和视图展示要完全隔离开的
import { useEffect, useState } from "react";

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function getPerson() {
  await sleep(200);
  return ["a", "b", "c"];
}

// 我们自己封装方法来将数据返回，将处理的流程留在封装的函数中，我们只需要将视图需要的值return出去即可
// 我们要尽可能的将逻辑全部封装到我们的hook中，这样就把逻辑和视图进行了隔离，完成了解耦的任务，请求参数也尽量不要从外部传值进来，以保证函数的低的耦合度
function usePerson() {
  const [list, setList] = useState(null);

  async function request() {
    const list = await getPerson();
    setList(list);
  }

  useEffect(request, []);
  return list;
}

export default function Demo1() {
  const list = usePerson();
  if (list == null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {list.map((name, i) => {
          return <li key={i}>{name}</li>;
        })}
      </div>
    );
  }
}
