import React from 'react'

const MasterReport = () => {
  return (
    <div className='container-fluid'>
       <div className='row'>
            <div className='col-md-12'>
                <h5 className='mt-2'>MasterReport</h5>
                <form action="">
                <div className="row mb-2 mx-1 py-2 border border-secondary rounded-3">
                <div className="col-md-2">
                    <label className="form-label text-center  fs-6 ">Enquiry No. </label>
                    <input type="text" className="form-control" id="" name="" />
                </div>
                <div className="col-md-2">
                    <label className="form-label  fs-6 ">Deal No. </label>
                    <input type="text" className="form-control" id="" name="" />
                </div>
                <div className="col-md-2">
                    <label className="form-label  fs-6 ">Order No. </label>
                    <input type="text" className="form-control" id="" name="" />
                </div>
                <div className="col-md-2">
                    <label className="form-label  fs-6 ">Work Order No. </label>
                    <input type="text" className="form-control" id="" name="" />
                </div>
                <div className="col-md-4 d-flex align-items-end justify-content-center gap-3">
                    <button type="submit" className="btn btn-success">Submit</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                    <button type="button" className="btn btn-secondary">Print</button>
                    <button type="button" className="btn btn-secondary">Print2</button>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">Costomer Details </legend>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label  className="col-sm-4 col-form-label fs-6   ">Code :</label>
                                    <div className="col-sm-8">
                                        <input type="number" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-4 col-form-label  fs-6   ">Name :</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-4 col-form-label  fs-6   ">Address :</label>
                                    <div className="col-sm-8">
                                        <textarea name="" id="" className="form-control form-control-sm"
                                            required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label  className="col-sm-4 col-form-label  fs-6   ">State :</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-4 col-form-label fs-6">Country :</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-4 col-form-label  fs-6   ">Currency:</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label  className="col-sm-5 col-form-label fs-6">Contact Person:</label>
                                    <div className="col-sm-7">
                                        <input type="text" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label  className="col-sm-5 col-form-label  fs-6">Mobile No :</label>
                                    <div className="col-sm-7">
                                        <input type="number" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">Inquiry Details </legend>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Inquiry No :</label>
                                    <div className="col-sm-8">
                                        <input type="number" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 "> Date :</label>
                                    <div className="col-sm-8">
                                        <input type="date" className="form-control " required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Title :</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Status :</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label fs-6 ">Remarks:</label>
                                    <div className="col-sm-9">
                                        <textarea className="form-control " name="" id="" rows="3"></textarea>
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-end">
                                        <button className="btn btn-secondary">Show</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">Deal Details </legend>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Deal No :</label>
                                    <div className="col-sm-8">
                                        <input type="number" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 "> Date :</label>
                                    <div className="col-sm-8">
                                        <input type="date" className="form-control " required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Deal :</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Stage :</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label  fs-6 ">Remarks:</label>
                                    <div className="col-sm-9">
                                        <textarea className="form-control " name="" id="" rows="3"></textarea>
                                        <div className="invalid-feedback">Company Name is required!</div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-end">
                                        <button className="btn btn-secondary">Show</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">Quotation </legend>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead className=''>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Quotation No</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer Name </th>
                                            <th scope="col">Total Amount</th>
                                            <th scope="col">Type </th>
                                            <th scope="col">Created By</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>1/3/2024</td>
                                            <td>Ram</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2</td>
                                            <td>10/3/2024</td>
                                            <td>Sham</td>
                                            <td>30000</td>
                                            <td>Garments</td>
                                            <td>Self</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5"> Sales Order Details </legend>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Order No :</label>
                                    <div className="col-sm-8">
                                        <input type="number" className="form-control " required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 "> Date :</label>
                                    <div className="col-sm-8">
                                        <input type="date" className="form-control " required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Status :</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Po No :</label>
                                    <div className="col-sm-8">
                                        <input type="number" className="form-control " required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Po Date :</label>
                                    <div className="col-sm-8">
                                        <input type="date" className="form-control " required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label className="col-sm-4 col-form-label  fs-6 ">Type :</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control " required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label  fs-6 ">Remarks:</label>
                                    <div className="col-sm-9">
                                        <textarea className="form-control " name="" id="" rows="3"></textarea>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-end">
                                        <button className="btn btn-secondary">Show</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">Work Order Details </legend>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">WO No</th>
                                            <th scope="col">Date </th>
                                            <th scope="col">ETD</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Plan Status</th>
                                            <th scope="col">Prod. Status</th>
                                            <th scope="col">Pack Status</th>
                                            <th scope="col">Created By</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>1/3/2024</td>
                                            <td>Ram</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2</td>
                                            <td>10/3/2024</td>
                                            <td>Sham</td>
                                            <td>30000</td>
                                            <td>Garments</td>
                                            <td>Self</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">Production Details </legend>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Production No</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Shift </th>
                                            <th scope="col">Machine</th>
                                            <th scope="col">Operator Name </th>
                                            <th scope="col">Created By</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>1/3/2024</td>
                                            <td>Ram</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2</td>
                                            <td>10/3/2024</td>
                                            <td>Sham</td>
                                            <td>30000</td>
                                            <td>Garments</td>
                                            <td>Self</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5"> In Process QC </legend>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">QC Report No</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Production No </th>
                                            <th scope="col">WO No.</th>
                                            <th scope="col">Item Name </th>
                                            <th scope="col"> Qty </th>
                                            <th scope="col">Operation </th>
                                            <th scope="col">Machine</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>1/3/2024</td>
                                            <td>Ram</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2</td>
                                            <td>10/3/2024</td>
                                            <td>Sham</td>
                                            <td>30000</td>
                                            <td>Garments</td>
                                            <td>Self</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">QC Internal Test Certificate</legend>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Test No</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">PO No </th>
                                            <th scope="col">PO Date</th>
                                            <th scope="col">Item Code  </th>
                                            <th scope="col">Item Name</th>
                                            <th scope="col">PO Qty  </th>
                                            <th scope="col">Creted By</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>1/3/2024</td>
                                            <td>Ram</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2</td>
                                            <td>10/3/2024</td>
                                            <td>Sham</td>
                                            <td>30000</td>
                                            <td>Garments</td>
                                            <td>Self</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">Final QC Details</legend>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">QC Report No</th>
                                            <th scope="col">QC Date</th>
                                            <th scope="col">GRN No </th>
                                            <th scope="col">GRN Date</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Acce. Qty</th>
                                            <th scope="col">UD Qty  </th>
                                            <th scope="col">Rej. Qty</th>
                                            <th scope="col">Created By</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>1/3/2024</td>
                                            <td>Ram</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                            <td>Self</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2</td>
                                            <td>10/3/2024</td>
                                            <td>Sham</td>
                                            <td>30000</td>
                                            <td>Garments</td>
                                            <td>Self</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                            <td>Self</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">Packing Details</legend>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Packing No</th>
                                            <th scope="col"> Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Remarks</th>
                                            <th scope="col">Created By</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>1/3/2024</td>
                                            <td>Ram</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>Self</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2</td>
                                            <td>10/3/2024</td>
                                            <td>Sham</td>
                                            <td>30000</td>
                                            <td>Garments</td>
                                            <td>Stationary</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </fieldset>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-md-12">
                    <fieldset className='rounded-3'>
                        <legend className="fs-5">Invoice Details</legend>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Invoice No</th>
                                            <th scope="col"> Date</th>
                                            <th scope="col">Order No. </th>
                                            <th scope="col">Packing No. </th>
                                            <th scope="col">Total Amount </th>
                                            <th scope="col">Created By</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>1/3/2024</td>
                                            <td>Ram</td>
                                            <td>20000</td>
                                            <td>Stationary</td>
                                            <td>20000</td>
                                            <td>Self</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2</td>
                                            <td>10/3/2024</td>
                                            <td>Sham</td>
                                            <td>30000</td>
                                            <td>Garments</td>
                                            <td>20000</td>
                                            <td>Self</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </fieldset>
                </div>
                </div>

                </form>
            </div>
       </div>
    </div>
  )
}

export default MasterReport