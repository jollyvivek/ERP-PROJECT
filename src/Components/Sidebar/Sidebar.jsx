import React, { useState } from "react";
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
import ReportHeading from '../AdminItems/ReportHeading';
import ReportHeadingTwo from '../AdminItems/ReportHeadingTwo'
import OtherSetting from "../AdminItems/OtherSetting";
import CrmHrSetting from "../AdminItems/CrmHrSetting";
import FinanceInventrySetting from "../AdminItems/FinanceInventrySetting";
import TcsSettingEInvoice from "../AdminItems/TcsSettingEInvoice";
import CostingSetting from "../AdminItems/CostingSetting";
import ProductionSetting from "../AdminItems/ProductionSetting";
import CountryMaster from "../AdminItems/CountryMaster";
import StateMaster from "../AdminItems/StateMaster";
import BankMaster from "../AdminItems/BankMaster";
import RoleModel from "../AdminItems/RoleModel";
import UserModel from "../../Pages/UserModel";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import SerialSetting from "../AdminSetting/SerialSetting";
import ApprovalSetting from "../AdminSetting/ApprovalSetting";
import OrderSerialSetting from "../AdminSetting/OrderSerialSetting";



const Sidebar = () => {
  const {url}= useContext(StoreContext)
  // const url = "http://localhost:4000";
  const [isRoleModel,setIsRoleModel]= useState(false)
  const [isUserModel,setIsUserModel] = useState(false)
  return (
    <>
    
    <div className="sidebar container-fluid ">
      { isRoleModel ? <RoleModel RoleModel={setIsRoleModel} /> : <></>}
      { isUserModel ?<UserModel addModelHandler={setIsUserModel} />:<></>}
      <div className="row">
        <div className="col-md-3 left dashboard ps-2 ">
        <div className="dashborad-cont">
            <span className="fs-3"><FaBuilding/></span>
            <span className="dashboard-title">ERP BUSSINESS</span>
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
        <div className="col-md-9 p-0" >
        <Routes>
        <Route path="/basic_details" element={<BasicDetails/>}/>
        <Route path="/" element={<SidebarRight/>}/>
        <Route path="/company/*" element={<CompanyDetail/>}/>
        <Route path="/tax_bankDetails" element={<TaxAndBankDetails url={url}/>}/>
        <Route path="/terms_condtions" element={<TermsCondtions/>}/>
        <Route path="/report_heading" element={<ReportHeading/>}/>
        <Route path="/report_heading_two" element={<ReportHeadingTwo/>}/>
        <Route path="/other_setting" element={<OtherSetting/>}/>
        <Route path="/crmhr_setting" element={<CrmHrSetting/>}/>
        <Route path="/finance_inventry_setting" element={<FinanceInventrySetting/>}/>
        <Route path="/tcs_einvoice" element={<TcsSettingEInvoice/>}/>
        <Route path ='/costing_setting' element={<CostingSetting/>}/>
        <Route path="/production_setting" element={<ProductionSetting/>}/>
        <Route path="/role" element={<Role RoleModel={setIsRoleModel}/>}/>
        {/* <Route path="/rolemodel" element={<RoleModel  />}/> */}
        <Route path="manageuser" element={<ManageUser addModelHandler={setIsUserModel} />}/>
        <Route path="/countrymaster" element={<CountryMaster url={url} />}/>
        <Route path="/statemaster" element={<StateMaster url={url} />}/>
        <Route path="/bankmaster" element={<BankMaster url={url}/> } />
        <Route path="/serialsetting" element={<SerialSetting/>}/>
        <Route path="/approvalsetting" element={<ApprovalSetting/>}/>
        <Route path="/orderserialsetting" element={<OrderSerialSetting/>}/>
       
      </Routes>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
