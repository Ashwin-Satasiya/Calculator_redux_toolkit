import React from "react";
import { useSelector } from "react-redux";

const CalcDisplay = () => {
  const calcValue = useSelector((state) => state.calcValue);

  return (
    <div className="row w-100">
      <div className="col">
        <input
          className="form-control calculator-display"
          type="text"
          value={calcValue}
          readOnly
        />
      </div>
    </div>
  );
};

export default CalcDisplay;
