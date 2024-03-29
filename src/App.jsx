import React from "react"
import Navegacao from "./componentes/Navegação/Navegacao.jsx"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
color: white;
}
`

export default function App(){
  return(

    <>
    <Navegacao/>
    <GlobalStyle/>
    
    </>
  )
}
