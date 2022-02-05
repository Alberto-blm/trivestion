import React, { useState, useEffect } from "react";
import { ButtonPlay } from "../styledComponents/buttonPlay";
import logo from "../assets/trivialLogo.png";
import "../css/question.css"
import {Button, Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Question ({questions, setItems, question, currentQuestion, setCurrentQuestion}){
    //console.log(question.correct_answer)
    var answers = [question.correct_answer];
    var wrong = question.incorrect_answers;

    answers = mixAnswers (wrong);

    function mixAnswers (wrong) {
        var mixed = answers.concat(wrong);
        mixed = mixed.sort(() => Math.random() - 0.5);
        return mixed;
    }
    console.log(answers);

    function handlerProgress(){
        const nextQuestion = currentQuestion + 1;
	    setCurrentQuestion(nextQuestion);
    }
    

    return(
        <div>
            <Row>
                <Col>
                    <h3>Progress {currentQuestion} of 10</h3>
                </Col>
            </Row>
            <Row>
                <h3>{question.question}</h3>
            </Row>
            <Row>
                {answers.map( answer => (
                    <Col sm={6}>
                        <input className="radioBtn" type="radio" value={answer} name="anwers"></input><label>{answer}</label>
                    </Col>
                ))}
            </Row>
            <br></br>
            <Row>
                <Col sm={6}>
                    <Button onClick={handlerProgress}>Skip</Button>
                </Col>
                <Col sm={6}>
                    <Button onClick={handlerProgress}>Confirm</Button>
                </Col>

            </Row>
        </div>
    )

}

export default Question;