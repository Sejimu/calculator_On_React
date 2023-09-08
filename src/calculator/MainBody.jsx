import React, { useEffect, useState } from "react";
import ContainerForNum from "../components/ContainerForNum";
import CalcInput from "../components/CalcInput";
import Symbol from "../components/Symbol";

function MainBody() {
  const [numbers, setNumber] = useState("");

  function onNumberClick(item) {
    setNumber(numbers + item);
  }
  function resetInp() {
    setNumber("");
  }
  function deleteLastNum() {
    let str = numbers.split("");
    str.splice(str.length - 1);
    setNumber(str.join(""));
  }

  return (
    <div className="containerCalc">
      <CalcInput number={numbers} />
      <Symbol />
      <ContainerForNum onNumberClick={onNumberClick} />
      <button onClick={resetInp}>RESEt</button>
      <button onClick={deleteLastNum}>delete</button>
    </div>
  );
}

export default MainBody;
