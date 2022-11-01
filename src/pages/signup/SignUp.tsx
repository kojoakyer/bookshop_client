import React from 'react'
import axios from 'axios'
import { Agreement, Button, Container, Form, Input, InputContainer, Label, Title, Wrapper } from './SignUp.styles'

const SignUp:React.FC = () => {
    
    const [fullname,setFullname] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    async function handleSubmit(e:any){
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:5000/user/signup/",{fullname,password,email} )
            console.log(res);
            res.data && window.location.replace('/login')
        }catch{
        }

    }
  return (
    <div>
           <Container>
            <Wrapper>
                <Title>Register an Account</Title>
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <Label>Username</Label>
                        <Input placeholder='username' onChange={(e)=>setFullname(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Confirm Password</Label>
                        <Input placeholder='name'/>
                    </InputContainer>
               
                    <Agreement>I agree to Creanos Store’s Terms and Privacy Policy</Agreement>
                    <Button type='submit'>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    </div>
  )
}

export default SignUp