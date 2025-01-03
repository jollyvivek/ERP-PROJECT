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
  };

  const masterDropdown = () => {
    setMasterItems(!masterItems);
  };

  const settingDropdown = () => {
    setSettingItems(!settingItems);
  };

  const importExcelDropdown = () => {
    setImportExcelItem(!importExcelItem);
  };

  const financialYearDropdown = () =>{
    setFinancialYearItem(!financialYearItem);
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
            <li className="profile flex text-dark">
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
              <NavLink to='/role' className="nav-link w-100">Role</NavLink>
            </li>
            <li  className="title manage-user">            
              <NavLink to='/manageuser' className="nav-link w-100 ">Manage Users</NavLink>
            </li>
            <li className="master flex">
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
            <li className="d-flex justify-content-between align-items-center">
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
              <NavLink  className="nav-link w-100" onClick={()=>setIsPassModel(true)}>Change Password</NavLink>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <span>Import Excel</span>
              <span className="arrow-icon" onClick={importExcelDropdown}>
                <RiArrowDropDownLine />
              </span>
            </li>
            {importExcelItem ? (
              <ul className="import-excel-items">
                <li> <span onClick={()=>navigate('/importinstrument')}> Import Instrument </span></li>
                <li>
                  <span onClick={()=>navigate('/importitem')}> Import Item </span>
                </li>
                <li><span onClick={()=>navigate('/importitemopening')}>Import Item Opening Balance Group Wise</span></li>
                <li onClick={()=>navigate('/importbom')}><span> Import BOM </span></li>
                <li onClick={()=>navigate('/importoperation')}><span>Import Operatipon</span></li>
                <li onClick={()=>navigate('/importpackingbom')}><span>Import Packing BOM</span></li>
                <li onClick={()=>navigate('/importpricelist')}><span>Import Price List </span></li>
                <li onClick={()=>navigate('/importqctesting')}><span>Import QC Testing Master</span></li>
                <li onClick={()=>navigate('/importledger')}><span> Import Ledger </span></li>
                <li onClick={()=>navigate('/importpackinginstruction')}><span>Packing Instruction </span></li>
                <li onClick={()=>navigate('/testcertificate')}><span>Import Internal Test Certificate Details </span></li>
                <li><span>Import EU Declartion Into Item</span></li>
                <li><span>Import Export Description Into Item</span></li>
                <li><span>Import Rev. No. Into Item</span></li>
                <li><span>Import NetWeight in Operation</span></li>
                <li><span>Import NetWeight In Item</span></li>
                <li onClick={()=>navigate('/batchserial')}><span>Import BatchSerial In Item</span></li>
                <li onClick={()=>navigate('/chemicalmaster')}><span>Import Chemical Master</span></li>
                <li onClick={()=>navigate('/mechanicalmaster')}><span>Import Mechanical Master</span></li>
              </ul>
            ) : null}
            <li className="title">
              <span onClick={()=>navigate('/exportexcel')}>Export Excel</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <span>Financial Year Setting</span>
              <span className="arrow-icon" onClick={financialYearDropdown}><RiArrowDropDownLine /></span>
            </li>
            {financialYearItem ?(
            <ul className="finance-year-items">
                <li className="title" onClick={()=>navigate('/createyear')}> <span>Create Year </span></li>
                <li className="title" onClick={()=>navigate("/inventrysetting")}> <span>Inventry Setting </span></li>
                <li className="title" onClick={()=>navigate('/financesetting')}> <span>Financial Setting </span></li>
              </ul>
              ):null}

            <li className=" title" onClick={()=>navigate('/masterreport')}><span>Master Report</span></li>
            <li className="title" onClick={()=>navigate('/mailhistory')}><span>Mail History</span></li>
            <li className=" title" onClick={()=>navigate('/managementlog')}><span>Managemeny Log</span></li>
            <li className="title" onClick={()=>navigate('/batchtracking')}><span>Batch Tracking</span></li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Admin;
