import React from "react";
import Square from "./Square";
import "./Grid.css";

export default function Grid({
  numbers,
  selectedIndexes,
  onSquareClick,
  isPreview,
  selectedSquaresAmount, 
  hasWon,
  hasLost
}) {

  let bootstrapColStr;

  if (selectedSquaresAmount == 9) {
    bootstrapColStr = "col-4"
  } else if (selectedSquaresAmount == 16) {
    bootstrapColStr = "col-3"
  } 

  return (
    <div className="container gridContainer">
      <div className="row gx-0">
        {numbers.map((num, idx) => (
          <div className={bootstrapColStr + " d-flex justify-content-center test"} key={idx}>
            <Square
              number={num}
              isSelected={!!selectedIndexes.find((sel) => sel.index === idx)}
              onClick={() => onSquareClick(idx)}
              isCorrect={
                selectedIndexes.find((sel) => sel.index === idx)?.isCorrect
              }
              isPreview={isPreview}
              hasWon={hasWon}
              hasLost={hasLost}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
