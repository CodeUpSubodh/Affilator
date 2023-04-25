import React, { useState } from "react";
import "../Components/CSS/SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate, Router  } from 'react-router-dom'

export default function Login() {
  const history=useNavigate();
  function matching() {
    if (
      document
        .getElementById("email")
        .value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
        
    ) {
      
      return;
    } else {
      document.getElementById("errors").innerText = "*Incorrect Email";
      
    }
  }
  const[userRegister, setUserRegister]=useState({
    email:"",
    password:""
  });
  const handleInput=(e)=>
  {
    e.preventDefault();
    const {name,value}=e.target;
    setUserRegister({...userRegister,[name]:value});

  };
  const login= ()=>
  {
    const {email,password}=userRegister;
    if(email && password)
    {
      axios.post('http://localhost:5000/login',userRegister).then((res)=>
      {
        if(res.data=="login")
        {
          history("/");
        }
        else if(res.data=="pass"){
          
          alert("Password does not match");
          history("/");
        }
        else{
          alert("New User ? Try Logging In");
          history('/');
        }
       

      })
    }
    else{
      alert("Invalid Input");
    }
  };
  return (
    <>
     <form method="#">
        <div className="maincontainer">
          <div className="heading">
            
          </div>
          
          <div className="inputs">
            <label>Email</label>
            <input
              name="email"
              id="email"
              type="email"
              onBlur={matching}
              required
              value={userRegister.email}
              onChange={handleInput}
              
            />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input
              name="password"
              id="password"
              type="password"
              
              required
              value={userRegister.password}
              onChange={handleInput}
            />
          </div>
          
          <div className="inputs">
            <label>Captcha</label>
            <input name="captch" type="text" />
          </div>
          <p Id="errors"></p>
          <input id="submitbutton" type="submit" onClick={login} onChange={handleInput}/>

          <Link to="/signup" className="loginredirect">
            New User? Try Signup Now
          </Link>
        </div>
      </form>
    </>
  )
}
