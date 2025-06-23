import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Game.css";

import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default function Game({
  chosenDifficulty,
  chosenMode,
  isInGame,
  setIsInGame,
}) {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [correctIndices, setCorrectIndices] = useState([]);
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [preventClick, setPreventClick] = useState(true);
  const { width, height } = { width: 1800, height: 1080 };

  const ALPHABET_ARRAY = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // amount of items to guess for each mode
  const EASY_MODE_GUESS_AMOUNT = 3;
  const MEDIUM_MODE_GUESS_AMOUNT = 5;
  const HARD_MODE_GUESS_AMOUNT = 7;

  // amount of squares for each mode (default is easy and medium)
  const DEFAULT_LAYOUT_NUM_SQUARES = 9;
  const HARD_LAYOUT_NUM_SQUARES = 16;

  function handlePlayAgain() {
    setIsInGame(false);
  }

  let selectedGuessAmount;
  let selectedSquaresAmount;

  switch (chosenDifficulty) {
    case "EASY":
      selectedGuessAmount = EASY_MODE_GUESS_AMOUNT;
      selectedSquaresAmount = DEFAULT_LAYOUT_NUM_SQUARES;
      break;
    case "MEDIUM":
      selectedGuessAmount = MEDIUM_MODE_GUESS_AMOUNT;
      selectedSquaresAmount = DEFAULT_LAYOUT_NUM_SQUARES;
      break;
    case "HARD":
      selectedGuessAmount = HARD_MODE_GUESS_AMOUNT;
      selectedSquaresAmount = HARD_LAYOUT_NUM_SQUARES;
      break;
  }

  if (chosenMode == "NUMBERS") {
    useEffect(() => {
      //Generate random nums from 1-9
      setNumbers(
        Array.from({ length: selectedSquaresAmount }, (_, i) => i + 1).sort(
          () => Math.random() - 0.5
        )
      );
      setCorrectIndices(
        Array.from({ length: selectedSquaresAmount }, (_, i) => i)
          .sort(() => Math.random() - 0.5)
          .slice(0, selectedGuessAmount)
      );
    }, []);
  } else {
    useEffect(() => {
      //Generate random nums from 1-9
      setNumbers(
        ALPHABET_ARRAY.sort(() => Math.random() - 0.5).slice(
          0,
          selectedSquaresAmount
        )
      );
      setCorrectIndices(
        Array.from({ length: selectedSquaresAmount }, (_, i) => i)
          .sort(() => Math.random() - 0.5)
          .slice(0, selectedGuessAmount)
      );
    }, []);
  }

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
      selectedIndexes.length === selectedGuessAmount &&
      selectedIndexes.every((item) => correctIndices.includes(item.index))
    ) {
      setHasWon(true);
    }
  }, [selectedIndexes]);

  return (
    <>
      {hasWon && <Confetti width={width} height={height} />}
      <Navbar
        className={`${
          hasWon ? "navbar--correct" : hasLost ? "navbar--wrong" : ""
        } navbar justify-content-center`}
      >
        <Container className="d-flex justify-content-center">
          {hasLost && <h2 className="navText correct-answer">YOU LOSE!</h2>}
          {hasWon && <h2 className="navText ">YOU WIN!</h2>}
          {preventClick && (
            <h2 className="navText">
              {`REMEMBER POSITIONS OF ${correctIndices
                .map((currCorrectIndex) => numbers[currCorrectIndex])
                .join(", ")}`}
            </h2>
          )}
          {!preventClick && !hasLost && !hasWon && (
            <h2 className="navText">
              {`CLICK POSITIONS OF ${correctIndices
                .map((currCorrectIndex) => numbers[currCorrectIndex])
                .join(", ")}`}
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
          selectedSquaresAmount={selectedSquaresAmount}
          hasWon={hasWon}
          hasLost={hasLost}
        />
      </div>
      <div className="text-center">
        {(hasWon || hasLost) && (
          <button onClick={handlePlayAgain} className="button">
            PLAY AGAIN
          </button>
        )}
      </div>
    </>
  );
}
