import React, { useState, useEffect } from "react";
import { ButtonPlay } from "../styledComponents/buttonPlay";
import logo from "../assets/trivialLogo.png";
import { AppName } from "../styledComponents/appName";
import "../css/questionsPage.css"
import {Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from "../components/question";


function QuestionsPage(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState([
        
        
            {"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Who is the artist of the recent new album the Uncanny Valley?","correct_answer":"Perturbator","incorrect_answers":["Carpenter Brut","GOST","Dan Terminus "]},
            {"category":"Entertainment: Books","type":"multiple","difficulty":"hard","question":"Who wrote the novel &quot;Moby-Dick&quot;?","correct_answer":"Herman Melville","incorrect_answers":["William Golding","William Shakespeare","J. R. R. Tolkien"]},
            {"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"When was the programming language &quot;C#&quot; released?","correct_answer":"2000","incorrect_answers":["1998","1999","2001"]},
            {"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"Final Fantasy VI was originally released outside Japan under what name?","correct_answer":"Final Fantasy III","incorrect_answers":["Final Fantasy VI","Final Fantasy V","Final Fantasy II"]},
            {"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Which one of these rappers is NOT a member of the rap group Wu-Tang Clan?","correct_answer":"Dr.Dre","incorrect_answers":["Ol&#039; Dirty Bastard","GZA","Method Man"]},
            {"category":"Entertainment: Television","type":"multiple","difficulty":"easy","question":"British actor David Morrissey stars as which role in &quot;The Walking Dead&quot;?","correct_answer":"The Governor","incorrect_answers":["Negan","Rick Grimes","Daryl Dixon"]},
            {"category":"Entertainment: Cartoon & Animations","type":"multiple","difficulty":"medium","question":"Who created &quot;RWBY&quot;?","correct_answer":"Monty Oum","incorrect_answers":["Miles Luna","Kerry Shawcross","Shane Newville"]},
            {"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"Which character from the Mega Man series made a small cameo on Volt Catfish&#039;s introduction scene in CD versions of Mega Man X3?","correct_answer":"Auto","incorrect_answers":["Eddie","Tango","Rush"]},
            {"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"In &quot;Earthbound&quot;, how does one enter &quot;Master Belch&#039;s&quot; factory?","correct_answer":"Wait 3 Minutes","incorrect_answers":["Enter the password &quot;Fly Honey&quot;","Enter the password &quot;Master Belch Rules&quot;","Enter the password &quot;Mr Saturn Drools&quot;"]},
            {"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Which of these songs is not on the &quot;untitled&quot; album by Led Zeppelin?","correct_answer":"Celebration Day","incorrect_answers":["Stairway to Heaven","Black Dog","Rock and Roll"]}
        ]);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    
    /*useEffect(() => {
        
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
          .then(res => res.json())
          .then(
            (result) => {
                
                console.log(result)
                setIsLoaded(true);
                setItems(result.results);
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
          )
      }, [])*/
    
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
    }else{
        return(
            <Container fluid>
                <div className="page">
                    <Row>
                        <AppName>Trivestion</AppName>
                    </Row>
                    <Row>
                        <Question questions={items} 
                                  setItems={setItems} 
                                  question={items[currentQuestion]} 
                                  currentQuestion={currentQuestion} 
                                  setCurrentQuestion={setCurrentQuestion} 
                                  key={items[currentQuestion].id}>
                        </Question>
                    </Row>
                    <hr></hr>
                </div>
            </Container>
        )
    }
}

export default QuestionsPage;

