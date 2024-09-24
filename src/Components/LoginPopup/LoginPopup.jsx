import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';
const LoginPopup = ({setShowLogin}) => {
  const[currState,setCurrState] = useState("Login")
  const[data,setData]=useState({
    username:"",
    company:"",
    phone:"",
    email:"",
    password:""
  });

  const changeHandler = (event)=>{
    const {name,value} =event.target;
    setData((data)=>({...data,[name]:value}));
  };

  // useEffect(()=>console.log(data),[data]);

  const formSubmitHandler = (event)=>{
    event.preventDefault();
    console.log(data);
    setData({
      username:"",
      company:"",
      phone:"",
      email:"",
      password:""
    });
    
    setShowLogin(false)

    toast.success("form submit successfully .");
  }

  return (
    <div className='login-popup'>
    <form action="" className='login-popup-container' onSubmit={formSubmitHandler}>
      <div className='login-title'>
        <h3>{currState}</h3>
        <h6 className='cross-icon' onClick={()=>setShowLogin(false)}> <RxCross2 /></h6>
      </div>
      <div className='login-popup-inputs'>
        {currState==="Login" ? <></> 
        :<>
        <input type="text" placeholder='Name' autoComplete='off' name='username' value={data.username} onChange={changeHandler} required />
        <input type="text" placeholder='Company' autoComplete='off' name='company' value={data.company} onChange={changeHandler} required />
        <input type="number" placeholder='Phone' autoComplete='off' name='phone' value={data.phone} onChange={changeHandler} required />
        </>}

        <input type="email" placeholder='Email' autoComplete='off' name="email" value={data.email} onChange={changeHandler} required  />
        <input type="password" placeholder='Password' name="password" value={data.password} onChange={changeHandler} required  />
      </div>
      <button type='submit'>{currState ==="Sign Up" ? "Create Account" :"Login"}</button>
      <div className='login-condition'>
        <input type="checkbox" required />
        <p>By continuing , I agree to the terms of use & privacy policy .</p>
      </div>
      {currState==="Login"
      ?<p className='create-account'>Create a new account ?    <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
      : <p className='create-account'>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login Here</span> </p>
      }
    
    </form>

    </div>
  )
}

export default LoginPopup