import { useEffect, useState } from "react";

import AddToDoInput from "./AddToDoInput";
import ToDo from "./ToDo";

function App() {
  const [toDos, setToDos] = useState({});

  const loadToDos = () => {
    const localToDos = JSON.parse(localStorage.getItem("toDos"));
    if (localToDos) {
      setToDos(localToDos);
    } else {
      setToDos({});
    }
  };

  useEffect(() => {
    loadToDos();
  }, []);

  return (
    <div style={{ backgroundColor: "grey", padding: 20, width: 400 }}>
      <h1 style={{ paddingLeft: 20, paddingRight: 20 }}>To Do List</h1>
      <AddToDoInput setToDos={setToDos} toDos={toDos} />
      {Object.keys(toDos).map((key) => {
        return <ToDo id={key} key={key} setToDos={setToDos} toDos={toDos} />;
      })}
    </div>
  );
}

export default App;
