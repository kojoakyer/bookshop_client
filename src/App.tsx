import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavMenu from './components/navmenu/NavMenu';
import ScrowToTop from './components/ScrowToTop';
import { useAppSelector } from './hooks/hooks';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import SingleBook from './pages/singlebook/SingleBook';

const App:React.FC =  () => {

  const user = useAppSelector(state => state.user.currentUser);
  return (
    <>

      <Navbar/>
      <NavMenu/>
      <ScrowToTop>
        <Routes>
          <Route index  element={<Home />}/>
          <Route path='book/:id'  element={<SingleBook />}/>
          <Route path='/cart'  element={<Cart />}/>
          <Route path='/login'  element={<SignIn />}/>
          <Route path='/signup'  element={<SignUp />}/>
        </Routes> 
      </ScrowToTop>
    

    </>

  );

}


export default App;
