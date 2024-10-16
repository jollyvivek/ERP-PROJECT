import React from "react";
import { useNavigate } from "react-router-dom";

const RoleModel = ({RoleModel}) => {
  const navigate = useNavigate()

  const formSubmitHandler =()=>{
    RoleModel(false);
  };

  return (
    <div className="container-fluid px-3 position-absolute h-100  z-1 " style={{background:"lightGrey",overflowY:"scroll"}}>
      <div className="row">
        <h4>Role Details</h4>
        <div className="col-md-4">
          <fieldset className="py-2">
            <legend>Role Details</legend>
            <form action="">
              <div className="mb-2 row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Role Name :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="mb-2 row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Description :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <textarea className="form-control bg-body-secondary" name="" rows="3"></textarea>
                </div>
              </div>
              <div className=" row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Select All :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="checkbox" className="form-check-input p-2" />
                </div>
              </div>
              <div className="mb-3 p-2 row">
                <div className="col-md-12">
                  <p className="fs-5 m-0">Select Company :</p>
                  <div className="row border border-secondary m-0">
                    <p className="col-12 px-2 fs-5 border m-0">Company Names</p>
                    <div className="row p-0 m-0 bg-danger">
                      <div className="col-sm-12 d-flex align-items-center gap-2 ">
                        <input id="bfox" type="checkbox" className="form-check-input px-2" name="" />
                        <label htmlFor="bfox" className="col-form-label" >Bfox Pvt Lmt </label>
                      </div>
                    </div>
                    <div className="row p-0 m-0 bg-secondary">
                      <div className="col-sm-12 d-flex align-items-center gap-2">
                        <input id="googles" type="checkbox" className="form-check-input px-2 m-0" name="" />
                        <label htmlFor="googles" className="col-form-label" >Googles Infotech </label>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-2 border-secondary">
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary">New</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" onClick={formSubmitHandler}> Save</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary">Updare</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" >Delete</button>
              </div>
            </form>
          </fieldset>
        </div>
        <div className="col-md-8 p-2 border border-primary">
          <div className="row">
            <div className="col-md-2"><p className="fw-bold">Menu Name</p></div>
            <div className="col-md-1 text-center"><p className="fw-bold">Read</p></div>
            <div className="col-md-1 text-center "><p className="fw-bold">Write</p></div>
            <div className="col-md-1 text-center "><p className="fw-bold">Modify</p></div>
            <div className="col-md-1 text-center"><p className="fw-bold">Delete</p></div>
            <div className="col-md-4 d-flex justify-content-between">
              <p className="fw-bold">Approved-1</p>
              <p className="fw-bold">Approved-2</p>
              <p className="fw-bold">Approved-3</p>
            </div>
            <div className="col-md-2"><p className="fw-bold">Report and Export</p></div>
          </div>
          {/* Admin */}
          <div className="row">
            <div className="col-md-2">
              <h4 className=" m-0">Admin</h4>
              <p className="m-0 p-0">Company</p>
              <p className="m-0 p-0">User</p>
              <p className="m-0 p-0">Role</p>
              <p className="m-0 p-0">Send Mail</p>
              <p className="m-0 p-0">Serial Setting</p>
              <p className="m-0 p-0">Approval Setting</p>
              <p className="m-0 p-0">Country Master</p>
              <p className="m-0 p-0">State Master</p>
              <p className="m-0 p-0">Bank Master</p>
              <p className="m-0 p-0">Master Report</p>
              <p className="m-0 p-0">Management Log</p>
              <p className="m-0 p-0">Import Excel</p>
              <p className="m-0 p-0">Financial Year Setting</p>
              <p className="m-0 p-0">Mail History</p>
            </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div className="my-2"><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}}  name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
              </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2"  name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              </div>
              <div className="col-md-4">
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
              </div>
              <div className="col-md-2 text-center mt-4">
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div className="my-2"><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              </div>

          </div>
          {/* Inventry */}
          <div className="row mt-2">
            <div className="col-md-2">
              <h4 className=" m-0">Inventry</h4>
              <p className="m-0 p-0">Inventry Group</p>
              <p className="m-0 p-0">Category Master</p>
              <p className="m-0 p-0">HSN Master</p>
              <p className="m-0 p-0">Unit Master</p>
              <p className="m-0 p-0">Item Master</p>
              <p className="m-0 p-0">Price List</p>
              <p className="m-0 p-0">Vendor</p>
              <p className="m-0 p-0">Vendor Complaint</p>
              <p className="m-0 p-0">GRN</p>
              <p className="m-0 p-0">Challan</p>
              <p className="m-0 p-0">Gate Pass Return</p>
              <p className="m-0 p-0">MRS</p>
              <p className="m-0 p-0">MIS</p>
              <p className="m-0 p-0">MIS Return</p>
              <p className="m-0 p-0">Gate Pass</p>
              <p className="m-0 p-0">Delivery Note</p>
              <p className="m-0 p-0">Stock Adjustment</p>
              <p className="m-0 p-0">Vendor Po</p>
              <p className="m-0 p-0">Vendor Survey</p>
              <p className="m-0 p-0">Vendor Master</p>
              <p className="m-0 p-0">Vendor Record</p>
            </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>






              </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>





              </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>






              </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>





              </div>
              <div className="col-md-4 mt-4  d-flex justify-content-between bg-danger">
                <div className="bg-primary w-50 text-center">
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2"  style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                </div>
                <div className="bg-secondary w-50 text-center">
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2"  style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>

                </div>
                <div className="bg-primary w-50 text-center">
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2"  style={{visibility:"hidden"}} name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                  <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>

                </div>
              </div>
              <div className="col-md-2 text-center mt-4">
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2"  style={{visibility:"hidden"}} name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
                <div ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>



              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleModel;
