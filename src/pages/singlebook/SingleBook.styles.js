import styled from "styled-components";
import {mobile} from '../../Responsive'


export const Container = styled.div`
    margin-top:-100px;
`


export const Wrapper = styled.div`
    padding:50px;
    margin-top:50px;
    display:flex;
    flex-direction:column;
    ${mobile({padding:'10px',flexDirection:'column'})}
`

export const TopWrapper = styled.div`
    padding:50px;
    margin-top:50px;
    display:flex;
    ${mobile({padding:'10px',flexDirection:'column'})}
`

export const BottomWrapper = styled.div`
    padding:50px;
    margin-top:-80px;
    display:flex;
    flex-direction:column;
    ${mobile({padding:'10px',flexDirection:'column'})}
`


export const ImgContainer = styled.div`
    flex:1;
`


export const Image = styled.img`
    width:90%;
    height:60vh;
    object-fit:cover;
    ${mobile({height:'40vh'})}
`

export const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    display:flex;
    flex-direction:column;
    ${mobile({padding:'10px'})}
`


export const Title = styled.h1`
    font-weight:600;
    ${mobile({fontWeight:'300'})}
`

export const Author = styled.h1`
    font-weight:600;
    ${mobile({fontWeight:'300'})}
`

export const Desc = styled.p`
    font-size:30px;
    margin:30px 0px;
    ${mobile({fontSize:'15px',margin:'15px 0px'})}
`

export const Price  = styled.span`
    font-size:50px;
    ${mobile({fontSize:'20px'})}
`