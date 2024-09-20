import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/buynow.png";
import { FaMobileAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()
  return (
    
     <div className='container-fluid nav-cont'>
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
            <div className="setting "> 
            <button className="fs-5 border-0 bg-transparent" 
            data-bs-toggle="modal" 
            data-bs-target="#SignInModel"
            onClick={()=>setShowModal(true)}>Sign In</button>
            <span className="fs-4 setting-icon"><FaGear /></span> 
            </div>
          <p className="fs-5">User Name</p>
        </div>
      </div>

    {/* sign In and Sign Out model */}
      


{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{ showModal && (
<div className="modal show fade"
 style={{ display: 'block' }}
 id="SignInModel" tabIndex="-1" 
 aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button
           onClick={()=>setShowModal(false)} 
           type="button" 
           className="btn-close" 
           data-bs-dismiss="modal" 
           aria-label="Close">
         </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button onClick={()=>setShowModal(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
)}
     </div>
 );
    
   
 
};

export default Navbar;
