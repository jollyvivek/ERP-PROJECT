import React from "react";
import { useNavigate } from "react-router-dom";

const RoleModel = (props) => {
  const navigate = useNavigate()
  console.log(props)
  const formSubmitHandler =()=>{
    // navigate("/role")
    alert();
  }
  return (
    <div className="container-fluid px-0 position-absolute h-100 z-1 " style={{background:"lightGrey"}}>
      <div className="row px-0">
        <h4>Role Details</h4>
        <div className="col-md-4">
          <fieldset className="py-2">
            <legend>Role Details</legend>
            <form action="">
              <div className="mb-3 row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Role Name :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control"  name="RoleName"  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Description :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <textarea className="form-control" name="" rows="3"></textarea>
                </div>
              </div>
              <div className="mb-3 py-1 row">
                  <label  className="col-sm-5 col-form-label">Select Company :</label>
                  <div className="col-sm-7">
                    <select  className="form-select"  name='' 
                      aria-label="Default select example required">
                      <option > Select Company</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
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
        <div className="col-md-8">
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleModel;
