import React from 'react'
import '../../Styles/SidebarCommon.css'
import { FaUsers } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";


const Crm = () => {
  return (
    <div className='crm'>
      <div className='crm-top flex border'>
        <span className='icon fs-2'><FaUsers /></span>
        <span className='title'>CRM</span>
        <span className='arrow-icon'><RiArrowDropDownLine/></span>
      </div>

      <div className='crm-items-cont'>

      <ul className="crm-items">
              <li className=" crm-master  flex border">
                <span className='title'>Masters</span>
                <span className='arrow-icon' ><RiArrowDropDownLine/></span>
              </li>
              <ul className="crm-master-items">
                <li className='title'>Source</li>
                <li className='title'>Industry Type</li>
                <li className='title'>Currency</li>
                <li className='title'>Call Type</li>
                <li className='title'>Event Type</li>
              </ul>

              <li className=" crm-inquery flex border ">
                <span className='title'>Inquery</span>
                <span className='arrow-icon'><RiArrowDropDownLine/></span>
              </li>

              <ul className="crm-inquery-items">
                <li className=' crm-inquery-items-master flex lineHeight  border'>
                  <span className='title'>Master</span>
                  <span className='arrow-icon'> <RiArrowDropDownLine/>  </span>         
                </li>
                <ul className="crm-inquiry-master">
                  <li><span className='title'>Inquiry Type</span></li>
                  <li><span className='title'>Quotation Type</span></li>
                </ul>
                <li><span className='title'>Pre Inquiry</span></li>
                <li><span className='title'>Inquiry</span></li>
                <li><span className='title'>Quotation</span></li>
                <li><span className='title'>Quotation History</span></li>
                <li><span className='title'>Quotation Report</span></li>
                <li><span className='title'>Costing</span></li>
              </ul>

              <li className=" crm-deal lineHeight  flex  border ">
                <span className='title'>Deal</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>

              <ul className="crm-deal-items">
                <li className=" crm-deal-master lineHeight flex border">
                  <span className="title">Master</span>
                  <span className="arrow-icon"> <RiArrowDropDownLine/> </span>                  
                </li>

                <ul className="crm-deal-master-items">
                  <li className="title">Stage</li>
                </ul>
                <li className="title">Deal</li>
                <li className="title">Sales Order</li>
              </ul>

              <li className=" flex lineHeight border">
                <span  className="title">Sales</span>
                <span className="arrow-icon "> <RiArrowDropDownLine/> </span>
              </li>
              <ul class="crm-sales-items p-0">
                <li className="title"><span >Sales Order</span></li>
                <li className="title"><span >Sales Invoice</span></li>
                <li className="title"><span >Return Sales</span></li>
              </ul>

              <li class=" crm-task flex lineHeight border ">
                <span className="title">Task</span>
                <span className="arrow-icon"> <RiArrowDropDownLine/></span>
              </li>
              <ul className="crm-task-item ">
                <li className="crm-task-master flex lineHeight border">
                  <span className="title ">Master</span>
                  <span className="arrow-icon"><RiArrowDropDownLine/> </span>
                </li>
                <ul className="crm-task-master-item">
                  <li class="title">Task Status</li>
                </ul>
                <li className="title">Task</li>
              </ul>
              <li className="title">Customer</li>

              <li className=" crm-contact flex lineHeight border ">
                <span  className="title">Contact</span>
                <span className="arrow-icon"> <RiArrowDropDownLine/> </span>
              </li>
              <ul class="crm-contact-items">
                <li class=" crm-contact-master lineHeight flex border">
                  <span  className="title">Master</span>
                  <span className="arrow-icon"><RiArrowDropDownLine/></span>
                </li>
                <ul className="crm-contact-master-items">
                  <li className="title">Contact Type</li>
                  <li className="title">Contact Group</li>
                </ul>
                <li className="title">Contact</li>
              </ul>

              <li className=" crm-complaint lineHeight flex border">
                <span className="title">Complaint</span>
                <span class="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className="crm-complanint-items">
                <li className=" crm-complaint-master flex lineHeight border">
                  <span  className="title">Master</span>
                  <span className="arrow-icon"><RiArrowDropDownLine/></span>
                </li>
                <ul className="crm-complaint-master-item">
                  <li className="title">Complaint Status</li>
                </ul>
                <li className="title">Complaint</li>
              </ul>

              <li class="crm-phonebook flex lineHeight border ">
                <span  className="title">Phone Book</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className="crm-phonebook-items">
                <li className='title'>Phone Group</li>
                <li className='title'>Phone Book</li>
                <li className='title'>Send Message</li>
                <li className='title'>Import Contacts</li>
              </ul>
              <li className="title">Follow Up</li>
              <li className=" crm-mis flex lineHeight border ">
                <span  className="title">MIS</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul class="crm-mis-items p-0">
                <li className='title'> Daily Report</li>
                <li className='title'> Deal Report</li>
                <li className='title'> Inquiry Report</li>
                <li className='title'> Product Report</li>
              </ul>

              <li className="crm-graph flex lineHeight border ">
                <span  className="title">Graphs</span>
                <span class="arrow-icon"> <RiArrowDropDownLine/> </span>
              </li>
              <ul className="crm-graphs-items">
                <li className='title'>Inquiry Garph</li>
                <li className='title'>Deal Garph</li>
                <li className='title'>Task Garph</li>
                <li className='title'>Complaint Garph</li>
              </ul>

              <li class=" title">Customer Satisfication Survey</li>
              <li class=" title">Invoice Satisfaction Survey</li>
              <li class=" crm-attachment flex lineHeight border">
                <span className='title'> Attachment</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className="crm-attachment-items">
                <li className='title'>Attach Category</li>
                <li className='title'>Attachment</li>
              </ul>

              <li class="crm-report flex lineHeight border">
                <span  className="title">Report</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className="crm-report-items">
                <li className='title'>Enquiry Report</li>
                <li className='title'>Order Booking Report</li>
                <li className='title'>Customer Property Report</li>
                <li className='title'>Customer Complaint Report</li>
                <li className='title'>Customer Satisfaction Report</li>
                <li className='title'>Rejection Maintaince Report</li>
                <li className='title'>Order Delivery Report</li>
              </ul>
            </ul>


      </div>
    </div>
  )
}

export default Crm