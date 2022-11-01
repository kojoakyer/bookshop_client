import styled from "styled-components";
import {mobile} from '../../Responsive'


export const Container = styled.div`
    padding:20px 5rem;
    
` 
export const Wrapper = styled.div`
    padding:20px
    ${mobile({padding:'10px'})}
` 
export const Title = styled.div`
    font-weight:300;
    text-align:center;
` 
export const TopContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
    ${mobile({flexDirection:'column',marginTop:'10px'})}
` 

export const TopButton = styled.button`
    padding:15px 25px;
    font-weight:400;
    cursor:pointer;
    border:${(props)=> props.type === 'filled' && 'none'};
    background-color:${(props)=>props.type === 'filled' ? 'black' : 'transparent'};
    color:${(props)=>props.type === 'filled' && 'white'};
    border-radius:20px;
    ${mobile({padding:'10px 15px', marginTop:'10px'})}
` 
export const TopText = styled.div`
${mobile({marginTop:'10px'})}
    
` 

export const TopTexts = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
` 


export const BottomContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between; 
    ${mobile({flexDirection:'column'})}
` 

export const Info = styled.div`
    
`

export const Products = styled.div`
  display:flex;
  justify-content:space-around;
  margin:20px;
  ${mobile({flexDirection:'column'})}
`
export const Hr = styled.hr`
    background-color:#eee;
    border: none;
    height:1px;
`

export const ProductDetails = styled.div`
    flex:2;
    display:flex;
    
`

export const Image = styled.img`
    height:300px;
    weight:300px;
    border-radius:10px;
    ${mobile({height:'150px', weight:'150px'})}

`
export const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
export const ProductName = styled.span`
    
`
export const ProductId = styled.span`

`

export const ProductSize = styled.div`

`
export const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color}
`

export const PriceDetails = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-right:40%;
`
export const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`
export const ProductAmount = styled.div`
    font-size:20px;
    margin:5px;
    ${mobile({margin:'10px 20px'})}
`
export const ProductPrice = styled.div`
    font-size:25px;
    ${mobile({marginBottom:'20px'})}
`

export const Summary = styled.div`
    border:1px solid lightgray;
    padding:20px;
    border-radius:10px;
    height:50vh;
`

export const SummaryTitle = styled.h1`

`

export const SummaryItem = styled.div`
    margin:30px 100px;
    display:flex;
    justify-content:space-between;
    font-weight:${props => props.type === 'total' && '600'};
    font-size:${props => props.type === 'total' && '30px'};
`
export const SummaryItemText = styled.span`

`
export const SummaryItemPrice = styled.span`

`

export const Button = styled.button`
padding:10px 25px;
width:20%;
font-weight:400;
cursor:pointer;
border-radius:20px;
`

export const ButtonRemove = styled.button`
margin-top:100px;
margin-right:80px;
padding:10px 15px;
width:50%;
font-weight:400;
cursor:pointer;
border-radius:30px;
border:none;
background-color:black;
color:#fff;
`




export const Bottombutton = styled.div`

    
` 