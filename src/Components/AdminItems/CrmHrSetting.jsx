import React from 'react'
import NavTabs from '../Navbar/NavTabs'

const CrmHrSetting = () => {
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
                <form action="" className="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>CRM Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-6 col-form-label fs-5  text-end ">Inquiry
                                                Status :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Converted
                                                Status :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Inquiry Lost
                                                Status :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Inquiry Type
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Source
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Industry Type
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Contact Group
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Contact Type
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Complaint
                                                Status :</label>
                                            <div className="col-sm-6 ">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end px-0">Complaint
                                                Closed Status :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Task Status
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end"> Close Won
                                                Stage :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end"> Close Lost
                                                Stage :</label>
                                            <div className="col-sm-6 ">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end"> Stage
                                                :</label>
                                            <div className="col-sm-6 ">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end"> Event Type
                                                :</label>
                                            <div className="col-sm-6 ">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-2  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end"> Call Type
                                                :</label>
                                            <div className="col-sm-6 ">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-center">Search Path
                                                For Attached File :</label>
                                            <div className="col-sm-6 ">
                                                <div> <input type="file" className="form-control form-control-sm" required /></div>
                                                <p className='text-end px-3 py-2'> <span className=' border-bottom'>Seach Path</span></p>
                                            </div>
                                        </div>
                                        <div className="mb-3  row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-center">Manually
                                                Add Item in Inquiry :</label>
                                            <div className="col-sm-6 ">
                                                <select className="form-select form-select-sm" required aria-label="Small select">
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
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Over Time
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">Select</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="weekly">weekly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">LWP :</label>
                                            <div className="col-sm-6 ">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Shift
                                                :</label>
                                            <div className="col-sm-6 ">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">Select</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="weekly">weekly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end ">Minimum
                                                Outdoor Days :</label>
                                            <div className="col-sm-6 ">
                                                <input type="number" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Appraisal
                                                Duration :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">Select</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="weekly">weekly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Punch In/OUT
                                                According To :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">Select</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="weekly">weekly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Per Day Salary
                                                Circulation :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">Select</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="weekly">weekly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Salary Based On
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">Select</option>
                                                    <option value="Daily">Daily</option>
                                                    <option value="weekly">weekly</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Minimum
                                                Diffrence Between Two Punch in's :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <input type="number" name="" id="" className="form-control form-control-sm" required />
                                            </div>
                                            <div class="col-sm-3  d-flex align-items-center">
                                                <h5 class="fs-5">(In Min.)</h5>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Salary Ledger
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Group For
                                                Salary :</label>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Default CTC
                                                :</label>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">OT Formula
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Quotation As
                                                Per Input In Print
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">Select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Brief Quotation
                                                :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">Select</option>
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
                        <button type="submit" className="btn border-secondary btn-next py-1 fs-5 ">Next</button>
                    </div>
                </form>
            </div>
        </div> 
      
      
      
    </div>
  )
}

export default CrmHrSetting