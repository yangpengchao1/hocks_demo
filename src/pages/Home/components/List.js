import Item from "./Item";

// const arr = ["你", "我", "他"];

const List = ({ listData, deleteData, submitState }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        // 如果note，date，time为空或undefined的时候，则默认为空字符串
        const { id, note = "", date = "", time = "" } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submitState={submitState}
          />
        );
      })}
    </div>
  );
};

export default List;
