import React, { useState } from "react";
import "../../Styles/SidebarCommon.css";
import { FaIndustry } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Production = () => {

  const [productionItems,setProductionItems] = useState(false)
  const [production,setProduction] = useState(false)
  const [productionMaster,setProductionMaster] = useState(false)
  const [foundary,setFoundary] = useState(false)
  const [productionReports,setProductionReports] = useState(false)


  const productionItemsDropdown = () => {
    setProductionItems(!productionItems)
  };

  const productionDropdown = () =>{
    setProduction(!production)
  };

  const productionMasterDropdown = () =>{
    setProductionMaster(!productionMaster)
  };

  const foundaryDropdown = () =>{
    setFoundary(!foundary)
  };

  const productionReportsDropdown = () =>{
    setProductionReports(!productionReports)
  }

  return (
    <div className="production">
      <div className="production-top flex lineHeight">
        <span className="icon fs-2">
          <FaIndustry />
        </span>
        <span className="title">Production</span>
        <span className="arrow-icon" onClick={productionItemsDropdown}>
          <RiArrowDropDownLine />
        </span>
      </div>
      
      {productionItems ? (
      <div className="production-items-cont">
        <ul className="production-items">
          <li className=" production-items-production flex lineHeight">
            <span className="title">Production</span>
            <span className="arrow-icon" onClick={productionDropdown}>
              <RiArrowDropDownLine />{" "}
            </span>
          </li>
          {production ? (
          <ul className="production-items">
            <li className="production-master flex lineHeight">
              <span  className="title">
                Master
              </span>
              <span className="arrow-icon" onClick={productionMasterDropdown}>
                <RiArrowDropDownLine/>
              </span>
            </li>
            {productionMaster ? (
            <ul class="production-master-items p-0">
              <li className="title"> Production Unit </li>
              <li className="title"> Operation Master </li>
              <li className="title"> Machine Master</li>
              <li className="title"> Reason Master </li>
              <li className="title"> Project Planning Department </li>
              <li className="title"> Machine Category</li>
            </ul>
            ):null}

              <li className="title"> Work Order</li>
              <li className="title">Production Planning</li>
              <li className="title">Production Report</li>
              <li className="title">Breakdown Intimation</li>
              <li className="title">Project Planning and Monitoring</li>
              <li className="title">Production Report New</li>
              <li className="title">Issue Unit Stock</li>
              <li className="title">Recieve Unit Stock</li>
              <li className="title">Internal Issue Stock</li>
              <li className="title">Internal Reverse Stock</li>
          </ul>
            ):null}

          <li className="foundary flex lineHeight">
            <span  className="title">Foundary Production</span>
            <span className="arrow-icon" onClick={foundaryDropdown}><RiArrowDropDownLine/></span>
          </li>
          {foundary ? (
          <ul className="foundary-items">
            <li className="title">Element Master</li>
            <li className="title">Composition Master</li>
            <li className="title">Melting</li>
            <li className="title">Chemical Test</li>
            <li className="title">Mechanical Test</li>
            <li className="title">Melting Report With Item</li>
          </ul>
          ):null}
          <li className="title">Production Planing Register</li>

          <li className="reports flex lineHeight">
            <span className="title" >Reports</span>
            <span className="arrow-icon" onClick={productionReportsDropdown}><RiArrowDropDownLine/> </span>
          </li>
          {productionReports ? (
          <ul className="reports-items">
            <li className="title">Production VS Planning Report</li>
            <li className="title">Daily Production Report</li>
            <li className="title">Rejection Report</li>
            <li className="title">Re-Work Report</li>
            <li className="title">Work In Progress</li>
            <li className="title">Process Monitoring</li>
            <li className="title">Operator Efficiency</li>
            <li className="title">Production Cum Sales Order Report</li>
            <li className="title">Dispatch Report</li>
            <li className="title">CNC Production Report</li>
          </ul>
          ):null}
        </ul>
      </div>
      ):null}

    </div>
  );
};

export default Production;
