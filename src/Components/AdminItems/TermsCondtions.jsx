import React from 'react'
import NavTabs from '../Navbar/NavTabs'
import { toast } from 'react-toastify'

const TermsCondtions = () => {

const handleSubmit = (e)=>{
  e.preventDefault();
  toast.success("form submit")
}

  return (
    <div className='container-fluid'>
      <NavTabs/>

      <div className="row">
                    <div className="col-md-12">
                        <fieldset>
                            <legend className="">Terms & Condtion</legend>
                            <form action="" className="needs-validation" novalidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Sales Order</label>
                                            <select className="form-select form-control" multiple
                                                aria-label="multiple select example" required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                            <div className='invalid-feedback fs-5'>
                                              Please select one of Items
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Sales</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter sales
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Sales Return</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter sales return .
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Purchase Order</label>
                                            <select className="form-select salesOrder-select" multiple 
                                                aria-label="multiple select example" required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                            <div className='invalid-feedback fs-5'>
                                              Select one of the items.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Purchase</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter purchase value.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Purchase Return</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter purchase return value.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Credit Note</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter credit note.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Debit Note</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter debit note.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Export Quotation</label>
                                            <textarea name="" id="" className="form-control" required></textarea>
                                            <div className='invalid-feedback fs-5'>
                                              Please enter export quotation.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Inquiry</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter inquiry .
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5 mt-1">Import</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter import.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Sales Order About</label>
                                            <select className="form-select salesOrder-select" multiple
                                                aria-label="multiple select example" required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                            <div className='invalid-feedback fs-5'>
                                              Please enter sales order.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Purchase Order About </label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter purchase order.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Quotation About</label>
                                            <select className="form-select salesOrder-select" multiple
                                                aria-label="multiple select example" required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                            <div className='invalid-feedback fs-5'>
                                              Please select one of  quotations about .
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Sales Order Subject </label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter sales order subject.
                                            </div>
                                        </div>
                                        <div className=" form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Purchase Order Subject
                                            </label>
                                            <input type="text" className="form-control"  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter purchase order subject.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Quotation Subject </label>
                                            <input type="text" className="form-control"  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter quotation subject.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5 mt-1">Sales Order Bill Of
                                                Supply</label>
                                            <input type="text" className="form-control"  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter sales order bill.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5 mt-1">Sales Bill Of
                                                Supply</label>
                                            <input type="text" className="form-control"  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter sales bill.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5 mt-1">Sales Return Bill of
                                                Supply</label>
                                            <input type="text" className="form-control"  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter sales return bill.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5 mt-1">Purchase Order Bill of
                                                Supply</label>
                                            <input type="text" className="form-control"  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter purchase order bill.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5 mt-1">Purchase Bill of
                                                Supply</label>
                                            <input type="text" className="form-control"  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter purchase bill.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Purchase Return Bill of
                                                Supply</label>
                                            <input type="text" className="form-control"  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter purchase return bill.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Credit Note Bill of
                                                Supply</label>
                                            <input type="text" className="form-control"  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter credit note bill.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Debit Note Bill of
                                                Supply</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter debit note bill.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Quotation</label>
                                            <textarea name=""className="form-control" required></textarea>
                                            <div className='invalid-feedback fs-5'>
                                              Please enter quotation.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Complaint</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Export</label>
                                            <select className="form-select salesOrder-select" multiple
                                                aria-label="multiple select example" required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                            <div className='invalid-feedback fs-5'>
                                              Please enter export value.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Export Sales Order
                                                About</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter export sales order about.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Import Purchase Order
                                                About</label>
                                            <input type="text" className="form-control" required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter import purchase order about.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mb-1">
                                            <label for="" className="col-form-label fs-5">Export Quotation About</label>
                                            <select className="form-select salesOrder-select" multiple
                                                aria-label="multiple select example" required>
                                                <option value="item1">item1</option>
                                                <option value="item2">item2</option>
                                                <option value="item3">item3</option>
                                                <option value="item4">item4</option>
                                                <option value="item5">item5</option>
                                            </select>
                                            <div className='invalid-feedback fs-5'>
                                              Please enter export quotation about.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mt-3">
                                            <label for="" className="form-label fs-5">Export Sales Order
                                                Subject</label>
                                            <input type="text" className="form-control "  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter export sales order subject.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mt-2">
                                            <label for="" className="form-label fs-5">Import Purchase Order
                                                Subject</label>
                                            <input type="text" className="form-control "  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter import purchase order subject.
                                            </div>
                                        </div>
                                        <div className="form-group was-validated mt-2">
                                            <label for="" className="form-label fs-5">Export Quotation
                                                Subject</label>
                                            <input type="text" className="form-control "  required />
                                            <div className='invalid-feedback fs-5'>
                                              Please enter export quotation subject.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-end align-items-center mb-3 ">
                                    <button onClick={handleSubmit} type="submit" className="btn form-control btn-next py-2 fs-5 border-secondary ">Next</button>
                                </div>
                            </form>
                        </fieldset>
                    </div>
                </div>







    </div>
  )
}

export default TermsCondtions