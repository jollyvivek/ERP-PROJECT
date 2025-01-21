import React, { useState } from 'react'
import '../../Styles/SidebarCommon.css'
import { FaBox, FaLessThanEqual } from "react-icons/fa";
import { RiArrowDropDownLine } from 'react-icons/ri'
import { GoDotFill } from "react-icons/go";
import { FaBedPulse } from 'react-icons/fa6';
import { NavLink, useNavigate } from 'react-router-dom';

const Inventry = () => {
 
const navigate = useNavigate()
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
    const InventryMaster = document.getElementById("InventryMaster").classList.add("active2");
    const InventryVendor = document.getElementById("InventryVendor").classList.remove("active2");
    const InventryInward = document.getElementById("InventryInward").classList.remove("active2");
    const InventryOutward = document.getElementById("InventryOutward").classList.remove("active2");
    const InventryJobwork = document.getElementById("InventryJobwork").classList.remove("active2");
    const StockAdjusment = document.getElementById("StockAdjusment").classList.remove("active2");
    const PackingList = document.getElementById("PackingList").classList.remove("active2");
    const InventryReports = document.getElementById("InventryReports").classList.remove("active2");
    const InventryReportsTwo = document.getElementById("InventryReportsTwo").classList.remove("active2");
   }

   const inventryVendorDropdown = () =>{
    setVendorItem(!vendorItem)
    const InventryVendor = document.getElementById("InventryVendor").classList.add("active2");
    const InventryMaster = document.getElementById("InventryMaster").classList.remove("active2");
    const InventryInward = document.getElementById("InventryInward").classList.remove("active2");
    const InventryOutward = document.getElementById("InventryOutward").classList.remove("active2");
    const InventryJobwork = document.getElementById("InventryJobwork").classList.remove("active2");
    const StockAdjusment = document.getElementById("StockAdjusment").classList.remove("active2");
    const PackingList = document.getElementById("PackingList").classList.remove("active2");
    const InventryReports = document.getElementById("InventryReports").classList.remove("active2");
    const InventryReportsTwo = document.getElementById("InventryReportsTwo").classList.remove("active2");
   }

   const inventryInwardDropedown = () =>{
    setInwardItem(!inwardItem)
    const InventryInward = document.getElementById("InventryInward").classList.add("active2");
    const InventryMaster = document.getElementById("InventryMaster").classList.remove("active2");
    const InventryVendor = document.getElementById("InventryVendor").classList.remove("active2");
    const InventryOutward = document.getElementById("InventryOutward").classList.remove("active2");
    const InventryJobwork = document.getElementById("InventryJobwork").classList.remove("active2");
    const StockAdjusment = document.getElementById("StockAdjusment").classList.remove("active2");
    const PackingList = document.getElementById("PackingList").classList.remove("active2");
    const InventryReports = document.getElementById("InventryReports").classList.remove("active2");
    const InventryReportsTwo = document.getElementById("InventryReportsTwo").classList.remove("active2");
   }

const inventryOutwardDropedown = () =>{
 setOutwardItem(!outwardItem)
 const InventryOutward = document.getElementById("InventryOutward").classList.add("active2");
 const InventryMaster = document.getElementById("InventryMaster").classList.remove("active2");
 const InventryVendor = document.getElementById("InventryVendor").classList.remove("active2");
 const InventryInward = document.getElementById("InventryInward").classList.remove("active2");
 const InventryJobwork = document.getElementById("InventryJobwork").classList.remove("active2");
 const StockAdjusment = document.getElementById("StockAdjusment").classList.remove("active2");
 const PackingList = document.getElementById("PackingList").classList.remove("active2");
 const InventryReports = document.getElementById("InventryReports").classList.remove("active2");
 const InventryReportsTwo = document.getElementById("InventryReportsTwo").classList.remove("active2");
}

const jobworkDropdown = () =>{
  setJobworkItem(!jobworkItem)
  const InventryJobwork = document.getElementById("InventryJobwork").classList.add("active2");
  const InventryMaster = document.getElementById("InventryMaster").classList.remove("active2");
  const InventryVendor = document.getElementById("InventryVendor").classList.remove("active2");
  const InventryInward = document.getElementById("InventryInward").classList.remove("active2");
  const InventryOutward = document.getElementById("InventryOutward").classList.remove("active2");
  const StockAdjusment = document.getElementById("StockAdjusment").classList.remove("active2");
  const PackingList = document.getElementById("PackingList").classList.remove("active2");
  const InventryReports = document.getElementById("InventryReports").classList.remove("active2");
  const InventryReportsTwo = document.getElementById("InventryReportsTwo").classList.remove("active2");
}

const StockAdjusmentHandler = ()=>{
  const StockAdjusment = document.getElementById("StockAdjusment").classList.add("active2");
  const InventryMaster = document.getElementById("InventryMaster").classList.remove("active2");
  const InventryVendor = document.getElementById("InventryVendor").classList.remove("active2");
  const InventryInward = document.getElementById("InventryInward").classList.remove("active2");
  const InventryOutward = document.getElementById("InventryOutward").classList.remove("active2");
  const InventryJobwork = document.getElementById("InventryJobwork").classList.remove("active2");
  const PackingList = document.getElementById("PackingList").classList.remove("active2");
  const InventryReports = document.getElementById("InventryReports").classList.remove("active2");
  const InventryReportsTwo = document.getElementById("InventryReportsTwo").classList.remove("active2");
}

const PackingListHandler = ()=>{
  const PackingList = document.getElementById("PackingList").classList.add("active2");
  const InventryMaster = document.getElementById("InventryMaster").classList.remove("active2");
  const InventryVendor = document.getElementById("InventryVendor").classList.remove("active2");
  const InventryInward = document.getElementById("InventryInward").classList.remove("active2");
  const InventryOutward = document.getElementById("InventryOutward").classList.remove("active2");
  const InventryJobwork = document.getElementById("InventryJobwork").classList.remove("active2");
  const StockAdjusment = document.getElementById("StockAdjusment").classList.remove("active2");
  const InventryReports = document.getElementById("InventryReports").classList.remove("active2");
  const InventryReportsTwo = document.getElementById("InventryReportsTwo").classList.remove("active2");
}

const reportsDropedown = () =>{
 setReportsItem(!reportsItem)
  const InventryReports = document.getElementById("InventryReports").classList.add("active2");
  const InventryMaster = document.getElementById("InventryMaster").classList.remove("active2");
  const InventryVendor = document.getElementById("InventryVendor").classList.remove("active2");
  const InventryInward = document.getElementById("InventryInward").classList.remove("active2");
  const InventryOutward = document.getElementById("InventryOutward").classList.remove("active2");
  const InventryJobwork = document.getElementById("InventryJobwork").classList.remove("active2");
  const StockAdjusment = document.getElementById("StockAdjusment").classList.remove("active2");
  const PackingList = document.getElementById("PackingList").classList.remove("active2");
  const InventryReportsTwo = document.getElementById("InventryReportsTwo").classList.remove("active2");
}

const reportsTwoDropdown = () =>{
  setReportsTwoItem(!reportsTwoItem)
  const InventryReportsTwo = document.getElementById("InventryReportsTwo").classList.add("active2");
  const InventryMaster = document.getElementById("InventryMaster").classList.remove("active2");
  const InventryVendor = document.getElementById("InventryVendor").classList.remove("active2");
  const InventryInward = document.getElementById("InventryInward").classList.remove("active2");
  const InventryOutward = document.getElementById("InventryOutward").classList.remove("active2");
  const InventryJobwork = document.getElementById("InventryJobwork").classList.remove("active2");
  const StockAdjusment = document.getElementById("StockAdjusment").classList.remove("active2");
  const PackingList = document.getElementById("PackingList").classList.remove("active2");
  const InventryReports = document.getElementById("InventryReports").classList.remove("active2");
}



  return (
    <div className='inventry-menu'>
      <div className=' inventry-cont flex mb-1 border'>
      <span className='icon fs-3'><FaBox /></span>
      <span className='title'>Inventry</span>
      <span className='arrow-icon' onClick={openInventryDropdown}><RiArrowDropDownLine/></span>
      </div>
      {inventryItem ? (
      <div className='inventry-items'>
        <ul>
          <li id='InventryMaster' className='d-flex justify-content-between align-items-center master mb-1'>
            <span>Master</span>
            <span className='arrow-icon' onClick={inventryMasterDropedown} ><RiArrowDropDownLine/></span>
          </li>
          {masterItem ?(
          <ul className='master-items'>
                <li className='title flex gap-1 InventryGroup mb-1 p-0'>
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/inventrygroup' className="nav-link w-100 px-2">Group</NavLink>
                </li>
                <li className='title flex gap-1 InventryCategory mb-1 p-0' >
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/inventrycategory' className='nav-link w-100 px-2'>Category</NavLink>
                </li>
                <li className='title flex gap-1 InventryHsnSac mb-1 p-0'>
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to={'/'} className='nav-link w-100 px-2'>HSN/SAC</NavLink>
                </li>
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
          <li id='InventryVendor' className='d-flex justify-content-between align-items-center'>
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
          <li id='InventryInward' className='d-flex justify-content-between align-items-center'>
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
          <li id='InventryOutward' className='d-flex justify-content-between align-items-center'>
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
          <li id='InventryJobwork' className='d-flex justify-content-between align-items-center'>
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

          <li id='StockAdjusment' className='inventry-stock' onClick={StockAdjusmentHandler}><span>Stock Adjusment</span></li>
          <li id='PackingList' className='invenry-packing' onClick={PackingListHandler}><span>Packing List</span></li>

          <li id='InventryReports' className='d-flex justify-content-between align-items-center'>
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

          <li id='InventryReportsTwo' className='d-flex justify-content-between align-items-center'>
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