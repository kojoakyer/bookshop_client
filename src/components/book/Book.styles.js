
import styled from 'styled-components'
import {mobile} from '../../Responsive'
import {Link} from 'react-router-dom'



export const Container = styled.div`
    
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    padding:20px 10rem;
    ${mobile({gridTemplateColumns:'Repeat(1,1fr)',padding:'10px 2rem',gap:'-20px'})}

`
export const MainContainer = styled.div`
    width:300px;
    height:100%;
    display:flex;
    flex-direction:column;
    margin:40px 0px;
    border:1px solid lightGray;
    ${mobile({width:'100%',height:'350px'})}
`

export const InfoContainer = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 1s ease;
`



export const Image = styled.img`
    width:100%;
    height:200px;
    object-fit:cover;
    z-index:2;
 
`

export const Title = styled.h5`
    
 
`

export const Author = styled.h6`
    
 
`

export const Price = styled.h6`
 
 
`


export const SearchContainer= styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin-left:5px;
    padding:5px 10px;
    border:1px solid gray;
    border-radius:20px;
    ${mobile({display:'block'})}

`
export const Input = styled.input`
    border:none;
    width:80%;
    padding:10px 25px;
    &:focus,active{
        outline:none;
    }

    ${mobile({dispaly:'none'})}
`
