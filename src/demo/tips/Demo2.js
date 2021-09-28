//不要将不相关的状态耦合写到一起，一个状态参数一个hook
import { useState } from "react";

export default function Demo2() {
  const [state, setState] = useState({
    //   不推荐将不相关的状态耦合写到一起
    count: 0,
    b: "Apple",
  });
}
