function EditToDoInput({ id, setEditing, setToDos, toDos }) {
  const changeEditInput = (event, id) => {
    event.preventDefault();
    const text = event.target.value;
    const newToDos = {
      ...toDos,
      [id]: { text },
    };
    setToDos(newToDos);
  };

  const onBlurEditInput = (event) => {
    event.preventDefault();
    const text =
      event.target.value !== "" ? event.target.value : toDos[id].text;
    const newToDos = { ...toDos, [id]: { text } };
    setEditing(false);
    localStorage.setItem("toDos", JSON.stringify(newToDos));
    setToDos(newToDos);
  };

  const clickCompleteEditBtn = (event, id) => {
    event.preventDefault();
    const text =
      event.target[0].value !== "" ? event.target[0].value : toDos[id].text;
    const newToDos = { ...toDos, [id]: { text } };
    setEditing(false);
    localStorage.setItem("toDos", JSON.stringify(newToDos));
    setToDos(newToDos);
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "yellow",
        padding: 20,
      }}
    >
      <form
        onBlur={(event) => onBlurEditInput(event, id)}
        onSubmit={(event) => clickCompleteEditBtn(event, id)}
        style={{ display: "flex" }}
      >
        <input
          autoFocus
          onChange={(event) => changeEditInput(event, id)}
          style={{ backgroundColor: "orange", width: 275, padding: 10 }}
          type="text"
          value={toDos[id].text}
        />
        <input
          style={{ backgroundColor: "skyblue", width: 60 }}
          type="submit"
          value="수정완료"
        />
      </form>
    </div>
  );
}

export default EditToDoInput;
