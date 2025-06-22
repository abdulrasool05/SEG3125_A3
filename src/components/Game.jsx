import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Game.css";

export default function Game() {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [correctIndices, setCorrectIndices] = useState([]);
  const MAX_LENGTH = 3;
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [preventClick, setPreventClick] = useState(true);

  useEffect(() => {
    //Generate random nums from 1-9
    setNumbers(
      Array.from({ length: 9 }, (_, i) => i + 1).sort(() => Math.random() - 0.5)
    );
    setCorrectIndices(
      Array.from({ length: 9 }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
    );
  }, []);

  //Showing/Hiding the cards
  useEffect(() => {
    const delayBeforePreview = setTimeout(() => {
      setIsPreviewing(true);

      const hideCards = setTimeout(() => {
        setIsPreviewing(false);
        setPreventClick(false);
      }, 5000);

      return () => clearTimeout(hideCards);
    }, 2000);
    return () => clearTimeout(delayBeforePreview);
  }, []);

  const handleSquareClick = (index) => {
    if (selectedIndexes.includes(index) || hasWon || hasLost || preventClick)
      return;

    setSelectedIndexes((prev) => [
      ...prev,
      {
        index: index,
        isCorrect: correctIndices.includes(index),
      },
    ]);

    if (!correctIndices.includes(index)) {
      setHasLost(true);
    }
  };

  useEffect(() => {
    if (
      selectedIndexes.length === MAX_LENGTH &&
      selectedIndexes.every((item) => correctIndices.includes(item.index))
    ) {
      setHasWon(true);
    }
  }, [selectedIndexes]);

  return (
    <>
      <Navbar className="navbar justify-content-center">
        <Container className="d-flex justify-content-center">
          {hasLost && <h2 className="navText">You Lose!!</h2>}
          {hasWon && <h2 className="navText">You Win!!</h2>}
          {!hasLost && !hasWon && (
            <h2 className="navText">
              {`Remember the positions of numbers: ${
                numbers[correctIndices[0]]
              }, ${numbers[correctIndices[1]]}, ${numbers[correctIndices[2]]}`}
            </h2>
          )}
        </Container>
      </Navbar>
      <div className="container-fluid gridContainer">
        <Grid
          numbers={numbers}
          selectedIndexes={selectedIndexes}
          onSquareClick={handleSquareClick}
          isPreview={isPreviewing}
        />
      </div>

      {(hasWon || hasLost) && (
        <button className="btn-primary">Play Again</button>
      )}
    </>
  );
}
