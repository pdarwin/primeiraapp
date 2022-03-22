import { useState } from "react";

import "./Button.css";

export function Button() {
  const [counter, setcounter] = useState(0);

  let [msg, setmsg] = useState("");

  function aumentar() {
    setcounter(counter + 1);
    setmsg("O contador aumentou.");
  }

  function diminuir() {
    setcounter(counter - 1);
    setmsg("O contador diminuiu.");
  }

  function reset() {
    setcounter(0);
    setmsg("");
  }

  return (
    <div style={{ background: "darkred", color: "white" }}>
      <div style={{ fontFamily: "Verdana", fontSize: 30 }}>{counter}</div>
      <br></br>
      <button className="button-1" onClick={aumentar}>
        +
      </button>
      <button className="button-1" onClick={diminuir}>
        -
      </button>
      <button className="button-1" onClick={reset}>
        Reset
      </button>
      <br></br>
      <div>{msg == "" ? <br></br> : msg}</div>
    </div>
  );
}
