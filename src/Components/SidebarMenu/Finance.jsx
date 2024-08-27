import React, { useState } from "react";
import '../../Styles/SidebarCommon.css'
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


const Finance = () => {

  const [financeItem,setFinanceItem] = useState(false)
  const [financeMaster,setFinanceMaster] =useState(false)
  const [MasterCheque,setMasterCheque] = useState(false)
  const [purchase,setPurchase] = useState(false)
  const [financeSale,setFinanceSale] = useState(false)
  const [financeTransaction,setFinanceTransaction] = useState(false)
  const [financeReport,setFinanceReport] = useState(false)
  const [reportRegister,setReportRegister] = useState(false)
  const [reportSalesRegister,setReportSalesRegister] = useState(false)
  const [reportPurchaseRegister,setReportPurchaseRegister] = useState(false)
  const [reportOutstanding,setReportOutstanding] = useState(false);
  const [reportAccountSummary,setReportAccountSummary] = useState(false)
  const [reportGstReport,setReportGstReport]= useState(false)
  const [reportGstOne,setReportGstOne] = useState(false)
  const [reportGstTwo,setReportGstTwo] = useState(false)
  const [reportInvenrtyReport,setReportInventryReport]= useState(false)
  const [reportInventrySummary,setReportInventrySummary] = useState(false)

  const [financeTally,setFinanceTally] = useState(false)




  const financeItemDropdown = () =>{
    setFinanceItem(!financeItem)
  };

  const financeMasterDropdown = () =>{
    setFinanceMaster(!financeMaster)
  }

  const financeMasterChequeDropdown = ()=>{
    setMasterCheque( !MasterCheque)
  };

  const financePurchaseDropdown = () =>{
    setPurchase(!purchase)
  };

  const financeSalesDropdown = () =>{
    setFinanceSale(!financeSale)
  };

  const financeTransactionDropdown = () =>{
    setFinanceTransaction(!financeTransaction);
  };

  const financeReportDropdown = () =>{
    setFinanceReport(!financeReport)
  };

  const financeRepotRegisterDropdown = () =>{
    setReportRegister(!reportRegister)
  };

  const financeReportSalesRegisterDropdown = () => {
    setReportSalesRegister(!reportSalesRegister)
  }

  const financeReportPurchaseRegisterDropdown = () =>{
    setReportPurchaseRegister(!reportPurchaseRegister)
  };

  const reportOutstandings = () =>{
    setReportOutstanding(!reportOutstanding)
  };

  const reportAccountSummaryDropdown = () =>{
    setReportAccountSummary(!reportAccountSummary)
  };

  const financeGstReportDropdown = () =>{
    setReportGstReport(!reportGstReport)
  };

  const reportGstOneDropdown = () =>{
    setReportGstOne(!reportGstOne)
  };

  const reportGstTwoDropdown = () =>{
    setReportGstTwo(!reportGstTwo)
  };

  const inventryReportDropdown = () =>{
    setReportInventryReport(!reportInvenrtyReport)
  };

  const inventrySummaryDropdown = () =>{
    setReportInventrySummary(!reportInventrySummary);
  }




  const financeTallyDropdown = () =>{
    setFinanceTally(!financeTally)
  }

  return (
    <div className="finance-cont">
      <div className="finance flex mb-1">
        <span className="icon fs-2"><MdOutlineAttachMoney /></span>
        <span className="title">Finance</span>
        <span className="arrow-icon" onClick={financeItemDropdown}><RiArrowDropDownLine/></span>
      </div>
        { financeItem ? (
        <div className="finance-item ">
          <ul>
            <li className=" finance-master flex">
              <span className="title">Masters</span>
              <span className="arrow-icon" onClick={financeMasterDropdown}><RiArrowDropDownLine/></span>
            </li>
            {financeMaster ? (
            <ul className="finance-master-items">
                <li className="title">Group</li>
                <li className="title">Ledgers</li>
                <li className="title">Register Settings</li>
                <li className="title">Country</li>
                <li className="title">State</li>
                <li className="title">Paymentn Method</li>
                <li className="title flex cheque" > 
                  <span> Cheque</span>
                  <span className="arrow-icon" onClick={financeMasterChequeDropdown}> <RiArrowDropDownLine/></span>              
                </li>
                { MasterCheque ? ( 
                <ul className="cheque-items">
                  <li className="title">Cheque Book</li>
                  <li className="title">Cheque</li>
                  <li className="title">Cheque Statement </li>
                </ul>
                ):null}
                <li className="title">Currency</li>
                <li className="title">Advance Authorization No</li>
                <li className="title">IEC Numaber</li>
                <li className="title">EPCG Number</li>
                <li className="title">LUT Number</li>
                <li className="title">LC Number</li>
                <li className="title">Term And Condition</li>
                <li className="title">Logistic Status Master</li>
                <li className="title">Logistic</li>
                <li className="title">Tax Classfication Master</li>
                <li className="title">Expence Voucher Type</li>
                <li className="title">Voucher Type</li>
                <li className="title">Godown</li>
            </ul>
            ):null}

            <li className="d-flex justify-content-between align-items-center">
              <span className="title">Purchases</span>
              <span className="arrow-icon" onClick={financePurchaseDropdown}><RiArrowDropDownLine/></span>
            </li>
            {purchase ? (
            <ul className="finance-purchase-items">
                <li className="title">Purchase Order</li>
                <li className="title">purchase Invoice</li>
                <li className="title">Return Purchase</li>
                <li className="title">Expense Voucher</li>
              </ul>
              ):null}

            <li className="d-flex justify-content-between align-items-center">
              <span className="title">Sales</span>
              <span className="arrow-icon" onClick={financeSalesDropdown}><RiArrowDropDownLine/></span>
            </li>
            { financeSale ? (
            <ul className="finance-sales-items">
                <li className="title">Sales Order</li>
                <li className="title">Sales Invoice</li>
                <li className="title">Return Sales</li>
                <li className="title">Pending Sales Request</li>
                <li className="title">Sample Invoice</li>
            </ul>
            ):null}

            <li className="d-flex justify-content-between align-items-center ">
              <span className="title">Transaction</span>
              <span className="arrow-icon" onClick={financeTransactionDropdown}><RiArrowDropDownLine/></span>
            </li>
            {financeTransaction ? (
            <ul className="finance-transaction-items">
                <li  className="title">Payment Reciept</li>
                <li  className="title">Payment Issue</li>
                <li  className="title">Credit Note</li>
                <li  className="title">Debit Note</li>
                <li  className="title">Journal Entry</li>
                <li  className="title">Countra Voucher</li>
            </ul>
            ):null}

            <li className="d-flex justify-content-between align-items-center">
              <span className="title">Reports</span>
              <span className="arrow-icon" onClick={financeReportDropdown}><RiArrowDropDownLine/></span>
            </li>
            {financeReport ? (
            <ul className="finance-reports-items">
                <li className="title">Ledger Report</li>
                <li className="title">Group Budget</li>

                <li className=" register flex" >
                  <span className="title">Register</span>
                  <span className="arrow-icon" onClick={financeRepotRegisterDropdown} ><RiArrowDropDownLine/></span>                 
                </li>
                {reportRegister ? (
                <ul className="finance-register-items">
                  <li className="sales-register flex">
                     <span className="title">Sales Register</span>
                    <span className="arrow-icon"
                     onClick={financeReportSalesRegisterDropdown} > <RiArrowDropDownLine/></span>
                  </li>
                  {reportSalesRegister ? (
                  <ul className="finance-sales-register-items">
                    <li className="title">With Simple View</li>
                    <li className="title">With Taxtation Total</li>
                    <li className="title">With Item Details</li>
                    <li className="title">With Item and Taxtation Details</li>
                  </ul>
                    ):null}

                  <li className="register regiser-purchase flex">
                    <span className="title" >Purchase regiser</span>
                    <span className="arrow-icon" onClick={financeReportPurchaseRegisterDropdown}> 
                      <RiArrowDropDownLine/>
                    </span>
                  </li>
                  {reportPurchaseRegister ? (
                  <ul className="finance-purchase-register-items">
                    <li className="title">With Simple View</li>
                    <li className="title">With Taxtation Total</li>
                    <li className="title">With Item Details</li>
                    <li className="title">With Item and Taxtation Details</li>
                  </ul>
                  ):null}
                  <li><span className="title">Journal Register</span></li>
                </ul>
                ):null}

                <li className="outstanding flex">
                  <span className="title">Outstandings</span>
                  <span className="arrow-icon" onClick={reportOutstandings}><RiArrowDropDownLine/></span>
                </li>
                {reportOutstanding ? (
                <ul className="finance-outstanding-items">
                  <li  className="title">Creaditor Outsatanding </li>
                  <li  className="title">Debitors Outstanding</li>
                  <li  className="title">Creaditor Outsatanding By Invoice</li>
                  <li  className="title">Debitors Outstanding By Invoice</li>
                  <li  className="title">Creaditor Outsatanding By Daywise</li>
                  <li  className="title">Debitors Outstanding By Daywise</li>
                </ul>
                ):null}

                <li className="account-summary flex">
                  <span className="title">Account Summary</span>
                  <span className="arrow-icon" onClick={reportAccountSummaryDropdown}><RiArrowDropDownLine/></span>               
                </li>
                {reportAccountSummary ? (
                <ul className="finance-account-items">
                  <li className="title">Trial Balance</li>
                  <li className="title">Profit/Loss</li>
                  <li className="title">Balance Sheet</li>
                </ul>
                ):null}

                <li className=" gst-report flex">
                  <span className="title">GST Report</span>
                  <span className="arrow-icon" onClick={financeGstReportDropdown}><RiArrowDropDownLine/></span>
                </li>
                {reportGstReport ? (
                <ul className="gst-report-items">
                  <li className=" gst-one flex">
                    <span className="title" >GSTR1</span>
                    <span className="arrow-icon" onClick={reportGstOneDropdown}><RiArrowDropDownLine/></span>
                  </li>
                  {reportGstOne? (
                  <ul className="finance-gstr1-items">
                    <li><span className="title">GSTR1-B2B</span></li>
                    <li><span className="title">GSTR1-B2CL</span></li>
                    <li><span className="title">GSTR1-B2CS</span></li>
                    <li><span className="title">GSTR1-HSN</span></li>
                    <li><span className="title">GSTR1-CDNR</span></li>
                    <li><span className="title">GSTR1-CDNUR</span></li>
                    <li><span className="title">GSTR1-Exp</span></li>
                    <li><span className="title">GSTR1-At</span></li>
                    <li><span className="title">GSTR1-ATADI</span></li>
                    <li><span className="title">GSTR1-EXEMP</span></li>
                    <li><span className="title">GSTR1-DOCS</span></li>
                  </ul>
                  ):null}

                  <li className="gst-two flex">
                    <span className="title">GSTR2</span>
                    <span className="arrow-icon" onClick={reportGstTwoDropdown}> <RiArrowDropDownLine/></span>        
                  </li>
                  {reportGstTwo ? (
                  <ul className="finance-gstr2-items">
                    <li><span className="title">GSTR2-B2B</span></li>
                    <li><span className="title">GSTR2-B2CL</span></li>
                    <li><span className="title">GSTR2-B2CS</span></li>
                    <li><span className="title">GSTR2-HSN</span></li>
                    <li><span className="title">GSTR2-B2BUR</span></li>
                    <li><span className="title">GSTR2-IMPS</span></li>
                    <li><span className="title">GSTR2-IMPG</span></li>
                    <li><span className="title">GSTR2-CDNR</span></li>
                    <li><span className="title">GSTR2-CDNUR</span></li>
                    <li><span className="title">GSTR2-AT</span></li>
                    <li><span className="title">GSTR2-ATADI</span></li>
                    <li><span className="title">GSTR2-EXEMP</span></li>
                    <li><span className="title">GSTR2-ITCR</span></li>
                  </ul>
                  ):null}
                  <li><span className="title">GSTR3B</span></li>
                </ul>
                ):null}

                <li className="inventry-report flex">
                  <span className="title">Inventry Report</span>
                  <span className="arrow-icon" onClick={inventryReportDropdown}><RiArrowDropDownLine/></span>
                </li>
                {reportInvenrtyReport ? (
                <ul className="finance-inventry-items">
                  <li><span className="title" >Inward Report</span></li>
                  <li><span  className="title">Outward Report</span></li>
                  <li><span className="title" >Stock Register</span></li>

                  <li className="inventry-sumarry flex">
                    <span className="title">Sumarry</span>
                    <span className="arrow-icon" onClick={inventrySummaryDropdown}>
                      <RiArrowDropDownLine/>
                    </span>
                  </li>
                  {reportInventrySummary ? (
                  <ul className="inventry-sumarry-items">
                    <li className="title">Inventory Summary</li>
                    <li className="title">Inventory Summary By Itemwise</li>
                    <li className="title">Inventory Summary By Category</li>
                  </ul>
                  ):null}
                  <li className="title">In-Out Report</li>
                </ul>
                ):null}

                <li className="title">Pending Sales Order</li>
                <li className="title">Pending Work Order</li>
                <li className="title">FOB Report</li>
                <li className="title">Schedule Delivery Report</li>
                <li className="title">Schedule Purchase Report</li>
                <li className="title">Duty Drawback Report</li>
                <li className="title">Contract Review Report</li>
                <li className="title">Panding Sales Order New</li>
                <li className="title">SOA Sheet </li>
            </ul>
            ):null}

            <li className="d-flex justify-content-between align-items-center">
              <span className="title">Tally Integration</span>
              <span className="arrow-icon" onClick={financeTallyDropdown}><RiArrowDropDownLine/></span>
            </li>
            {financeTally ? (
            <ul className="finance-tally-items">
                <li className="title">Sales Invoice</li>
                <li className="title">Purchase invoice</li>
                <li className="title">Export Invoice</li>
                <li className="title">Transaction</li>
            </ul>
            ):null}
          </ul>
        </div>
        ):null}




    </div>
  );
};

export default Finance;
