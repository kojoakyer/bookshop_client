import { Button } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router';
import { Author, BottomWrapper, Container, Desc, Image, ImgContainer, InfoContainer, Price, Title, TopWrapper, Wrapper } from './SingleBook.styles'
import { addProduct } from '../../redux/cartSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { TBook } from '../../types';


const SingleBook:React.FC = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id);

    const dispatch = useAppDispatch()

    const [product, setProduct] = React.useState<TBook>()

    
    React.useEffect(()=>{
        async function getProduct(){
            try{
                const resp = await axios.get(`http://localhost:5000/book/${id}`)
                console.log(resp,'single book');
                
                setProduct(resp.data)
            }catch(err){}
        };
        getProduct();
    },[id]) 

    function handleClick(){
        dispatch(
            addProduct({...product })
        )
    }
  return (
    <div>
        <Container>
            <Wrapper>
                <TopWrapper>
                    <ImgContainer>
                        <Image src={product?.picture}></Image>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product?.title}</Title>
                        <Author>{product?.author}</Author>
                        <Price>$50</Price>
                        <Button sx={{margin:'100px 150px 0px 0px'}} variant='contained' onClick={handleClick}>Add to Cart</Button>
                    </InfoContainer>
                </TopWrapper>
                <BottomWrapper>
                    <Title >Description</Title>
                    <Desc style={{marginTop:'-20px'}}>{product?.description}</Desc>
                    
                </BottomWrapper>
            </Wrapper>
        </Container>
    </div>
  )
}

export default SingleBook