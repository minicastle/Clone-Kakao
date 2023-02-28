import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  height: 4400px;
`;

function App() {
  const [menuContain,setMenuContain] = useState('none');
  const [position,setPosition] = useState(0);
  const [lastY,setLastY] = useState(0);
  const handleMenu = useCallback((e)=>{
      console.log(e);
      setMenuContain(e);
  },[]);
  const handleSetPosition = useCallback((e)=>{
    let now = window.pageYOffset;
    if(lastY>now){
      setPosition(79);
    }
    else{
      setPosition(0);
      setLastY(now);
    }
  },[lastY]);
  useEffect(()=>{
    document.addEventListener('scroll',handleSetPosition)
  },[handleSetPosition])
  return (
    <Container onClick={()=>{if(menuContain!=='none')handleMenu('none')}}>
      <BrowserRouter>
        <Routes>
          <Route path='/Clone-Kakao' element={
            <>
              <Navbar menuContain={menuContain} handleMenu={handleMenu}/>
              <HomePage position={position}/>
              <Footer/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App