import React, { useState, useEffect } from "react";
import { ButtonPlay } from "../styledComponents/buttonPlay";
import logo from "../assets/trivialLogo.png";
import { AppName } from "../styledComponents/appName";
import "../css/questionsPage.css"
import {Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from "../components/question";
import Answered from "../components/answer";
import {Link} from 'react-router-dom'

function QuestionsPage(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    
    useEffect(() => {
        console.log("ENTRO AL USEEFFECT")
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
          .then(res => res.json())
          .then(
            (result) => {
                
                setQuestions(result.results);
                setIsLoaded(true);
                
                
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
                console.log("ENTRO EN EL ERROR")
                setIsLoaded(true);
                setError(error);
            }
          )
    }, [])
    
    if(!isLoaded){
        return(
            <Container fluid>
                <div className="page">
                    <Row>
                        <AppName>Trivestion</AppName>
                    </Row>
                    <Row>
                        <Col> Loading ... </Col>
                    </Row>
                </div>
            </Container>
        )
    }else if(currentQuestion <= 9){
        return(
            <Container fluid>
                <div className="page">
                    <Row>
                        <AppName>Trivestion</AppName>
                    </Row>
                    <Row>
                        <Question questions={questions} 
                                  setQuestions={setQuestions} 
                                  question={questions[currentQuestion]} 
                                  currentQuestion={currentQuestion} 
                                  setCurrentQuestion={setCurrentQuestion}
                                  answers={answers}
                                  setAnswers={setAnswers}
                                  key={questions[currentQuestion].id}>
                        </Question>
                    </Row>
                    {answers.map(answer => (
                        <Row>
                            <hr></hr>
                            <Answered answer={answer}></Answered>
                        </Row>
                    ))}
                    
                </div>
            </Container>
        )
        
    } else{
        return(
            <Container fluid>
                <div className="page">
                    <Row>
                        <AppName>Trivestion</AppName>
                    </Row>
                    {answers.map(answer => (
                        <Row>
                            <hr></hr>
                            <Answered answer={answer}></Answered>
                        </Row>
                    ))}

                    <Row><Link to='/quiz'><ButtonPlay>PLAY AGAIN</ButtonPlay></Link></Row>
                    
                </div>
            </Container>
        )
    }
}

export default QuestionsPage;

