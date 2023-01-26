import React from 'react'
import styled from 'styled-components'

const HomeStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131415;
    flex-direction: column;
    width: 70%;
    height: 90%;

    h1 {
        font-size: 32px;
        color: white;
    }

    h4{
        font-size: 12px;
        color: wheat;
    }

`

const Home = () => {
  return (
    <HomeStyled>
        <h1> ENTREGA 2 DE REACT </h1>
        <h4> Utiliza la navbar para explorar todo lo que tiene esta entrega </h4>
    </HomeStyled>
  )
}

export default Home