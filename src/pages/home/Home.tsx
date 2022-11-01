import React from 'react'
import Header from '../../components/header/Header'
import MainSection from '../../components/main-section/MainSection'
import { TBook } from '../../types';



const Home:React.FC = () => {

  return (
    <div>
      <Header/>
      <MainSection />
    </div>
  )
}

export default Home