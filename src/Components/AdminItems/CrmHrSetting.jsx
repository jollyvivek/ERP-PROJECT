import React, { useContext, useState } from 'react'
import NavTabs from '../Navbar/NavTabs'
import { toast } from 'react-toastify';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
const CrmHrSetting = () => {
    const {url} = useContext(StoreContext)
  const [data,setData] =useState({
    InquiryStatus :"",
    ConvertedStatus :"",
    InquiryLostStatus :"",
    InquiryType :"",
    Source :"",
    IndustryType :"",
    ContactGroup :"",
    ContactType :"",
    ComplaintStatus :"",
    ComplaintClosedStatus :"",
    TaskStatus :"",
    CloseWonStage :"",
    CloseLostStage :"",
    Stage :"",
    EventType :"",
    CallType :"",
    SearchPathForAttachedFile :"",
    ManuallyAddItemInInquiry :"",

    OverTime :"",
    Lwp :"",
    Shift:"",
    MinimumOutdoorDays :"",
    AppraisalDuration :"",
    PunchIn_OutAccordingTo:"",
    PerDaySalaryCirculation :"",
    SalaryBasedOn :"",
    MinimumDiffrenceBetweenTwoPunchIns :"",
    SalaryLedger :"",
    GroupForSalary :"",
    DefaultCtc :"",
    OtFormula :"",
    QuotationAsPerInputInPrint :"",
    BriefQuotation :""
  });

  const changeHandler = (event)=>{
      const {name,value} = event.target;

      setData({...data,[name]:value})
  }

  const handleFormSubmit = async(event)=>{
    event.preventDefault();
    const payload ={
        InquiryStatus :data.InquiryStatus,
        ConvertedStatus :data.ConvertedStatus,
        InquiryLostStatus :data.InquiryLostStatus,
        InquiryType :data.InquiryType,
        Source :data.Source,
        IndustryType :data.IndustryType,
        ContactGroup :data.ContactGroup,
        ContactType :data.ContactType,
        ComplaintStatus :data.ComplaintStatus,
        ComplaintClosedStatus :data.ComplaintClosedStatus,
        TaskStatus :data.TaskStatus,
        CloseWonStage :data.CloseWonStage,
        CloseLostStage :data.CloseLostStage,
        Stage :data.Stage,
        EventType :data.EventType,
        CallType :data.CallType,
        SearchPathForAttachedFile :data.SearchPathForAttachedFile,
        ManuallyAddItemInInquiry :data.ManuallyAddItemInInquiry,
    
        OverTime :data.OverTime,
        Lwp :data.Lwp,
        Shift:data.Shift,
        MinimumOutdoorDays :Number(data.MinimumOutdoorDays),
        AppraisalDuration :data.AppraisalDuration,
        PunchIn_OutAccordingTo:data.PunchIn_OutAccordingTo,
        PerDaySalaryCirculation :data.PerDaySalaryCirculation,
        SalaryBasedOn :data.SalaryBasedOn,
        MinimumDiffrenceBetweenTwoPunchIns :Number(data.MinimumDiffrenceBetweenTwoPunchIns),
        SalaryLedger :data.SalaryLedger,
        GroupForSalary :data.GroupForSalary,
        DefaultCtc :data.DefaultCtc,
        OtFormula :data.OtFormula,
        QuotationAsPerInputInPrint :data.QuotationAsPerInputInPrint,
        BriefQuotation :data.BriefQuotation
    }

    const response = await axios.post(`${url}/api/crmhrsetting/add`,payload);
    if (response.data.success) {
        setData({
            InquiryStatus :"",
            ConvertedStatus :"",
            InquiryLostStatus :"",
            InquiryType :"",
            Source :"",
            IndustryType :"",
            ContactGroup :"",
            ContactType :"",
            ComplaintStatus :"",
            ComplaintClosedStatus :"",
            TaskStatus :"",
            CloseWonStage :"",
            CloseLostStage :"",
            Stage :"",
            EventType :"",
            CallType :"",
            SearchPathForAttachedFile :"",
            ManuallyAddItemInInquiry :"",
        
            OverTime :"",
            Lwp :"",
            Shift:"",
            MinimumOutdoorDays :"",
            AppraisalDuration :"",
            PunchIn_OutAccordingTo:"",
            PerDaySalaryCirculation :"",
            SalaryBasedOn :"",
            MinimumDiffrenceBetweenTwoPunchIns :"",
            SalaryLedger :"",
            GroupForSalary :"",
            DefaultCtc :"",
            OtFormula :"",
            QuotationAsPerInputInPrint :"",
            BriefQuotation :""
          });
        toast.success(response.data.message);
    } else {
        console.log("Error");
        toast.error(response.data.message);
    }
    // console.log(data);   
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-md-12 px-0">
        <h4 className="company-title fs-5 px-3">Company Details</h4>
        <NavTabs/>
        </div>
      </div>
      
      <div className="row">
            <div className="col-md-12">
                <form action="" className="" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>CRM Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className="col-sm-6 col-form-label fs-5  text-end ">Inquiry
                                                Status :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                 name='InquiryStatus'
                                                 value={data.InquiryStatus}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Converted
                                                Status :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                name='ConvertedStatus'
                                                value={data.ConvertedStatus}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Inquiry Lost
                                                Status :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input
                                                 type="text"
                                                  className="form-control form-control-sm"
                                                  name='InquiryLostStatus'
                                                  value={data.InquiryLostStatus}
                                                  onChange={changeHandler}
                                                  required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Inquiry Type
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input
                                                 type="text"
                                                  className="form-control form-control-sm"
                                                  name='InquiryType'
                                                  value={data.InquiryType}
                                                  onChange={changeHandler}
                                                  required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Source
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input
                                                 type="text"
                                                  className="form-control form-control-sm"
                                                  name='Source'
                                                  value={data.Source}
                                                  onChange={changeHandler}
                                                  required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Industry Type
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input
                                                 type="text"
                                                  className="form-control form-control-sm"
                                                  name='IndustryType'
                                                  value={data.IndustryType}
                                                  onChange={changeHandler}
                                                  required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Contact Group
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name='ContactGroup'
                                                value={data.ContactGroup}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Contact Type
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control form-control-sm"
                                                 name='ContactType'
                                                 value={data.ContactType}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Complaint
                                                Status :</label>
                                            <div className="col-sm-6 ">
                                                <input 
                                                type="text"
                                                 className="form-control form-control-sm"
                                                 name='ComplaintStatus'
                                                 value={data.ComplaintStatus}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5 text-end px-0">Complaint
                                                Closed Status :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name='ComplaintClosedStatus'
                                                value={data.ComplaintClosedStatus}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Task Status
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input
                                                 type="text"
                                                className="form-control form-control-sm"
                                                name='TaskStatus'
                                                value={data.TaskStatus}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end"> Close Won
                                                Stage :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control form-control-sm"
                                                 name='CloseWonStage'
                                                 value={data.CloseWonStage}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end"> Close Lost
                                                Stage :</label>
                                            <div className="col-sm-6 ">
                                                <input
                                                 type="text"
                                                className="form-control form-control-sm"
                                                name='CloseLostStage'
                                                value={data.CloseLostStage}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end"> Stage
                                                :</label>
                                            <div className="col-sm-6 ">
                                                <input
                                                 type="text"
                                                className="form-control form-control-sm"
                                                name='Stage'
                                                value={data.Stage}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end"> Event Type
                                                :</label>
                                            <div className="col-sm-6 ">
                                                <input
                                                 type="text"
                                                className="form-control form-control-sm"
                                                name='EventType'
                                                value={data.EventType}
                                                onChange={changeHandler}                                                
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-2  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end"> Call Type
                                                :</label>
                                            <div className="col-sm-6 ">
                                                <input 
                                                type="text"
                                                 className="form-control form-control-sm"
                                                 name='CallType'
                                                 value={data.CallType}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-center">Search Path
                                                For Attached File :</label>
                                            <div className="col-sm-6 mt-2 d-flex flex-column align-items-center ">
                                                <input 
                                                type="text"
                                                 className="form-control form-control-sm"
                                                 name='SearchPathForAttachedFile'
                                                 value={data.SearchPathForAttachedFile}
                                                 onChange={changeHandler}
                                                 required />
                                                <p className='text-end px-3 py-2'> <span className=' border-bottom'>Seach Path</span></p>
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-center">Manually
                                                Add Item in Inquiry :</label>
                                            <div className="col-sm-6 ">
                                                <select className="form-select form-select-sm"
                                                name='ManuallyAddItemInInquiry'
                                                value={data.ManuallyAddItemInInquiry}
                                                onChange={changeHandler}
                                                >
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-6 ">
                            <fieldset className="mb-3">
                                <legend>HR & Payroll Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5 text-end">Over Time
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='OverTime' value={data.OverTime} onChange={changeHandler} required >
                                                    <option>Select</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="weekly">weekly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">LWP :</label>
                                            <div className="col-sm-6 ">
                                                <input type="text" className="form-control" name='Lwp' value={data.Lwp} onChange={changeHandler} required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Shift
                                                :</label>
                                            <div className="col-sm-6 ">
                                                <select className="form-select form-select-sm" name='Shift' value={data.Shift} onChange={changeHandler} required >
                                                    <option >Select</option>
                                                    <option value="Auto Shift">Auto Shift</option>
                                                    <option value="weekly">weekly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end ">Minimum
                                                Outdoor Days :</label>
                                            <div className="col-sm-6 ">
                                                <input 
                                                type="number"
                                                 className="form-control"
                                                 name='MinimumOutdoorDays'
                                                 value={data.MinimumOutdoorDays}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5 text-end">Appraisal
                                                Duration :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='AppraisalDuration' value={data.AppraisalDuration} onChange={changeHandler}  required>
                                                    <option >Select</option>
                                                    <option value="Monthly">Monthly</option>
                                                    <option value="Yearly">Yearly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5 text-end">Punch In/OUT
                                                According To:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='PunchIn_OutAccordingTo' value={data.PunchIn_OutAccordingTo} onChange={changeHandler}  required>
                                                    <option>Select</option>
                                                    <option value="Device">Device</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5 text-end">Per Day Salary
                                                Circulation :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='PerDaySalaryCirculation' value={data.PerDaySalaryCirculation} onChange={changeHandler} required>
                                                    <option>Select</option>
                                                    <option value="Work Days">Work Days</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5 text-end">Salary Based On
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='SalaryBasedOn' value={data.SalaryBasedOn} onChange={changeHandler} required>
                                                    <option>Select</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="weekly">weekly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5 text-end">Minimum
                                                Diffrence Between Two Punch in's :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <input 
                                                type="number" 
                                                name="MinimumDiffrenceBetweenTwoPunchIns" 
                                                value={data.MinimumDiffrenceBetweenTwoPunchIns}
                                                onChange={changeHandler}
                                                 className="form-control form-control-sm" 
                                                 required />
                                            </div>
                                            <div className="col-sm-3  d-flex align-items-center">
                                                <h5 className="fs-5">(In Min.)</h5>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Salary Ledger
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='SalaryLedger'
                                                 value={data.SalaryLedger}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Group For
                                                Salary :</label>
                                            <div className="col-sm-6">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='GroupForSalary'
                                                 value={data.GroupForSalary}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">Default CTC
                                                :</label>
                                            <div className="col-sm-6">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                name='DefaultCtc'
                                                value={data.DefaultCtc}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5  text-end">OT Formula
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='OtFormula'
                                                 value={data.OtFormula}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5 text-end">Quotation As
                                                Per Input In Print
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='QuotationAsPerInputInPrint' value={data.QuotationAsPerInputInPrint} onChange={changeHandler} required >
                                                    <option value="">Select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label fs-5 text-end">Brief Quotation
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='BriefQuotation' value={data.BriefQuotation} onChange={changeHandler} required>
                                                    <option>Select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className=" my-3 d-flex justify-content-end align-items-center">
                        <button type="submit" className="btn border-secondary btn-next py-1 fs-5 ">Save</button>
                    </div>
                    <div className=" my-3 d-flex justify-content-end align-items-center">
                        <button type="button" className="btn border-secondary btn-next py-1 fs-5 ">Next</button>
                    </div>
                </form>
            </div>
        </div> 
      
      
      
    </div>
  )
}

export default CrmHrSetting