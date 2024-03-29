import React from "react"
import Perfil from "./Perfil/perfil.jpg"
import Git from "./Perfil/git.png"
import * as S from "./styleSobre.jsx"

export default function Sobre(){
    return(
        <S.MainSobre>
        <S.Perfil src={Perfil} alt="" />
        <S.CaixaSobre>
        <h1>Olá! Eu sou a Gabrielli Cabral</h1>
        <h2>Caí no VnW de paraquedas, não tinha noção no que estava me inscrevendo e muito menos imaginei que gostaria de estar em frente a tela do computador desenvolvendo e corrigindo erros de código. </h2>
        <a href = "https://github.com/gabriellicabral"> <S.Git src={Git} alt="" /></a>
        </S.CaixaSobre>
        </S.MainSobre>
    )
}