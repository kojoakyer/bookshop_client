import { Search } from '@mui/icons-material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { InfoContainer } from '../header/Header.styles'
import { Author, Container, Image, Input, MainContainer, Price, SearchContainer, Title } from './Book.styles'
import {TBook} from '../../types'

interface Props {
  book: TBook[];
  setFilters:any
}
const Book:React.FC<Props> = (props) => {

  
    const search = (s:any)=>{
        props.setFilters({
            s
        })
    }
  
  return (
    <>
    <div className="">
      <Box sx={{width:{md:'40%',sm:'70',xs:'60%'}}} className="">
        <SearchContainer>
           <Input placeholder='search for books by title'
           onChange={e => search(e.target.value)}
           />
           <Search />
        </SearchContainer>
      </Box>

      <Container>
        {props.book.map((item)=>{
          return(
            <MainContainer>
            <Image src={item.picture}></Image>
            <InfoContainer>
                <Link to={`book/${item._id}`}>
                    <Title>{item.title}</Title>
                </Link>
                <Author>{item.description}</Author>
                <Price>{item.price}</Price>
            </InfoContainer>
        </MainContainer>
        )
      })}

    </Container>
  
    </div>

    </>
  )
}

export default Book