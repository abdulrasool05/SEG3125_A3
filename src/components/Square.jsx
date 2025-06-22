import React from "react";
import "./Square.css";
import { useEffect } from "react";

export default function Square({
  number,
  isSelected,
  onClick,
  isCorrect,
  isPreview,
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
            : "unselected"
        }`}
        onClick={onClick}
      >
        {isSelected || isPreview ? number : ""}
      </button>
    </>
  );
}
