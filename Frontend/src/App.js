
import React from 'react'
import Login from './Login.js';
import Profile from './Profile.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup.js';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={ <Login />}></Route>
        <Route path='/home' element={ <Profile />}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App