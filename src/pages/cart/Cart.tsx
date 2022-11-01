import { Add, Remove } from '@mui/icons-material'
import React from 'react'


import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import DialogActions from "@mui/material/DialogActions";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { removeProduct } from '../../redux/cartSlice'
import { BottomContainer,  ButtonRemove, Container, Details,  Hr, Image, Info,  PriceDetails, ProductAmount, ProductAmountContainer,  ProductDetails,  
      ProductId,  ProductName,  ProductPrice,  Products,  ProductSize,  Summary,  SummaryItem,  SummaryItemPrice,  SummaryItemText,  SummaryTitle,  Title, TopButton, TopContainer, TopText, TopTexts,  Wrapper } from './Cart.styles'
import { TBook } from '../../types';

interface Props {
  cart: TBook[];
}

const Cart:React.FC<Props>= () => {

    
    const [open, setOpen] = React.useState(false);

    const cart = useAppSelector(state => state.cart.products)
    const dispatch = useAppDispatch()

    function handleClick(){
        dispatch(
            removeProduct(cart)
        )
    }


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Container>
            <Wrapper>
                <Title>Your Shirt</Title>
                <TopContainer>

                    <Button variant='contained'>Continue Shopping</Button>
                    <TopText>
                         <TopTexts>Shopping Bag(2)</TopTexts>
                         <TopTexts>Your WishList (0)</TopTexts>
                    </TopText>
                    <Button variant='outlined'>Check Out Now</Button>
                </TopContainer>
                <BottomContainer>
                 
                    <Info>
                    
                    {cart.map((item:any)=>{
                        return(
                            <Products>
                            <ProductDetails>
                                <Image src={item.picture}/>
                                <Details>
                                    <ProductName><b>Book Name:</b> {item.title}</ProductName>
                                <ProductId><b>Book Id:</b> {item._id}</ProductId>
                                 
                                    <ProductSize><b>Book Author:</b> {item.author}</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                
                                <ProductPrice><b>Book Price:</b>$ 50</ProductPrice>
                                <ButtonRemove onClick={handleClick} >Remove</ButtonRemove>
                            </PriceDetails>
                            
                        </Products>
                        )
                    })}
                        

                        <Hr/>

                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ 40</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping Cost</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  >
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 600</SummaryItemPrice>
                        </SummaryItem>
                        <Button variant='contained' sx={{marginLeft:'100px'}} onClick={()=>{handleClickOpen()}}>Checkout Now</Button>
                    </Summary>
                </BottomContainer>
            </Wrapper>
        </Container>
        <Dialog
          aria-labelledby="customized-dialog-title"
          open={open}
          onClose={handleClose}
          aria-describedby="modal-modal-description"
          fullWidth={true}
        >
          <DialogTitle>
           Make Payment
          </DialogTitle>

          <Box>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <DialogContent>
              <FormControl sx={{ width: "100%" }}>
                <DialogContentText>
                  <FormLabel htmlFor="name">Enter Total Amount</FormLabel>
                </DialogContentText>
                <TextField
                  sx={{ marginY: 1 }}
                  autoFocus
                  margin="dense"
                  label="Enter amount .."
                  type="number"
                  variant="outlined"
                  tabIndex={100}
                  name="name"
                  id="name"
                />
              </FormControl>

            </DialogContent>
            <DialogActions>
              <Button
              onClick={handleClick}
              >
                make paymeny
              </Button>
            </DialogActions>

            {/* </form> */}
          </Box>
        </Dialog>
        </>
  )
}

export default Cart