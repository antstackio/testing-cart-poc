import React, { useState } from "react";
import { add } from "./utils";

type Props = {};

const AddTwoNumbers = (props: Props) => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  return (
    <div>
      <label htmlFor="number-one">Number One</label>
      <input
        id="number-one"
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(Number(e.target.value))}
      />
      <label htmlFor="number-two">Number Two</label>
      <input
        id="number-two"
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(Number(e.target.value))}
      />
      <div>{add(firstNumber, secondNumber)}</div>
    </div>
  );
};

export default AddTwoNumbers;
