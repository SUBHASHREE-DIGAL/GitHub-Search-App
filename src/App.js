import "./App.css";
import React, { useState } from "react";
import { BsTrashFill, BsCheckCircle } from "react-icons/bs";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    if (todo !== "") {
      const todoAdd = {
        id: Math.floor(Math.random() * 10),
        value: todo,
        isCompleted: false,
      };
      setTodoList([...todoList, todoAdd]);
      setTodo("");
    }
  };
  const deleteTodo = (id) => {
    // console.log(id);
    const newtodo = todoList.filter((t) => t.id !== id);
    setTodoList(newtodo);
  };

  const taskCompleted = (id) => {
    const element = todoList.findIndex((t) => t.id === id);
    const newTodoList = [...todoList];
    newTodoList[element] = {
      ...newTodoList[element],
      isCompleted: true,
    };
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://i.giphy.com/media/U57FlRKoH2QwnKOEuG/giphy.gif"
          className="App-logo"
          alt="logo"
        />

        <div className="input-group m-2" style={{ width: "400px" }}>
          <input
            className="form-control"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="add items.."
          />
          <button className="btn btn-sm bg-info" onClick={handleClick}>
            Add
          </button>
        </div>
        <hr />
        <h2>Your TODO List :-</h2>
        {todoList !== [] ? (
          <ul className="list-group">
            {todoList.map((t) => {
              return (
                <li
                  key={t.id}
                  className="list-group-item list-group-item-light m-1 shadow-lg text-dark"
                >
                  {t.value}{" "}
                  {t.isCompleted ? (
                    <button className="btn btn-sm bg-success m-2">
                      <BsCheckCircle />
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm bg-warning m-2"
                      onClick={() => taskCompleted(t.id)}
                    >
                      <BsCheckCircle />
                    </button>
                  )}
                  <button
                    className="btn btn-sm bg-danger border-0 m-2"
                    onClick={() => deleteTodo(t.id)}
                  >
                    <BsTrashFill />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </header>
    </div>
  );
}

export default App;
