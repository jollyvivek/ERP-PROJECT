import React from "react";
import "./Sidebar.css";
import { FaBuilding } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Admin from "../SidebarMenu/Admin";
import { Route, Routes } from "react-router-dom";
import CompanyDetail from '../../Components/AdminItems/CompanyDetail'
import Role from '../../Components/AdminItems/Role'
import ManageUser from "../AdminItems/ManageUser";
import SidebarRight from "../Sidebar/SidebarRight";
import Inventry from "../SidebarMenu/Inventry";
import Purchase from "../SidebarMenu/Purchase";
import Finance from "../SidebarMenu/Finance";
import Quality from "../SidebarMenu/Quality";
import Crm from "../SidebarMenu/Crm";
import HrPayroll from "../SidebarMenu/HrPayroll";
import Production from "../SidebarMenu/Production";
import IsoReport from "../SidebarMenu/IsoReport";
import EnggMang from "../SidebarMenu/EnggMang";
import Other from "../SidebarMenu/Other";
import Logout from "../SidebarMenu/Logout";
import BasicDetails from "../AdminItems/BasicDetails";
import TaxAndBankDetails from "../AdminItems/TaxAndBankDetails";
import TermsCondtions from "../AdminItems/TermsCondtions";



const Sidebar = () => {
  return (
    <div className="sidebar container-fluid">
      <div className="row">
        <div className="col-md-3 left dashboard ">
        <div className="dashborad-cont">
            <span className="fs-3"><FaBuilding/></span>
            <span className="dashboard-title ">ERP BUSSINESS</span>
          </div>
          <div className="dashborad-cont">
            <span className="fs-3"><MdDashboard/></span>
            <span className="dashboard-title ">Dashboard</span>
          </div>
          <div className="item1">
            <Admin/>
            <Inventry/>
            <Purchase/>
            <Finance/>
            <Quality/>
            <Crm/>
            <HrPayroll/>
            <Production/>
            <IsoReport/>
            <EnggMang/>
            <Other/>
            <Logout/>
            
          </div>
        </div>
        <div className="col-md-9 p-0">
          
        <Routes>
        <Route path="/basic_details" element={<BasicDetails/>}/>
        <Route path="/" element={<SidebarRight/>}/>
        <Route path="/company/*" element={<CompanyDetail/>}/>
        <Route path="/tax_bankDetails" element={<TaxAndBankDetails/>}/>
        <Route path="/terms_condtions" element={<TermsCondtions/>}/>
        <Route path="/role" element={<Role/>}/>
        <Route path="manage_user" element={<ManageUser/>}/>
        
        <Route/>
      </Routes>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
