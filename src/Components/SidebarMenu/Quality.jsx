import React from 'react'
import '../../Styles/SidebarCommon.css'
import { FaClipboardCheck } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
const Quality = () => {
  return (
    <div className='quality'>
      <div className='flex'>
        <span className='icon fs-2'><FaClipboardCheck /></span>
        <span className='title'>QC/QA</span>
        <span className='arrow-icon'><RiArrowDropDownLine/></span>
      </div>
      
      
      
      </div>
  )
}

export default Quality