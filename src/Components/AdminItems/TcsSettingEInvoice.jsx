import React, { useContext, useEffect, useState } from 'react'
import NavTabs from '../Navbar/NavTabs'
import { toast } from 'react-toastify';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const TcsSettingEInvoice = () => {

    const {url,userData} = useContext(StoreContext)
    const[data,setData] = useState({
        TcsApplicable :"",
        TcsLedgerForSales :"",
        TcsLedgerForPurchase :"",
        TanNo :"",
        PanNoIfPresent :"",
        PanNoIfNotPresent:"",
        TcsCalculationOn :"",
        ApplicationOnMoreThanTurnoverAmount :"",

        DutyDrawBackLedger :"",

        PurchaseScrapRequired :"",
        AdjustmentLedger :"",
        QualityPremiumAndSitePremiumRequired :"",

        AddAutoScrapJobWork :"",

        EInvoiceApplicable :"",
        Url :"",
        EWayBillParameterInEInvoice :"",
        UserName :"",
        Password :"",
        SelectPathForExportEInvoiceJson :"",

        EInvoiceType :"",
        Key :"",
        SubscriptionId :"",
        GstNo :""

    });
    // console.log(userData)
    // fetch
    const TcsSettingEInvoiceFetch = async()=>{
        const response = await axios.get(`${url}/api/tcseinvoicesetting/list`);
        if (response.data.data) {
            const List = response.data.data
            // console.log(List)
            if(List.length>0){
                const {email}= userData;
                const findObject = List.find((item)=> item.LogInUserEmailId === email)
                if(findObject) setData(findObject)
            }
        } else {
            console.log("Error")
        }
    }

    useEffect(()=>{TcsSettingEInvoiceFetch()},[])

    const handleChange = (event)=>{
        const {name,value} = event.target;
        setData({...data,[name]:value})
    };

    const handleFormSubmit = async(event)=>{
        event.preventDefault();

        const payload ={
            TcsApplicable :data.TcsApplicable,
            TcsLedgerForSales :data.TcsLedgerForSales,
            TcsLedgerForPurchase :data.TcsLedgerForPurchase,
            TanNo :data.TanNo,
            PanNoIfPresent :Number(data.PanNoIfPresent),
            PanNoIfNotPresent :Number(data.PanNoIfNotPresent),
            TcsCalculationOn :data.TcsCalculationOn,
            ApplicationOnMoreThanTurnoverAmount :Number(data.ApplicationOnMoreThanTurnoverAmount),
    
            DutyDrawBackLedger :data.DutyDrawBackLedger,
    
            PurchaseScrapRequired :data.PurchaseScrapRequired,
            AdjustmentLedger :data.AdjustmentLedger,
            QualityPremiumAndSitePremiumRequired :data.QualityPremiumAndSitePremiumRequired,
    
            AddAutoScrapJobWork :data.AddAutoScrapJobWork,
    
            EInvoiceApplicable :data.EInvoiceApplicable,
            Url :data.Url,
            EWayBillParameterInEInvoice :data.EWayBillParameterInEInvoice,
            UserName :data.UserName,
            Password :data.Password,
            SelectPathForExportEInvoiceJson :data.SelectPathForExportEInvoiceJson,
    
            EInvoiceType :data.EInvoiceType,
            Key :data.Key,
            SubscriptionId :data.SubscriptionId,
            GstNo :data.GstNo,
            LogInUserEmailId:userData.email
        }
        // console.log(payload)
        const response = await axios.post(`${url}/api/tcseinvoicesetting/add`,payload);

        if (response.data.success) {
            setData({
                TcsApplicable :"",
                TcsLedgerForSales :"",
                TcsLedgerForPurchase :"",
                TanNo :"",
                PanNoIfPresent :"",
                PanNoIfNotPresent:"",
                TcsCalculationOn :"",
                ApplicationOnMoreThanTurnoverAmount :"",
        
                DutyDrawBackLedger :"",
        
                PurchaseScrapRequired :"",
                AdjustmentLedger :"",
                QualityPremiumAndSitePremiumRequired :"",
        
                AddAutoScrapJobWork :"",
        
                EInvoiceApplicable :"",
                Url :"",
                EWayBillParameterInEInvoice :"",
                UserName :"",
                Password :"",
                SelectPathForExportEInvoiceJson :"",
        
                EInvoiceType :"",
                Key :"",
                SubscriptionId :"",
                GstNo :""
        
            });
    
            toast.success(response.data.message)
        } else {
            console.log("Error");
            toast.error(response.data.message)
        }

        // console.log(data);
       
    };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
        <h4 className="company-title fs-5 px-2 mt-2">Company Details</h4>
          <NavTabs/>
        </div>
      </div>

      <div className="row">
            <div className="col-md-12 ">
                <form action="" className="" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>TCS Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-6 col-form-label text-end ">TCS Applicable
                                                :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='TcsApplicable' value={data.TcsApplicable} onChange={handleChange} >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label text-end">TCS Ledger
                                                (For Sales) :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input
                                                 type="text"
                                                className="form-control"
                                                name='TcsLedgerForSales'
                                                value={data.TcsLedgerForSales}
                                                onChange={handleChange}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label text-end">TCS Ledger
                                                (For Purchase) :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='TcsLedgerForPurchase'
                                                value={data.TcsLedgerForPurchase}
                                                onChange={handleChange}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label text-end">TAN No
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='TanNo'
                                                value={data.TanNo}
                                                onChange={handleChange}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label   text-end">PAN No. (IF
                                                PRESENT) :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="number"
                                                className="form-control"
                                                name='PanNoIfPresent'
                                                value={data.PanNoIfPresent}
                                                onChange={handleChange}
                                                required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                                <span className="fs-5">%</span>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label   text-end">PAN No. (IF
                                                NOT PRESENT):</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="number"
                                                className="form-control"
                                                name='PanNoIfNotPresent'
                                                value={data.PanNoIfNotPresent}
                                                onChange={handleChange}                                                
                                                required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                                <span className="fs-5">%</span>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-6 col-form-label   text-end ">TCS
                                                Calculation ON :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='TcsCalculationOn' value={data.TcsCalculationOn} onChange={handleChange} required >
                                                    <option> select</option>
                                                    <option value="Taxable Total">Taxable Total </option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label   text-end">Application On
                                                More Than Turnover Amount :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                 name='ApplicationOnMoreThanTurnoverAmount'
                                                 value={data.ApplicationOnMoreThanTurnoverAmount}
                                                 onChange={handleChange}
                                                 required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center text-start">
                                                <span className="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="mb-3 row mt-3">
                                <label className=" col-sm-6 col-form-label text-end">Duty DrawBack
                                    Ledger :</label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input 
                                    type="text"
                                    className="form-control"
                                    name='DutyDrawBackLedger'
                                     value={data.DutyDrawBackLedger}
                                     onChange={handleChange}
                                     required />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <fieldset className="mb-3">
                                <legend>Purchase Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-9 col-form-label text-end ">Purchase Scrap
                                                Required :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='PurchaseScrapRequired' value={data.PurchaseScrapRequired} onChange={handleChange} >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label text-end"> Adjustment
                                                Ledger :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='AdjustmentLedger'
                                                value={data.AdjustmentLedger}
                                                onChange={handleChange}
                                                 />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-9 col-form-label text-end ">Quality
                                                Premium and Site Premium Required:</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='QualityPremiumAndSitePremiumRequired' value={data.QualityPremiumAndSitePremiumRequired} onChange={handleChange} required>
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="mt-5 row">
                                <label className="col-sm-9 col-form-label text-end mt-5 ">Add
                                    Auto Scrap JobWork :</label>
                                <div className="col-sm-3 d-flex align-items-center mt-5">
                                    <select className="form-select form-select-sm" name='AddAutoScrapJobWork' value={data.AddAutoScrapJobWork} onChange={handleChange} required >
                                        <option> select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <fieldset>
                                <legend>E-Invoice Setting</legend>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end ">E-Invoice
                                                Applicable :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='EInvoiceApplicable' value={data.EInvoiceApplicable} onChange={handleChange} required >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">URL :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='Url'
                                                value={data.Url}
                                                onChange={handleChange}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end ">E-Way Bill
                                                Parameter In E-Invoice :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='EWayBillParameterInEInvoice' value={data.EWayBillParameterInEInvoice} onChange={handleChange} required >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">User Name
                                                :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='UserName'
                                                value={data.UserName}
                                                onChange={handleChange}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">Password
                                                :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="password"
                                                className="form-control"
                                                name='Password'
                                                value={data.Password}
                                                onChange={handleChange}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">Select Path
                                                For Export E-Invoice Json :</label>
                                            <div className="col-sm-4 d-flex flex-column align-items-center gap-3">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                name='SelectPathForExportEInvoiceJson'
                                                value={data.SelectPathForExportEInvoiceJson}
                                                onChange={handleChange}
                                                required />
                                                <p className="fs-5">Another Path</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3 row">
                                            <label className="col-sm-5 col-form-label text-end ">E-Invoice Type
                                                :</label>
                                            <div className="col-sm-7 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='EInvoiceType' value={data.EInvoiceType} onChange={handleChange} required >
                                                    <option> select</option>
                                                    <option value="Direct Api & Json Both">Direct Api & Json Both </option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row ">
                                            <label className=" col-sm-5 col-form-label text-end">Key :</label>
                                            <div className="col-sm-7 d-flex align-items-center">
                                                <input
                                                 type="text"
                                                className="form-control"
                                                name='Key'
                                                value={data.Key}
                                                onChange={handleChange}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row ">
                                            <label className=" col-sm-5 col-form-label text-end">Subscription ID :</label>
                                            <div className="col-sm-7 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='SubscriptionId'
                                                value={data.SubscriptionId}
                                                onChange={handleChange}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row ">
                                            <label className=" col-sm-5 col-form-label text-end">GST No :</label>
                                            <div className="col-sm-7 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='GstNo'
                                                value={data.GstNo}
                                                onChange={handleChange}
                                                required />
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

export default TcsSettingEInvoice