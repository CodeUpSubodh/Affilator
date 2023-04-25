import React from 'react'
import {IconContext} from "react-icons";
import {BiLogIn,BiUserCircle,BiLogOutCircle, BiBold,BiMenu} from "react-icons/bi";
import { Link } from 'react-router-dom';
import "../CSS/Header.css"
import { useRef } from 'react';

export default function Header() {
  const input=useRef();
 
  
  return (
    <>
    <nav className='nav'>
      <ul className='logo'>
        <li className='logo'>
          <h1 className='heading'>Affilator</h1> 
          </li>

      </ul>
      <ul className='links'>
        <a href='#'>
        <li className='linkspoints'>
          <div className='constainer'>Home
          </div></li>
        
        </a>
        <a href='#'>
        <li className='linkspoints'>
        <div className="container">Categories</div>
        </li>
        
        </a>
        <a href='#'>
        <li className='linkspoints'>
          <div className="container">Orders</div></li>
        
        </a>
        <Link to='/login'>
        <li className='linkspoints'>
        <div className="container">AboutUs</div>
        </li>
        
        </Link>
        
      </ul>
      <ul className='minilinks'>
        <Link to="/login"><li className='sublinks'><BiLogIn color='whitesmoke' size={25}/></li></Link>
        <Link to="/signup"><li className='sublinks'><BiUserCircle color='whitesmoke' size={25}/></li></Link>
        <li className='sublinks'><BiLogOutCircle color='whitesmoke' size={25} /></li>
        <li id='mobbar' className='sublinks'><BiMenu color='whitesmoke' size={25} /></li>
      </ul>


      

    
    </nav>
    </>
  
  )}
