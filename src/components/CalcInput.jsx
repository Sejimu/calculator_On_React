import React, { useEffect } from "react";

function CalcInput({ number }) {
  let arr = number.split("");
  return (
    <div
      style={{
        margin: "30px auto",
        border: "1px solid black",
        maxWidth: "maxContent",
        height: "50px",
        width: "200px",
        backgroundColor: "white",
      }}
    >
      {arr.map((item) => item)}
    </div>
  );
}

export default CalcInput;
