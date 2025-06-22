import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from "react"

function Home( {isInGame, setIsInGame} ) {

    function onChangeDifficulty(event) {
        setChosenDifficulty(event.target.value);
    }
    function onChangeMode(event) {
        setChosenMode(event.target.value);
    }
    function onClickPlay() {
        setIsInGame(true);
    }

    const difficultiesArray = ["EASY", "MEDIUM", "HARD"];
    const modesArray = ["NUMBERS", "LETTERS"];

    const [chosenDifficulty, setChosenDifficulty] = React.useState(difficultiesArray[0])
    const [chosenMode, setChosenMode] = React.useState(modesArray[0])


    const difficultyButtons = difficultiesArray.map((currentDifficulty, index) => {
        let labelStyleClass = {}

        // various classes used for styling
        if (currentDifficulty == chosenDifficulty) {
            labelStyleClass = "option--label option--label-selected"
        } else {
            labelStyleClass = "option--label"
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

                <label 
                    htmlFor={currentDifficulty}
                    className={labelStyleClass}
                >
                    {currentDifficulty}
                </label>
            </>
        )
    })

    const modeButtons = modesArray.map((currentMode, index) => {
        let labelStyleClass = {}

        // various classes used for styling
        if (currentMode == chosenMode) {
            labelStyleClass = "option--label option--label-selected"
        } else {
            labelStyleClass = "option--label"
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

                <label 
                    htmlFor={currentMode}
                    className={labelStyleClass}
                >
                    {currentMode}
                </label>
            </>
        )
    })

    return (
    <>
        <Container className="hero text-center py-5" fluid>
            <Row>
                <Col>
                    <h1 className="hero-text">MEMORY GAME</h1>
                </Col>

            </Row>
        </Container>
        <Container className="text-center" fluid>
            <Row>
                <h3>PICK A DIFFICULTY</h3>
            </Row>
            <Row>
                <Col>
                    {difficultyButtons}
                </Col>
            </Row>
            <Row>
                <h3>PICK A MODE</h3>
            </Row>
            <Row>
                <Col>
                    {modeButtons}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={onClickPlay}>PLAY</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>HOW TO PLAY?</Button>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Home;
