import React, { useContext, useEffect, useState } from "react";
import NavTabs from "../Navbar/NavTabs";
import { toast } from "react-toastify";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const ReportHeadingTwo = () => {
    const {url,userData} = useContext(StoreContext)
    const [data,setData] = useState({
    TaxOrderHeading :"",
    ProformaInvoice :"",

    ExportTaxOrderHeading:"",
    ExportTaxOrderSubheading :"",
    ExportBillOfSupplyOrderHeading:"",
    ExportBillOfSupplyOrderSubheading:"", 

    ImportTaxOrderHeading:"",
    ImportTaxOrderSubheading :"",
    ImportBillOfSupplyOrderHeading:"",
    ImportBillOfSupplyOrderSubheading:"",

    PurchaseTaxOrderHeading:"",
    PurchaseBillOfSupplyOrderHeading:"",

    QuotationTaxHeading :"",
    QuotationBillOfSupply:"",
    ExportQuotation:"",

    ReturnRejectedHeading:"",
    ReturnRejectedReportHeading:"",
    LogInUserEmailId:""
    })
    // console.log(userData)
    const ReportHeadingTwoFetch = async()=>{
        const response = await axios.get(`${url}/api/reportheadingtwo/list`);
        if(response.data.data){
            const reportLists = response.data.data;
            // console.log(reportLists) 
            if (reportLists.length > 0) {
                const {email} = userData
                const foundObject = reportLists.find((item) => item.LogInUserEmailId === email);
                // console.log(foundObject)
                if(foundObject) setData(foundObject);
            }    
          }else{
            console.log("Error")
          }
    }

 

  const changeHandler = (event)=>{
    const {name,value}= event.target;
    setData({...data,[name]:value})
  }

  useEffect(()=>{
    ReportHeadingTwoFetch()
  },[])


  const formSubmitHandler = async(event)=>{
    event.preventDefault();
    const payrole ={
    TaxOrderHeading :data.TaxOrderHeading,
    ProformaInvoice :data.ProformaInvoice,

    ExportTaxOrderHeading :data.ExportTaxOrderHeading,
    ExportTaxOrderSubheading :data.ExportTaxOrderSubheading,
    ExportBillOfSupplyOrderHeading :data.ExportBillOfSupplyOrderHeading,
    ExportBillOfSupplyOrderSubheading :data.ExportBillOfSupplyOrderSubheading, 

    ImportTaxOrderHeading :data.ImportTaxOrderHeading,
    ImportTaxOrderSubheading :data.ImportTaxOrderSubheading,
    ImportBillOfSupplyOrderHeading :data.ImportBillOfSupplyOrderHeading,
    ImportBillOfSupplyOrderSubheading :data.ImportBillOfSupplyOrderSubheading,

    PurchaseTaxOrderHeading :data.PurchaseTaxOrderHeading,
    PurchaseBillOfSupplyOrderHeading :data.PurchaseBillOfSupplyOrderHeading,

    QuotationTaxHeading :data.QuotationTaxHeading,
    QuotationBillOfSupply :data.QuotationBillOfSupply,
    ExportQuotation :data.ExportQuotation,

    ReturnRejectedHeading :data.ReturnRejectedHeading,
    ReturnRejectedReportHeading :data.ReturnRejectedReportHeading,
    LogInUserEmailId:userData.email
    }

    const response = await axios.post(`${url}/api/reportheadingtwo/add`,payrole)

    if (response.data.success) {
        setData({
            TaxOrderHeading :"",
            ProformaInvoice :"",
        
            ExportTaxOrderHeading:"",
            ExportTaxOrderSubheading :"",
            ExportBillOfSupplyOrderHeading:"",
            ExportBillOfSupplyOrderSubheading:"", 
        
            ImportTaxOrderHeading:"",
            ImportTaxOrderSubheading :"",
            ImportBillOfSupplyOrderHeading:"",
            ImportBillOfSupplyOrderSubheading:"",
        
            PurchaseTaxOrderHeading:"",
            PurchaseBillOfSupplyOrderHeading:"",
        
            QuotationTaxHeading :"",
            QuotationBillOfSupply:"",
            ExportQuotation:"",
        
            ReturnRejectedHeading:"",
            ReturnRejectedReportHeading:"",
            LogInUserEmailId:""

          });
          toast.success(response.data.message)
    } else {
        console.log("Error");
        toast.error(response.data.message);
    }
  }

  return (
    <div className="container-fluid">
      <h4 className="company-title fs-5 px-2 mt-2">Company Details</h4>
      <div className="row ">
        <div className="col-md-12 px-0">
          <NavTabs />
        </div>
      </div>

      <div className="row">
            <div className="col-md-12">
                <form  className="" onSubmit={formSubmitHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>Sales Order Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className="col-sm-7 col-form-label text-end">Tax Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="TaxOrderHeading"
                                                value={data.TaxOrderHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end">Proforma
                                                Invoice :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                name="ProformaInvoice"
                                                value={data.ProformaInvoice}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>Export Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className="col-sm-7 col-form-label text-end">Tax Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                name="ExportTaxOrderHeading"
                                                value={data.ExportTaxOrderHeading}
                                                onChange={changeHandler}                                                
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end ">Tax Order
                                                Subheading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="ExportTaxOrderSubheading"
                                                value={data.ExportTaxOrderSubheading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end ">Bill of
                                                Supply Order Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input
                                                 type="text"
                                                  className="form-control form-control-sm"
                                                  name="ExportBillOfSupplyOrderHeading"
                                                  value={data.ExportBillOfSupplyOrderHeading}
                                                  onChange={changeHandler}
                                                  required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end ">Bill of
                                                Supply Order Subheading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control form-control-sm"
                                                 name="ExportBillOfSupplyOrderSubheading"
                                                 value={data.ExportBillOfSupplyOrderSubheading}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Import Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className="col-sm-7 col-form-label text-end">Tax Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="ImportTaxOrderHeading"
                                                value={data.ImportTaxOrderHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end ">Tax Order
                                                Subheading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                name="ImportTaxOrderSubheading"
                                                value={data.ImportTaxOrderSubheading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end ">Bill of
                                                Supply Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="ImportBillOfSupplyOrderHeading"
                                                value={data.ImportBillOfSupplyOrderHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end ">Bill of
                                                Supply Order
                                                Subheading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="ImportBillOfSupplyOrderSubheading"
                                                value={data.ImportBillOfSupplyOrderSubheading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-6 ">
                            <fieldset className="">
                                <legend>Purchase Order Heading</legend>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className="col-sm-7 col-form-label text-end">Tax Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control form-control-sm"
                                                name="PurchaseTaxOrderHeading"
                                                value={data.PurchaseTaxOrderHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end ">Bill of
                                                Supply Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="PurchaseBillOfSupplyOrderHeading"
                                                value={data.PurchaseBillOfSupplyOrderHeading}
                                                onChange={changeHandler}                                                
                                                required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mb-3">
                                <legend>Quotation Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end"> Quotation
                                                Tax
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="QuotationTaxHeading"
                                                value={data.QuotationTaxHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end">Quotation
                                                Bill of Supply :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="QuotationBillOfSupply"
                                                value={data.QuotationBillOfSupply}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end">Export
                                                Quotation :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="ExportQuotation"
                                                value={data.ExportQuotation}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Return Rejected Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end"> Return
                                                Rejected Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="ReturnRejectedHeading"
                                                value={data.ReturnRejectedHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end">Return Rejected Report Heading:</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control form-control-sm"
                                                name="ReturnRejectedReportHeading"
                                                value={data.ReturnRejectedReportHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className=" mt-5 d-flex justify-content-end align-items-center">
                                <button type="submit" className="btn form-control btn-next mt-5 py-1 fs-5 border-secondary ">Save</button>
                            </div>
                        </div>
                    </div>
                   
                </form>
                <div className=" mb-3 d-flex justify-content-end align-items-center">
                        <button type="button" className="btn form-control btn-next py-1 fs-5 border-secondary ">Next</button>
                    </div>
            </div>
        </div>









    </div>
  );
};

export default ReportHeadingTwo;
