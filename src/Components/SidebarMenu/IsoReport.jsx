import React, { useState } from 'react'
import '../../Styles/SidebarCommon.css'
import { FaChartBar } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const IsoReport = () => {

  const [isoItems,setIsoItems] = useState(false)
  const [marketingItem,setMarketingItem]= useState(false)
  const [isoProduction,setIsoProduction]= useState(false)
  const [isoPurchase,setIsoPurchase] = useState(false)
  const [quality,setQuality] = useState(false)

  const isoDropdown = () =>{
    setIsoItems(!isoItems)
  };

  const marketingDropdown = () =>{
    setMarketingItem(!marketingItem)
  };

  const isoProductionDropdown = () =>{
    setIsoProduction(!isoProduction)
  };

  const isoPurchaseDropdown = () =>{
    setIsoPurchase(!isoPurchase)
  };

  const qualityDropdown = () =>{
    setQuality(!quality)
  };

  return (
    <div className='iso'>
      <div className='iso-top flex lineHeight mb-1'>
        <span className='icon fs-2'><FaChartBar /></span>
        <span className='title'>ISO Report</span>
        <span className='arrow-icon' onClick={isoDropdown}><RiArrowDropDownLine/></span>
      </div>

      {isoItems ? (
      <div className='iso-items-cont'>

      <ul className="iso-items">
              <li className="marketing flex lineHeight">
                <span className="title">Marketing</span>
                <span className="arrow-icon" onClick={marketingDropdown}><RiArrowDropDownLine/></span>
              </li>
              {marketingItem ? (
              <ul class="iso-marketing-items px-0">
                <li class="title">Enquiry Report</li>
                <li class="title">Order Booking Report</li>
                <li class="title">Customer Property Report</li>
                <li class="title">Customer Complaint Report</li>
                <li class="title">Customer Satisfication Report</li>
                <li class="title">Quality Related Customer Complain Maintenance Report</li>
                <li class="title">Rejection Maintance Report</li>
                <li class="title">Order Delivery Report</li>
              </ul>
              ):null}

              <li className="iso-production flex lineHeight">
                <span  className="title">Production</span>
                <span className="arrow-icon" onClick={isoProductionDropdown}><RiArrowDropDownLine/></span>
              </li>
              {isoProduction ? (
              <ul className="iso-production-items">
                <li className="title">Production VS Planning Report </li>
                <li className="title">Rejection Report </li>
                <li className="title">Daily Production Report </li>
                <li className="title">Re-Work Report </li>
              </ul>
                ):null}

              <li className="iso-purchase flex lineHeight">
                <span  className="title">Purchase</span>
                <span className="arrow-icon" onClick={isoPurchaseDropdown}><RiArrowDropDownLine/></span>
              </li>
              {isoPurchase ? (
              <ul className=" iso-purchase-items">
                <li className="title">Supplier Evaluation Report</li>
                <li className="title">Purchase Order Report</li>
                <li className="title">Approved Supplier List</li>
              </ul>
              ):null}

              <li className="iso-quality flex lineHeight">
                <sapn className="title">Quality</sapn>
                <span className="arrow-icon" onClick={qualityDropdown}><RiArrowDropDownLine/></span>
              </li>
              {quality ? (
              <ul className="iso-quality-items">
                <li className="title py-1">Calibration Plan Report</li>
              </ul>
              ):null}
      </ul>
    
       </div>
      ):null}
      
    </div>
  )
}

export default IsoReport