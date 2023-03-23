import React from "react";
import { add } from "./utils";

type Props = {};

const AddTwoNumbers = (props: Props) => {
  const [firstNumber, setFirstNumber] = React.useState(0);
  const [secondNumber, setSecondNumber] = React.useState(0);
  return (
    <div>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(Number(e.target.value))}
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(Number(e.target.value))}
      />
      <div>{add(firstNumber, secondNumber)}</div>
    </div>
  );
};

export default AddTwoNumbers;
