import { Link  } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from '../../Responsive';

export const Container = styled.div`
//    height:60px;
   background-color:lightGray;
   position: sticky;
   top: 80px;
   z-index: 998;
`;

export const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:black;
`;

export const NavMenus = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    justify-content: center;
    margin-right: 2rem;
    ${mobile({display:'none'})}
`

export const ListItems = styled.li`
    display:flex;
`

export const NavLink = styled(Link)`
    
    color: black;
    font-size:15px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    cursor:pointer;
    ${mobile({display:'none'})}

    &:hover{
        border-bottom:3px solid #fff;
    }
`

export const MobileIcon = styled.div`
    display:none;
    ${mobile({display:'block', color:'white',
    position:'absolute',top:'-25px',right:'0',
    transform:'translate(-100%,60%)',fontSize:'3rem',cursor:'pointer'})}

`