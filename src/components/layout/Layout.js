import React from 'react'
import styled from 'styled-components'
import NavBar from '../navBar/NavBar'

const LayoutStyled = styled.div`
    height: 100vh;
`

const PagesContainerStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 50px);
`

const Layout = ({children}) => {
  return (
    <LayoutStyled>
        <NavBar/>
        <PagesContainerStyled>{children}</PagesContainerStyled>
    </LayoutStyled>
  )
}

export default Layout