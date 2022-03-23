import React, { useState } from "react";
//mock data
import data from "./data.json";
//components
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import "./Todo.css";

function Todo({ todo, handleToggle }) {
  const [todoList, setTodoList] = useState(data);

  function handleToggle(id) {
    let mapped = todoList.map((task) => {
      return task.id === Number(id) // comparação estrita
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  }

  const handleFilter = () => {
    let filtered = todoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [
      ...copy,
      { id: todoList.length + 1, task: userInput, complete: false },
    ];
    setTodoList(copy);
  };

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <div>
        <TodoList
          todoList={todoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
        />
        <TodoForm addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
