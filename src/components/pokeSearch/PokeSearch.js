import React from 'react'
import { InputStyled, PokeNameStyled, PokeSearchContainerStyled, PokeStatStyled } from './PokeSearchStyles'

const PokeSearch = () => {
  return <PokeSearchContainerStyled>
    <InputStyled/>
    <PokeNameStyled>Mewtwo</PokeNameStyled>
    <PokeStatStyled>HOLA</PokeStatStyled>
    <PokeStatStyled>HOLA</PokeStatStyled>
    <PokeStatStyled>HOLA</PokeStatStyled>
  </PokeSearchContainerStyled>
}

export default PokeSearch