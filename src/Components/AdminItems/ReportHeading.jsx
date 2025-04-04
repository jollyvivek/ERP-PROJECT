import React, { useContext, useEffect, useState } from 'react'
import NavTabs from '../Navbar/NavTabs'
import { toast } from 'react-toastify'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const ReportHeading = () => {
const {url,userData} = useContext(StoreContext)
const [data,setData] = useState({
    taxInvoiceHeading:"",
    taxStockTransfer:"",
    billOfSupplyHeading:"",
    billOfSupplyStockTransfer:"",

    purchaseTaxInvoiceHeading:"",
    purchaseTaxStockTransfer:"",
    purchaseBillOfSupplyHeading:"",
    purchaseBillOfSupplyStockTransfer:"",

    exportTaxInvoiceHeading:"",
    taxInvoiceSubHeading:"",
    exportBillOfSupplyHeading:"",
    billOfSupplySubHeading:"",

    salesDcHeading:"",
    purchaseDcHeading:"",

    taxInvoiceReturnHeading:"",
    taxInvoiceReturnStockTransfer:"",
    billOfSupplyReturnHeading:"",
    billOfSupplyReturnStockTransfer:"",

    purchaseTaxInvoiceReturnHeading:"",
    purchaseTaxInvoiceReturnStockTransfer:"",
    purchaseBillOfSupplyReturnHeading:"",
    purchaseBillOfSupplyReturnStockTransfer:"",

    taxImportInvoiceHeading:"",
    taxImportInvoiceSubHeading:"",
    billOfSupplyInvoiceHeading:"",
    billOfSupplyInvoiceSubHeading:""
})

const [fetchData,setFetchData] = useState([])
// console.log(userData)


const changeHandler = (event)=>{
    const {name,value}= event.target;
    setData({...data,[name]:value});
}



const formSubmitHandler = async(event)=>{
    event.preventDefault();
    const payload = {
    taxInvoiceHeading:data.taxInvoiceHeading,
    taxStockTransfer:data.taxStockTransfer,
    billOfSupplyHeading:data.billOfSupplyHeading,
    billOfSupplyStockTransfer:data.billOfSupplyStockTransfer,

    purchaseTaxInvoiceHeading:data.purchaseTaxInvoiceHeading,
    purchaseTaxStockTransfer:data.purchaseTaxStockTransfer,
    purchaseBillOfSupplyHeading:data.purchaseBillOfSupplyHeading,
    purchaseBillOfSupplyStockTransfer:data.purchaseBillOfSupplyStockTransfer,

    exportTaxInvoiceHeading:data.exportTaxInvoiceHeading,
    taxInvoiceSubHeading:data.taxInvoiceSubHeading,
    exportBillOfSupplyHeading:data.exportBillOfSupplyHeading,
    billOfSupplySubHeading:data.billOfSupplySubHeading,

    salesDcHeading:data.salesDcHeading,
    purchaseDcHeading:data.purchaseDcHeading,

    taxInvoiceReturnHeading:data.taxInvoiceReturnHeading,
    taxInvoiceReturnStockTransfer:data.taxInvoiceReturnStockTransfer,
    billOfSupplyReturnHeading:data.billOfSupplyReturnHeading,
    billOfSupplyReturnStockTransfer:data.billOfSupplyReturnStockTransfer,

    purchaseTaxInvoiceReturnHeading:data.purchaseTaxInvoiceReturnHeading,
    purchaseTaxInvoiceReturnStockTransfer:data.purchaseTaxInvoiceReturnStockTransfer,
    purchaseBillOfSupplyReturnHeading:data.purchaseBillOfSupplyReturnHeading,
    purchaseBillOfSupplyReturnStockTransfer:data.purchaseBillOfSupplyReturnStockTransfer,

    taxImportInvoiceHeading:data.taxImportInvoiceHeading,
    taxImportInvoiceSubHeading:data.taxImportInvoiceSubHeading,
    billOfSupplyInvoiceHeading:data.billOfSupplyInvoiceHeading,
    billOfSupplyInvoiceSubHeading:data.billOfSupplyInvoiceSubHeading,
    LogInUserEmailId:userData.email
    }
    const response = await axios.post(`${url}/api/reportheading/add`,payload);
    if (response.data.success) {
        setData({
            taxInvoiceHeading:"",
            taxStockTransfer:"",
            billOfSupplyHeading:"",
            billOfSupplyStockTransfer:"",
        
            purchaseTaxInvoiceHeading:"",
            purchaseTaxStockTransfer:"",
            purchaseBillOfSupplyHeading:"",
            purchaseBillOfSupplyStockTransfer:"",
        
            exportTaxInvoiceHeading:"",
            taxInvoiceSubHeading:"",
            exportBillOfSupplyHeading:"",
            billOfSupplySubHeading:"",
        
            salesDcHeading:"",
            purchaseDcHeading:"",
        
            taxInvoiceReturnHeading:"",
            taxInvoiceReturnStockTransfer:"",
            billOfSupplyReturnHeading:"",
            billOfSupplyReturnStockTransfer:"",
        
            purchaseTaxInvoiceReturnHeading:"",
            purchaseTaxInvoiceReturnStockTransfer:"",
            purchaseBillOfSupplyReturnHeading:"",
            purchaseBillOfSupplyReturnStockTransfer:"",
        
            taxImportInvoiceHeading:"",
            taxImportInvoiceSubHeading:"",
            billOfSupplyInvoiceHeading:"",
            billOfSupplyInvoiceSubHeading:""
        });
        toast.success(response.data.message)
    } else {
        console.log("Error");
        toast.error(response.data.message)
    }
    console.log(data)
}

 // facth records
 const FetchRecords= async()=>{
    const response = await axios.get(`${url}/api/reportheading/list`);
    if(response.data.data){
        const reportLists = response.data.data;
    //   console.log(reportLists);
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

  useEffect(()=>{
    FetchRecords();
  },[]);



  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 p-0'>
        <h4 className='company-title fs-5 px-3 mt-2'>Company Details</h4>
          <NavTabs/>
        </div>
      </div>
      
      <div className="row">
            <div className="col-md-12">
                <form action="" className="" onSubmit={formSubmitHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>Sales Invoice Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className="col-sm-7 col-form-label  text-end ">Tax Invoice
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text"
                                                 className="form-control"
                                                 name='taxInvoiceHeading'
                                                 value={data.taxInvoiceHeading}
                                                 onChange={changeHandler}
                                                  required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label  text-end">Tax Stock
                                                Transfer :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text"
                                                 className="form-control"
                                                 name='taxStockTransfer'
                                                 value={data.taxStockTransfer}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label  text-end">Bill of
                                                Supply
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text"
                                                 className="form-control"
                                                 name='billOfSupplyHeading'
                                                 value={data.billOfSupplyHeading}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label text-end">Bill of
                                                Supply Stock
                                                Transfer :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text"
                                                 className="form-control"
                                                 name='billOfSupplyStockTransfer'
                                                 value={data.billOfSupplyStockTransfer}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mt-3">
                                <legend>Purchase Invoice Heading</legend>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className="col-sm-7 col-form-label  text-end">Tax Invoice
                                                Heading:</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" 
                                                className="form-control"
                                                name='purchaseTaxInvoiceHeading'
                                                value={data.purchaseTaxInvoiceHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label   text-end ">Tax Stock
                                                Transfer:</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='purchaseTaxStockTransfer'
                                                 value={data.purchaseTaxStockTransfer}
                                                 onChange={changeHandler}
                                                  required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label   text-end ">Bill of
                                                Supply
                                                Heading:</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control" 
                                                 name='purchaseBillOfSupplyHeading'
                                                 value={data.purchaseBillOfSupplyHeading}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className=" col-sm-7 col-form-label   text-end ">Bill of
                                                Supply Stock
                                                Transfer:</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='purchaseBillOfSupplyStockTransfer'
                                                 value={data.purchaseBillOfSupplyStockTransfer}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Export Invoice Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-6 col-form-label  text-end">Tax Invoice
                                                Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                name='exportTaxInvoiceHeading'
                                                value={data.exportTaxInvoiceHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label  text-end ">Tax Invoice
                                                Sub Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='taxInvoiceSubHeading'
                                                value={data.taxInvoiceSubHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label  text-end ">Bill of
                                                Supply
                                                Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='exportBillOfSupplyHeading'
                                                value={data.exportBillOfSupplyHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label  text-end ">Bill of
                                                Supply Sub Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                name='billOfSupplySubHeading'
                                                value={data.billOfSupplySubHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Delivery Challan Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-6 col-form-label  text-end">Sales DC
                                                Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input
                                                type="text" 
                                                className="form-control"
                                                name='salesDcHeading'
                                                value={data.salesDcHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-6 col-form-label  text-end ">Purchase
                                                DC Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                name='purchaseDcHeading'
                                                value={data.purchaseDcHeading}
                                                onChange={changeHandler}                                                
                                                required />
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-6 ">
                            <fieldset className="mb-3">
                                <legend>Sales Invoice Return Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label text-end">Tax Invoice
                                                Return Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                name='taxInvoiceReturnHeading'
                                                value={data.taxInvoiceReturnHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label text-end">Tax Invoice
                                                Return Stock Transfer :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='taxInvoiceReturnStockTransfer'
                                                value={data.taxInvoiceReturnStockTransfer}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label  text-end">Bill of
                                                Supply
                                                Return Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input
                                                 type="text"
                                                className="form-control"
                                                name='billOfSupplyReturnHeading'
                                                value={data.billOfSupplyReturnHeading}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label text-end ">Bill of Supply
                                                Return Stock Transfer :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='billOfSupplyReturnStockTransfer'
                                                 value={data.billOfSupplyReturnStockTransfer}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Purchase Invoice Return Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label text-end">Tax Invoice
                                                Return Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='purchaseTaxInvoiceReturnHeading'
                                                 value={data.purchaseTaxInvoiceReturnHeading}
                                                 onChange={changeHandler}                                                 
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label text-end">Tax Invoice
                                                Return Stock Transfer :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='purchaseTaxInvoiceReturnStockTransfer'
                                                value={data.purchaseTaxInvoiceReturnStockTransfer}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label text-end">Bill of
                                                Supply
                                                Return Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                 name='purchaseBillOfSupplyReturnHeading'
                                                 value={data.purchaseBillOfSupplyReturnHeading}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label text-end">Bill of
                                                Supply
                                                Return Stock Transfer :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                name='purchaseBillOfSupplyReturnStockTransfer'
                                                value={data.purchaseBillOfSupplyReturnStockTransfer}
                                                onChange={changeHandler}
                                                required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Import Invoice Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label   text-end">Tax Import
                                                Invoice Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='taxImportInvoiceHeading'
                                                 value={data.taxImportInvoiceHeading}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label   text-end">Tax Import
                                                Invoice
                                                Sub Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='taxImportInvoiceSubHeading'
                                                 value={data.taxImportInvoiceSubHeading}
                                                onChange={changeHandler}                                                 
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-7 col-form-label   text-end">Bill of
                                                Supply
                                                Invoice Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input 
                                                type="text"
                                                 className="form-control"
                                                 name='billOfSupplyInvoiceHeading'
                                                 value={data.billOfSupplyInvoiceHeading}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                        <div className="mb-4 row">
                                            <label className=" col-sm-7 col-form-label   text-end">Bill of
                                                Supply Invoice
                                                Sub Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input
                                                type="text"
                                                 className="form-control" 
                                                 name='billOfSupplyInvoiceSubHeading'
                                                 value={data.billOfSupplyInvoiceSubHeading}
                                                 onChange={changeHandler}
                                                 required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className=" my-3 d-flex justify-content-end align-items-center">
                        <button type="submit" className="btn form-control btn-next py-2 fs-5 border-secondary">Save</button>
                    </div>
                    <div className=" my-3 d-flex justify-content-end align-items-center">
                        <button onClick={()=>alert()} type="button" className="btn form-control btn-next py-2 fs-5 border-secondary">Next</button>
                    </div>
                </form>
            </div>
        </div>
      
      
      
    </div>
  )
}

export default ReportHeading