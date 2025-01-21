import React from "react";
import "./SidebarMenu.css";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
// import $ from 'jquery'
import { Link, NavLink, useNavigate } from "react-router-dom";


const Admin = ({userData,setIsPassModel}) => {

  const [adminItems, setAdminItem] = useState(false);
  const [profileItem, setProfileItem] = useState(false);
  const [masterItems, setMasterItems] = useState(false);
  const [settingItems, setSettingItems] = useState(false);
  const [importExcelItem, setImportExcelItem] = useState(false);
  const [financialYearItem,setFinancialYearItem] = useState(false)
  const navigate = useNavigate()

  const openAdminMenu = () => {
    setAdminItem(!adminItems);
  };

  const profileDropedown = () => {
    setProfileItem(!profileItem);
    const profile = document.getElementById("profile").classList.add("active2");
    const master = document.getElementById("master").classList.remove("active2")
    const setting = document.getElementById("setting").classList.remove("active2")
    const importExcel = document.getElementById("importExcel").classList.remove("active2")
    const financialYear = document.getElementById("financialYear").classList.remove("active2")
  };

  const ProfileEditCompanyHandler = ()=>{
    const EditCompany = document.querySelector(".EditCompany").classList.add("active2");
  }

  const masterDropdown = () => {
    setMasterItems(!masterItems);
    const master = document.getElementById("master").classList.add("active2")
    const profile = document.getElementById("profile").classList.remove("active2")
    // const ProfileEditCompany = document.getElementById("ProfileEditCompany").classList.remove("active2");
    const setting = document.getElementById("setting").classList.remove("active2")
    const importExcel = document.getElementById("importExcel").classList.remove("active2")
    const financialYear = document.getElementById("financialYear").classList.remove("active2")
  };
  const MasterHandler =()=>{
    // const ProfileEditCompany = document.querySelector(".EditCompany").classList.remove("active");
    const RoleActive =document.querySelector(".RoleActive").classList.remove("active");
    const ManageUsersActive=document.querySelector(".ManageUsersActive").classList.remove("active");
    const ExportExcelActive =document.querySelector(".ExportExcelActive").classList.remove("active");
    const AdminMasterReportActive =document.querySelector(".AdminMasterReportActive").classList.remove("active");
    const MailHistoryActive =document.querySelector(".MailHistoryActive").classList.remove("active"); 
    const ManagementLogActive =document.querySelector(".ManagementLogActive").classList.remove("active")
    const BatchTrackingActive =document.querySelector(".BatchTrackingActive").classList.remove("active")
  }

  const settingDropdown = () => {
    setSettingItems(!settingItems);
    const setting = document.getElementById("setting").classList.add("active2")
    const profile = document.getElementById("profile").classList.remove("active2")
    // const ProfileEditCompany = document.querySelector(".ProfileEditCompany").classList.remove("active2");
    // const EditCompany = document.querySelector(".EditCompany").classList.remove("active2");
    const master = document.getElementById("master").classList.remove("active2")
    const importExcel = document.getElementById("importExcel").classList.remove("active2")
    const financialYear = document.getElementById("financialYear").classList.remove("active2")
  };

  

  const importExcelDropdown = () => {
    setImportExcelItem(!importExcelItem);
    const importExcel = document.getElementById("importExcel").classList.add("active2")
    const profile = document.getElementById("profile").classList.remove("active2")
    // const ProfileEditCompany = document.querySelector(".ProfileEditCompany").classList.remove("active2");
    // const EditCompany = document.querySelector(".EditCompany").classList.remove("active2");
    const master = document.getElementById("master").classList.remove("active2")
    const setting = document.getElementById("setting").classList.remove("active2")
    const financialYear = document.getElementById("financialYear").classList.remove("active2")
  };

  const financialYearDropdown = () =>{
    setFinancialYearItem(!financialYearItem);
    const financialYear = document.getElementById("financialYear").classList.add("active2")
    const profile = document.getElementById("profile").classList.remove("active2")
    // const ProfileEditCompany = document.querySelector(".ProfileEditCompany").classList.remove("active2");
    // const EditCompany = document.querySelector(".EditCompany").classList.remove("active2");
    const master = document.getElementById("master").classList.remove("active2")
    const setting = document.getElementById("setting").classList.remove("active2")
    const importExcel = document.getElementById("importExcel").classList.remove("active2")
  }

  const ChangePasswordHandler = ()=>{
    setIsPassModel(true)
  }

  const RoleHandler = (e)=>{
    // e.preventDefault()
    const profile = document.getElementById("profile").classList.remove("active2")
    // const ProfileEditCompany = document.getElementById("ProfileEditCompany").classList.remove("active2");
    // const EditCompany = document.querySelector(".EditCompany")
    //   EditCompany.classList.remove("active2");
    //   console.log(EditCompany)

    setProfileItem(false)
    setMasterItems(false)
    setSettingItems(false)
    setImportExcelItem(false)
    setFinancialYearItem(false)
    const master = document.querySelector("#master").classList.remove("active2")
    const setting = document.getElementById("setting").classList.remove("active2")
    const importExcel = document.getElementById("importExcel").classList.remove("active2")
    const financialYear = document.getElementById("financialYear").classList.remove("active2")
  }

  return (
    <div className="admin-menu ">
      <div className=" admin-menu-cont flex mb-1">
        <span className="icon fs-3">
          <FaUser />
        </span>
        <span className="title">Admin</span>
        <span onClick={openAdminMenu} className="arrow-icon">
          <RiArrowDropDownLine />{" "}
        </span>
      </div>
      {adminItems ? (
        <div id="admin-items" className="admin-items">
          <ul>
            <li id="profile" className="profile flex text-dark">
              <span>Profile</span>
              <span
                className=" profile-arrow fs-1 "
                onClick={profileDropedown}
              >
                {" "}
                <RiArrowDropDownLine />
              </span>
            </li>
            {profileItem ? (
              <ul className="profile-items">
                <li id="ProfileEditCompany" onClick={ProfileEditCompanyHandler}  
                className="title flex gap-1 company-details-title my-1 py-0 ProfileEditCompany">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink  to='/company' className="nav-link w-100 px-2 EditCompany"   >Edit Company</NavLink>
                </li>
              </ul>
            ) : null}
            <li className="title role" onClick={RoleHandler} >           
              <NavLink to='/role' className="nav-link w-100 RoleActive">Role</NavLink>
            </li>
            <li  className="title manage-user" onClick={RoleHandler}>            
              <NavLink to='/manageuser' className="nav-link w-100 ManageUsersActive">Manage Users</NavLink>
            </li>
            <li id="master" className="master flex" onClick={MasterHandler}>
              <span>Master</span>
              <span className="arrow-icon" onClick={masterDropdown}>
                <RiArrowDropDownLine />
              </span>
            </li>
            {masterItems ? (
              <ul className="master-items">
                <li className="title  CountryMaster flex gap-1">
                <span className="text-dark fs-4"><GoDotFill /></span>
                 <NavLink to='/countrymaster' className="nav-link w-100 px-2 " > Country Master</NavLink>
                </li>
                <li className="title BankMaster flex gap-1">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/bankmaster' className="nav-link w-100 px-2 ">Bank Master</NavLink>
                </li>
                <li className="title StateMaster flex gap-1">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/statemaster' className="nav-link w-100 px-2 ">State Master</NavLink>
                </li>
              </ul>
            ) : null}
            <li id="setting" className="d-flex justify-content-between align-items-center" onClick={MasterHandler} >
              <span> Setting</span>
              <span className="arrow-icon" onClick={settingDropdown}>
                <RiArrowDropDownLine />
              </span>
            </li>
            {settingItems ? (
              <ul className="setting-items mb-3">
                <li className="title SerialSetting flex gap-1">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/serialsetting' className="nav-link w-100 px-2"> Serial Setting </NavLink>
                </li>
                <li className="title ApprovalSetting flex gap-1">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/approvalsetting' className="nav-link w-100 px-2">Approval Setting </NavLink>
                </li>
                <li className="title OrderSerialSetting flex gap-1">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/orderserialsetting' className="nav-link w-100 px-2">Order Serial Setting</NavLink>
                </li>
              </ul>
            ) : null}
            <li className="title ChangePassword">
              <NavLink  className="nav-link w-100" onClick={ChangePasswordHandler}>Change Password</NavLink>
            </li>
            <li id="importExcel" className="d-flex justify-content-between align-items-center" onClick={MasterHandler}>
              <span>Import Excel</span>
              <span className="arrow-icon" onClick={importExcelDropdown}>
                <RiArrowDropDownLine />
              </span>
            </li>
            {importExcelItem ? (
              <ul className="import-excel-items">
                <li className="title flex gap-1 ImportInstrument">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/importinstrument' className="nav-link w-100 px-2"> Import Instrument </NavLink>
                </li>
                <li className="title flex gap-1 ImportItem">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/importitem' className="nav-link w-100 px-2"> Import Item </NavLink></li>
                <li className="title flex gap-1 OpeningBalanceGroup ">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/importitemopening' className="nav-link w-100 px-2">Import Item Opening Balance Group Wise</NavLink>
                </li>
                <li className="title flex gap-1 ImportBom">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/importbom' className="nav-link w-100 px-2"> Import BOM </NavLink>
                </li>
                <li className="title flex gap-1 ImportOperation">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/importoperation' className="nav-link w-100 px-2">Import Operatipon</NavLink>
                  </li>
                <li className="title flex gap-1 ImportPackingBom">
                  <span className="text-dark fs-4 "><GoDotFill /></span>
                  <NavLink to='/importpackingbom' className="nav-link w-100 px-2">Import Packing BOM</NavLink>
                </li>
                <li className="title flex gap-1 ImportPriceList">
                  <span className="text-dark fs-4 "><GoDotFill /></span>
                  <NavLink to='/importpricelist' className="nav-link w-100 px-2">Import Price List </NavLink>
                </li>
                <li className="title flex gap-1 QcTestingMaster">
                  <span className="text-dark fs-4 "><GoDotFill /></span>
                  <NavLink to='/importqctesting' className="nav-link w-100 px-2">Import QC Testing Master</NavLink>
                </li>
                <li className="title flex gap-1 ImportLedger">
                  <span className="text-dark fs-4 "><GoDotFill /></span>
                  <NavLink to='/importledger' className="nav-link w-100 px-2"> Import Ledger </NavLink>
                </li>
                <li className="title flex gap-1 PackingInstruction">
                  <span className="text-dark fs-4 "><GoDotFill /></span>
                  <NavLink to='/importpackinginstruction' className="nav-link w-100 px-2">Packing Instruction </NavLink>
                </li>
                <li className="title flex gap-1 ImportTestCertificate">
                  <span className="text-dark fs-4 "><GoDotFill /></span>
                  <NavLink to='/testcertificate' className="nav-link w-100 px-2">Import Internal Test Certificate Details </NavLink>
                </li>
                <li><span>Import EU Declartion Into Item</span></li>
                <li><span>Import Export Description Into Item</span></li>
                <li><span>Import Rev. No. Into Item</span></li>
                <li><span>Import NetWeight in Operation</span></li>
                <li><span>Import NetWeight In Item</span></li>
                <li className="title flex gap-1 ImportBatchSerial">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/batchserial' className="nav-link w-100 px-2">Import BatchSerial In Item</NavLink>
                </li>
                <li className="title flex gap-1 ImportChemicalMaster">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/chemicalmaster' className="nav-link w-100 px-2">Import Chemical Master</NavLink>
                </li>
                <li className="title flex gap-1 ImportMechanicalMaster">
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/mechanicalmaster' className="nav-link w-100 px-2">Import Mechanical Master</NavLink>
                </li>
              </ul>
            ) : null}
            <li className="title ExportExcel" onClick={RoleHandler}>
              <NavLink to='/exportexcel' className="nav-link w-100 ExportExcelActive" 
              // onClick={RoleHandler}
              >Export Excel</NavLink>
            </li>
            <li id="financialYear" className="d-flex justify-content-between align-items-center" onClick={MasterHandler}>
              <span>Financial Year Setting</span>
              <span className="arrow-icon" onClick={financialYearDropdown}><RiArrowDropDownLine /></span>
            </li>
            {financialYearItem ?(
            <ul className="finance-year-items">
                <li className="title flex gap-1 FinancialYearCreateYear">
                    <span className="text-dark fs-4"><GoDotFill /></span>
                   <NavLink to='/createyear' className="nav-link w-100 px-2">Create Year </NavLink>
                </li>
                <li className="title flex gap-1 FinancialYearInventrySetting"> 
                  <span className="text-dark fs-4"><GoDotFill /></span>
                  <NavLink to='/inventrysetting' className="nav-link w-100 px-2">Inventry Setting </NavLink>
                </li>
                <li className="title flex gap-1 FinancialYearFinancialSetting">
                  <span className="text-dark fs-4"><GoDotFill /></span> 
                  <NavLink to='/financesetting' className="nav-link w-100 px-2">Financial Setting </NavLink>
                </li>
              </ul>
              ):null}

            <li className="title AdminMasterReport" onClick={RoleHandler}>
              <NavLink to='/masterreport' className="nav-link w-100 AdminMasterReportActive">Master Report</NavLink>
            </li>
            <li className="title AdminMailHistory" onClick={RoleHandler}>
              <NavLink to='/mailhistory' className="nav-link w-100 MailHistoryActive">Mail History</NavLink>
            </li>
            <li className="title AdminManagementLog" onClick={RoleHandler} >
              <NavLink to='/managementlog' className="nav-link w-100 ManagementLogActive">Management Log</NavLink>
            </li>
            <li className="title AdminBatchTracking" onClick={RoleHandler}>
              <NavLink to='/batchtracking' className="nav-link w-100 BatchTrackingActive">Batch Tracking</NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Admin;
