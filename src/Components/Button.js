import { useState } from "react";

import "./Button.css";

export function Button() {
  const [counter, setcounter] = useState(0);

  let [msg, setmsg] = useState("");

  function aumentar() {
    setcounter(counter + 1);
    setmsg("aumentou");
  }

  return (
    <div>
      <div style={{ fontFamily: "Verdana", fontSize: 30 }}>{counter}</div>
      <br></br>
      <button className="button-1" onClick={aumentar}>
        +
      </button>
      <button className="button-1" onClick={() => setcounter(counter - 1)}>
        -
      </button>
      <button className="button-1" onClick={() => setcounter(0)}>
        Reset
      </button>
      <br></br>
      <div>{msg}</div>
    </div>
  );
}
