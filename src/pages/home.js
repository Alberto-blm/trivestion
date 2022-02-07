import React from "react";
import { ButtonPlay } from "../styledComponents/buttonPlay";
import { AppName } from "../styledComponents/appName";
import logo from "../assets/trivialLogo.png";
import "../css/home.css"
import { Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return(
        <Container fluid>
            <div className="home">
                <Row>
                    <AppName>Trivestion</AppName>
                </Row>
                <Row className="justify-content-center"><img className="image" src={logo}/></Row>
                <Row><h3>Pon a prueba tus conocimientos</h3></Row>
                <Row><Link to='/quiz'><ButtonPlay>PLAY NOW</ButtonPlay></Link></Row>
                </div>
        </Container>
    )
}

export default Home