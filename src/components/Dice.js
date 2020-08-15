import React, { useState } from "react";
import "../mystyles.css";

export default function Dice() {
  const [n, setNumber] = useState(1);

  function randomNumber() {
    console.log("click");
    setNumber(Math.round(Math.random() * 5) + 1);
  }

  return (
    <div>
      <button onClick={randomNumber}>Roll Dice {n}</button>
      <div className="Dice">hola</div>
    </div>
  );
}
