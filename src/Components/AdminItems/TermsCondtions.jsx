import React, { useEffect, useState } from 'react'
import NavTabs from '../Navbar/NavTabs'
import { toast } from 'react-toastify'

const TermsCondtions = () => {
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
    import:"",
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
    export:"",
    exportSalesOrderAbout:"",
    importPurchaseOrderAbout:"",
    exportQuotationAbout:"",
    exportSalesOrderSubject:"",
    importPurchaseOrderSubject:"",
    exportQuotationSubject:""
  })



  const handleChange = (event)=>{
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  }

const handleFormSubmit = (e)=>{
  e.preventDefault();
  // toast.success("form submit")
}

useEffect(()=>{
  console.log(data)
},[data])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 p-0'>
          <h4 className="company-title fs-5 px-3">Company Details</h4>
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
                                            <label  className="col-form-label fs-5">Sales Order</label>
                                            <select className="form-select form-control" multiple
                                                aria-label="multiple select example" name='salesOrder' onChange={handleChange} required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Sales</label>
                                            <input type="text" className="form-control" name='sales' value={data.sales} onChange={handleChange} required />
                                            
                                        </div>
                                        <div className="form-group  mb-1">
                                            <label  className="col-form-label fs-5">Sales Return</label>
                                            <input type="text" className="form-control" name='salesReturn' value={data.salesReturn} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Purchase Order</label>
                                            <select className="form-select salesOrder-select" multiple 
                                                aria-label="multiple select example" name='purchaseOrder' onChange={handleChange} required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5"> Purchase </label>
                                            <input type="text" className="form-control" name='purchase' value={data.purchase} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Purchase Return</label>
                                            <input type="text" className="form-control" name='purchaseReturn' value={data.purchaseReturn} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Credit Note</label>
                                            <input type="text" className="form-control" name='creditNote' value={data.creditNote}onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Debit Note</label>
                                            <input type="text" className="form-control" name='debitNote' value={data.debitNote} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Export Quotation</label>
                                            <textarea name="exportQuotation" value={data.exportQuotation} onChange={handleChange}  className="form-control"  required></textarea>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Inquiry</label>
                                            <input type="text" className="form-control" name='inquiry'value={data.inquiry} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5 mt-1">Import</label>
                                            <input type="text" className="form-control" name='import' value={data.import} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Sales Order About</label>
                                            <select className="form-select salesOrder-select" multiple
                                                aria-label="multiple select example" name='salesOrderAbout' onChange={handleChange} required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label className="col-form-label fs-5">Purchase Order About </label>
                                            <input type="text" className="form-control" name='purchaseOrderAbout' value={data.purchaseOrderAbout} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label className="col-form-label fs-5">Quotation About</label>
                                            <select className="form-select salesOrder-select" multiple
                                                aria-label="multiple select example" name='quotationAbout' onChange={handleChange} required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                           
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Sales Order Subject </label>
                                            <input type="text" className="form-control" name='salesOrderSubject' value={data.salesOrderSubject} onChange={handleChange} required />
                                        </div>
                                        <div className=" form-group mb-1">
                                            <label  className="col-form-label fs-5">Purchase Order Subject
                                            </label>
                                            <input type="text" className="form-control" name='purchaseOrderSubject' value={data.purchaseOrderSubject} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label className="col-form-label fs-5">Quotation Subject </label>
                                            <input type="text" className="form-control" name='quotationSubject' value={data.quotationSubject} onChange={handleChange}  required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5 mt-1">Sales Order Bill Of Supply</label>
                                            <input type="text" className="form-control" name='salesOrderBillOfSupply' value={data.salesOrderBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5 mt-1">Sales Bill Of Supply</label>
                                            <input type="text" className="form-control" name='salesBillOfSupply' value={data.salesBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5 mt-1">Sales Return Bill of Supply</label>
                                            <input type="text" className="form-control" name='salesReturnBillOfSupply' value={data.salesReturnBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5 mt-1">Purchase Order Bill of Supply</label>
                                            <input type="text" className="form-control" name='purchaseOrderBillOfSupply' value={data.purchaseOrderBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5 mt-1">Purchase Bill of Supply</label>
                                            <input type="text" className="form-control" name='purchaseBillOfSupply' value={data.purchaseBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Purchase Return Bill of Supply</label>
                                            <input type="text" className="form-control" name='purchaseReturnBillOfSupply' value={data.purchaseReturnBillOfSupply} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group  mb-1">
                                            <label  className="col-form-label fs-5">Credit Note Bill of Supply</label>
                                            <input type="text" className="form-control" name='creditNoteBillOfSupply' value={data.creditNoteBillOfSupply} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label className="col-form-label fs-5">Debit Note Bill of Supply</label>
                                            <input type="text" className="form-control" name='debitNoteBillOfSupply' value={data.debitNoteBillOfSupply} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Quotation</label>
                                            <textarea name="quotation" value={data.quotation} onChange={handleChange} className="form-control"  required></textarea>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Complaint</label>
                                            <input type="text" className="form-control" name='complaint' value={data.complaint} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Export</label>
                                            <select className="form-select salesOrder-select" multiple
                                                aria-label="multiple select example" name='export' onChange={handleChange} required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Export Sales Order About</label>
                                            <input type="text" className="form-control" name='exportSalesOrderAbout' value={data.exportSalesOrderAbout} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Import Purchase Order About</label>
                                            <input type="text" className="form-control" name='importPurchaseOrderAbout' value={data.importPurchaseOrderAbout} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group mb-1">
                                            <label  className="col-form-label fs-5">Export Quotation About</label>
                                            <select className="form-select salesOrder-select" multiple
                                                aria-label="multiple select example" name='exportQuotationAbout' onChange={handleChange} required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label  className="form-label fs-5">Export Sales Order Subject</label>
                                            <input type="text" className="form-control " name='exportSalesOrderSubject' value={data.exportSalesOrderSubject} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mt-2">
                                            <label  className="form-label fs-5">Import Purchase Order Subject</label>
                                            <input type="text" className="form-control" name='importPurchaseOrderSubject' value={data.importPurchaseOrderSubject} onChange={handleChange}  required />
                                        </div>
                                        <div className="form-group mt-2">
                                            <label className="form-label fs-5">Export Quotation Subject</label>
                                            <input type="text" className="form-control " name='exportQuotationSubject' value={data.exportQuotationSubject} onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-end align-items-center my-3 ">
                                    <button type="submit" className="btn form-control btn-next py-2 fs-5 border-secondary ">Next</button>
                                </div>
                            </form>
                        </fieldset>
                    </div>
      </div>







    </div>
  )
}

export default TermsCondtions