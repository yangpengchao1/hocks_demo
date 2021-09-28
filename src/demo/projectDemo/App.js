import React from "react";
import "./styles.css";
import useDraggable from "./useDraggable";

const list = [
  {
    src: "https://data.whicdn.com/images/341398282/original.jpg",
    title: "万事屋找我",
  },
  {
    title: "吃吃吃……",
    src: "https://www.pinclipart.com/picdir/middle/150-1502519_image-heros-seal-png-naruto-profile-wiki-fandom.png",
  },
  {
    title: "汪汪",
    src: "https://wallpapercave.com/wp/wp8562124.jpg",
  },
];

function cls(def, ...conditions) {
  const list = [def];
  conditions.forEach((cond) => {
    if (cond[0]) {
      list.push(cond[1]);
    }
  });
  return list.join(" ");
}

export default function App() {
  return (
    <div className="App">
      <DraggableList list={list} />
    </div>
  );
}

function DraggableList({ list }) {
  const { dragList, createDraggerProps, createDropperProps } =
    useDraggable(list);
  return dragList.map((item, i) => {
    if (item.type === "BAR") {
      return <Bar id={i} {...createDropperProps(i)} key={item.id} />;
    } else {
      return (
        <Draggable {...createDraggerProps(i, item.id)}>
          <Card {...item.data} />
        </Draggable>
      );
    }
  });
}

//List
// Draggable
// Bar
// Draggable
// Bar

function Draggable({ children, eventHandlers, dragging, id }) {
  return (
    <div
      {...eventHandlers}
      draggable={true}
      className={cls("draggable", [dragging === id, "dragging"])}
    >
      {children}
    </div>
  );
}

function Bar({ id, dragging, dragOver, eventHandlers }) {
  if (id === dragging + 1) {
    return null;
  }

  return (
    <div
      {...eventHandlers}
      className={cls("draggable--bar", [dragOver === id, "dragover"])}
    >
      <div
        className="inner"
        style={{
          height: id === dragOver ? "80px" : "0px",
        }}
      />
    </div>
  );
}

function Card({ src, title }) {
  return (
    <div className="card">
      <img src={src} />
      <span>{title}</span>
    </div>
  );
}
