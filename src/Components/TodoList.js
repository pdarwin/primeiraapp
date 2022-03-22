import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {todoList.map((todoItem) => {
        return (
          <TodoItem
            todoItem={todoItem}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Limpar tarefas finalizadas.
      </button>
    </div>
  );
};

export default TodoList;
