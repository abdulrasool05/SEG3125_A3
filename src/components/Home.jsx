import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";

function Home({
  chosenDifficulty,
  setChosenDifficulty,
  chosenMode,
  setChosenMode,
  isInGame,
  setIsInGame,
}) {
  const difficultiesArray = ["EASY", "MEDIUM", "HARD"];
  const modesArray = ["NUMBERS", "LETTERS"];

  function onChangeDifficulty(event) {
    setChosenDifficulty(event.target.value);
  }
  function onChangeMode(event) {
    setChosenMode(event.target.value);
  }
  function onClickPlay() {
    setIsInGame(true);
  }

  const difficultyButtons = difficultiesArray.map(
    (currentDifficulty, index) => {
      let labelStyleClass = {};

      // various classes used for styling
      if (currentDifficulty == chosenDifficulty) {
        labelStyleClass = "option--label option--label-selected";
      } else {
        labelStyleClass = "option--label";
      }

      return (
        <>
          <input
            type="radio"
            className="option--radio"
            name={currentDifficulty}
            id={currentDifficulty}
            value={currentDifficulty}
            checked={currentDifficulty === chosenDifficulty}
            onChange={onChangeDifficulty}
          />

          <label htmlFor={currentDifficulty} className={labelStyleClass}>
            {currentDifficulty}
          </label>
        </>
      );
    }
  );

  const modeButtons = modesArray.map((currentMode, index) => {
    let labelStyleClass = {};

    // various classes used for styling
    if (currentMode == chosenMode) {
      labelStyleClass = "option--label option--label-selected";
    } else {
      labelStyleClass = "option--label";
    }

    return (
      <>
        <input
          type="radio"
          className="option--radio"
          name={currentMode}
          id={currentMode}
          value={currentMode}
          checked={currentMode === chosenMode}
          onChange={onChangeMode}
        />

        <label htmlFor={currentMode} className={labelStyleClass}>
          {currentMode}
        </label>
      </>
    );
  });

  return (
    <>
      <Container className="hero text-center " fluid>
        <Row>
          <Col>
            <h1 className="hero-text">MIND MATCH</h1>
          </Col>
        </Row>
      </Container>
      <Container className="text-center pt-5" fluid>
        <Row>
          <h3 className="option--descriptor">HOW TO PLAY?</h3>
          <p className="how-to-play-text">
            After pressing play, read the tooltip up top and memorize the
            positions of the named items.
            <br />
            After, test your memory by clicking the boxes with the previously
            named items!
          </p>
        </Row>
        <div className="py-1" />
        <Row>
          <h3 className="option--descriptor">PICK A DIFFICULTY</h3>
        </Row>
        <Row>
          <Col>{difficultyButtons}</Col>
        </Row>
        <div className="py-3" />
        <Row>
          <h3 className="option--descriptor">PICK A MODE</h3>
        </Row>
        <Row>
          <Col>{modeButtons}</Col>
        </Row>
        <div className="pt-3" />
        <Row>
          <Col>
            <Button className="play--descriptor-label" onClick={onClickPlay}>
              PLAY
            </Button>
          </Col>
        </Row>
        <div className="pb-5" />
      </Container>
    </>
  );
}

export default Home;
