import React, { useState } from 'react'
import '../../Styles/SidebarCommon.css'
import { MdManageAccounts } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


const EnggMang = () => {

const [enggItems,setEnggItems] = useState(false)
const [enggMaster,setEnggMaster] = useState(false)
const [preventive,setPreventive] = useState(false)
const [calibration,setCalibration] = useState(false)
const [training,setTraining] = useState(false)
const [audit,setAudit] = useState(false)


  const enggItemsDropdown = () =>{
    setEnggItems(!enggItems)
  };

  const enggMasterDropdown = () =>{
    setEnggMaster(!enggMaster)
  };

  const preventiveDropdown = () =>{
    setPreventive(!preventive)
  };

  const calibrationDropdown = () =>{
    setCalibration(!calibration)
  };

  const trainingDropdown = () =>{
    setTraining(!training)
  };

  const auditDropdown = () =>{
    setAudit(!audit)
  };

  return (
    <div className='engg-cont '>
      <div className='engg-top flex lineHeight'>
        <span className='icon fs-2'><MdManageAccounts/></span>
        <span className=' title text-center'>Engg and Management</span>
        <span className='arrow-icon' onClick={enggItemsDropdown}><RiArrowDropDownLine/></span>
      </div>
      {enggItems ? (
      <div className='engg-items-cont'>
      <ul className="engg-items">
              <li class="engg-master flex lineHeight">
                <span className="title">Masters</span>
                <span className="arrow-icon" onClick={enggMasterDropdown}><RiArrowDropDownLine/> </span>
              </li>
              {enggMaster ? (
              <ul className="engg-master-items">
                <li class="title">Checking List</li>
                <li class="title">Instrument Category</li>
                <li class="title">Instrument Master</li>
              </ul>
              ):null}

              <li className="preventive flex lineHeight">
                <span className="title">Preventive Mainteance</span>
                <span className="arrow-icon" onClick={preventiveDropdown}><RiArrowDropDownLine/></span>
              </li>
              {preventive ? (
              <ul className="engg-preventive-items">
                <li className="title">Schedule</li>
                <li className="title">Fill Report</li>
                <li className="title">Report</li>
              </ul>
              ):null}
              <li className="title">Breakdown Report</li>

              <li className="calibration flex lineHeight">
                <span className="title">Calibration Mainteance</span>
                <span className="arrow-icon" onClick={calibrationDropdown}><RiArrowDropDownLine/> </span>
              </li>
              {calibration ? (
              <ul className="engg-calibration-items">
                <li className="title">Schedule</li>
                <li className="title">Fill Report</li>
                <li className="title">Calibration Plan</li>
                <li className="title"> Schedule Report</li>
              </ul>
                ):null}

              <li className ="engg-training flex lineHeight">
                <span className="title">Training Schedule</span>
                <span className="arrow-icon" onClick={trainingDropdown}><RiArrowDropDownLine/> </span>
              </li>
              {training ? (
              <ul class="engg-training-items">
                <li className="title">Training Schedule Master</li>
                <li className="title">Training Record</li>
              </ul>
                ):null}

              <li className="engg-audit flex lineHeight">
                <span className="title">Internal Audit</span>
                <span className="arrow-icon" onClick={auditDropdown}><RiArrowDropDownLine/>  </span>
              </li>
                {audit ? (
              <ul className=" engg-audit-items">
                <li className="title">Audit Master Obsevation</li>
                <li className="title">Audit Plan</li>
                <li className="title">Internal Audit Schedule</li>
              </ul>
               ):null}
              <li className="title">Damage Report </li>
      </ul>
      </div>
      ):null}

    </div>
  )
}

export default EnggMang