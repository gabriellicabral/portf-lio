import styled from "styled-components"

export const MainSobre = styled.main`
background-color: black;
width:100%;
height: 90vh;
display: flex;
 align-items:center;
justify-content: space-evenly;
`
export const Perfil = styled.img`
    width: 20vw;
    height: 40vh;
    border-radius: 50%;
`
export const CaixaSobre = styled.div`
flex-direction: column;
width: 40%;
display: flex;
text-align: left;

h1{
    font-family: "Cookie", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 4rem;
}

h2{
    padding-top: 1rem;
    font-family: "Share Tech Mono", monospace;
  font-weight: 400;
  font-style: normal;
}
`
export const Git = styled.img`
margin-top:1rem;
    width: 4vw;
    height: 6vh;
    border-radius: 50%;  
`