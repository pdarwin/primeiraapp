import logo from "./logo.svg";
import Grid from "./Components/Grid.js";
import Table from "./Components/Table.js";
import { Button } from "./Components/Button.js";
import Todo from "./Components/Todo.js";

import { useState } from "react";

import "./App.css";

function App() {
  const hello = "Hello, stranger!";

  return (
    <div className="App">
      <ShowHeader />
      <ShowBody value={<Todo />} />
      <Button />
    </div>
  );
}

function ShowHeader() {
  return (
    <header className="App-header">
      <h3> Cabeçalho</h3>
    </header>
  );
}

function ShowBody(props) {
  return (
    <div style={{ background: "lightblue", height: 500, fontSize: 20 }}>
      {props.value}
    </div>
  );
}

export default App;
