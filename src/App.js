import logo from "./logo.svg";
import Grid from "./Components/Grid.js";
import Table from "./Components/Table.js";
import { Button } from "./Components/Button.js";

import { useState } from "react";

import "./App.css";

function App() {
  const hello = "Hello, stranger!";

  return (
    <div className="App">
      return <ShowHeader />
      <Button>teste</Button>
      <ShowBody value={hello} />;
    </div>
  );
}

function ShowHeader() {
  return (
    <header
      className="App-header"
      style={{ background: "lightgray", height: 100 }}
    >
      <h3> Cabeçalho</h3>
    </header>
  );
}

function ShowBody(props) {
  return (
    <div style={{ background: "lightblue", height: 300, fontSize: 20 }}>
      {props.value}
    </div>
  );
}

export default App;
