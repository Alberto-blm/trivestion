import React, { useState, useEffect } from "react";
import { ButtonPlay } from "../styledComponents/buttonPlay";
import logo from "../assets/trivialLogo.png";
import {Button, Col, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Timer({setSkipTimer}){

    const [timer, setTimer] = useState(30);

    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
      }, [timer]);
    
      if(timer == 0){
          setSkipTimer(1);
          setTimer(30);
      }

    return(
        <div>
            <h4>Tiempo restante : {timer}</h4>
        </div>
    )
}

export default Timer