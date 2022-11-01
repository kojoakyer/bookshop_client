
import styled from 'styled-components'
import {mobile} from '../../Responsive';


export const Container = styled.div`
padding-top:5rem;
margin-bottom:15%;

`

export const TopContainer = styled.div`
    display:flex;
    margin:20px 100px;
    padding-bottom:10px;
    border-bottom:1px solid gray;

`

export const Title = styled.div`
    flex:4;
    ${mobile({flex:'4',marginRight:'-30px'})}
`

export const TitleHeading = styled.h1`
${mobile({fontSize:'30px'})}
`

export const Categories = styled.div`
    flex:1;
`

export const CatDesc = styled.ul`
display: grid;
grid-template-columns: repeat(4, auto);
grid-gap: 10px;
list-style: none;
text-align: center;
justify-content: center;
margin-right: 2rem;
${mobile({display:'none',gap:'0px',marginRight:'0rem'})}

`

export const List = styled.li`


`

export const BottomContainer = styled.div`
    
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: -10px;
    padding:20px 10rem;
    ${mobile({gridTemplateColumns:'Repeat(1,1fr)',padding:'10px 2rem',gap:'-20px'})}

`