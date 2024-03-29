import React from "react"
import Inicio from "../Inicio/Inicio.jsx"
import Sobre from "../Sobre/Sobre.jsx"
import Projetos from "../Projetos/Projetos.jsx"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import * as S from "./NavegacaoStyle.jsx"

export default function Navegacao (){
    return(
<S.Header>
 <BrowserRouter>
<S.Nav>

<S.Ul>
<li> <Link to = "/"> Início </Link> </li>
<li> <Link to = "/Sobre"> Sobre </Link> </li>
<li> <Link to = "/Projetos"> Projetos</Link> </li>
</S.Ul>

</S.Nav>

<Routes>

<Route path = "/" element={ <Inicio/> } />

<Route path = "Sobre" element={ <Sobre/> }/>

<Route path = "Projetos" element={ <Projetos/> } />

</Routes>

 </BrowserRouter>

 </S.Header>
    )
}