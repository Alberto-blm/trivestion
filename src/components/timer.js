import React, { useState, useEffect } from "react";
import { TimetText } from "../styledComponents/timerStyled";
import 'bootstrap/dist/css/bootstrap.min.css';

function Timer({setSkipTimer, resetTimer, setResetTimer}){

    const [timer, setTimer] = useState(30);
    

    useEffect(() => {
        if(resetTimer == 0){
            setResetTimer(1)
            setTimer(30)
        }
        let timeOut = setTimeout(() => {
                if(timer > 0)
                setTimer(timer - 1)
            }, 1000);
        
        return ()=> {
            clearTimeout(timeOut);
          };

      }, [timer, resetTimer]);
    
    if(timer == 0){
        setSkipTimer(1);
        setTimer(30);
    }

    if(timer > 10){
        return(
            <div>
                <TimetText safe>Tiempo restante : {timer}</TimetText>
            </div>
        )
    } else if (timer < 6){
        return(
            <div>
                <TimetText danger>Tiempo restante : {timer}</TimetText>
            </div>
        )
    } else {
        return(
            <div>
                <TimetText warning>Tiempo restante : {timer}</TimetText>
            </div>
        )
    }
    
}

export default Timer