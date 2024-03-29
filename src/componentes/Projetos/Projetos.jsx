import React from "react"
import * as S from "./styleProjetos.jsx"
import Loja from "./projetosimg/lojaderoupa.png"
import Pet from "./projetosimg/petshop.png"
import Barbearia from "./projetosimg/barbearia.jpeg"
import Cartoon from "./projetosimg/cartoon.png"

export default function Inicio(){
    return(
        <S.MainProjetos>
        <S.Sec1>
        <h2>Projetos em HTLM e CSS</h2>
        <S.DivSec1>
        <a href = "https://github.com/gabriellicabral/desafio_2"> <img src={Loja} alt="" /></a>
        
        <a href = "https://codesandbox.io/embed/desafiofinalt2-3cg8v6?file=/index.html&codemirror=1"> <img src={Pet} alt="" /></a>
        </S.DivSec1>
        </S.Sec1>

        <S.Sec2>
        <h2>Projetos em JavaScript e React</h2>
        <S.DivSec2>
        <a href = "https://github.com/gabriellicabral/barbearia"> <S.Barbearia src={Barbearia} alt="" /></a>
        <a href = "https://github.com/gabriellicabral/Cartoon"> <img src={Cartoon} alt="" /></a>
        </S.DivSec2>
        </S.Sec2>
        </S.MainProjetos>
    )
}