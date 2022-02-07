import React, { useState } from "react";
import "../css/question.css"
import {Button, Col, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";

function Question ({ question, currentQuestion, setCurrentQuestion, answers, setAnswers}){
    const [selectedOption, setSelectedOption] = useState(null)
    var mixed = [question.correct_answer];
    var wrong = question.incorrect_answers;
    const [isLoaded, setIsLoaded] = useState(0);
    const [posibilities, setPosibilities] = useState([]);
    const [skipTimer, setSkipTimer] = useState(0);
    const [resetTimer, setResetTimer] = useState(0);
    


    function mixAnswers (wrong) {
        mixed = mixed.concat(wrong);
        mixed = mixed.sort(() => Math.random() - 0.5);
        setIsLoaded(1);
        setPosibilities(mixed)
        
        return mixed;
    }

    if(!isLoaded){
        mixAnswers (wrong);
    }
    if(skipTimer == 1){
        saveAnswer(1)
    }


    function handlerProgress(){
        const nextQuestion = currentQuestion + 1;
	    setCurrentQuestion(nextQuestion);
        setIsLoaded(0);
        setSelectedOption(null);
        setSkipTimer(0);
        setResetTimer(0);
    }

    function saveAnswer (type) {
        
        if(selectedOption == null || type == 1){
            
            const updateAnswers = [
                ...answers,
                {
                    correct_answer: question.correct_answer,
                    question: question.question,
                    type: 2,
                }]
            setAnswers(updateAnswers);
        } else if(selectedOption == question.correct_answer){
            
            const updateAnswers = [
                ...answers,
                {
                    correct_answer: question.correct_answer,
                    question: question.question,
                    type: 0,
                }]
            setAnswers(updateAnswers);
        }else{
            
            const updateAnswers = [
                ...answers,
                {
                    correct_answer: question.correct_answer,
                    question: question.question,
                    type: 1,
                }]
            setAnswers(updateAnswers);
        }
        
        handlerProgress()
        
    }

    return(
        <div>
            <Row>
                <Col>
                    <h3>Progress {currentQuestion+1} of 10</h3>
                </Col>
            </Row>
            <Row>
                <Timer setSkipTimer={setSkipTimer} resetTimer={resetTimer} setResetTimer={setResetTimer}></Timer>
            </Row>
            <Row>
                <h3>{question.question}</h3>
            </Row>
            <Row>
                {posibilities.map( answer => (
                    <Col sm={6}>
                        <input className="radioBtn" checked={selectedOption == answer} type="radio" value={answer} name="anwersBtn" onChange={() => setSelectedOption(answer)}></input><label>{answer}</label>
                    </Col>
                ))}
            </Row>
            <br></br>
            <Row>
                <Col sm={6}>
                    <Button onClick={() => saveAnswer(1)}>Skip</Button>
                </Col>
                <Col sm={6}>
                    <Button onClick={() => {if(selectedOption != null){saveAnswer(0)}}}>Confirm</Button>
                </Col>

            </Row>
        </div>
    )

}

export default Question;