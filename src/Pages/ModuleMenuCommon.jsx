import React from 'react'
import { useNavigate } from 'react-router-dom'

const ModuleMenuCommon = ({RoleModel}) => {
  const navigate = useNavigate()

  const companyReadHandler = ()=>{
    RoleModel(false)
    navigate('/')
  }
  return (
    <div className='container-fluid border border-secondary rounded-2 mt-3'>
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
          <h4 className=" m-0">Admin</h4>
          <div className='row'>
            <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Company</p></div>
              <div className='col-md-1 text-center bg-danger' che onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-7 bg-primary' ></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">User</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">Role</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">Send Mail</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-9 bg-primary'></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">Serial Setting</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">ApprovalSetting</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">Country Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">State Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">Bank Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">Master Report</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-9 bg-primary'></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">ManagementLog</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 text-end'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">Import Excel</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end'>
              <input type="checkbox" className="form-check-input p-2" name="" id="" />
              </div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">FinancialYearSetting</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end'>
              <input type="checkbox" className="form-check-input p-2" name="" id="" />
              </div>
            </div>
            </div>
            <div className='col-md-12'>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">Mail History</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end'>
              <input type="checkbox" className="form-check-input p-2" name="" id="" />
              </div>
            </div>
            </div>         

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
              <div className="col-md-4 mt-4  d-flex justify-content-between ">
                <div className=" w-50 text-center">
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
                <div className=" w-50 text-center">
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
                <div className=" w-50 text-center">
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
          </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  </div>
  )
}

export default ModuleMenuCommon