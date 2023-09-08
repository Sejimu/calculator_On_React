import React from "react";

let symbol = ["*", "/", "+", "-", "%", "="];

function Symbol() {
  return (
    <div>
      {symbol.map((item, index) => (
        <button key={index}>{item}</button>
      ))}
    </div>
  );
}

export default Symbol;
