import React from 'react'
import '../../Styles/SidebarCommon.css'
import { FaUserGroup } from "react-icons/fa6";
import { RiArrowDropDownLine } from 'react-icons/ri'

const HrPayroll = () => {
  return (
    <div className='hrPayroll'>
      <div className='hrPayroll-top flex lineHeight border'>
        <span className='icon fs-2'><FaUserGroup /></span>
        <span className='title'>Hr and Payroll</span>
        <span className='arrow-icon'><RiArrowDropDownLine/></span>
      </div>

      <div className='hrPayroll-items'>
      <ul class="hr-items">
              <li class=" hrPayroll-master flex lineHeight border">
                <span className="title">Master</span>
                <span class="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className="hr-master-items">
                <li className='title'>Employee Category</li>
                <li className='title'>Department</li>
                <li className='title'>Postion</li>
                <li className='holiday flex lineHeight border'>
                  <span className='title'>Holidays</span>
                  <span className="arrow-icon"><RiArrowDropDownLine/> </span>
                </li>
                <ul className="hr-holidays-items">
                  <li className='title'>Holidays</li>
                  <li className='title'>Import Holidays</li>
                </ul>
                <li className='title'>Event Type</li>
              </ul>

              <li className="leave flex lineHeight border">
                <span className="title">Leave</span>
                <span class="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className="hr-leave-items">
                <li className=" leave-master flex lineHeight border">
                  <span className="title">Master</span>
                  <span className="arrow-icon"><RiArrowDropDownLine/></span>
                </li>
                <ul className="hr-leave-master-items">
                  <li className='title'>Leave Type</li>
                  <li className='title'>Leave</li>
                </ul>
                <li className='title'>Apply Leave</li>
                <li className='title'>Leave Approvel</li>
                <li className='title'>Monthly Add Leave</li>
                <li className='title'>Monthly Detuct Leave </li>
              </ul>

              <li className=" employee flex lineHeight border ">
                <span className="title">Employee</span>
                <span className="arrow-icon "><RiArrowDropDownLine/></span>
              </li>
              <ul className="hr-employee-items">
                <li class="employee-master flex lineHeight border ">
                  <span className="title">Master</span>
                  <span className="arrow-icon"><RiArrowDropDownLine/></span>
                </li>
                <ul className=" hr-employee-master-items">
                  <li className='title'>Shift</li>
                  <li className='title'>Employee</li>
                </ul>
                <li className='title'>Assign Shift</li>
                <li className='title'>Shift Attendace</li>
              </ul>

              <li className=" performance flex lineHeight border">
                <span className="title">Performance</span>
                <span className="arrow-icon"> <RiArrowDropDownLine/></span>
              </li>
              <ul className="hr-performance-items">
                <li class=" performance-master flex lineHeight border ">
                  <span className="title">Master</span>
                  <span className="arrow-icon"><RiArrowDropDownLine/> </span>
                </li>
                <ul className="hr-performance-master-items">
                  <li className='title'>Appraisal Questions </li>
                  <li className='title'>Indicators</li>
                  <li className='title'>Reating Heads</li>
                  <li className='title'>Ratings</li>
                  <li className='title'>Increment</li>
                </ul>
                <li className='title'>Memo</li>
                <li className='title'>Performance</li>
                <li className='title'>Appraisal</li>
              </ul>

              <li className="attendance flex lineHeight border">
                <span className="title">Attendance</span>
                <span className="arrow-icon"> <RiArrowDropDownLine/>  </span>
              </li>
              <ul className="hr-attendance-items">
                <li className='title'>Device</li>
                <li className='title'>Device Connection</li>
                <li className='title'>Device Connection  Using URL</li>
                <li className='title'>Device Connection Time Machine </li>
                <li className='title'>Outdoor Attendance Entry</li>
                <li className='title'>Send Attendance  SMS</li>
                <li className='title'>Hourly Attendance  Entry</li>
              </ul>

              <li className="payroll flex lineHeight border">
                <span className="title">Payroll</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className=" hr-payroll-items">
                <li className='title'>Salary Formula</li>
                <li className='title'>Salary Category</li>
                <li className='title'>Salary Increment</li>
                <li className='title'>Advance Payment</li>
                <li className='title'> Attendance Payment Approval </li>

                <li className="monthly-salery flex lineHeight  border">
                  <span  className="title">Monthly Salary</span>
                  <span className="arrow-icon"> <RiArrowDropDownLine/> </span>
                </li>
                <ul className=" hr-monthlysalary-items">
                  <li className='title'>Generate Salary</li>
                  <li className='title'>Pay Salary</li>
                  <li className='title'>Genrate Salary Report </li>
                </ul>

                <li className="weekly-salery flex lineHeight border">
                  <span className="title">Weekly Salary</span>
                  <span className="arrow-icon"><RiArrowDropDownLine/></span>
                </li>
                <ul className="hr-weeklysalary-items">
                  <li className='title'>Generate Salary</li>
                  <li className='title'>Pay Salary</li>
                  <li className='title'>Genrate Salary Report</li>
                </ul>
                <li className='title'>Send Mail Records </li>
              </ul>

              <li className="hrPayroll-reports flex lineHeight border  ">
                <span  className="title">Reports</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
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

              <li className="hrPayroll-graphs flex lineHeight border">
                <span className="title">Graphs</span>
                <span className="arrow-icon"><RiArrowDropDownLine/></span>
              </li>
              <ul className="hr-graphs-items">
                <li className='title'>Leave Graph</li>
                <li className='title'>Organigation  Chart</li>
                <li className='title'>Departmentwise  Chart</li>
                <li className='title'>Postion wise  Chart</li>
              </ul>
              <li className='title'>Send Sms </li>
            </ul>

      </div>

    </div>
  )
}

export default HrPayroll