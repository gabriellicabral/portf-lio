import React from "react"
import * as S from "./styleInicio.jsx"
import Icon from "./imgInicio/icon.png"


export default function Inicio(){
    return(
        <S.Main>
            <S.Div>
        <h1>Bem vindos ao meu portfólio!</h1>
        <S.Icon src={Icon} alt="" />
        </S.Div>
        </S.Main>
    )
}