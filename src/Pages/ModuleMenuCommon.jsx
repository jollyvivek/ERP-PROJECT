import React from 'react'
import { useNavigate } from 'react-router-dom'

const ModuleMenuCommon = ({RoleModel}) => {
  const navigate = useNavigate()

  const companyReadHandler = ()=>{
    RoleModel(false)
    navigate('/')
  }

  const ManageUserHandler = ()=>{
    RoleModel(false)
    navigate('/manageuser')
  }

  const RoleHandler = ()=>{
    RoleModel(false)
    navigate('/role')
  }
  return (
    <div className='container-fluid border border-secondary rounded-2 mt-3'>
       <div className="row">
          <div className='col-md-12 d-flex justify-content-between flex-wrap'>
            <div className=""><p className="fw-bold">Menu Name</p></div>
            <div className=" text-center"><p className="fw-bold">Read</p></div>
            <div className=" text-center "><p className="fw-bold">Write</p></div>
            <div className=" text-center "><p className="fw-bold">Modify</p></div>
            <div className=" text-center"><p className="fw-bold">Delete</p></div>
            <div className=" text-center"><p className="fw-bold">Approved-1</p></div>
            <div className=" text-center"><p className="fw-bold">Approved-2</p></div>
            <div className=" text-center"><p className="fw-bold">Approved-3</p></div>
            <div className="col-md-2"><p className="fw-bold">Report and Export</p></div>
          </div>
        </div>
          {/* Admin */}
          <div className="row">
          <h5 className="my-1">Admin</h5>
          <div className='row'>
            <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Company</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-7 bg-primary' ></div>
            </div>
            <div className='row '>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">User</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={ManageUserHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            <div className='row '>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Role</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={RoleHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            <div className='row '>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Send Mail</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-9 bg-primary'></div>
            </div>
            <div className='row '>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Serial Setting</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            <div className='row '>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">ApprovalSetting</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            <div className='row '>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Country Master</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            <div className='row '>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">State Master</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Bank Master</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary'></div>
            </div>
            <div className='row '>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Master Report</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-9 bg-primary'></div>
            </div>
            <div className='row bg-danger'>
              <div className='col-md-2'><p className="m-0 p-0">ManagementLog</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 text-end'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Import Excel</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end bg-danger'>
              <input type="checkbox" className="form-check-input p-2" name="" id="" />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">FinancialYear</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end bg-danger'>
              <input type="checkbox" className="form-check-input p-2" name="" id="" />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Mail History</p></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end bg-danger'>
              <input type="checkbox" className="form-check-input p-2" name="" id="" />
              </div>
            </div> 

            </div>
          </div> 
          </div>

          {/* Inventry */}
          <div className="row mt-2">
          <h5 className=" my-1">Inventry</h5>
          <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Inventry Group</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">CategoryMaster</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">HSN Master</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Unit Master</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Item Master</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Price List</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Vendor</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">VendorComplaint</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">GRN</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 text-end bg-danger' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Challan</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 text-end bg-danger' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">GatePassReturn</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 text-end bg-danger' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">MRS</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 text-end bg-danger' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">MIS</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 text-end bg-danger' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">MIS Return</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 text-end bg-danger' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Gate Pass</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 text-end bg-danger' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Delivery Note</p></div>
              <div className='col-md-1 text-center bg-danger'  onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-3 text-end bg-danger' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">StockAdjustment</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Vendor Po</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Vendor Survey</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Vendor Master</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Vendor Record</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Inventry Report</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-danger text-end' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Pending Bills </p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-danger text-end' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Stock Assign</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-danger text-end' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Logistic History</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-danger text-end' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Finished Goods</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-danger text-end' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Return Rejected</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-danger text-end' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Rejected Report</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-danger text-end' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Packing Master</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">EU Declaration</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">ContractReview</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">JobWorkBalance</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 bg-danger text-end' ><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">AddBOMMaster</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">BatchSerialSetting</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">ServiceRequisition</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 bg-danger'><p className="m-0 p-0">Specific Details</p></div>
              <div className='col-md-1 text-center bg-danger' onClick={companyReadHandler}><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center bg-danger'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-6 bg-primary' ></div>
            </div>                               
          </div>
          </div>
          </div>
      
  </div>
  )
}

export default ModuleMenuCommon