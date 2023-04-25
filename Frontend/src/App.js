import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import Extra from './Extra';

import SignUp from './Components/SignUp'
import {Routes , Route} from 'react-router-dom'
function App() {
  
  return (
    <>
    <Extra/>
  //   <Routes>
  //   <Route path='/login' element={<Login/>}/>
  //   <Route path='/signup' element={<SignUp/>}/>
  //   <Route path='/' element={<Home/>}/>
    
  // </Routes>
    
    </>
  );
}

export default App;
