

import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {mobile} from '../../Responsive';

export const Container = styled.div`
   height:80px;
   background-color:white;
   position: sticky;
   top: 0;
   z-index: 998;
   border-bottom:1px solid lightGray;
`;
export const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:black;
`;
export const Left = styled.div`
    flex:2;
    display:flex;
    align-items:center;
    justify-content:center;

`;





export const Language = styled.span`
    font-size:15px;
    margin-top:10px;
    cursor:pointer;
    ${mobile({display:'none'})}
`

// export const Center = styled.div`
//     flex:2;
//     display:flex;
//     align-items:center;
//     justify-content:center;
// `;



export const Logo = styled.h2`
    font-weight:600;
    color:black;
    margin-left:10px;
    ${mobile({fontSize:'1rem', fontWeight:'300',marginTop:'15px'})}
`

export const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    justify-content:flex-end;
    
`;

export const MenuList = styled.div`
    display:flex;
 
    ${mobile({display:'none'})}
`

export const MenuItem = styled.div`
    width:50px;
    margin-left:10px;
    padding:5px 20px;
    font-size: 10px;
    color:white;
    font-weight:400;
    cursor:pointer;
    background-color:black;
    border-radius:10px;
    ${mobile({display:'none'})}
`


export const MenuItems = styled(Link)`
    font-size: 10px;
    font-weight:400;
    cursor:pointer;
    text-decoration:none;
    color:black;
    ${mobile({display:'none'})}
`

