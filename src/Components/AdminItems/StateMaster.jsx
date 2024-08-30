import React from 'react'

const StateMaster = () => {
  return (
    <div className='container-fluid px-3'>
      {/* <h3>StateMaster </h3> */}
      <div className="row">
            <div className="col-md-12  role-content">
                <div className="row mt-3">
                    <div className="col-md-4">
                        <h3 className="fs-3">State Record </h3>
                    </div>
                    <div className="col-md-8 d-flex flex-column align-items-end justify-content-end">
                        <button className=" add-btn btn border-primary" id="addnew-btn" data-bs-toggle="modal"
                            data-bs-target="#stateMaster">ADD
                            NEW</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <table id="example" className="table table-striped">
                            <thead>
                                <tr>
                                    <th>**</th>
                                    <th className="fs-5 fw-normal">State Code</th>
                                    <th className="fs-5 fw-normal">State Name</th>
                                    <th className="fs-5 fw-normal">Country Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>01</td>
                                    <td>Jammu and Kashmir</td>
                                    <td>India</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>02</td>
                                    <td>Himachal Pardesh</td>
                                    <td>India</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>03</td>
                                    <td>Punjab</td>
                                    <td>India</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>04</td>
                                    <td>Chandigarh</td>
                                    <td>India</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>05</td>
                                    <td>Uttarakhand</td>
                                    <td>India</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>06</td>
                                    <td>Haryana</td>
                                    <td>India</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

      </div>
      <div class="modal fade model-box "
          id="stateMaster" 
          data-bs-backdrop="static"
          tabindex="-1" role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-3" id="exampleModalLongTitle">State Master</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <form action="" class="needs-validation" novalidate>
                    <div class="modal-body">
                        <fieldset>
                            <legend>State Details</legend>
                              <div class="mb-3 row">
                                <div class="mb-3 row">
                                    <label for="" class=" col-sm-5 col-form-label fs-5 text-end">Country Name :
                                    </label>
                                    <div class="col-sm-7 d-flex align-items-center">
                                        <input type="text" class="form-control" required />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="" class=" col-sm-5 col-form-label fs-5 text-end">Code :</label>
                                    <div class="col-sm-7 d-flex align-items-center">
                                        <input type="text" class="form-control" required />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="" class=" col-sm-5 col-form-label fs-5 text-end">State Name :
                                    </label>
                                    <div class="col-sm-7 d-flex align-items-center">
                                        <input type="text" class="form-control" required />
                                    </div>
                                </div>
                              </div>
                        </fieldset>
                    </div>
                    <div class="modal-footer d-flex justify-content-center gap-1">
                        <button type="submit" class="btn btn-primary fs-5">Save</button>
                        <button type="button" class="btn btn-secondary fs-5 " data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-info fs-5">Update</button>
                        <button type="button" class="btn btn-danger fs-5">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default StateMaster