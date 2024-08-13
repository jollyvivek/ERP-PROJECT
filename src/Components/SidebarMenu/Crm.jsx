import React, { useState } from 'react'
import '../../Styles/SidebarCommon.css'
import { FaUsers } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";


const Crm = () => {

const [crmItems, setCrmItems] = useState(false)
const [crmMaster,setCrmMaster] = useState(false)
const [crmInquery,setCrmInquery] = useState(false)
const [inqueryMaster,setInqueryMaster]= useState(false)
const [crmDeal,setCrmDeal] = useState(false)
const [dealMaster,setDealMaster] = useState(false)
const [crmSales,setCrmSales] = useState(false)
const [crmTask,setCrmTask] = useState(false)
const [taskMaster,setTaskMaster] = useState(false)
const [crmContact,setCrmContact] = useState(false)  
const [contactMaster,setContactMaster] = useState(false)
const [crmComplaint,setCrmComplaint] = useState(false)
const [complaintMaster,setComplaintMaster] = useState(false)
const [crmPhonebook,setCrmPhonebook] = useState(false)
const [crmMis,setCrmMis] = useState(false)
const [crmGraphs,setCrmGraphs] = useState(false)
const [crmAttachment,setCrmAttachment] = useState(false)
const [crmReport,setCrmReport] = useState(false)

const crmItemsDrpodown = () =>{
  setCrmItems(!crmItems)
};

const crmMasterDropdown = () =>{
  setCrmMaster(!crmMaster)
};

const crmInqueryDropdown = () =>{
  setCrmInquery(!crmInquery)
};

const crmInqueryMaster = () =>{
  setInqueryMaster(!inqueryMaster)
}

const crmDealDropdown = () =>{
  setCrmDeal(!crmDeal)
}

const crmDealMasterDropdown = () =>{
  setDealMaster(!dealMaster)
};

const crmsalesDrpdown = () =>{
setCrmSales(!crmSales)
};

const crmTaskDropdown = () =>{
  setCrmTask(!crmTask)
}

const crmTaskMasterDropdown = () =>{
 setTaskMaster(!taskMaster)
};

const crmContactDropdown = () =>{
  setCrmContact(!crmContact)
};

const contactMasterDropdown = () =>{
setContactMaster(!contactMaster)
}

const crmComplaintDropdown = () =>{
  setCrmComplaint(!crmComplaint)
};

const complaintMasterDropdown = () =>{
  setComplaintMaster(!complaintMaster)
};

const crmPhonebookDropdown = () =>{
setCrmPhonebook(!crmPhonebook)
};

const crmMisDropdown = () =>{
setCrmMis(!crmMis)
};

const crmGraphsDropdown = () =>{
setCrmGraphs(!crmGraphs)
};

const crmAttachmentDropdown = () =>{
setCrmAttachment(!crmAttachment)
};

const crmReportDropdown = () =>{
setCrmReport(!crmReport)
};


  return (
    <div className='crm'>
      <div className='crm-top flex'>
        <span className='icon fs-2'><FaUsers /></span>
        <span className='title'>CRM</span>
        <span className='arrow-icon' onClick={crmItemsDrpodown}><RiArrowDropDownLine/></span>
      </div>

      <div className='crm-items-cont'>
      {crmItems ? (
      <ul className="crm-items">
              <li className=" crm-master  flex">
                <span className='title'>Masters</span>
                <span className='arrow-icon' onClick={crmMasterDropdown} ><RiArrowDropDownLine/></span>
              </li>
              {crmMaster ? (
              <ul className="crm-master-items">
                <li className='title'>Source</li>
                <li className='title'>Industry Type</li>
                <li className='title'>Currency</li>
                <li className='title'>Call Type</li>
                <li className='title'>Event Type</li>
              </ul>
              ):null}

              <li className=" crm-inquery flex ">
                <span className='title'>Inquery</span>
                <span className='arrow-icon' onClick={crmInqueryDropdown}><RiArrowDropDownLine/></span>
              </li>
              {crmInquery ? (
              <ul className="crm-inquery-items">
                <li className=' crm-inquery-items-master flex lineHeight'>
                  <span className='title'>Master</span>
                  <span className='arrow-icon' onClick={crmInqueryMaster}> <RiArrowDropDownLine/>  </span>         
                </li>
                {inqueryMaster ? (
                <ul className="crm-inquiry-master">
                  <li><span className='title'>Inquiry Type</span></li>
                  <li><span className='title'>Quotation Type</span></li>
                </ul>
                ):null}
                <li><span className='title'>Pre Inquiry</span></li>
                <li><span className='title'>Inquiry</span></li>
                <li><span className='title'>Quotation</span></li>
                <li><span className='title'>Quotation History</span></li>
                <li><span className='title'>Quotation Report</span></li>
                <li><span className='title'>Costing</span></li>
              </ul>
              ):null}

              <li className=" crm-deal lineHeight  flex">
                <span className='title'>Deal</span>
                <span className="arrow-icon" onClick={crmDealDropdown}><RiArrowDropDownLine/></span>
              </li>
              {crmDeal ? (
              <ul className="crm-deal-items">
                <li className=" crm-deal-master lineHeight flex">
                  <span className="title">Master</span>
                  <span className="arrow-icon" onClick={crmDealMasterDropdown}> <RiArrowDropDownLine/> </span>                  
                </li>
                {dealMaster ? (
                <ul className="crm-deal-master-items">
                  <li className="title">Stage</li>
                </ul>
                  ):null}

                <li className="title">Deal</li>
                <li className="title">Sales Order</li>
              </ul>
              ):null}

              <li className=" flex lineHeight">
                <span  className="title">Sales</span>
                <span className="arrow-icon" onClick={crmsalesDrpdown}> <RiArrowDropDownLine/> </span>
              </li>
              {crmSales ? (
              <ul class="crm-sales-items">
                <li className="title"><span >Sales Order</span></li>
                <li className="title"><span >Sales Invoice</span></li>
                <li className="title"><span >Return Sales</span></li>
              </ul>
                ):null}

              <li class=" crm-task flex lineHeight">
                <span className="title">Task</span>
                <span className="arrow-icon" onClick={crmTaskDropdown}> <RiArrowDropDownLine/></span>
              </li>
                {crmTask ? (
              <ul className="crm-task-item ">
                <li className="crm-task-master flex lineHeight">
                  <span className="title ">Master</span>
                  <span className="arrow-icon" onClick={crmTaskMasterDropdown}><RiArrowDropDownLine/> </span>
                </li>
                {taskMaster ? (
                <ul className="crm-task-master-item">
                  <li class="title">Task Status</li>
                </ul>
                ):null}
                <li className="title">Task</li>
              </ul>
              ):null}

              <li className="title">Customer</li>

              <li className=" crm-contact flex lineHeight">
                <span  className="title">Contact</span>
                <span className="arrow-icon" onClick={crmContactDropdown}> <RiArrowDropDownLine/> </span>
              </li>
              {crmContact ? (
              <ul class="crm-contact-items">
                <li class=" crm-contact-master lineHeight flex">
                  <span  className="title">Master</span>
                  <span className="arrow-icon" onClick={contactMasterDropdown}><RiArrowDropDownLine/></span>
                </li>
                {contactMaster ?(
                <ul className="crm-contact-master-items">
                  <li className="title">Contact Type</li>
                  <li className="title">Contact Group</li>
                </ul>
                ):null}
                <li className="title">Contact</li>
              </ul>
              ):null}

              <li className=" crm-complaint lineHeight flex">
                <span className="title">Complaint</span>
                <span class="arrow-icon" onClick={crmComplaintDropdown}><RiArrowDropDownLine/></span>
              </li>
              {crmComplaint ? (
              <ul className="crm-complanint-items">
                <li className=" crm-complaint-master flex lineHeight">
                  <span  className="title">Master</span>
                  <span className="arrow-icon" onClick={complaintMasterDropdown}><RiArrowDropDownLine/></span>
                </li>
                {complaintMaster ? (
                <ul className="crm-complaint-master-item">
                  <li className="title">Complaint Status</li>
                </ul>
                ):null}

                <li className="title">Complaint</li>
              </ul>
              ):null}

              <li class="crm-phonebook flex lineHeight">
                <span  className="title">Phone Book</span>
                <span className="arrow-icon" onClick={crmPhonebookDropdown}><RiArrowDropDownLine/></span>
              </li>
              {crmPhonebook ? (
              <ul className="crm-phonebook-items">
                <li className='title'>Phone Group</li>
                <li className='title'>Phone Book</li>
                <li className='title'>Send Message</li>
                <li className='title'>Import Contacts</li>
              </ul>
              ):null}

              <li className="title">Follow Up</li>

              <li className=" crm-mis flex lineHeight">
                <span  className="title">MIS</span>
                <span className="arrow-icon" onClick={crmMisDropdown}><RiArrowDropDownLine/></span>
              </li>
              {crmMis ? (
              <ul class="crm-mis-items p-0">
                <li className='title'> Daily Report</li>
                <li className='title'> Deal Report</li>
                <li className='title'> Inquiry Report</li>
                <li className='title'> Product Report</li>
              </ul>
              ):null}

              <li className="crm-graph flex lineHeight">
                <span  className="title">Graphs</span>
                <span class="arrow-icon" onClick={crmGraphsDropdown}> <RiArrowDropDownLine/> </span>
              </li>
              {crmGraphs ? (
              <ul className="crm-graphs-items">
                <li className='title'>Inquiry Garph</li>
                <li className='title'>Deal Garph</li>
                <li className='title'>Task Garph</li>
                <li className='title'>Complaint Garph</li>
              </ul>
              ):null}

              <li class=" title">Customer Satisfication Survey</li>
              <li class=" title">Invoice Satisfaction Survey</li>

              <li class=" crm-attachment flex lineHeight">
                <span className='title'> Attachment</span>
                <span className="arrow-icon" onClick={crmAttachmentDropdown}><RiArrowDropDownLine/></span>
              </li>
              {crmAttachment ? (
              <ul className="crm-attachment-items">
                <li className='title'>Attach Category</li>
                <li className='title'>Attachment</li>
              </ul>
              ):null}

              <li class="crm-report flex lineHeight">
                <span  className="title">Report</span>
                <span className="arrow-icon" onClick={crmReportDropdown}><RiArrowDropDownLine/></span>
              </li>
              {crmReport ? (
              <ul className="crm-report-items">
                <li className='title'>Enquiry Report</li>
                <li className='title'>Order Booking Report</li>
                <li className='title'>Customer Property Report</li>
                <li className='title'>Customer Complaint Report</li>
                <li className='title'>Customer Satisfaction Report</li>
                <li className='title'>Rejection Maintaince Report</li>
                <li className='title'>Order Delivery Report</li>
              </ul>
              ):null}
     </ul>
      ):null}

      </div>



    </div>
  )
}

export default Crm