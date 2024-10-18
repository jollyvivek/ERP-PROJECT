import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModuleMenuCommon from "../../Pages/ModuleMenuCommon";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";


const RoleModel = ({RoleModel}) => {
  const [isconfirmModel,setIsConfirmModel] = useState(false)
  const [companyData,setCompanyData] =useState([])
  const {url} = useContext(StoreContext)
  const navigate = useNavigate()

  const CompanyList= async()=>{
    try {
      const response = await axios.get(`${url}/api/company/list`);
      if (response.data.success) {
        setCompanyData(response.data.data);
        console.log(response.data.data)
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(response.data.message)
    }
  };

  useEffect(()=>{ CompanyList() },[])
  const formSubmitHandler =()=>{
    RoleModel(false);
  };

  return (
    <div className="container-fluid px-3 position-absolute h-100  z-1 " 
    style={
      {background:"lightGrey",
      overflowY:"scroll"
      }}>
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
                  <textarea className="form-control bg-body-secondary" name="Description" rows="3"></textarea>
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
                    <p className="col-12 px-2 fs-5 m-0">Company Names</p>
                      {companyData.map((item,index)=>{
                        return(
                          <>
                           <div className="row p-0 m-0" >
                            <div className="col-sm-12 d-flex align-items-center gap-2 " key={item._id}>
                               <input id={item._id} type="checkbox" className="form-check-input px-2" name="" />
                               <label htmlFor={item._id} className="col-form-label" >{item.companyName} </label>
                            </div>
                          </div>
                          </>
                        )
                      })}
                    {/* <div className="row p-0 m-0">
                      <div className="col-sm-12 d-flex align-items-center gap-2">
                        <input id="googles" type="checkbox" className="form-check-input px-2 m-0" name="" />
                        <label htmlFor="googles" className="col-form-label" >Googles Infotech </label>
                      </div>
                    </div> */}
                    
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-2 border-secondary">
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" onClick={()=>setIsConfirmModel(true)}>New</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" onClick={formSubmitHandler}> Save</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary">Updare</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" >Delete</button>
              </div>
            </form>
          </fieldset>
        </div>
        <div className="col-md-8">
          <ModuleMenuCommon/>
          {/* <div className="row">
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
          </div> */}
          {/* Admin */}
          {/* <div className="row">
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

          </div> */}
          {/* Inventry */}
          {/* <div className="row mt-2">
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
              <p className="m-0 p-0">Inventry Report</p>
              <p className="m-0 p-0">Pending Bills</p>
              <p className="m-0 p-0">Stock Assign</p>
              <p className="m-0 p-0">Logistic History</p>
              <p className="m-0 p-0">Finished Goods</p>
              <p className="m-0 p-0">Return Rejected</p>
              <p className="m-0 p-0">Rejected Report</p>
              <p className="m-0 p-0">Packing Master</p>
              <p className="m-0 p-0">EU Declaration</p>
              <p className="m-0 p-0">Contract Review</p>
              <p className="m-0 p-0">Job Work Balance</p>
              <p className="m-0 p-0">Add BOM Master</p>
              <p className="m-0 p-0">Batch Serial Setting</p>
              <p className="m-0 p-0">Service Requisition</p>
              <p className="m-0 p-0">Specific Details</p>
            </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>

              </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name=""  /></div>






              </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""  /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name=""  /></div>
                





              </div>
              <div className="col-md-1 mt-4 text-center">
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name=""  /></div>





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
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name="" /></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" style={{visibility:"hidden"}} name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>
                <div><input type="checkbox" className="form-check-input p-2" name=""/></div>




              </div>
          </div> */}
        </div>
      </div>
        
      {/* Confirm Modal*/}
{isconfirmModel &&(
<div className="modal show fade" 
  style={{ display: 'block' }}
  tabIndex="-1" 
  aria-labelledby="exampleModalLabel"
  //  aria-hidden="true"
   >
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content ">
      <div className="modal-header border-0">
        <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setIsConfirmModel(false)}></button>
      </div>
      <div className="modal-body">
        <div>
          <p className=' d-flex gap-3 px-3 fs-4'> <span className='text-primary'><BsFillPatchQuestionFill /></span> <span>Do you really want to new entry ?</span></p>
        </div>
      </div>
      <div className="modal-footer border-0">
      <button type="button" className="btn btn-primary">Yes</button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setIsConfirmModel(false)}>No</button>
        
      </div>
    </div>
  </div>
</div>
)}


    </div>
  );
};

export default RoleModel;
