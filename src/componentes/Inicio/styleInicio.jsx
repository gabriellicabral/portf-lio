import styled from "styled-components"
import Fundo from "./imgInicio/fundo.jpg"


export const Main = styled.main`
background-color: black;
height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Fundo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;

    button {
  border: none;
  outline: none;
  background-color: #6c5ce7;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #a29bfe;
}

button:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #a29bfe;
}
h1{
    font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
  text-transform: uppercase;
}

h2{
    text-align: center;
    font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
}
 
`

export const Div = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    
`
export const Icon  = styled.img`
width: 20%;
`
export const Section = styled.section `
display: flex;
flex-direction: column;
`

export const Habilidades = styled.div`
    display: flex;
    justify-content: space-evenly;
    
`
