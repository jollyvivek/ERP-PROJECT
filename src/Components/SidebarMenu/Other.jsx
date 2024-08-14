import React, { useState } from 'react'
import '../../Styles/SidebarCommon.css'
import { FaQuestion } from "react-icons/fa6";
import { RiArrowDropDownLine} from 'react-icons/ri'

const Other = () => {
  const [other,setOther] =useState(false)

  const otherDropdown = () =>{
    setOther(!other)
  };

  return (
    <div className='other'>

    <div className='other-top flex lineHeight'>
      <span className='icon fs-4'><FaQuestion /></span>
      <span className='title'>Other</span>
      <span className='arrow-icon' onClick={otherDropdown}><RiArrowDropDownLine/></span>
    </div>
      {other ? (
      <div className='other-items-cont'>
      <ul className="other-items">
              <li className="title">Help</li>
              <li className="title">Vistor's Pass</li>
              <li className="title">Vehicle's Gate Pass</li>
              <li className="title">Courier</li>
      </ul>
      </div>
      ):null}



    </div>
  )
}

export default Other