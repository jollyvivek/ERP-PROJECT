import React, { useState } from 'react'
import './LoginPopup.css'
import { RxCross2 } from "react-icons/rx";
const LoginPopup = ({setShowLogin}) => {
  const[currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
    <form action="" className='login-popup-container'>
      <div className='login-title'>
        <h3>{currState}</h3>
        <h6 className='cross-icon' onClick={()=>setShowLogin(false)}> <RxCross2 /></h6>
      </div>
      <div className='login-popup-inputs'>
        {currState==="Login" ? <></> 
        :<input type="text" placeholder='Your name' name='username' required />}
        <input type="email" placeholder='Your email' name="email" required  />
        <input type="password" placeholder='Password' name="password" required  />
      </div>
      <button type='button'>{currState ==="Sign Up" ? "Create Account" :"Login"}</button>
      <div className='login-condition'>
        <input type="checkbox" required />
        <p>By continuing , I agree to the terms of use & privacy policy .</p>
      </div>
      {currState==="Login"
      ?<p>Create a new account ?    <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
      : <p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login Here</span> </p>
      }
    
    </form>

    </div>
  )
}

export default LoginPopup