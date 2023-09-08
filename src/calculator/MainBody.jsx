import React, { useEffect, useState } from "react";
import ContainerForNum from "../components/ContainerForNum";
import CalcInput from "../components/CalcInput";
import Symbol from "../components/Symbol";
import Equal from "../components/Equal";

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

  function onClickSymbol(item) {
    setNumber(numbers + item);
  }

  function onEqualCLick() {
    let plus = numbers.split("+");
    let resForPlus = 0;

    let minus = numbers.split("-");
    let resForMinus = minus[0];

    let mull = numbers.split("*");
    let resForMull = 1;

    let division = numbers.split("/");
    let resForDivision = division[0];

    for (let i = 0; i < plus.length; i++) {
      if (numbers.includes("+")) {
        resForPlus += +plus[i];
        setNumber(resForPlus.toString());
      }
    }

    for (let i = 1; i < minus.length; i++) {
      if (numbers.includes("-")) {
        resForMinus -= +minus[i];
        setNumber(resForMinus.toString());
      }
    }

    for (let i = 0; i < mull.length; i++) {
      if (numbers.includes("*")) {
        resForMull *= +mull[i];
        setNumber(resForMull.toString());
      }
    }

    for (let i = 1; i < division.length; i++) {
      if (numbers.includes("/")) {
        resForDivision /= +division[i];
        setNumber(resForDivision.toString());
      }
    }
  }

  return (
    <div className="containerCalc">
      <CalcInput number={numbers} />
      <Symbol onClickSymbol={onClickSymbol} />
      <Equal onEqualCLick={onEqualCLick} />
      <ContainerForNum onNumberClick={onNumberClick} />
      <button onClick={resetInp}>RESEt</button>
      <button onClick={deleteLastNum}>delete</button>
    </div>
  );
}

export default MainBody;
