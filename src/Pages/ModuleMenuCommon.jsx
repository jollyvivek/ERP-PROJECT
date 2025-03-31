import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ModuleMenuCommon = ({RoleModel}) => {
  const [permission,setPermission] = useState({
    CompanyRead:"",CompanyWrite:"",CompanyModify:"",
    UserRead:"",UserWrite:"",UserModify:"",UserDelete:"",
    RoleRead:"",RoleWrite:"",RoleModify:"",RoleDelete:"",SendMailRead:"",SerialSettingRead:"",SerialSettingModify:"",
    ApprovalSettingRead:"",ApprovalSettingModify:"",
    CountryMasterRead:"",CountryMasterWrite:"",CountryMasterModify:"",CountryMasterDelete:"",
    StateMasterRead:"",StateMasterWrite:"",StateMasterModify:"",StateMasterDelete:"",
    BankMasterRead:"",BankMasterWrite:"",BankMasterModify:"",BankMasterDelete:"",MasterReportRead:"",
    ManagementLogRead:"",ManagementLogWrite:"",ManagementLogModify:"",ManagementLogDelete:"",ManagementLogReportAndExport:"",
    ImportExcelRead:"",ImportExcelReportAndExport:"",FinancialYearRead:"",FinancialYearReportAndExport:"",
    MailHistoryRead:"",MailHistoryReportAndExport:""

  })
  const navigate = useNavigate()

  const ChangeHandler =(e)=>{
    const name =e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
      setPermission((data) => ({ ...data,[name]:checked }))
    // alert(e.target.value,e.target.checked)
   
  }
  const PermissonSubmitHandler = ()=>{
    console.log(permission)
    RoleModel(false)
    // navigate('/company')
  }

  const userPermissionHandler =()=>{
    console.log(permisson)
    RoleModel(false)
  }

  const companyReadHandler = ()=>{
    RoleModel(false)
    // navigate('/company')
  }

  const ManageUserHandler = ()=>{
    RoleModel(false)
    navigate('/manageuser')
  }

  const PermissionRoleHandler = ()=>{
    RoleModel(false)
     console.log(permission)
    // navigate('/role')
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
              <div className='col-md-2 '><p className="m-0 p-0">Company</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} 
              value={permission.CompanyRead} className="form-check-input p-2" name="CompanyRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.CompanyWrite} className="form-check-input p-2" name="CompanyWrite" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.CompanyModify} className="form-check-input p-2" name="CompanyModify" id="" /></div>
              <div className='col-md-7 ' ></div>
            </div>
            <div className='row mb-1 '>
              <div className='col-md-2'><p className="m-0 p-0">User</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.UserRead} className="form-check-input p-2" name="UserRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.UserWrite} className="form-check-input p-2" name="UserWrite" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.UserModify} className="form-check-input p-2" name="UserModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.UserDelete} className="form-check-input p-2" name="UserDelete" id="" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Role</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.RoleRead} className="form-check-input p-2" name="RoleRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.RoleWrite} className="form-check-input p-2" name="RoleWrite" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.RoleModify} className="form-check-input p-2" name="RoleModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.RoleDelete} className="form-check-input p-2" name="RoleDelete" id="" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Send Mail</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.SendMailRead} className="form-check-input p-2" name="SendMailRead" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-9'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Serial Setting</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.SerialSettingRead} name="SerialSettingRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.SerialSettingModify} name="SerialSettingModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">ApprovalSetting</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.ApprovalSettingRead} name="ApprovalSettingRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.ApprovalSettingModify} name="ApprovalSettingModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Country Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="CountryMasterRead"   value={permission.CountryMasterRead}  /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="CountryMasterWrite"  value={permission.CountryMasterWrite} /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="CountryMasterModify" value={permission.CountryMasterModify} /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="CountryMasterDelete" value={permission.CountryMasterDelete} /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">State Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2"onChange={ChangeHandler} value={permission.StateMasterRead} name="StateMasterRead"  /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2"onChange={ChangeHandler} value={permission.StateMasterWrite} name="StateMasterWrite"  /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2"onChange={ChangeHandler} value={permission.StateMasterModify} name="StateMasterModify"  /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2"onChange={ChangeHandler} value={permission.StateMasterDelete} name="StateMasterDelete"  /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Bank Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BankMasterRead} name="BankMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BankMasterWrite} name="BankMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BankMasterModify} name="BankMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BankMasterDelete} name="BankMasterDelete" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Master Report</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MasterReportRead} name="MasterReportRead" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" /></div>
              <div className='col-md-9'></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">ManagementLog</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogRead} name="ManagementLogRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogWrite} name="ManagementLogWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogModify}  name="ManagementLogModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogDelete} name="ManagementLogDelete" /></div>
              <div className='col-md-6 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogReportAndExport} name="ManagementLogReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Import Excel</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportExcelRead} name="ImportExcelRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end'>
              <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportExcelReportAndExport} name="ImportExcelReportAndExport" />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">FinancialYear</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.FinancialYearRead} name="FinancialYearRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end'>
              <input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.FinancialYearReportAndExport} name="FinancialYearReportAndExport" />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Mail History</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MailHistoryRead} name="MailHistoryRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end'>
              <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MailHistoryReportAndExport} name="MailHistoryReportAndExport" />
              </div>
            </div> 
            <div className="d-flex justify-content-end mt-3 " onClick={PermissonSubmitHandler}><button className="btn btn-primary px-3">Submit</button></div>
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