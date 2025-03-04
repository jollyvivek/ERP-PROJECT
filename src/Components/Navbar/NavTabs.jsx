import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../Styles/NavTab.css'



const NavTabs = () => {
  const navigate = useNavigate()

  const NavLinkCss = ({isActive}) =>{
    return{
      
      // borderBottom:isActive ? "3px solid blue" :"",
      color:isActive ? "white":"",
      background:isActive ? "black" :""
    }

  }

  return (
    <div className='container-fluid'>
      <div className='row '>
      <div className="col-md-12 nav-btns d-none ">
              <button className="btn btn-sm fs-5">
                <NavLink to="/company/*" className="navLink basic" >Basic Details</NavLink> 
              </button>
              <button className="btn btn-sm fs-5">
               <NavLink to='/tax_bankdetails' style={NavLinkCss} className="navLink">Tax & Bank Details</NavLink> 
              </button>
              <button className="btn btn-sm fs-5">
                <NavLink to="/terms_condtions" style={NavLinkCss} className="navLink">Terms & Condtions</NavLink> 
              </button>
              <button className="btn btn-sm fs-5 ">
                 <NavLink to="/report_heading" style={NavLinkCss} className="navLink"> Report Heading</NavLink>   
              </button>
              <button className="btn btn-sm fs-5">
                <NavLink to="/report_heading_two" style={NavLinkCss} className="navLink">Report Heading</NavLink> 
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
                <NavLink to="/production_setting" style={NavLinkCss} className="navLink">Production Setting</NavLink> 
              </button>
              {/* <button className="btn btn-sm fs-5 ">Terms & Conditions</button> */}
      </div>
      
      </div>
      <div className='row mt-2'>
        <div className='col-md-12'>
          <ul className="nav">
            <li className="nav-item BasicDetails ">
              <NavLink to="/company" style={NavLinkCss} className="navLink" >Basic Details</NavLink> 
            </li>
            <li className="nav-item mb-1"> 
              <NavLink to='/tax_bankdetails' style={NavLinkCss} className=" navLink">Tax & Bank Details</NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/terms_condtions" style={NavLinkCss} className="navLink">Terms & Condtions</NavLink> 
            </li>
            <li className="nav-item mb-1">
            <NavLink to="/report_heading" style={NavLinkCss} className="navLink "> Report Heading</NavLink>
            </li>
            <li className="nav-item mb-1">
            <NavLink to="/report_heading_two" style={NavLinkCss} className="navLink ">Report Heading</NavLink> 
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/other_setting" style={NavLinkCss} className="navLink " >Other Setting</NavLink> 
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/crmhr_setting" style={NavLinkCss} className="navLink "> CRM/HR Setting</NavLink> 
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/finance_inventry_setting" style={NavLinkCss} className="navLink ">Finance/Inventory Setting</NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/tcs_einvoice" style={NavLinkCss} className="navLink "> TCS Setting & E-Invoice</NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/costing_setting" style={NavLinkCss} className="navLink ">Costing Setting</NavLink> 
            </li>
            <li className="nav-item mb-1 ">
              <NavLink to="/production_setting" style={NavLinkCss} className="navLink">Production Setting</NavLink>
            </li>
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default NavTabs