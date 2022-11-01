
import styled from 'styled-components'
import {mobile} from '../../Responsive';

export const Container = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    background-color:#fff;
    margin-top: -80px;
    // position:relative;
    // overflow:hidden;
    ${mobile({flexDirection:'column'})}
`


export const ImgContainer = styled.div`
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    ${mobile({width:'100vw'})}

`


export const Imgs = styled.img`
    height:100vh;
    width:100%;
    object-fit:cover;
    ${mobile({width:'90%',height:'100%',marginLeft:'0px'})}
    
`


export const InfoContainer = styled.div`
    height:100%
    padding:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    ${mobile({padding:'20px'})}

`

export const Title = styled.h1`
    width:50%;
    text-align:center;
    font-size:50px;
    ${mobile({fontSize:'30px',width:'100%'})}
`