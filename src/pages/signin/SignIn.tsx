import React from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { login } from '../../redux/apiCalls'
import { Agreement, Button, Container, Form, Input, InputContainer, Label, Title, Wrapper } from './SignIn.styles'

const SignIn:React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useAppDispatch()

    const {isFetching,error} = useAppSelector(state => state.user)

    function handleClick(e:any){
        e.preventDefault()
        login(dispatch,{email,password})
        navigate('/', { replace: true });
    }
  return (
   <>
     <Container>
            <Wrapper>
                <Title>Sign-In with your credentials</Title>
                <Form>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input placeholder='name' onChange={(e)=>setEmail(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                    </InputContainer>
               
                    <Agreement>Do you remember your password</Agreement>
                    <Agreement>Create an Acount</Agreement>
                    <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                </Form>
            </Wrapper>
        </Container>
   </>
  )
}

export default SignIn