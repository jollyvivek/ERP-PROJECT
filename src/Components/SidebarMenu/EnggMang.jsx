import React from 'react'
import '../../Styles/SidebarCommon.css'
import { MdManageAccounts } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


const EnggMang = () => {
  return (
    <div className='engg-cont '>
      <div className='engg-top flex lineHeight  border'>
        <span className='icon fs-2'><MdManageAccounts/></span>
        <span className=' title text-center'>Engg and Management</span>
        <span className='arrow-icon'><RiArrowDropDownLine/></span>
      </div>

      <div className='engg-items-cont'>

      <ul className="engg-items">
              <li class="engg-master flex lineHeight border">
                <span className="title">Masters</span>
                <span className="arrow-icon"><RiArrowDropDownLine/> </span>
              </li>
              <ul className="engg-master-items">
                <li class="title">Checking List</li>
                <li class="title">Instrument Category</li>
                <li class="title">Instrument Master</li>
              </ul>

              <li className="preventive flex lineHeight border ">
                <span className="title">Preventive Mainteance</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>

              <ul className="engg-preventive-items">
                <li className="title">Schedule</li>
                <li className="title">Fill Report</li>
                <li className="title">Report</li>
              </ul>
              <li className="title">Breakdown Report</li>

              <li className="calibration flex lineHeight border ">
                <span className="title">Calibration Mainteance</span>
                <span className="arrow-icon"><RiArrowDropDownLine/> </span>
              </li>

              <ul className="engg-calibration-items">
                <li className="title">Schedule</li>
                <li className="title">Fill Report</li>
                <li className="title">Calibration Plan</li>
                <li className="title"> Schedule Report</li>
              </ul>

              <li className ="engg-training flex lineHeight border">
                <span className="title">Training Schedule</span>
                <span className="arrow-icon"><RiArrowDropDownLine/> </span>
              </li>
              <ul class="engg-training-items">
                <li className="title">Training Schedule Master</li>
                <li className="title">Training Record</li>
              </ul>

              <li className="engg-audit flex lineHeight border">
                <span className="title">Internal Audit</span>
                <span className="arrow-icon"><RiArrowDropDownLine/>  </span>
              </li>
              <ul className=" engg-audit-items">
                <li className="title">Audit Master Obsevation</li>
                <li className="title">Audit Plan</li>
                <li className="title">Internal Audit Schedule</li>
              </ul>
              <li className="title">Damage Report </li>
      </ul>
      


      </div>






    </div>
  )
}

export default EnggMang