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
            <li className="title role" onClick={()=>navigate('/role')}>           
              <span>Role</span>
            </li>
            <li  className="title manage-user" onClick={()=>navigate('/manageuser')}>            
              <span>Manage Users</span>
            </li>
            <li className="master flex">
              <span>Master</span>
              <span className="arrow-icon" onClick={masterDropdown}>
                <RiArrowDropDownLine />
              </span>
            </li>
            {masterItems ? (
              <ul className="master-items">
                <li className="title" onClick={()=>navigate("/countrymaster")} >
                 <span > Country Master</span>
                </li>
                <li className="title" onClick={()=>navigate('/bankmaster')}>
                  <span>Bank Master</span>
                </li>
                <li className="title" onClick={()=>navigate('/statemaster')}>
                  <span>State Master</span>
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
                <li>
                  <span onClick={()=>navigate('/serialsetting')}> Serial Setting </span>
                </li>
                <li>
                  <span onClick={()=>navigate('/approvalsetting')}>Approval Setting </span>
                </li>
                <li>
                  <span onClick={()=>navigate('/orderserialsetting')}>Order Serial Setting</span>
                </li>
              </ul>
            ) : null}
            <li className="title">
              <span onClick={()=>setIsPassModel(true)}>Change Password</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <span>Import Excel</span>
              <span className="arrow-icon" onClick={importExcelDropdown}>
                <RiArrowDropDownLine />
              </span>
            </li>
            {importExcelItem ? (
              <ul className="import-excel-items">
                <li>
                  {" "}
                  <span> Import Instrument </span>
                </li>
                <li>
                  <span> Import Item </span>
                </li>
                <li>
                  {" "}
                  <span>Import Item Opening Balance Group Wise</span>
                </li>
                <li>
                  <span> Import BOM </span>
                </li>
                <li>
                  {" "}
                  <span>Import Operatipon </span>
                </li>
                <li>
                  {" "}
                  <span>Import Packing BOM</span>
                </li>
                <li>
                  {" "}
                  <span>Import Price List </span>
                </li>
                <li>
                  {" "}
                  <span>Import QC Testing Master</span>{" "}
                </li>
                <li>
                  <span> Import Ledger </span>
                </li>
                <li>
                  {" "}
                  <span>Packing Instruction </span>
                </li>
                <li>
                  {" "}
                  <span>Import Internal Test Certificate Details </span>
                </li>
                <li>
                  {" "}
                  <span>Import EU Declartion Into Item</span>{" "}
                </li>
                <li>
                  <span>Import Export Description Into Item</span>
                </li>
                <li>
                  <span>Import Rev. No. Into Item</span>
                </li>
                <li>
                  {" "}
                  <span>Import NetWeight in Operation</span>
                </li>
                <li>
                  {" "}
                  <span>Import NetWeight In Item</span>{" "}
                </li>
                <li>
                  {" "}
                  <span>Import BatchSerial In Item</span>
                </li>
                <li>
                  {" "}
                  <span>Import Chemical Master</span>{" "}
                </li>
                <li>
                  {" "}
                  <span>Import Mechanical Master</span>
                </li>
              </ul>
            ) : null}
            <li className="title">
              <span>Export Excel</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
              <span>Financial Year Setting</span>
              <span className="arrow-icon" onClick={financialYearDropdown}><RiArrowDropDownLine /></span>
            </li>
            {financialYearItem ?(
            <ul className="finance-year-items">
                <li className="title"> <span>Create Year </span></li>
                <li className="title"> <span>Inventry Setting </span></li>
                <li className="title"> <span>Financial Setting </span></li>
              </ul>
              ):null}

            <li className=" title">
              <span>Master Report</span>
            </li>
            <li className=" title">
              <span>Mail History</span>
            </li>
            <li className=" title">
              <span>Managemeny Log</span>
            </li>
            <li className="title">
              <span>Batch Tracking</span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Admin;
