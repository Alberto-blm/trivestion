import styled from 'styled-components';

export const TimetText = styled.h4`
    color: ${props => {
        if(props.warning){
            return "yellow";
        } else if (props.danger){
            return "red";
        } else{
            return "white";
        }
    }
    };
`
