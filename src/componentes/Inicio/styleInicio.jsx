import styled from "styled-components"
import Fundo from "./imgInicio/fundo.jpg"


export const Main = styled.main`
background-color: black;
width: 100%;
height: 90vh;
    display: flex;
    justify-content: center;
    background-image: url(${Fundo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
   
    
`
export const Div = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`
export const Icon  = styled.img`
width: 20%;
`