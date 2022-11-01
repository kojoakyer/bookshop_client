import styled from "styled-components";
import {mobile} from '../../Responsive';


export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    ${mobile({height:'100%',width:'100%'})}
`
export const Wrapper = styled.div`
    width:40%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    background-color:transparent;
    border: 2px solid lightblue;
    border-radius:20px;
    ${mobile({width:'70%',marginTop:'40px'})}
`
export const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
    ${mobile({fontSize:'18px'})}
`
export const Agreement = styled.div`
    ${mobile({fontSize:'13px'})}

`
export const Form = styled.form`
width: 90%;
padding: 5rem;
`
export const InputContainer = styled.div`
  width:100%;
  margin-bottom: 1rem;
  border-bottom:1px solid orange;
  border-radius:5px;
`

export const Input = styled.input`
    font-size: 1rem;
    font-family: inherit;
    padding: 1rem 0rem;
    background-color: rgba( #fff, .5);
    border: none;
    border-bottom: 4px solid transparent;
    width: 100%;
    display: block;
    &:focus{
        outline: none;
        box-shadow: 0 1rem 2rem rgba($color: #000000, $alpha: .1);
        border-bottom: 4px solid lightskyblue;
    }
    &:focus:invalid{
        color: orange;
        border-bottom: 4px solid orange;
    }

`
export const Label = styled.label`
width:100%;
height:30px;
font-size: 1.2rem;
font-weight: 700;
display: block;
transition: all .3s;
background-color:#f5fafd;
${mobile({fontSize:'15px'})}
`

export const Button = styled.button`
    padding:10px 40px;
    font-size:20px;
    color:#fff;
    width:100%;
    background-color:teal;
    border-radius:30px;
    margin-top:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    &:disabled{
        color:red;
        cursor:not-allowed;
    }
    ${mobile({padding:'5px 30px'})}

`