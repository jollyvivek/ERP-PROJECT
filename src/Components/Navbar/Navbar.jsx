import React from "react";
import "./Navbar.css";
import logo from "../../assets/buynow.png";
import { FaMobileAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

  const navigate = useNavigate()
  return (
    
     <div className='container-fluid nav-cont '>
      <div className='row'>
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
          <div className="setting"> 
            <span className="fs-5">Sign Out</span>
            <span className="fs-4 setting-icon"><FaGear /></span> 
           </div>
          <p className="fs-5">User Name</p>
        </div>
      </div>
     </div>
 );
    
   
 
};

export default Navbar;
