import React, { useState } from 'react'
import '../../Styles/SidebarCommon.css'
import { FaBox, FaLessThanEqual } from "react-icons/fa";
import { RiArrowDropDownLine } from 'react-icons/ri'
import { FaBedPulse } from 'react-icons/fa6';

const Inventry = () => {
const [inventryItem,setInventryItem] = useState(false)
const [masterItem,setMasterItem] = useState(false)
const [vendorItem,setVendorItem] = useState(false)
const [inwardItem,setInwardItem] = useState(false)
const [outwardItem,setOutwardItem] = useState(false) 
const [jobworkItem,setJobworkItem] = useState(false)
const [reportsItem,setReportsItem] = useState(false)
const [reportsTwoItem,setReportsTwoItem]= useState(false)

   const openInventryDropdown = () =>{
    setInventryItem(!inventryItem)
   }

   const inventryMasterDropedown = () =>{
    setMasterItem(!masterItem)
   }

   const inventryVendorDropdown = () =>{
    setVendorItem(!vendorItem)
   }

   const inventryInwardDropedown = () =>{
    setInwardItem(!inwardItem)
   }

const inventryOutwardDropedown = () =>{
 setOutwardItem(!outwardItem)
}

const jobworkDropdown = () =>{
  setJobworkItem(!jobworkItem)
}

const reportsDropedown = () =>{
 setReportsItem(!reportsItem)
}

const reportsTwoDropdown = () =>{
  setReportsTwoItem(!reportsTwoItem)
}



  return (
    <div className='inventry-menu'>
      <div className='d-flex justify-content-between align-items-center inventry-cont'>
      <span className='icon fs-3'><FaBox /></span>
      <span className='title'>Inventry</span>
      <span className='arrow-icon' onClick={openInventryDropdown}><RiArrowDropDownLine/></span>
      </div>
      {inventryItem ? (
      <div className='inventry-items'>
        <ul>
          <li className='d-flex justify-content-between align-items-center master'>
            <span>Master</span>
            <span className='arrow-icon' onClick={inventryMasterDropedown} ><RiArrowDropDownLine/></span>
          </li>
          {masterItem ?(
          <ul className='master-items'>
                <li> <span>Group</span></li>
                <li> <span>Category</span></li>
                <li> <span>HSN/SAC</span></li>
                <li><span>Unit</span></li>
                <li><span>Item</span></li>
                <li><span>Price List</span></li>
                <li><span>Grade</span></li>
                <li><span>Contact Review</span></li>
                <li><span>EU Declaration</span></li>
                <li><span>Batch Serial Setting</span></li>
                <li><span>Default Accessories</span></li>
                <li><span>Mould Type Master</span></li>
                <li><span>Specification Master</span></li>
          </ul>
          ):null}
          <li className='d-flex justify-content-between align-items-center'>
            <span>Vendor</span> 
            <span className='arrow-icon' onClick={inventryVendorDropdown}><RiArrowDropDownLine/></span>
          </li>
          {vendorItem ? (
          <ul className='vendor-items'>
                <li><span>Vendor</span></li>
                <li> <span>Vendor Satisfication Survey Master</span></li>
                <li><span>Po Satisfication Record </span></li>
                <li><span>Supplier Evaluation Report</span></li>
                <li><span>Vendor Assessment Master</span></li>
                <li><span>Vendor Fill Assessment</span></li>
          </ul>
          ):null}
          <li className='d-flex justify-content-between align-items-center'>
            <span>Inward</span>
            <span className='arrow-icon' onClick={inventryInwardDropedown}><RiArrowDropDownLine/></span>
          </li>
          {inwardItem ?(
          <ul className="inward-items">
                <li> <span>GRN</span></li>
                <li><span>Challan</span></li>
                <li><span>Gate Pass Returnable Materaial</span></li>
                <li><span>Return Rejected</span></li>
          </ul>
          ):null}
          <li className='d-flex justify-content-between align-items-center'>
            <span>Outward</span>
            <span className='arrow-icon' onClick={inventryOutwardDropedown}><RiArrowDropDownLine/></span>
            </li>
            {outwardItem ? (
            <ul className="outward-items ">
                <li><span>GRN</span></li>
                <li><span>Challan</span></li>
                <li><span>Gate Pass Returnable Materaial</span></li>
                <li><span>Return Rejected</span></li>
              </ul>
              ):null}
          <li className='d-flex justify-content-between align-items-center'>
            <span>Job Work</span>
            <span className='arrow-icon' onClick={jobworkDropdown}><RiArrowDropDownLine/></span>
          </li>
          {jobworkItem ? (
          <ul className="jobwork-items">
                <li> <span>Send To Job Work</span></li>
                <li> <span> Sub Challan</span></li>
                <li><span>Pending Job Work</span></li>
                <li><span>Job Work Balance Statement</span></li>
          </ul>
          ):null} 
          <li className='inventry-stock'><span>Stock Adjusment</span></li>
          <li className='invenry-packing'><span>Packing List</span></li>
          <li className='d-flex justify-content-between align-items-center'>
            <span>Reports</span>
            <span className='arrow-icon' onClick={reportsDropedown}><RiArrowDropDownLine/></span>
            </li>
              {reportsItem ?(
            <ul className="reports-items">
                <li><span>Inward Report</span></li>
                <li><span>Outward Report</span></li>
                <li><span>In-Out Report</span></li>
                <li><span>In-Out Report BatchWise</span></li>
                <li><span>Inventory Summary</span></li>
                <li><span>Inventory Summary By Itemwise</span></li>
                <li><span>Inventory Summary By BatchWise</span></li>
                <li><span>Stock Register</span></li>
                <li><span>Pending Stock Register with Orders</span></li>
                <li><span>Pending Bills</span></li>
                <li><span>Finished Goods Records</span></li>
                <li><span>Pending MRS</span></li>
                <li><span>Pending Gate Pass</span></li>
                <li><span>WO Stock Assign Report</span></li>
                <li><span>Logistic History</span></li>
                <li><span>Return Rejected Report</span></li>
                <li><span>Challan Wise Summary</span></li>
                <li><span>Stock Register For Order</span></li>
                <li><span>Incoming Rejection Report</span></li>
              </ul>
              ):null}

          <li className='d-flex justify-content-between align-items-center'>
            <span>Reports 2</span>
            <span className='arrow-icon' onClick={reportsTwoDropdown}><RiArrowDropDownLine/></span>
            </li>
              {reportsTwoItem ?(
            <ul className="reports2-items">
                <li> <span>Customer Wise Item Details</span></li>
                <li> <span>So Stock Assign Report</span></li>
            </ul>
              ):null}
        </ul>
      </div>
      ):null}

      </div>
  )
}

export default Inventry