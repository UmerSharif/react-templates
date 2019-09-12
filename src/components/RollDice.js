import React, { useState } from "react";
import "./RollDice.css";

export default function RollDice() {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);

  const firstDieImage = require(`../../public/images/${firstDieResult}.png`);
  const secondDieImage = require(`../../public/images/${secondDieResult}.png`);

  const rollDiceExecute = () => {
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
  };
  return (
    <div className="dice">
      <header className="App-header">
        <div style={{ display: "flex", margin: 20 }}>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
        </div>
        <span>{firstDieResult + secondDieResult}</span>
        <button className="button" onClick={rollDiceExecute}>
          Roll
        </button>
      </header>
    </div>
  );
}
