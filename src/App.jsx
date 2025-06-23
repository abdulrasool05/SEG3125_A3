import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Game from "./components/Game";
import React from "react"

function App() {
  const [isInGame, setIsInGame] = React.useState(false)

  const [chosenDifficulty, setChosenDifficulty] = React.useState("EASY")
  const [chosenMode, setChosenMode] = React.useState("NUMBERS")

  return (
    <>
      {isInGame ? 
        <Game
          chosenDifficulty={chosenDifficulty}
          chosenMode={chosenMode}
          isInGame={isInGame} 
          setIsInGame={setIsInGame}
        /> : 
        <Home
          chosenDifficulty={chosenDifficulty}
          setChosenDifficulty={setChosenDifficulty}
          chosenMode={chosenMode}
          setChosenMode={setChosenMode}
          isInGame={isInGame} 
          setIsInGame={setIsInGame}
        />
      }
    </>
  );
}

export default App;
