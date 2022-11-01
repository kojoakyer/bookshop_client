import React from 'react'
import { booksData } from '../../data/bookData'
import axios from 'axios'
import Book from '../book/Book'
import { BottomContainer, Container, Title, TitleHeading, TopContainer } from './MainSection.styles'
import { TBook } from '../../types'


interface Props {
    book: TBook[];
    filters:any;
    setFilters:any
  }

const MainSection:React.FC<Props> = () => {

const [book , setBook] = React.useState([])

const [filters , setFilters] = React.useState({
    s:''
})


  React.useEffect(()=>{

      const getBook =  async ()=>{
        try{

            const arr = [];

            if(filters.s){
                arr.push(`s=${filters.s}`)
            }
            const res = await axios.get(`http://localhost:5000/book/search?${arr.join('&')}`)

            console.log(res,'-books data-');
            
            setBook(res.data)

        }catch(err){
            console.log(err);
            
        }
            
        }
        getBook()
    
  },[filters])
  return (
    <>
        <Container>
            <TopContainer>
                <Title>
                    <TitleHeading>Books Available</TitleHeading>
                </Title>
            </TopContainer>
            <BottomContainer>
        
        
                        <Book book={book} filters={filters} setFilters={setFilters} />
                
            </BottomContainer>
        </Container>
    </>
  )
}

export default MainSection