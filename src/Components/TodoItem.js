import React from "react";

const TodoItem = ({ todoItem, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todoItem.id}
      key={todoItem.id + todoItem.task}
      name="todo"
      value={todoItem.id}
      onClick={handleClick}
      className={todoItem.complete ? "todo strike" : "todo"}
    >
      {todoItem.task}
    </div>
  );
};

export default TodoItem;
