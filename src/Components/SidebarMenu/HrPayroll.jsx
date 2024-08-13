import React, { useState } from 'react'
import '../../Styles/SidebarCommon.css'
import { FaUserGroup } from "react-icons/fa6";
import { RiArrowDropDownLine } from 'react-icons/ri'

const HrPayroll = () => {

  const [hrPayrollItems,setHrPayrollItems] = useState(false)
  const [hrMaster,setHrMaster]=useState(false)
  const [hrMasterHolidays,setHrMasterHolidays] = useState(false)
  const [hrLeave,setHrLeave] = useState(false)
  const [hrLeaveMaster,setHrLeaveMaster] = useState(false)
  const [hrEmployee,setHrEmployee] = useState(false)
  const [employeeMaster,setEmployeeMaster] = useState(false)
  const [hrPerformance,setHrPerformance] = useState(false)
  const [performanceMaster,setPerformanceMaster] = useState(false)
  const [hrAttendance,setHrAttendance] = useState(false)
  const [hrPayroll,setHrPayroll] = useState(false)
  const [payrollMonthly,setPayrollMonthly] = useState(false)
  const [payrollWeekly,setPayrollWeekly] = useState(false)
  const [hrReports,setHrReports] = useState(false)
  const [hrPayrollGraphs,setHrPayrollGraphs] = useState(false)


const hrPayrollDropdown = () =>{
  setHrPayrollItems(!hrPayrollItems)
};

const hrPayrollMasterDropdown = () =>{
  setHrMaster(!hrMaster)
};

const hrMasterHolidaysDropdown = () =>{
setHrMasterHolidays(!hrMasterHolidays)
};

const hrLeaveDropdown = () =>{
  setHrLeave(!hrLeave)
};

const hrLeaveMasterDropdown = () =>{
  setHrLeaveMaster(!hrLeaveMaster)
};

const hrEmployeeDropdown = () =>{
setHrEmployee(!hrEmployee)
};

const hrEmployeeMasterDropdown = () =>{
setEmployeeMaster(!employeeMaster)
};

const hrPerformanceDropdown = () =>{
setHrPerformance(!hrPerformance)
};

const performanceMasterDropdown = () =>{
setPerformanceMaster(!performanceMaster)
};

const hrAttendanceDropdown = () =>{
setHrAttendance(!hrAttendance)
};

const payrollDropdown = () =>{
setHrPayroll(!hrPayroll)
};

const hrPayrollMonthlyDropdown = () =>{
setPayrollMonthly(!payrollMonthly)
};

const payrollWeeklyDropdown = () =>{
setPayrollWeekly(!payrollWeekly)
};

const hrPayrollReportsDropdown = () =>{
setHrReports(!hrReports)
}

const hrPayrollGraphsDropdown = () =>{
  setHrPayrollGraphs(!hrPayrollGraphs)
}

  return (
    <div className='hrPayroll'>
      <div className='hrPayroll-top flex lineHeight'>
        <span className='icon fs-2'><FaUserGroup /></span>
        <span className='title'>Hr and Payroll</span>
        <span className='arrow-icon' onClick={hrPayrollDropdown}><RiArrowDropDownLine/></span>
      </div>

      {hrPayrollItems ? (
      <div className='hrPayroll-items'>
      <ul class="hr-items">
              <li class=" hrPayroll-master flex lineHeight">
                <span className="title">Master</span>
                <span class="arrow-icon" onClick={hrPayrollMasterDropdown}><RiArrowDropDownLine/></span>
              </li>
              {hrMaster ? (
              <ul className="hr-master-items">
                <li className='title'>Employee Category</li>
                <li className='title'>Department</li>
                <li className='title'>Postion</li>
                <li className='holiday flex lineHeight'>
                  <span className='title'>Holidays</span>
                  <span className="arrow-icon" onClick={hrMasterHolidaysDropdown}>
                    <RiArrowDropDownLine/> 
                  </span>
                </li>
                {hrMasterHolidays ? (
                <ul className="hr-holidays-items">
                  <li className='title'>Holidays</li>
                  <li className='title'>Import Holidays</li>
                </ul>
                ):null}
                <li className='title'>Event Type</li>
              </ul>
              ):null}

              <li className="leave flex lineHeight">
                <span className="title">Leave</span>
                <span class="arrow-icon" onClick={hrLeaveDropdown}><RiArrowDropDownLine/></span>
              </li>
              {hrLeave ? (
              <ul className="hr-leave-items">
                <li className=" leave-master flex lineHeight">
                  <span className="title">Master</span>
                  <span className="arrow-icon"  onClick={hrLeaveMasterDropdown}>
                    <RiArrowDropDownLine/>
                    </span>
                </li>
                {hrLeaveMaster ? (
                <ul className="hr-leave-master-items">
                  <li className='title'>Leave Type</li>
                  <li className='title'>Leave</li>
                </ul>
                ):null}
                <li className='title'>Apply Leave</li>
                <li className='title'>Leave Approvel</li>
                <li className='title'>Monthly Add Leave</li>
                <li className='title'>Monthly Detuct Leave </li>
              </ul>
              ):null}

              <li className=" employee flex lineHeight ">
                <span className="title">Employee</span>
                <span className="arrow-icon" onClick={hrEmployeeDropdown}><RiArrowDropDownLine/></span>
              </li>
              {hrEmployee ? (
              <ul className="hr-employee-items">
                <li class="employee-master flex lineHeight ">
                  <span className="title">Master</span>
                  <span className="arrow-icon" onClick={hrEmployeeMasterDropdown}><RiArrowDropDownLine/></span>
                </li>
                {employeeMaster ? (
                <ul className=" hr-employee-master-items">
                  <li className='title'>Shift</li>
                  <li className='title'>Employee</li>
                </ul>
                ):null}
                <li className='title'>Assign Shift</li>
                <li className='title'>Shift Attendace</li>
              </ul>
                ):null}

              <li className=" performance flex lineHeight">
                <span className="title">Performance</span>
                <span className="arrow-icon" onClick={hrPerformanceDropdown}> <RiArrowDropDownLine/></span>
              </li>
                {hrPerformance ? (
              <ul className="hr-performance-items">
                <li class=" performance-master flex lineHeight ">
                  <span className="title">Master</span>
                  <span className="arrow-icon" onClick={performanceMasterDropdown}><RiArrowDropDownLine/> </span>
                </li>
                  {performanceMaster ? (
                <ul className="hr-performance-master-items">
                  <li className='title'>Appraisal Questions </li>
                  <li className='title'>Indicators</li>
                  <li className='title'>Reating Heads</li>
                  <li className='title'>Ratings</li>
                  <li className='title'>Increment</li>
                </ul>
                ):null}
                <li className='title'>Memo</li>
                <li className='title'>Performance</li>
                <li className='title'>Appraisal</li>
              </ul>
              ):null}

              <li className="attendance flex lineHeight">
                <span className="title">Attendance</span>
                <span className="arrow-icon" onClick={hrAttendanceDropdown} > <RiArrowDropDownLine/>  </span>
              </li>
              {hrAttendance ?(
              <ul className="hr-attendance-items">
                <li className='title'>Device</li>
                <li className='title'>Device Connection</li>
                <li className='title'>Device Connection  Using URL</li>
                <li className='title'>Device Connection Time Machine </li>
                <li className='title'>Outdoor Attendance Entry</li>
                <li className='title'>Send Attendance  SMS</li>
                <li className='title'>Hourly Attendance  Entry</li>
              </ul>
              ):null}

              <li className="payroll flex lineHeight">
                <span className="title">Payroll</span>
                <span className="arrow-icon" onClick={payrollDropdown}><RiArrowDropDownLine/></span>
              </li>
              {hrPayroll ? (
              <ul className=" hr-payroll-items">
                <li className='title'>Salary Formula</li>
                <li className='title'>Salary Category</li>
                <li className='title'>Salary Increment</li>
                <li className='title'>Advance Payment</li>
                <li className='title'> Attendance Payment Approval </li>

                <li className="monthly-salery flex lineHeight">
                  <span  className="title">Monthly Salary</span>
                  <span className="arrow-icon" onClick={hrPayrollMonthlyDropdown}> <RiArrowDropDownLine/> </span>
                </li>
                {payrollMonthly ? (
                <ul className=" hr-monthlysalary-items">
                  <li className='title'>Generate Salary</li>
                  <li className='title'>Pay Salary</li>
                  <li className='title'>Genrate Salary Report </li>
                </ul>
                  ):null}

                <li className="weekly-salery flex lineHeight">
                  <span className="title">Weekly Salary</span>
                  <span className="arrow-icon" onClick={payrollWeeklyDropdown}><RiArrowDropDownLine/></span>
                </li>
                  {payrollWeekly ? (
                <ul className="hr-weeklysalary-items">
                  <li className='title'>Generate Salary</li>
                  <li className='title'>Pay Salary</li>
                  <li className='title'>Genrate Salary Report</li>
                </ul>
                  ):null}

                <li className='title'>Send Mail Records </li>
              </ul>
              ):null}

              <li className="hrPayroll-reports flex lineHeight">
                <span  className="title">Reports</span>
                <span className="arrow-icon" onClick={hrPayrollReportsDropdown}><RiArrowDropDownLine/></span>
              </li>
              {hrReports ? (
              <ul class="hr-reports-items px-0">
                <li className='title'>Employee Reports</li>
                <li className='title'>Attendance Register </li>
                <li className='title'>Shift Register</li>
                <li className='title'>Attendance Report </li>
                <li className='title'>Device Log</li>
                <li className='title'>Leave Report</li>
                <li className='title'>Line Manager  Report</li>
                <li className='title'> Leave Statement</li>
              </ul>
                ):null}

              <li className="hrPayroll-graphs flex lineHeight">
                <span className="title">Graphs</span>
                <span className="arrow-icon" onClick={hrPayrollGraphsDropdown}><RiArrowDropDownLine/></span>
              </li>
              {hrPayrollGraphs ? (
              <ul className="hr-graphs-items">
                <li className='title'>Leave Graph</li>
                <li className='title'>Organigation  Chart</li>
                <li className='title'>Departmentwise  Chart</li>
                <li className='title'>Postion wise  Chart</li>
              </ul>
              ):null}
              <li className='title'>Send Sms </li>
            </ul>

      </div>
      ):null}


    </div>
  )
}

export default HrPayroll