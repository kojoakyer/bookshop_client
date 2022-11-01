
import React from 'react'
import { Link  } from 'react-router-dom';
import { Container, ListItems, MobileIcon, NavLink, NavMenus, Wrapper } from './NavMenu.styles'
import { Menu } from '@mui/icons-material'

const NavMenu = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <MobileIcon>
                <Menu/>
            </MobileIcon>
            <NavMenus>
                <ListItems>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>About</NavLink>
                    <NavLink to='/'>Contact Us </NavLink>
                    <NavLink to='/'>Categories</NavLink>
                </ListItems>
            </NavMenus>
        </Wrapper>
    </Container>
    </>
  )
}

export default NavMenu