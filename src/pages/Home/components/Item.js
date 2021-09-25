const Item = ({ id, note, date, time, deleteData, submitState }) => {
  const deleteItem = () => {
    submitState.current = true;
    deleteData(function (prev) {
      // 返回不等于当前id的item
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        删除
      </button>
    </div>
  );
};

export default Item;
