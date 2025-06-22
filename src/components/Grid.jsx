import React from "react";
import Square from "./Square";
import "./Grid.css";

export default function Grid({ numbers, selectedIndexes, onSquareClick }) {
  return (
    <div className="container gridContainer">
      <div className="row gx-0">
        {numbers.map((num, idx) => (
          <div className="col-4 d-flex justify-content-center test" key={idx}>
            <Square
              number={num}
              isSelected={selectedIndexes.includes(idx)}
              onClick={() => onSquareClick(idx)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
