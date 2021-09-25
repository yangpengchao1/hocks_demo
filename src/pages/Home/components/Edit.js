import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submitState }) => {
  const [note, setNote] = useState("");
  const noteChange = (e) => {
    setNote(e.target.value);
  };
  const [date, setDate] = useState("");
  const noteDate = (e) => {
    setDate(e.target.value);
  };
  const [time, setTime] = useState("");
  const noteTime = (e) => {
    setTime(e.target.value);
  };

  const addItem = () => {
    submitState.current = true;
    add(function (prev) {
      return [{ id: v4(), note, date, time }, ...prev];
    });
  };

  return (
    <div>
      <h1>备忘录</h1>
      <p>记事</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期</p>
      <input type="date" value={date} onChange={noteDate} />
      <p>时间</p>
      <input type="time" value={time} onChange={noteTime} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
