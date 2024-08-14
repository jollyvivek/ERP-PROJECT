import React from 'react'
import '../../Styles/SidebarCommon.css'
import { FaSignOutAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
const Logout = () => {

  const logoutHandler = ()=>{
    alert("Do You really want to close this application ?")
  }
  return (
    <div className='logout-cont'>

      <div className='logout-top lineHeight'>
        <span className='icon fs-2'><FaSignOutAlt /></span>
        <span className='title ' onClick={logoutHandler}>Logout</span>
        {/* <span className='arrow-icon '><RiArrowDropDownLine/></span> */}
      </div>


    </div>
  )
}

export default Logout