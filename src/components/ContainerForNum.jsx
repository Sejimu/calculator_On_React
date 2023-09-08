import React from "react";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ContainerForNum({ onNumberClick }) {
  return (
    <div className="containerForNum">
      {numbers.map((item, index) => (
        <button onClick={() => onNumberClick(item)} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default ContainerForNum;
