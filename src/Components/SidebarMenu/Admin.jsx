import React from "react";
import "./SidebarMenu.css";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
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

  const masterDropdown = () => {
    setMasterItems(!masterItems);
    const master = document.getElementById("master").classList.add("active2")
    const profile = document.getElementById("profile").classList.remove("active2")
    const setting = document.getElementById("setting").classList.remove("active2")
    const importExcel = document.getElementById("importExcel").classList.remove("active2")
    const financialYear = document.getElementById("financialYear").classList.remove("active2")
  };

  const settingDropdown = () => {
    setSettingItems(!settingItems);
    const setting = document.getElementById("setting").classList.add("active2")
    const profile = document.getElementById("profile").classList.remove("active2")
    const master = document.getElementById("master").classList.remove("active2")
    const importExcel = document.getElementById("importExcel").classList.remove("active2")
    const financialYear = document.getElementById("financialYear").classList.remove("active2")
  };

  const importExcelDropdown = () => {
    setImportExcelItem(!importExcelItem);
    const importExcel = document.getElementById("importExcel").classList.add("active2")
    const profile = document.getElementById("profile").classList.remove("active2")
    const master = document.getElementById("master").classList.remove("active2")
    const setting = document.getElementById("setting").classList.remove("active2")
    const financialYear = document.getElementById("financialYear").classList.remove("active2")
  };

  const financialYearDropdown = () =>{
    setFinancialYearItem(!financialYearItem);
    const financialYear = document.getElementById("financialYear").classList.add("active2")
    const profile = document.getElementById("profile").classList.remove("active2")
    const master = document.getElementById("master").classList.remove("active2")
    const setting = document.getElementById("setting").classList.remove("active2")
    const importExcel = document.getElementById("importExcel").classList.remove("active2")
  }

  const ChangePasswordHandler = ()=>{
    setIsPassModel(true)
  }

  const RoleHandler = ()=>{
    const profile = document.getElementById("profile").classList.remove("active2")
    const master = document.getElementById("master").classList.remove("active2")
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
                <li  className="title company-details-title">
                  <NavLink to='/company' className="nav-link w-100 ">Edit Company</NavLink>
                </li>
              </ul>
            ) : null}
            <li className="title role" >           
              <NavLink to='/role' className="nav-link w-100" onClick={RoleHandler}>Role</NavLink>
            </li>
            <li  className="title manage-user">            
              <NavLink to='/manageuser' className="nav-link w-100 " onClick={RoleHandler}>Manage Users</NavLink>
            </li>
            <li id="master" className="master flex">
              <span>Master</span>
              <span className="arrow-icon" onClick={masterDropdown}>
                <RiArrowDropDownLine />
              </span>
            </li>
            {masterItems ? (
              <ul className="master-items">
                <li className="title CountryMaster">
                 <NavLink to='/countrymaster' className="nav-link w-100" > Country Master</NavLink>
                </li>
                <li className="title BankMaster">
                  <NavLink to='/bankmaster' className="nav-link w-100">Bank Master</NavLink>
                </li>
                <li className="title StateMaster">
                  <NavLink to='/statemaster' className="nav-link w-100">State Master</NavLink>
                </li>
              </ul>
            ) : null}
            <li id="setting" className="d-flex justify-content-between align-items-center">
              <span> Setting</span>
              <span className="arrow-icon" onClick={settingDropdown}>
                <RiArrowDropDownLine />
              </span>
            </li>
            {settingItems ? (
              <ul className="setting-items mb-3">
                <li className="title SerialSetting">
                  <NavLink to='/serialsetting' className="nav-link w-100"> Serial Setting </NavLink>
                </li>
                <li className="title ApprovalSetting">
                  <NavLink to='/approvalsetting' className="nav-link w-100">Approval Setting </NavLink>
                </li>
                <li className="title OrderSerialSetting ">
                  <NavLink to='/orderserialsetting' className="nav-link w-100">Order Serial Setting</NavLink>
                </li>
              </ul>
            ) : null}
            <li className="title ChangePassword">
              <NavLink  className="nav-link w-100" onClick={ChangePasswordHandler}>Change Password</NavLink>
            </li>
            <li id="importExcel" className="d-flex justify-content-between align-items-center">
              <span>Import Excel</span>
              <span className="arrow-icon" onClick={importExcelDropdown}>
                <RiArrowDropDownLine />
              </span>
            </li>
            {importExcelItem ? (
              <ul className="import-excel-items">
                <li className="title ImportInstrument"><NavLink to='/importinstrument' className="nav-link w-100"> Import Instrument </NavLink></li>
                <li className="title ImportItem"><NavLink to='/importitem' className="nav-link w-100"> Import Item </NavLink></li>
                <li className="title OpeningBalanceGroup ">
                  <NavLink to='/importitemopening' className="nav-link w-100">Import Item Opening Balance Group Wise</NavLink>
                </li>
                <li className="title ImportBom"><NavLink to='/importbom' className="nav-link w-100"> Import BOM </NavLink></li>
                <li className="title ImportOperation"><NavLink to='/importoperation' className="nav-link w-100">Import Operatipon</NavLink></li>
                <li className="title ImportPackingBom"><NavLink to='/importpackingbom' className="nav-link w-100">Import Packing BOM</NavLink></li>
                <li className="title ImportPriceList"><NavLink to='/importpricelist' className="nav-link w-100">Import Price List </NavLink></li>
                <li className="title QcTestingMaster"><NavLink to='/importqctesting' className="nav-link w-100">Import QC Testing Master</NavLink></li>
                <li className="title ImportLedger"><NavLink to='/importledger' className="nav-link w-100"> Import Ledger </NavLink></li>
                <li className="title PackingInstruction"><NavLink to='/importpackinginstruction' className="nav-link w-100">Packing Instruction </NavLink></li>
                <li className="title ImportTestCertificate"><NavLink to='/testcertificate' className="nav-link w-100">Import Internal Test Certificate Details </NavLink></li>
                <li><span>Import EU Declartion Into Item</span></li>
                <li><span>Import Export Description Into Item</span></li>
                <li><span>Import Rev. No. Into Item</span></li>
                <li><span>Import NetWeight in Operation</span></li>
                <li><span>Import NetWeight In Item</span></li>
                <li className="title ImportBatchSerial">
                  <NavLink to='/batchserial' className="nav-link w-100">Import BatchSerial In Item</NavLink>
                </li>
                <li className="title ImportChemicalMaster">
                  <NavLink to='/chemicalmaster' className="nav-link w-100">Import Chemical Master</NavLink>
                </li>
                <li className="title ImportMechanicalMaster">
                  <NavLink to='/mechanicalmaster' className="nav-link w-100">Import Mechanical Master</NavLink>
                </li>
              </ul>
            ) : null}
            <li className="title ExportExcel">
              <NavLink to='/exportexcel' className="nav-link w-100" onClick={RoleHandler}>Export Excel</NavLink>
            </li>
            <li id="financialYear" className="d-flex justify-content-between align-items-center">
              <span>Financial Year Setting</span>
              <span className="arrow-icon" onClick={financialYearDropdown}><RiArrowDropDownLine /></span>
            </li>
            {financialYearItem ?(
            <ul className="finance-year-items">
                <li className="title FinancialYearCreateYear">
                   <NavLink to='/createyear' className="nav-link w-100">Create Year </NavLink>
                </li>
                <li className="title FinancialYearInventrySetting"> 
                  <NavLink to='/inventrysetting' className="nav-link w-100">Inventry Setting </NavLink>
                </li>
                <li className="title FinancialYearFinancialSetting"> 
                  <NavLink to='/financesetting' className="nav-link w-100">Financial Setting </NavLink>
                </li>
              </ul>
              ):null}

            <li className="title AdminMasterReport">
              <NavLink to='/masterreport' className="nav-link w-100" onClick={RoleHandler}>Master Report</NavLink>
            </li>
            <li className="title AdminMailHistory">
              <NavLink to='/mailhistory' className="nav-link w-100" onClick={RoleHandler}>Mail History</NavLink>
            </li>
            <li className="title AdminManagementLog" >
              <NavLink to='/managementlog' className="nav-link w-100" onClick={RoleHandler}>Management Log</NavLink>
            </li>
            <li className="title AdminBatchTracking">
              <NavLink to='/batchtracking' className="nav-link w-100" onClick={RoleHandler}>Batch Tracking</NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Admin;
