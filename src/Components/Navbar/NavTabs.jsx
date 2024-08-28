import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavTabs = () => {
  const navigate = useNavigate()

  const NavLinkCss = ({isActive}) =>{
    return{
      border:isActive ? "2px solid grey" :""
    }

  }

  return (
    <div className='container-fluid'>
      <div className='row'>
      <div className="col-md-12 nav-btns ">
              <button className="btn btn-sm fs-5">
                <NavLink to="/company/*" style={NavLinkCss} className="navLink">Basic Details</NavLink> 
              </button>
              <button className="btn btn-sm fs-5">
               <NavLink to='/tax_bankdetails' style={NavLinkCss} className="navLink">Tax & Bank Details</NavLink> 
              </button>
              <button className="btn btn-sm fs-5">
                <NavLink to="/terms_condtions" style={NavLinkCss} className="navLink">Terms & Condtions</NavLink> 
              </button>
              <button className="btn btn-sm fs-5 ">
                 <NavLink to="/report_heading" style={NavLinkCss} className="navLink"> Report Haeding</NavLink>   
              </button>
              <button className="btn btn-sm fs-5">
                <NavLink to="/report_heading_two" style={NavLinkCss} className="navLink">Report Haeding</NavLink> 
              </button>
              <button className="btn btn-sm fs-5">
                <NavLink to="/other_setting" style={NavLinkCss} className="navLink" >Other Setting</NavLink> 
              </button>
              <button className="btn btn-sm fs-5">
                <NavLink to="/crmhr_setting" style={NavLinkCss} className="navLink"> CRM/HR Setting</NavLink> 
              </button>
              <button className="btn btn-sm fs-5 ">
               <NavLink to="/finance_inventry_setting" style={NavLinkCss} className="navLink">Finance/Inventory Setting</NavLink> 
              </button>
              <button className="btn btn-sm fs-5 ">
               <NavLink to="/tcs_einvoice" style={NavLinkCss} className="navLink"> TCS Setting & E-Invoice</NavLink> 
              </button>
              <button className="btn btn-sm fs-5 ">
                <NavLink to="/costing_setting" style={NavLinkCss} className="navLink">Costing Setting</NavLink> 
              </button>
              <button  className="btn btn-sm fs-5 ">
                <NavLink to="/production_setting" style={NavLinkCss} className="navLink">Production setting</NavLink> 
              </button>
              {/* <button className="btn btn-sm fs-5 ">Terms & Conditions</button> */}
      </div>
      </div>
      
    </div>
  )
}

export default NavTabs