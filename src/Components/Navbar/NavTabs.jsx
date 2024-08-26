import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavTabs = () => {
  const navigate = useNavigate()
  return (
    <div className='container-fluid'>
      <div className='row'>
      <div className="col-md-12 nav-btns ">
              <button className="btn btn-sm fs-5"
              onClick={()=>navigate("/company/*")}>Basic Details</button>
              <button className="btn btn-sm fs-5"
              onClick={()=>navigate('/tax_bankdetails')}>Tax & Bank Details</button>
              <button className="btn btn-sm fs-5"
              onClick={()=>navigate("/terms_condtions")}>Terms & Condtions</button>
              <button className="btn btn-sm fs-5 "
              onClick={()=>navigate("/report_heading")}>Report Haeding</button>
              <button className="btn btn-sm fs-5 "
              onClick={()=>navigate("/report_heading_two")}>Report Haeding</button>
              <button className="btn btn-sm fs-5 "
              onClick={()=>navigate("/other_setting")}>Other Setting</button>
              <button onClick={()=>navigate('/crmhr_setting')} className="btn btn-sm fs-5">CRM/HR Setting</button>
              <button onClick={()=>navigate('/finance_inventry_setting')} className="btn btn-sm fs-5 ">
                Finance/Inventory Setting
              </button>
              <button onClick={()=>navigate('/tcs_einvoice')} className="btn btn-sm fs-5 ">
                TCS Setting & E-Invoice
              </button>
              <button className="btn btn-sm fs-5 ">Costing Setting</button>
              <button className="btn btn-sm fs-5 ">Production setting</button>
              {/* <button className="btn btn-sm fs-5 ">Terms & Conditions</button> */}
      </div>
      </div>
      
    </div>
  )
}

export default NavTabs