import React from "react";
import "./Square.css";

export default function Square({ number, isSelected, onClick }) {
  return (
    <>
      <button
        className={`squareCard ${isSelected ? "selected" : "unselected"}`}
        onClick={onClick}
      >
        {isSelected ? number : ""}
      </button>
    </>
  );
}
