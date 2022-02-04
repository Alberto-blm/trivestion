import React from "react";
import { ButtonPlay } from "../styledComponents/buttonPlay";
import logo from "../assets/trivialLogo.png";
import "../css/home.css"
import {Col, Container, Row} from 'react-bootstrap'

function Home(){
    return(
        <Container>
            <div className="home">
                <Row>
                    <h1 style={{margin: 0, paddingTop: 30}}>Trivestion</h1>
                </Row>
                <Row><img className="image" src={logo}/></Row>
                <Row><h3>Pon a prueba tus conocimientos</h3></Row>
                <Row><ButtonPlay>PLAY NOW</ButtonPlay></Row>
                </div>
        </Container>
    )
}

export default Home