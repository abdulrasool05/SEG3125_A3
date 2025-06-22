import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Game from "./components/Game";
import React from "react"

function App() {
  const [isInGame, setIsInGame] = React.useState(false)

  return (
    <>
      {isInGame ? <Game isInGame={isInGame} setIsInGame={setIsInGame}/> : <Home isInGame={isInGame} setIsInGame={setIsInGame}/>}
    </>
  );
}

export default App;
