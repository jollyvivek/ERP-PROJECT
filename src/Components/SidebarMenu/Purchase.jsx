import React, { useState } from 'react'
import '../../Styles/SidebarCommon.css'
import { FaShoppingCart } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Purchase = () => {

  const [purchaseItem, setPurchaseItem] = useState(false)
  const [inwardItem,setInwardItem]= useState(false)
  const [report,setReport] =useState(false)

  const purchaseDropdown = () =>{
    setPurchaseItem(!purchaseItem)
  };

  const purchaseInwardDropdpwn = () =>{
    setInwardItem(!inwardItem)
  };

  const purchaseReportDropdown = () =>{
    setReport(!report)
  };

  return (
    <div className='purchase-menu'>
      <div className='purchase flex mb-1 border'>
      <span className='icon fs-3'><FaShoppingCart /></span>
      <span className='title'>Purchase</span>
      <span className='arrow-icon' onClick={purchaseDropdown}><RiArrowDropDownLine/></span>
      </div>
        {purchaseItem ?(
      <div className='purchse-items'>
        <ul>
        <li >Purchase Order</li>
        <li >Purchase Indent</li>
        <li >Purchase Invoice</li>
        <li className='d-flex justify-content-between align-items-center inward '>
          <span>Inward</span>
          <span className='arrow-icon' onClick={purchaseInwardDropdpwn}><RiArrowDropDownLine/></span>
        </li>
        {inwardItem ? (
        <ul class="inward-items">
                <li>GRN</li>
                <li>Challan</li>
                <li>Gate Pass Returnable Materaial</li>
        </ul>
        ):null}
        <li>Purchase Quotation</li>
        <li className='d-flex justify-content-between align-items-center reports '>
          <span>Report</span>
          <span className='arrow-icon' onClick={purchaseReportDropdown}><RiArrowDropDownLine/></span>
        </li>
        {report ? (
        <ul className="report-items">
                <li>Supplier Evaluation Report</li>
                <li>Purchase Order Report</li>
                <li>Approved Supplier List</li>
                <li>Pending Purchase Order</li>
                <li>Raw Material Purchase Against Finished Item</li>
                <li>Pending Purchase Indent Report</li>
                <li>Vendor Wise Pending PO Report</li>
        </ul>
        ):null}

        <li>Expense Voucher</li>
        </ul>
      </div>
      ):null}



    </div>
  )
}

export default Purchase