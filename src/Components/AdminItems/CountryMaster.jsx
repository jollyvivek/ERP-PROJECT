import React from "react";
import '../../Styles/AdminMaster.css'

const CountryMaster = () => {
  return (
    <div className="container-fluid px-3">
      {/* <h3>CountryMaster</h3> */}
      <div className="row ">
        <div className="col-md-12  role-content">
          <div className="row mt-3">
            <div className="col-md-4">
              <h3 className="fs-3">Country Record </h3>
            </div>
            <div className="col-md-8 d-flex flex-column align-items-end justify-content-end">
              <button
                className=" add-btn btn border-primary"
                id="addnew-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                ADD NEW
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <table id="example" className="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th className="fs-5">Country Code</th>
                    <th className="fs-5">Country Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>+91</td>
                    <td>India</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+7</td>
                    <td>Russia</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+971</td>
                    <td>UAE</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+33</td>
                    <td>FRANCE</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+55</td>
                    <td>BRAZIL</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+64</td>
                    <td>New Zealand</td>
                  </tr>
                </tbody>
                {/* <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </tfoot>  */}
              </table>
            </div>
          </div>
          <div
            className="modal fade model-box"
            id="exampleModalCenter"
            data-bs-backdrop="static"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-between">
                  <h5 className="modal-title fs-3" id="exampleModalLongTitle">
                    Country Master
                  </h5>
                  <div className="d-flex align-items-center px-3">
                  <button
                    type="button"
                    className="btn btn-outline-0 fs-3"
                    id="minimizeBtn"
                  >
                    &minus;
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-0 fs-3 "
                    id="restoreBtn"
                  >
                    &#9633;
                  </button>
                  <button
                    type="button"
                    className="btn-close fs-6"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  </div>
                </div>
                <form action="" className="needs-validation" novalidate>
                  <div className="modal-body">
                    <fieldset>
                      <legend>Country Details</legend>
                      <div className="mb-3 row">
                        <label
                          for=""
                          className=" col-sm-4 col-form-label fs-5  text-end"
                        >
                          Code :
                        </label>
                        <div className="col-sm-8 d-flex align-items-center">
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          for=""
                          className=" col-sm-4 col-form-label fs-5  text-end"
                        >
                          Name :
                        </label>
                        <div className="col-sm-8 d-flex align-items-center">
                          <input
                            type="email"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal-footer d-flex justify-content-center gap-1">
                    <button type="button" className="btn btn-secondary ">
                      New
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Save
                    </button>
                    <button type="button" className="btn btn-secondary  ">
                      Update
                    </button>
                    <button type="button" className="btn btn-danger  ">
                      Delete
                    </button>
                    {/* <button type="button" className="btn btn-secondary fs-4 " data-bs-dismiss="modal">Close</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryMaster;
