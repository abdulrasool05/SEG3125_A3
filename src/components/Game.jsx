import React, { useState } from "react";
import Grid from "./Grid";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Game.css";

export default function Game() {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const numbers = [1, 5, 9, 3, 8, 4, 7, 2, 6];
  const MAX_LENGTH = 3;

  const handleSquareClick = (index) => {
    if (selectedIndexes.includes(index) || selectedIndexes.length == MAX_LENGTH)
      return;

    setSelectedIndexes((prev) => [...prev, index]);
  };

  return (
    <>
      <Navbar className="navbar justify-content-center">
        <Container className="d-flex justify-content-center">
          <h2 className="navText">
            Remember the positions of numbers: 1, 3, 4
          </h2>
        </Container>
      </Navbar>
      <div className="container-fluid gridContainer">
        <Grid
          numbers={numbers}
          selectedIndexes={selectedIndexes}
          onSquareClick={handleSquareClick}
        />
      </div>
    </>
  );
}
