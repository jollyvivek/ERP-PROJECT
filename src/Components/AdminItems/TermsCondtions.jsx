import React, { useContext, useEffect, useState } from 'react'
import NavTabs from '../Navbar/NavTabs'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const TermsCondtions = () => {
    const{url,userData} = useContext(StoreContext);
    const navigate = useNavigate();
    const[data,setData]= useState({
    salesOrder:"",
    sales:"",
    salesReturn:"",
    purchaseOrder:"",
    purchase:"",
    purchaseReturn:"",
    creditNote:"",
    debitNote:"",
    exportQuotation:"",
    inquiry:"",
    Import:"",
    salesOrderAbout:"",
    purchaseOrderAbout:"",
    quotationAbout:"",
    salesOrderSubject:"",
    purchaseOrderSubject:"",
    quotationSubject:"",
    salesOrderBillOfSupply:"",
    salesBillOfSupply:"",
    salesReturnBillOfSupply:"",
    purchaseOrderBillOfSupply:"",
    purchaseBillOfSupply:"",
    purchaseReturnBillOfSupply:"",
    creditNoteBillOfSupply:"",
    debitNoteBillOfSupply:"",
    quotation:"",
    complaint:"",
    Export:"",
    exportSalesOrderAbout:"",
    importPurchaseOrderAbout:"",
    exportQuotationAbout:"",
    exportSalesOrderSubject:"",
    importPurchaseOrderSubject:"",
    exportQuotationSubject:""
  })

// fecth data
const TermConditionFetch =async()=>{
    const response = await axios.get(`${url}/api/termcondtion/list`);
    if(response.data.data){
        const Lists = response.data.data;
        // console.log(Lists) 
        if (Lists.length > 0) {
            const {email} = userData
            const foundObject =Lists.find((item) => item.LogInUserEmailId === email);
            // console.log(foundObject)
            if(foundObject) setData(foundObject);
        }    
      }else{
        console.log("Error")
      }
}

  const handleChange = (event)=>{
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  }

const handleFormSubmit = async(e)=>{
  e.preventDefault();
    const payload ={
    salesOrder:data.salesOrder ,
    sales:data.sales,
    salesReturn:data.salesReturn,
    purchaseOrder:data.purchaseOrder,
    purchase:data.purchase,
    purchaseReturn:data.purchaseReturn,
    creditNote:data.creditNote,
    debitNote:data.debitNote,
    exportQuotation:data.exportQuotation,
    inquiry:data.inquiry,
    Import:data.Import,
    salesOrderAbout:data.salesOrderAbout,
    purchaseOrderAbout:data.purchaseOrderAbout,
    quotationAbout:data.quotationAbout,
    salesOrderSubject:data.salesOrderSubject,
    purchaseOrderSubject:data.purchaseOrderSubject,
    quotationSubject:data.quotationSubject,
    salesOrderBillOfSupply:data.salesOrderBillOfSupply,
    salesBillOfSupply:data.salesBillOfSupply,
    salesReturnBillOfSupply:data.salesReturnBillOfSupply,
    purchaseOrderBillOfSupply:data.purchaseOrderBillOfSupply,
    purchaseBillOfSupply:data.purchaseBillOfSupply,
    purchaseReturnBillOfSupply:data.purchaseReturnBillOfSupply,
    creditNoteBillOfSupply:data.creditNoteBillOfSupply,
    debitNoteBillOfSupply:data.debitNoteBillOfSupply,
    quotation:data.quotation,
    complaint:data.complaint,
    Export:data.Export,
    exportSalesOrderAbout:data.exportSalesOrderAbout,
    importPurchaseOrderAbout:data.importPurchaseOrderAbout,
    exportQuotationAbout:data.exportQuotationAbout,
    exportSalesOrderSubject:data.exportSalesOrderSubject,
    importPurchaseOrderSubject:data.importPurchaseOrderSubject,
    exportQuotationSubject:data.exportQuotationSubject,
    LogInUserEmailId:userData.email
    }
    // console.log(payload)
    const response = await axios.post(`${url}/api/termcondtion/add`,payload);
    if (response.data.success) {
        setData({
            salesOrder:"",
            sales:"",
            salesReturn:"",
            purchaseOrder:"",
            purchase:"",
            purchaseReturn:"",
            creditNote:"",
            debitNote:"",
            exportQuotation:"",
            inquiry:"",
            Import:"",
            salesOrderAbout:"",
            purchaseOrderAbout:"",
            quotationAbout:"",
            salesOrderSubject:"",
            purchaseOrderSubject:"",
            quotationSubject:"",
            salesOrderBillOfSupply:"",
            salesBillOfSupply:"",
            salesReturnBillOfSupply:"",
            purchaseOrderBillOfSupply:"",
            purchaseBillOfSupply:"",
            purchaseReturnBillOfSupply:"",
            creditNoteBillOfSupply:"",
            debitNoteBillOfSupply:"",
            quotation:"",
            complaint:"",
            Export:"",
            exportSalesOrderAbout:"",
            importPurchaseOrderAbout:"",
            exportQuotationAbout:"",
            exportSalesOrderSubject:"",
            importPurchaseOrderSubject:"",
            exportQuotationSubject:""
          });
          toast.success(response.data.message)
    } else {
        console.log("error");
        toast.error(response.data.message)
    }
}

useEffect(()=>{
    TermConditionFetch()
},[])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 p-0'>
          <h4 className="company-title fs-5 px-3 mt-2">Company Details</h4>
          <NavTabs/>
        </div>
      </div>
      

      <div className="row">
                    <div className="col-md-12">
                        <fieldset>
                            <legend className="">Terms & Condtion</legend>
                            <form action="" className=""  onSubmit={handleFormSubmit} >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Sales Order</label>
                                            <select className="form-select form-control" 
                                                aria-label="multiple select example" name='salesOrder' value={data.salesOrder} onChange={handleChange} required>
                                                <option >select one of the items</option>
                                                <option value="Lorem ipsum dolor sit amet.">Lorem ipsum dolor sit amet.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing.">Lorem ipsum dolor sit amet consectetur adipisicing.</option>
                                                <option value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea rerum nulla officia.">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea rerum nulla officia.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing elit.">Lorem ipsum dolor sit amet consectetur adipisicing elit.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur.">Lorem ipsum dolor sit amet consectetur.</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Sales</label>
                                            <input type="text" className="form-control" name='sales' value={data.sales} onChange={handleChange} required />
                                            
                                        </div>
                                        <div className="form-group  mb-1">
                                            <label  className="col-form-label ">Sales Return</label>
                                            <input type="text" className="form-control" name='salesReturn' value={data.salesReturn} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Purchase Order</label>
                                            <select className="form-select salesOrder-select" 
                                                aria-label="multiple select example" name='purchaseOrder' value={data.purchaseOrder} onChange={handleChange} required>
                                                <option >select one of the items</option>
                                                <option value="Lorem ipsum dolor sit amet.">Lorem ipsum dolor sit amet.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing.">Lorem ipsum dolor sit amet consectetur adipisicing.</option>
                                                <option value="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, nobis.">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, nobis.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla autem illo pariatur.">Lorem ipsum dolor sit amet consectetur adipisicing elit.Nulla autem illo pariatur.</option>
                                                <option value="Lorem ipsum, dolor sit amet consectetur adipisicing elit.">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label "> Purchase </label>
                                            <input type="text" className="form-control" name='purchase' value={data.purchase} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Purchase Return</label>
                                            <input type="text" className="form-control" name='purchaseReturn' value={data.purchaseReturn} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Credit Note</label>
                                            <input type="text" className="form-control" name='creditNote' value={data.creditNote}onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Debit Note</label>
                                            <input type="text" className="form-control" name='debitNote' value={data.debitNote} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Export Quotation</label>
                                            <textarea name="exportQuotation" value={data.exportQuotation} onChange={handleChange}  className="form-control"  required></textarea>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Inquiry</label>
                                            <input type="text" className="form-control" name='inquiry'value={data.inquiry} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label  mt-1">Import</label>
                                            <input type="text" className="form-control" name='Import' value={data.Import} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Sales Order About</label>
                                            <select className="form-select salesOrder-select"
                                                aria-label="multiple select example" name='salesOrderAbout' value={data.salesOrderAbout} onChange={handleChange} required>
                                                <option >select one of the items</option>
                                                <option value="Lorem ipsum dolor sit amet.">Lorem ipsum dolor sit amet.</option>
                                                <option value="Lorem ipsum, dolor sit amet consectetur adipisicing.">Lorem ipsum, dolor sit amet consectetur adipisicing.</option>
                                                <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit.">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptate.">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptate.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut!</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label className="col-form-label ">Purchase Order About </label>
                                            <input type="text" className="form-control" name='purchaseOrderAbout' value={data.purchaseOrderAbout} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label className="col-form-label ">Quotation About</label>
                                            <select className="form-select salesOrder-select"
                                                aria-label="multiple select example" name='quotationAbout' value={data.quotationAbout} onChange={handleChange} required>
                                                <option >select one of the items</option>
                                                <option value="Lorem, ipsum dolor.">Lorem, ipsum dolor.</option>
                                                <option value="Lorem ipsum dolor sit amet.">Lorem ipsum dolor sit amet.</option>
                                                <option value="Lorem ipsum dolor sit, amet consectetur adipisicing.">Lorem ipsum dolor sit, amet consectetur adipisicing.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur.">Lorem ipsum dolor sit amet consectetur.</option>
                                            </select>
                                           
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Sales Order Subject </label>
                                            <input type="text" className="form-control" name='salesOrderSubject' value={data.salesOrderSubject} onChange={handleChange} required />
                                        </div>
                                        <div className=" form-group mb-1">
                                            <label  className="col-form-label ">Purchase Order Subject
                                            </label>
                                            <input type="text" className="form-control" name='purchaseOrderSubject' value={data.purchaseOrderSubject} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label className="col-form-label ">Quotation Subject </label>
                                            <input type="text" className="form-control" name='quotationSubject' value={data.quotationSubject} onChange={handleChange}  required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label  mt-1">Sales Order Bill Of Supply</label>
                                            <input type="text" className="form-control" name='salesOrderBillOfSupply' value={data.salesOrderBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label  mt-1">Sales Bill Of Supply</label>
                                            <input type="text" className="form-control" name='salesBillOfSupply' value={data.salesBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label  mt-1">Sales Return Bill of Supply</label>
                                            <input type="text" className="form-control" name='salesReturnBillOfSupply' value={data.salesReturnBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label  mt-1">Purchase Order Bill of Supply</label>
                                            <input type="text" className="form-control" name='purchaseOrderBillOfSupply' value={data.purchaseOrderBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label  mt-1">Purchase Bill of Supply</label>
                                            <input type="text" className="form-control" name='purchaseBillOfSupply' value={data.purchaseBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Purchase Return Bill of Supply</label>
                                            <input type="text" className="form-control" name='purchaseReturnBillOfSupply' value={data.purchaseReturnBillOfSupply} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group  mb-1">
                                            <label  className="col-form-label ">Credit Note Bill of Supply</label>
                                            <input type="text" className="form-control" name='creditNoteBillOfSupply' value={data.creditNoteBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label className="col-form-label ">Debit Note Bill of Supply</label>
                                            <input type="text" className="form-control" name='debitNoteBillOfSupply' value={data.debitNoteBillOfSupply} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Quotation</label>
                                            <textarea name="quotation" value={data.quotation} onChange={handleChange} className="form-control"  required></textarea>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Complaint</label>
                                            <input type="text" className="form-control" name='complaint' value={data.complaint} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Export</label>
                                            <select className="form-select salesOrder-select"
                                                //  multiple
                                                aria-label="multiple select example" name='Export' value={data.Export} onChange={handleChange} required>
                                                <option >select one of the items</option>
                                                <option value="Lorem ipsum dolor sit.">Lorem ipsum dolor sit.</option>
                                                <option value="Lorem ipsum dolor sit amet.">Lorem ipsum dolor sit amet.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur.">Lorem ipsum dolor sit amet consectetur.</option>
                                                <option value="Lorem ipsum dolor sit, amet consectetur adipisicing elit.">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vel.">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vel.</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Export Sales Order About</label>
                                            <input type="text" className="form-control" name='exportSalesOrderAbout' value={data.exportSalesOrderAbout} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Import Purchase Order About</label>
                                            <input type="text" className="form-control" name='importPurchaseOrderAbout' value={data.importPurchaseOrderAbout} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label ">Export Quotation About</label>
                                            <select className="form-select salesOrder-select"
                                                //  multiple
                                                aria-label="multiple select example" name='exportQuotationAbout' value={data.exportQuotationAbout} onChange={handleChange} required>
                                                <option >select one of the items</option>
                                                <option value="Lorem, ipsum dolor.">Lorem, ipsum dolor.</option>
                                                <option value="Lorem ipsum dolor sit amet.">Lorem ipsum dolor sit amet.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing.">Lorem ipsum dolor sit amet consectetur adipisicing.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur, adipisicing elit.">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</option>
                                                <option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nisi?">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nisi?</option>
                                            </select>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label  className="form-label ">Export Sales Order Subject</label>
                                            <input type="text" className="form-control " name='exportSalesOrderSubject' value={data.exportSalesOrderSubject} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mt-2">
                                            <label  className="form-label ">Import Purchase Order Subject</label>
                                            <input type="text" className="form-control" name='importPurchaseOrderSubject' value={data.importPurchaseOrderSubject} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mt-2">
                                            <label className="form-label ">Export Quotation Subject</label>
                                            <input type="text" className="form-control " name='exportQuotationSubject' value={data.exportQuotationSubject} onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-end align-items-center my-3 ">
                                    <button type="submit" className="btn form-control btn-next py-2 fs-5 border-secondary ">Save</button>
                                </div>
                            </form>
                        </fieldset>
                        <div className=" d-flex justify-content-end align-items-center my-3 ">
                            <button type="button" onClick={()=>navigate('/report_heading')} className="btn form-control btn-next py-2 fs-5 border-secondary ">Next</button>
                        </div>
                    </div>
      </div>







    </div>
  )
}

export default TermsCondtions