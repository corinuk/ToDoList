import { useState } from "react";

function AddToDoInput({ setToDos, toDos }) {
  const [toDoInput, setToDoInput] = useState("");

  const submitAddToDo = (event) => {
    if (toDoInput === "") {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    const text = event.target[0].value;
    const newToDos = {
      ...toDos,
      [Date.now()]: { text },
    };
    setToDos(newToDos);
    localStorage.setItem("toDos", JSON.stringify(newToDos));
    setToDoInput("");
  };

  const addingToDo = (event) => {
    setToDoInput(event.target.value);
  };

  return (
    <form
      onSubmit={submitAddToDo}
      style={{ padding: 20, marginBottom: 10, backgroundColor: "green" }}
    >
      <input
        placeholder="Add ToDo"
        onChange={addingToDo}
        style={{ width: 288, padding: 10 }}
        type="text"
        value={toDoInput}
      />
      <input type="submit" value="추가" style={{ padding: 10 }} />
    </form>
  );
}

export default AddToDoInput;
