import React, {useState} from "react"
import * as S from "./styleInicio.jsx"
import Icon from "./imgInicio/icon.png"
import HTML from "./imgInicio/html.png"
import CSS from "./imgInicio/css.png"
import JS from "./imgInicio/js.png"


export default function Inicio(){
    const [icon, setIcon] = useState(Icon);


    return(
        <S.Main>
            <S.Section>
            <S.Div>
        <h1>Bem vindos ao meu portfólio!</h1>
        <S.Icon src={icon} alt="" />
        </S.Div>
        <h2>Minhas habilidades:</h2>
        <S.Habilidades>
        <button onClick={()=>{setIcon(HTML)}}> HTML </button>
        <button onClick={()=>{setIcon(CSS)}} > CSS</button>
        <button onClick={()=>{setIcon(JS)}}> JAVASCRIPT</button>
        </S.Habilidades>
        </S.Section>       
        </S.Main>
    )
}