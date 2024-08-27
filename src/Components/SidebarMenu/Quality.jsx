import React, { useState } from "react";
import "../../Styles/SidebarCommon.css";
import { FaClipboardCheck } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";


const Quality = () => {

  const [qualityItem,setQualityItem] = useState(false)
  const [qualityMaster,setQualityMaster] = useState(false)
  const [qualityReport,setQualityReport] = useState(false)


  const qualityDrodown = () => {
    setQualityItem(!qualityItem)
  };

  const qualityMasterDropdown = () =>{
    setQualityMaster(!qualityMaster)
  };

  const qualityReportDropdown = () =>{
    setQualityReport(!qualityReport)
  }


  return (
    <div className="quality">
      <div className="quality-title flex mb-1">
        <span className="icon fs-3">
          <FaClipboardCheck />
        </span>
        <span className="title">QC/QA</span>
        <span className="arrow-icon" onClick={qualityDrodown}>
          <RiArrowDropDownLine />
        </span>
      </div>

      {qualityItem ? (
      <ul className="quality-items ">
              <li className=" quality-master flex ">
                <span className="title">Master</span>
                <span className="arrow-icon" onClick={qualityMasterDropdown}><RiArrowDropDownLine /></span>
              </li>
              {qualityMaster ? (
              <ul className="master-items">
                <li className="title">Quality Plan</li>
                <li className="title">Sampling Plan</li>
                <li className="title">ISO Tolerance</li>
                <li className="title">Variant</li>
                <li className="title">Plating Master</li>
              </ul>
              ):null}

              <li className="title">ISO Document</li>
              <li className="title">Pending QC</li>
              <li className="title">Pending QC by item</li>
              <li className="title">Incoming Inspection</li>
              <li className="title">Final Inspection</li>
              <li className="title">Final Inspection by BatcWise</li>
              <li className="title">In Process Inspection</li>
              <li className="title">QC ITEM</li>
              <li className="title">Internal Test Certificate</li>

              <li className="quality-report flex">
                <span className="title"> Reports</span>
                <span className="arrow-icon" onClick={qualityReportDropdown}><RiArrowDropDownLine /> </span>
              </li>

              {qualityReport ? (
              <ul className="reports-items">
                <li className="title">NC Production Report</li>
                <li className="title">CAR Log Report</li>
              </ul>
                ):null}

              <li className="title">Vendor Complaint</li>
              <li className="title">General NC Report</li>
      </ul>
      ):null}


    </div>
  );
};

export default Quality;
