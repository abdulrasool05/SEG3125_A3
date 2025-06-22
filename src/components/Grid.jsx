import React from "react";
import Square from "./Square";
import "./Grid.css";

export default function Grid({
  numbers,
  selectedIndexes,
  onSquareClick,
  isPreview,
}) {
  return (
    <div className="container gridContainer">
      <div className="row gx-0">
        {numbers.map((num, idx) => (
          <div className="col-4 d-flex justify-content-center test" key={idx}>
            <Square
              number={num}
              isSelected={!!selectedIndexes.find((sel) => sel.index === idx)}
              onClick={() => onSquareClick(idx)}
              isCorrect={
                selectedIndexes.find((sel) => sel.index === idx)?.isCorrect
              }
              isPreview={isPreview}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
