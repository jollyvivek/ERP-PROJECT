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
    MailHistoryRead:"",MailHistoryReportAndExport:"",
    // inventry
    InventryGroupRead:"",InventryGroupWrite:"",InventryGroupModify:"",InventryGroupDelete:"",
    InventryCategoryMasterRead:"",InventryCategoryMasterWrite:"",InventryCategoryMasterModify:"",InventryCategoryMasterDelete:"",
    HsnMasterRead:"",HsnMasterWrite:"",HsnMasterModify:"",HsnMasterDelete:"",HsnMasterApproved1:"",HsnMasterApproved2:"",HsnMasterApproved3:"",
    UnitMasterRead:"",UnitMasterWrite:"",UnitMasterModify:"",UnitMasterDelete:"",
    ItemMasterRead:"",ItemMasterWrite:"",ItemMasterModify:"",ItemMasterDelete:"",ItemMasterApproved1:"",ItemMasterApproved2:"",ItemMasterApproved3:"",
    PriceListRead:"",PriceListWrite:"",PriceListModify:"",PriceListDelete:"",
    VendorRead:"",VendorWrite:"",VendorModify:"",VendorDelete:"",VendorApproved1:"",VendorApproved2:"",VendorApproved3:"",
    VendorComplaintRead:"",VendorComplaintWrite:"",VendorComplaintModify:"",VendorComplaintDelete:"",
    GrnRead:"",GrnWrite:"",GrnModify:"",GrnDelete:"",GrnApproved1:"",GrnApproved2:"",GrnApproved3:"",GrnReportAndExport:"",
    ChallanRead:"",ChallanWrite:"",ChallanModify:"",ChallanDelete:"",ChallanApproved1:"",ChallanApproved2:"",ChallanApproved3:"",ChallanReportAndExport:"",
    GatePassReturnRead:"",GatePassReturnWrite:"",GatePassReturnModify:"",GatePassReturnDelete:"",GatePassReturnApproved1:"",GatePassReturnApproved2:"",GatePassReturnApproved3:"",GatePassReturnReportAndExport:"",
    MrsRead:"",MrsWrite:"",MrsModify:"",MrsDelete:"",MrsApproved1:"",MrsApproved2:"",MrsApproved3:"",MrsReportAndExport:"",
    MisRead:"",MisWrite:"",MisModify:"",MisDelete:"",MisApproved1:"",MisApproved2:"",MisApproved3:"",MisReportAndExport:"",
    MisReturnRead:"",MisReturnWrite:"",MisReturnModify:"",MisReturnDelete:"",MisReturnApproved1:"",MisReturnApproved2:"",MisReturnApproved3:"",MisReturnReportAndExport:"",
    GatePassRead:"",GatePassWrite:"",GatePassModify:"",GatePassDelete:"",GatePassApproved1:"",GatePassApproved2:"",GatePassApproved3:"",GatePassReportAndExport:"",
    DeliveryNoteRead:"",DeliveryNoteWrite:"",DeliveryNoteModify:"",DeliveryNoteDelete:"",DeliveryNoteApproved1:"",DeliveryNoteApproved2:"",DeliveryNoteApproved3:"",DeliveryNoteReportAndExport:"",
    StockAdjustmentRead:"",StockAdjustmentWrite:"",StockAdjustmentModify:"",StockAdjustmentDelete:"",
    VendorPoRead:"",VendorPoWrite:"",VendorPoModify:"",VendorPoDelete:"",
    VendorSurveyRead:"",VendorSurveyWrite:"",VendorSurveyModify:"",VendorSurveyDelete:"",
    VendorMasterRead:"",VendorMasterWrite:"",VendorMasterModify:"",VendorMasterDelete:"",
    VendorRecordRead:"",VendorRecordWrite:"",VendorRecordModify:"",VendorRecordDelete:"",
    InventryReportRead:"",InventryReport_ReportAndExport:"",
    PendingBillsRead:"",PendingBillsReportAndExport:"",
    StockAssignRead:"",StockAssignReportAndExport:"",
    LogisticHistoryRead:"",LogisticHistoryReportAndExport:"",
    FinishedGoodsRead:"",FinishedGoodsReportAndExport:"",
    ReturnRejectedRead:"",ReturnRejectedWrite:"",ReturnRejectedModify:"",ReturnRejectedDelete:"",ReturnRejectedReportAndExport:"",
    RejectedReportRead:"",RejectedReport_ReportAndExport:"",
    PackingMasterRead:"",PackingMasterWrite:"",PackingMasterModify:"",PackingMasterDelete:"",
    EuDeclarationRead:"",EuDeclarationWrite:"",EuDeclarationModify:"",EuDeclarationDelete:"",
    ContractReviewRead:"",ContractReviewWrite:"",ContractReviewModify:"",ContractReviewDelete:"",
    JobWorkBalanceRead:"",JobWorkBalanceReportAndExport:"",
    AddBOMMasterRead:"",AddBOMMasterWrite:"",AddBOMMasterModify:"",AddBOMMasterDelete:"",
    BatchSerialSettingRead:"",BatchSerialSettingWrite:"",BatchSerialSettingModify:"",BatchSerialSettingDelete:"",
    ServiceRequisitionRead:"",ServiceRequisitionWrite:"",ServiceRequisitionModify:"",ServiceRequisitionDelete:"",
    SpecificDetailsRead:"",SpecificDetailsWrite:"",SpecificDetailsModify:"",SpecificDetailsDelete:"",


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
            <div className="d-flex justify-content-end mt-3 d-none " onClick={PermissonSubmitHandler}>
              <button className="btn btn-primary px-3">Submit</button></div>
            </div>
          </div> 
          </div>

          {/* Inventry */}
          <div className="row mt-2">
          <h5 className=" my-1">Inventry</h5>
          <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Inventry Group</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryGroupRead} name="InventryGroupRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryGroupWrite} name="InventryGroupWrite" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryGroupModify} name="InventryGroupModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryGroupDelete} name="InventryGroupDelete" id="" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">CategoryMaster</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryCategoryMasterRead} name="InventryCategoryMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryCategoryMasterWrite} name="InventryCategoryMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryCategoryMasterModify} name="InventryCategoryMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryCategoryMasterDelete} name="InventryCategoryMasterDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">HSN Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterRead} name="HsnMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterWrite} name="HsnMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterModify} name="HsnMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterDelete} name="HsnMasterDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterApproved1} name="HsnMasterApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterApproved2} name="HsnMasterApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterApproved3} name="HsnMasterApproved3" /></div>
              <div className='col-md-3' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Unit Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.UnitMasterRead} name="UnitMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.UnitMasterWrite} name="UnitMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.UnitMasterModify} name="UnitMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.UnitMasterDelete} name="UnitMasterDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Item Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterRead} name="ItemMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterWrite} name="ItemMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterModify} name="ItemMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterDelete} name="ItemMasterDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterApproved1} name="ItemMasterApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterApproved2} name="ItemMasterApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterApproved3} name="ItemMasterApproved3" /></div>
              <div className='col-md-3' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Price List</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PriceListRead} name="PriceListRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PriceListWrite} name="PriceListWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PriceListModify} name="PriceListModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PriceListDelete} name="PriceListDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor</p></div>
              <div className='col-md-1 text-center '><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRead}  name="VendorRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorWrite} name="VendorWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorModify} name="VendorModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorDelete} name="VendorDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorApproved1} name="VendorApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorApproved2} name="VendorApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorApproved3} name="VendorApproved3" /></div>
              <div className='col-md-3' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">VendorComplaint</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorComplaintRead} name="VendorComplaintRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorComplaintWrite} name="VendorComplaintWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorComplaintModify} name="VendorComplaintModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorComplaintDelete} name="VendorComplaintDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 '><p className="m-0 p-0">GRN</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnRead} name="GrnRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnWrite} name="GrnWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnModify}  name="GrnModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnDelete} name="GrnDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnApproved1} name="GrnApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnApproved2} name="GrnApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnApproved3} name="GrnApproved3" /></div>
              <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnReportAndExport} name="GrnReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 '><p className="m-0 p-0">Challan</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanRead} name="ChallanRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanWrite} name="ChallanWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanModify} name="ChallanModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanDelete} name="ChallanDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanApproved1} name="ChallanApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanApproved2} name="ChallanApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanApproved3} name="ChallanApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanReportAndExport} name="ChallanReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">GatePassReturn</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnRead} name="GatePassReturnRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnWrite} name="GatePassReturnWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnModify} name="GatePassReturnModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnDelete} name="GatePassReturnDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnApproved1} name="GatePassReturnApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnApproved2} name="GatePassReturnApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnApproved3} name="GatePassReturnApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnReportAndExport} name="GatePassReturnReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">MRS</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsRead} name="MrsRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsWrite} name="MrsWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsModify} name="MrsModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsDelete} name="MrsDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsApproved1} name="MrsApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsApproved2} name="MrsApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsApproved3} name="MrsApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsReportAndExport} name="MrsReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">MIS</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisRead}  name="MisRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisWrite}  name="MisWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisModify}  name="MisModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisDelete}  name="MisDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisApproved1}  name="MisApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisApproved2}  name="MisApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisApproved3} name="MisApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReportAndExport}  name="MisReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">MIS Return</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnRead} name="MisReturnRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnWrite} name="MisReturnWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnModify} name="MisReturnModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnDelete} name="MisReturnDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnApproved1} name="MisReturnApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnApproved2} name="MisReturnApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnApproved3} name="MisReturnApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnReportAndExport} name="MisReturnReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Gate Pass</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassRead} name="GatePassRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassWrite} name="GatePassWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassModify} name="GatePassModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassDelete} name="GatePassDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassApproved1} name="GatePassApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassApproved2} name="GatePassApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassApproved3} name="GatePassApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReportAndExport} name="GatePassReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'>  <p className="m-0 p-0">Delivery Note</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteRead} name="DeliveryNoteRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteWrite} name="DeliveryNoteWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteModify} name="DeliveryNoteModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteDelete} name="DeliveryNoteDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteApproved1} name="DeliveryNoteApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteApproved2} name="DeliveryNoteApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteApproved3} name="DeliveryNoteApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteReportAndExport} name="DeliveryNoteReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">StockAdjustment</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAdjustmentRead} name="StockAdjustmentRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAdjustmentWrite} name="StockAdjustmentWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAdjustmentModify} name="StockAdjustmentModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAdjustmentDelete} name="StockAdjustmentDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor Po</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorPoRead} name="VendorPoRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorPoWrite} name="VendorPoWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorPoModify} name="VendorPoModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorPoDelete} name="VendorPoDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor Survey</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorSurveyRead} name="VendorSurveyRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorSurveyWrite} name="VendorSurveyWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorSurveyModify} name="VendorSurveyModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorSurveyDelete} name="VendorSurveyDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorMasterRead} name="VendorMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorMasterWrite} name="VendorMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorMasterModify} name="VendorMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorMasterDelete} name="VendorMasterDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor Record</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRecordRead} name="VendorRecordRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRecordWrite} name="VendorRecordWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRecordModify} name="VendorRecordModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRecordDelete} name="VendorRecordDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Inventry Report</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryReportRead} name="InventryReportRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' ><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryReport_ReportAndExport} name="InventryReport_ReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Pending Bills </p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PendingBillsRead} name="PendingBillsRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PendingBillsReportAndExport} name="PendingBillsReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Stock Assign</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAssignRead} name="StockAssignRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAssignReportAndExport} name="StockAssignReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Logistic History</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LogisticHistoryRead} name="LogisticHistoryRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LogisticHistoryReportAndExport} name="LogisticHistoryReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Finished Goods</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FinishedGoodsRead} name="FinishedGoodsRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FinishedGoodsReportAndExport} name="FinishedGoodsReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Return Rejected</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedRead} name="ReturnRejectedRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedWrite} name="ReturnRejectedWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedModify} name="ReturnRejectedModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedDelete} name="ReturnRejectedDelete" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedReportAndExport} name="ReturnRejectedReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'>  <p className="m-0 p-0">Rejected Report</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RejectedReportRead} name="RejectedReportRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RejectedReport_ReportAndExport} name="RejectedReport_ReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Packing Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PackingMasterRead} name="PackingMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PackingMasterWrite} name="PackingMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PackingMasterModify} name="PackingMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PackingMasterDelete} name="PackingMasterDelete" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">EU Declaration</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EuDeclarationRead} name="EuDeclarationRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EuDeclarationWrite} name="EuDeclarationWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EuDeclarationModify} name="EuDeclarationModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EuDeclarationDelete} name="EuDeclarationDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">ContractReview</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReviewRead} name="ContractReviewRead"/></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReviewWrite} name="ContractReviewWrite"/></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReviewModify} name="ContractReviewModify"/></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReviewDelete} name="ContractReviewDelete"/></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">JobWorkBalance</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JobWorkBalanceRead} name="JobWorkBalanceRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' ><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JobWorkBalanceReportAndExport} name="JobWorkBalanceReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">AddBOMMaster</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AddBOMMasterRead} name="AddBOMMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AddBOMMasterWrite} name="AddBOMMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AddBOMMasterModify} name="AddBOMMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AddBOMMasterDelete} name="AddBOMMasterDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">BatchSerialSetting</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BatchSerialSettingRead} name="BatchSerialSettingRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BatchSerialSettingWrite} name="BatchSerialSettingWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BatchSerialSettingModify} name="BatchSerialSettingModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BatchSerialSettingDelete} name="BatchSerialSettingDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'>  <p className="m-0 p-0">ServiceRequisition</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ServiceRequisitionRead} name="ServiceRequisitionRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ServiceRequisitionWrite} name="ServiceRequisitionWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ServiceRequisitionModify} name="ServiceRequisitionModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ServiceRequisitionDelete} name="ServiceRequisitionDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Specific Details</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SpecificDetailsRead} name="SpecificDetailsRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SpecificDetailsWrite} name="SpecificDetailsWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SpecificDetailsModify} name="SpecificDetailsModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SpecificDetailsDelete} name="SpecificDetailsDelete" /></div>
              <div className='col-md-6' ></div>
            </div>  
            <div className="d-flex justify-content-end my-3 " onClick={PermissonSubmitHandler}>
              <button className="btn btn-primary px-3">Submit</button></div>
            </div>                       
          </div>
          </div>
          
      </div>
      
  // </div>
  )
}

export default ModuleMenuCommon