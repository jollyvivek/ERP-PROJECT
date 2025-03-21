import React, {useEffect, useState } from 'react'
import NavTabs from '../Navbar/NavTabs'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const OtherSetting = () => {
    const {url,userData} = useContext(StoreContext);
    
  const [data,setData] = useState({
    QtyRoundOf :"",
    ValueRoundOf :"",
    LedgerName :"",

    LedgerCodeAutoGenerate :"",
    ProductCodeAutoGenerate :"",
    InvoiceGenerateUsingGRN_GIN :"",
    BarcodeGenerateInItemMaster :"",
    PrintInvoiceInLetterHead_Footer :"",
    SendingSms :"",
    MailSending :"",
    ApprovedRequired :"",
    Import_Export :"",
    Import_ExportValueRoundOf :"",
    EffectOnAccount_InventryWhileCancelInvoice :"",
    Term_ConditionBasedOnMaster :"",
    ItemNameDuplicationAllowed:"",

    Commision :"",
    CommisionLedger :"",

    Tds :"",
    TdsLedger :"",

    PurchaseAccount :"",
    SalesAccount :"",

    DefaultCurrency :"",
    DefaultOutStandingsPupup :"",
    ProductSerialNumber :"",

    Cgst :"",
    Sgst_Utgst :"",
    Igst :"",
    CustomDuty :"",
    Cess :"",

    MergePdfSystemPath :"",
    SelectPathForEuDeclarationPath :"",
    LogInUserEmailId:""
  })

//   console.log(userData)
// fetch data
const FetchOtherSetting = async()=>{
    const response = await axios.get(`${url}/api/othersetting/list`);
    if(response.data.data){
        const Lists = response.data.data;
    //   console.log(Lists);
      if (Lists.length > 0) {
        const {email} = userData
        const foundObject = Lists.find((item) => item.LogInUserEmailId === email);
        // console.log(foundObject)
        if(foundObject) setData(foundObject);
       
    } 
    }else{
      console.log("Error")
    }
}

useEffect(()=>{
    FetchOtherSetting();
  },[]);




  const changeHandler =(event)=>{
    const {name,value} = event.target;
    setData({...data,[name]:value})
  }

  
  const handleFormSubmit = async(event)=>{
    event.preventDefault();

    const payload = {
        QtyRoundOf :data.QtyRoundOf,
        ValueRoundOf :data.ValueRoundOf,
        LedgerName :data.LedgerName,
    
        LedgerCodeAutoGenerate :data.LedgerCodeAutoGenerate,
        ProductCodeAutoGenerate :data.ProductCodeAutoGenerate,
        InvoiceGenerateUsingGRN_GIN :data.InvoiceGenerateUsingGRN_GIN,
        BarcodeGenerateInItemMaster :data.BarcodeGenerateInItemMaster,
        PrintInvoiceInLetterHead_Footer :data.PrintInvoiceInLetterHead_Footer,
        SendingSms :data.SendingSms,
        MailSending :data.MailSending,
        ApprovedRequired :data.ApprovedRequired,
        Import_Export :data.Import_Export,
        Import_ExportValueRoundOf :data.Import_ExportValueRoundOf,
        EffectOnAccount_InventryWhileCancelInvoice :data.EffectOnAccount_InventryWhileCancelInvoice,
        Term_ConditionBasedOnMaster :data.Term_ConditionBasedOnMaster,
        ItemNameDuplicationAllowed :data.ItemNameDuplicationAllowed,
    
        Commision :data.Commision,
        CommisionLedger :data.CommisionLedger,
    
        Tds :data.Tds,
        TdsLedger :data.TdsLedger,
    
        PurchaseAccount :data.PurchaseAccount,
        SalesAccount :data.SalesAccount,
    
        DefaultCurrency :data.DefaultCurrency,
        DefaultOutStandingsPupup :data.DefaultOutStandingsPupup,
        ProductSerialNumber :data.ProductSerialNumber,
    
        Cgst :data.Cgst,
        Sgst_Utgst :data.Sgst_Utgst,
        Igst :data.Igst,
        CustomDuty :data.CustomDuty,
        Cess :data.Cess,
    
        MergePdfSystemPath :data.MergePdfSystemPath,
        SelectPathForEuDeclarationPath :data.SelectPathForEuDeclarationPath,
        LogInUserEmailId:userData.email
    }
    // console.log(payload)
    const response = await axios.post(`${url}/api/othersetting/add`,payload);

    if (response.data.success) {
        setData({
            QtyRoundOf :"",
            ValueRoundOf :"",
            LedgerName :"",
        
            LedgerCodeAutoGenerate :"",
            ProductCodeAutoGenerate :"",
            InvoiceGenerateUsingGRN_GIN :"",
            BarcodeGenerateInItemMaster :"",
            PrintInvoiceInLetterHead_Footer :"",
            SendingSms :"",
            MailSending :"",
            ApprovedRequired :"",
            Import_Export :"",
            Import_ExportValueRoundOf :"",
            EffectOnAccount_InventryWhileCancelInvoice :"",
            Term_ConditionBasedOnMaster :"",
            ItemNameDuplicationAllowed:"",
        
            Commision :"",
            CommisionLedger :"",
        
            Tds :"",
            TdsLedger :"",
        
            PurchaseAccount :"",
            SalesAccount :"",
        
            DefaultCurrency :"",
            DefaultOutStandingsPupup :"",
            ProductSerialNumber :"",
        
            Cgst :"",
            Sgst_Utgst :"",
            Igst :"",
            CustomDuty :"",
            Cess :"",
        
            MergePdfSystemPath :"",
            SelectPathForEuDeclarationPath :""
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
        <div className='col-md-12 px-0'>
        <h4 className="company-title fs-5 px-3 mt-2">Company Details</h4>
        <NavTabs/>
        </div>
      </div>
      
      <div className="row">
            <div className="col-md-12">
                <form  className="" onSubmit={handleFormSubmit} >
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>Round Value And Qty Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mb-3 row">
                                            <label  className="col-sm-8 col-form-label text-end">Qty Round
                                                of :</label>
                                            <div className="col-sm-4">
                                                <select className="form-select form-select-sm"
                                                 name='QtyRoundOf' value={data.QtyRoundOf}  onChange={changeHandler}  required >
                                                    <option> select</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">Value Round
                                                of :</label>
                                            <div className="col-sm-4">
                                                <select className="form-select form-select-sm"
                                                 name='ValueRoundOf' value={data.ValueRoundOf} onChange={changeHandler} required>
                                                    <option >select</option>
                                                    <option value="Normal">Normal</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Ledger
                                                Name :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='LedgerName'
                                                value={data.LedgerName}
                                                onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mt-3">
                                <legend>Auto Generate Setting</legend>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Ledger Code
                                                Auto Generate :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm"
                                                 name='LedgerCodeAutoGenerate' value={data.LedgerCodeAutoGenerate} onChange={changeHandler}>
                                                    <option >select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Product Code
                                                Auto Generate :</label>
                                            <div className="col-sm-4">
                                                <select className="form-select form-select-sm" 
                                                name='ProductCodeAutoGenerate' value={data.ProductCodeAutoGenerate} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Invoice Generate
                                                Using GRN/GIN :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm"
                                                  name='InvoiceGenerateUsingGRN_GIN' value={data.InvoiceGenerateUsingGRN_GIN} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Barcode
                                                Generate in Item Master :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm"
                                                 name='BarcodeGenerateInItemMaster' value={data.BarcodeGenerateInItemMaster} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Print
                                                Invoice in Letter Head/Footer:</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm"
                                                 name='PrintInvoiceInLetterHead_Footer' value={data.PrintInvoiceInLetterHead_Footer} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Sending
                                                SMS :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" 
                                                name='SendingSms' value={data.SendingSms} onChange={changeHandler} >
                                                    <option >select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Mail
                                                Sending :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm"
                                                 name='MailSending' value={data.MailSending} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Approved
                                                Required :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm"
                                                 name='ApprovedRequired' value={data.ApprovedRequired} onChange={changeHandler}>
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Import/Export
                                                :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm"
                                                 name='Import_Export' value={data.Import_Export} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Import/Export
                                                Value Round of :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" 
                                                name='Import_ExportValueRoundOf' value={data.Import_ExportValueRoundOf} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Effect On
                                                Account/Inventry
                                                while Cancel Invoice :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" 
                                                name='EffectOnAccount_InventryWhileCancelInvoice'
                                                value={data.EffectOnAccount_InventryWhileCancelInvoice}
                                                onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Term & Condition
                                                Based
                                                On Master:</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" 
                                                name='Term_ConditionBasedOnMaster' value={data.Term_ConditionBasedOnMaster} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Item Name
                                                Duplication Allowed :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" 
                                                name='ItemNameDuplicationAllowed' value={data.ItemNameDuplicationAllowed} onChange={changeHandler} >
                                                    <option>select</option>
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
                                <legend>Commision Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end"> Commision
                                                :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='Commision' value={data.Commision} onChange={changeHandler}>
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">Commision
                                                Ledger :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text"
                                                 className="form-control"
                                                  name='CommisionLedger'
                                                  value={data.CommisionLedger}
                                                  onChange={changeHandler} 
                                                  required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mb-3">
                                <legend>TDS Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end"> TDS :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='Tds' value={data.Tds} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">TDS
                                                Ledger :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                name='TdsLedger'
                                                value={data.TdsLedger}
                                                onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Purchase and Sales Account Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end"> Purchase
                                                Account :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='PurchaseAccount'
                                                 value={data.PurchaseAccount}                                                 
                                                 onChange={changeHandler}
                                                 required 
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">Sales
                                                Account :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                 name='SalesAccount'
                                                 value={data.SalesAccount}
                                                 onChange={changeHandler}
                                                 required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Currency Details</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">Default Currency :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                 required
                                                 name='DefaultCurrency'
                                                 value={data.DefaultCurrency}
                                                onChange={changeHandler}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>OutStandings</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">Default OutStandings Pupup :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm"
                                                 name='DefaultOutStandingsPupup' value={data.DefaultOutStandingsPupup} onChange={changeHandler} >
                                                    <option>select</option>
                                                    <option value="One">One</option>
                                                    <option value="Both">Both</option>
                                                </select>                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Inventory Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">Product Serial Number :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" 
                                                name='ProductSerialNumber' value={data.ProductSerialNumber} onChange={changeHandler}>
                                                    <option >select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>                                          
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Default GST Setting In HSN</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end"> CGST :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                              <input 
                                                type="text"
                                                className="form-control"
                                                name='Cgst'
                                                value={data.Cgst}                                               
                                                onChange={changeHandler}
                                                required 
                                              />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">SGST/UTGST :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                  type="text"
                                                  className="form-control"
                                                  name='Sgst_Utgst'
                                                  value={data.Sgst_Utgst}
                                                  onChange={changeHandler}
                                                  required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">IGST :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='Igst'
                                                 value={data.Igst}
                                                 onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">Custom Duty :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='CustomDuty'
                                                value={data.CustomDuty}
                                                onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label text-end">CESS :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                name='Cess'
                                                value={data.Cess}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mt-3">
                            <div className="mb-3 row">
                                <label className=" col-sm-7 col-form-label text-end"> Merge PDF System Path :</label>
                                <div className="col-sm-4 d-flex align-items-center">
                                    <input 
                                    type="url"
                                     className="form-control"
                                     name='MergePdfSystemPath'
                                     value={data.MergePdfSystemPath}
                                     onChange={changeHandler}
                                     required 
                                    />
                                </div>
                                <button type='button' className='col-sm-1 border-0 bg-transparent text-left'>R</button>
                            </div>
                            <div className="mb-3 row d-flex align-items-center">
                                <label className=" col-sm-7 text-end col-form-label"> Select Path For EU Declaration Path :</label>
                                <div className="col-sm-4 d-flex align-items-center">
                                    <input 
                                    type="url"
                                    className="form-control"
                                    name='SelectPathForEuDeclarationPath'
                                    value={data.SelectPathForEuDeclarationPath}
                                    onChange={changeHandler}
                                    required 
                                    />
                                </div>
                                <div className="col-sm-1">
                                    <button type='button' className='fs-6 border-0 bg-transparent'>Another Path</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-3">
                            <div className=" my-3 d-flex justify-content-end align-items-center">
                                <button type="submit" className="btn border-secondary btn-next py-1 fs-5">Save</button>
                            </div>
                            <div className=" my-3 d-flex justify-content-end align-items-center">
                                <button type="button" className="btn border-secondary btn-next py-1 fs-5">Next</button>
                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default OtherSetting