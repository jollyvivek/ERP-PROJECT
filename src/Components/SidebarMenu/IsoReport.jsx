import React from 'react'
import '../../Styles/SidebarCommon.css'
import { FaChartBar } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const IsoReport = () => {
  return (
    <div className='iso'>
      <div className='iso-top flex lineHeight border'>
        <span className='icon fs-2'><FaChartBar /></span>
        <span className='title'>ISO Report</span>
        <span className='arrow-icon'><RiArrowDropDownLine/></span>
      </div>

      <div className='iso-items-cont'>

      <ul className="iso-items">
              <li className="marketing flex lineHeight border">
                <span className="title">Marketing</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
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

              <li className="iso-production flex lineHeight border">
                <span  className="title">Production</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className="iso-production-items">
                <li className="title">Production VS Planning Report </li>
                <li className="title">Rejection Report </li>
                <li className="title">Daily Production Report </li>
                <li className="title">Re-Work Report </li>
              </ul>

              <li className="iso-purchase flex lineHeight border">
                <span  className="title">Purchase</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>

              <ul className=" iso-purchase-items">
                <li className="title">Supplier Evaluation Report</li>
                <li className="title">Purchase Order Report</li>
                <li className="title">Approved Supplier List</li>
              </ul>

              <li className="iso-quality flex lineHeight border">
                <sapn className="title">Quality</sapn>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className="iso-quality-items">
                <li className="title">Calibration Plan Report</li>
              </ul>
            </ul>


      </div>







    </div>
  )
}

export default IsoReport