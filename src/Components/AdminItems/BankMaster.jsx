import React from 'react'

const BankMaster = () => {
  return (
    <div className='container-fluid px-3'>
      {/* <h3>BankMaster</h3> */}

      <div class="row">
            <div class="col-md-12  role-content">
                <div class="row mt-3">
                    <div class="col-md-4">
                        <h3 class="fs-3">Bank Record </h3>
                    </div>
                    <div class="col-md-8 d-flex flex-column align-items-end justify-content-end">
                        <button class=" add-btn btn border-primary" id="addnew-btn" data-bs-toggle="modal" data-bs-target="#bankMaster">ADD
                            NEW</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <table id="example" className="table table-striped">
                            <thead>
                                <tr>
                                    <th>**</th>
                                    <th className="fs-5 fw-normal">Bank Name</th>
                                    <th className="fs-5 fw-normal">Branch Name</th>
                                    <th className="fs-5 fw-normal">IFSC Code</th>
                                    <th className="fs-5 fw-normal">Micro Code</th>
                                    <th className="fs-5 fw-normal">Account No</th>
                                    <th className="fs-5 fw-normal">Account Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>SBI</td>
                                    <td>Jammu and Kashmir</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                    <td>Akshay Kumar</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Punjab National Bank</td>
                                    <td>Punjab</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                    <td>Vinod Sharma</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>ICICI</td>
                                    <td>Chandigarh</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                    <td>Anil Kumar</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Dean Bank</td>
                                    <td>Jammu and Kashmir</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                    <td>Pankaj Kumar</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>UCO Bank</td>
                                    <td>Haryana</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                    <td>Rajinder</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>HDFC Bank</td>
                                    <td>Chandigarh</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                    <td>Virat </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

      </div>

       {/* model  */}
    <div className="modal fade model-box "
        id="bankMaster" 
        data-bs-backdrop="static"
        tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title fs-5" id="exampleModalLongTitle">Bank Master</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <form action="" className="needs-validation" novalidate>
                    <div className="modal-body">
                        <fieldset>
                            <legend>Bank Details</legend>
                            <div className="mb-1 row">
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Bank Name :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Branch Name
                                        :</label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">IFSC Code :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input type="number" className="form-control" required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Swift Code :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input type="number" className="form-control" required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">AD Code :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input type="number" className="form-control" required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Micro Code :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input type="number" className="form-control" required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Account Name :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Account No :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input type="number" className="form-control" required />
                                    </div>
                                </div>
                              </div>
                        </fieldset>
                    </div>
                    <div className="modal-footer d-flex justify-content-center gap-1">
                        <button type="submit" className="btn btn-primary ">Save</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-secondary ">Update</button>
                        <button type="button" className="btn btn-danger ">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>



    </div>
  )
}

export default BankMaster