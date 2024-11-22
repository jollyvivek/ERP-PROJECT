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

  const hamberMenuHandler =()=>{
    const dashboard = document.querySelector(".dashboard")
    dashboard.classList.toggle("show")
    console.log(dashboard)
  }
  return (
    
     <div className='container-fluid nav-cont '>
      <div className='row py-2 nav-row d-none '>
        <div className='col-md-6 d-flex gap-5 nav-cont-left '>
          
          <div className="d-flex align-items-center gap-3">
          <span className="hamberMenu" onClick={hamberMenuHandler}><IoMenu /></span>
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
        </div>
      </div>

      {/* navbar  */}
      <div className="row nav-row">
        <div className="col-md-12 d-flex justify-content-between navbar">
              <div className="navbar-left d-flex gap-3" style={{flexBasis:"50%"}}>
                <div className="d-flex align-items-center gap-3">
                    <span className="hamberMenu" onClick={hamberMenuHandler}><IoMenu /></span>
                    <img className='img-fluid logo' onClick={()=>navigate("/")} src={logo} alt="logo" />
                </div>
                <div className='mobile-cont w-100 d-flex align-items-center'>
                  <span className='mobile-icon'><FaMobileAlt/></span>
                  <span className='mobile-num fw-bold'>WhatsApp : 9876543210</span>
              </div>
              </div>
              <div className="navbar-right" style={{flexBasis:"50%"}}>
                <div className="setting d-flex justify-content-end px-3 gap-3 align-items-center"> 
                {!token ?
              <button className="fs-5 border-0 bg-transparent" 
              onClick={()=>setShowLogin(true)}>Sign In</button>
              :<div className="nav-profile gap-3 ">
                <img className="user-icon" src={UserIcon} alt="userIcon" />
                <p className="logout fs-5 pt-2" onClick={logout}>Logout</p>
              </div>}
              <span className="fs-4 setting-icon"><FaGear /></span> 
              </div>
              </div>
        </div>
      </div>

    
      




     </div>
 );
    
   
 
};

export default Navbar;
