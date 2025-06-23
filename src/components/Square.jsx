import React from "react";
import "./Square.css";
import { useEffect } from "react";

export default function Square({
  number,
  isSelected,
  onClick,
  isCorrect,
  isPreview,
  hasWon,
  hasLost
}) {
  useEffect(() => {
    console.log(isCorrect);
  }, []);
  return (
    <>
      <button
        className={`squareCard ${
          isPreview
            ? "selected"
            : isSelected
            ? isCorrect
              ? "selected correctSquare"
              : "selected incorrectSquare"
            : hasWon ? "unselected--correct" : hasLost ? "unselected--wrong" : "unselected" 
        }`}
        onClick={onClick}
      >
        {isSelected || isPreview ? number : ""}
      </button>
    </>
  );
}
