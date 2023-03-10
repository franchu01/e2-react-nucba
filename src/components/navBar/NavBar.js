import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyled = styled.div`

    height: 50px;
    border: 1px white dotted;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
`
const ButtonStyled = styled.button`
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    background-color: #131415;
    cursor: pointer;
`

const LogoStyled = styled.button`

    background-color: white;
    border: 2px solid black;
    color: black;
    height: 35px;
    width: 35px;
    border-radius: 100%;
    cursor: pointer;

`

const NavBar = () => {

    const navigate = useNavigate()

  return (
    <NavBarStyled>
        <LogoStyled onClick={ () => {  navigate('/') } }  >FC</LogoStyled>
        <ButtonsContainer>
            <ButtonStyled onClick={ () => {  navigate('todo-list') } } > TODO LIST </ButtonStyled>
            <ButtonStyled onClick={ () => {  navigate('pokeapi-search') } }  > POKE SEARCH </ButtonStyled>
        </ButtonsContainer>
    </NavBarStyled>
  )
}

export default NavBar