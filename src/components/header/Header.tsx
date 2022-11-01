import React from 'react'
import { Container, ImgContainer, Imgs } from './Header.styles'

const Header = () => {
  return (
    <div>
        <Container>
            <ImgContainer>
                <Imgs src='assets/headerimg.jpg'/>
            </ImgContainer>
        </Container>
    </div>
  )
}

export default Header