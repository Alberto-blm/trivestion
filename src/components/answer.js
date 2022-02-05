import React, { useState, useEffect } from "react";
import { ImgStyled, Text, Wrong, CorrectAnswer } from "../styledComponents/anwersStyled";
import logo from "../assets/trivialLogo.png";
import "../css/question.css"
import {Button, Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import wrong from "../assets/wrong.png";
import correct from "../assets/correct.png";

function Answered ({answer}){

    if(answer.type == 0){
        return(
            <div>
                <Row>
                    <h3>{answer.question}</h3>
                </Row>
                <Row className="align-items-center">
                    <Col sm={5}>
                        <ImgStyled className="icon" src={correct}></ImgStyled>
                    </Col>
                    <Col sm={1}>
                        <Text correct>CORRECT</Text>
                    </Col>
                    <Col sm={6}>
                        <CorrectAnswer>Correct: {answer.correct_answer}</CorrectAnswer>
                    </Col>
                </Row>
            </div>
        )
    } else if (answer.type == 1){
        return(
            <div>
                <Row>
                    <h3>{answer.question}</h3>
                </Row>
                <Row className="align-items-center">
                <Col sm={5}>
                        <ImgStyled className="icon" src={wrong}></ImgStyled>
                    </Col>
                    <Col sm={1}>
                        <Text>WRONG</Text>
                    </Col>
                    <Col sm={6}>
                    <CorrectAnswer>Correct: {answer.correct_answer}</CorrectAnswer>
                    </Col>
                </Row>
            </div>
        )
    } else if(answer.type == 2){
        return(
            <div>
                <Row>
                    <h3>{answer.question}</h3>
                </Row>
                <Row className="align-items-center">
                <Col sm={5}>
                        <ImgStyled className="icon" src={wrong}></ImgStyled>
                    </Col>
                    <Col sm={1}>
                        <Text>SKIPPED</Text>
                    </Col>
                    <Col sm={6}>
                        <CorrectAnswer>Correct: {answer.correct_answer}</CorrectAnswer>
                    </Col>
                </Row>
            </div>
        )
    } else{
        return(
            <div></div>
        )
    }
    
}

export default Answered;