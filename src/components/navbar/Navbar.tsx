import React from 'react'
import { Badge } from '@mui/material'
import {  Menu, Search, ShoppingCartSharp } from '@mui/icons-material'
import {Container,Wrapper,Left,Language,Right,Logo,MenuItems,MenuList, MenuItem} from './NavbarElement'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { logout } from '../../redux/userSlice'


const Navbar:React.FC = (props) => {

    const dispatch = useAppDispatch()

    const quantity = useAppSelector(state => state.cart.quantity)

    const user = useAppSelector((state) => state.user.currentUser);

    console.log(user,'user');
    
    function handleLogout(){
        dispatch(logout())
    }
    
        
  return (
        <>
        <Container>
            <Wrapper>
                <Left>
                    <Logo>BookShop</Logo>
                   
                </Left>
                <Right>
                    <MenuItems to='/cart'>
                        <Badge badgeContent={quantity}>
                            <ShoppingCartSharp/>
                        </Badge>
                    </MenuItems>

                    { user ? (<MenuItem onClick={handleLogout}><Link style={{textDecoration:'none',color:'white'}} to='/'>Log Out</Link></MenuItem>) : 
                     (<MenuList>
                         <MenuItem><Link style={{color:'white',textDecoration:'none'}} to='/signup'>Sign-Up</Link></MenuItem>
                         <MenuItem><Link style={{color:'white',textDecoration:'none'}} to='/login'>Log-In</Link></MenuItem>
                         </MenuList>
                   )}
                </Right>

            </Wrapper>
        </Container>
        </>
  )
}

export default Navbar
