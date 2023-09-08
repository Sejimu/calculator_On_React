import React from "react";

let symbol = ["*", "/", "+", "-", "%"];

function Symbol({ onClickSymbol }) {
  return (
    <div>
      {symbol.map((item, index) => (
        <button onClick={() => onClickSymbol(item)} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Symbol;
