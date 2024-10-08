import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/buynow.png"
import UserIcon from '../../assets/profile_icon.png';
import { FaMobileAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RiH6 } from "react-icons/ri";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const{token,setToken} =useContext(StoreContext)
  const navigate = useNavigate()

  const logout =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  return (
    
     <div className='container-fluid nav-cont'>
      <div className='row py-2'>
        <div className='col-md-6 d-flex gap-5 nav-cont-left '>
          <div className="d-flex align-items-center gap-3">
            <span className="hamberMenu"><IoMenu /></span>
          <img className='img-fluid logo' onClick={()=>navigate("/")} src={logo} alt="logo" />
          </div>
          <div className='mobile-cont w-100 d-flex align-items-center'>
            <span className='mobile-icon'><FaMobileAlt/></span>
            <span className='mobile-num fw-bold'>WhatsApp : 9876543210</span>
          </div>
        </div>
        <div className='col-md-6 text-end nav-cont-right'>
            <div className="setting "> 
            {!token ?
            <button className="fs-5 border-0 bg-transparent" 
            onClick={()=>setShowLogin(true)}>Sign In</button>
            :<div className="nav-profile">
              <img className="user-icon" src={UserIcon} alt="userIcon" />
                <p className="logout fs-5 pt-2" onClick={logout}>Logout</p>
              </div>}
            <span className="fs-4 setting-icon"><FaGear /></span> 
            </div>
          {/* <p className="fs-5">User Name</p> */}
        </div>
      </div>

    
      




     </div>
 );
    
   
 
};

export default Navbar;
