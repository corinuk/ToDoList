import { useState } from "react";
import EditToDoInput from "./EditToDoInput";

function ToDo({ id, setToDos, toDos }) {
  const [editing, setEditing] = useState(false);

  const clickEditBtn = () => {
    setEditing(true);
  };

  const clickDelBtn = (id) => {
    const newToDos = { ...toDos };
    delete newToDos[id];
    localStorage.setItem("toDos", JSON.stringify(newToDos));
    setToDos(newToDos);
  };

  if (editing === false) {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "yellow",
          padding: 20,
        }}
      >
        <div
          style={{
            backgroundColor: "orange",
            width: "100%",
            padding: 10,
          }}
        >
          {toDos[id].text}
        </div>
        <input
          onClick={clickEditBtn}
          style={{ backgroundColor: "skyblue", width: 60 }}
          type="button"
          value="수정"
        />
        <input
          onClick={() => clickDelBtn(id)}
          style={{ backgroundColor: "pink", width: 60 }}
          type="button"
          value="삭제"
        />
      </div>
    );
  } else {
    return (
      <EditToDoInput
        id={id}
        setEditing={setEditing}
        setToDos={setToDos}
        toDos={toDos}
      />
    );
  }
}

export default ToDo;
