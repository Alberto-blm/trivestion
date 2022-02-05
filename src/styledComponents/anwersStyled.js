import styled from 'styled-components';

export const ImgStyled = styled.img`
    height: 100px;
    width: 100px;
    float: right;
`

export const Text = styled.h4`
    color: ${props => props.correct ? "green" : "red"};
`

export const CorrectAnswer = styled.h5`
    padding-left: 1em;
    float: left;
`