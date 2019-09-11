/* import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  // test1
  const [state, setState] = useState([]);

  // const [state, setState] = useState(0);
  // const handleClick = () => setState(state + 1);
  // test1
  const handleClick = () => {
    setState([
      ...state,
      { id: state.length, value: Math.floor(Math.random() * 1000) }
    ]);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Clicke me</button>
      {state.map(x => {
        return <li key={x.id}>{x.value}</li>;
      })}
    </div>
  );
}

export default App;
 */
