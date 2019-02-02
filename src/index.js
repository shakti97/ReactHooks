import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count ", count);
  });
  return (
    <div className="App">
      <p>you clicked me {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
