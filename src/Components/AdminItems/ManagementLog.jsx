import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

const ManagementLog = () => {
    const[managementLogModel,setManagementLogModel] = useState(false)
    const[ownerModel,setOwnerModel] = useState(false)
    const[AddEmployeeModel,setAddEmployeeModel]=useState(false)
    const[personalDetails,setPersonalDetails]=useState(false)
    const[officialDetails,setOfficialDetails]=useState(false)
    const[qualification,setQualification]=useState(false)

    const addEmployeeHandler = ()=>{
        setAddEmployeeModel(true)
        setPersonalDetails(true)
        setOfficialDetails(false)
        setQualification(false)
    };

    const PersonalDetailsHandler = ()=>{
        setPersonalDetails(true)
        setOfficialDetails(false)
        setQualification(false)
    }

    const officialDetailsHandler = ()=>{
        setOfficialDetails(true)
        setPersonalDetails(false)
        setQualification(false)
    }

    const QualificationHandler = ()=>{
        setQualification(true)
        setPersonalDetails(false)
        setOfficialDetails(false)
    }

  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='d-flex justify-content-between mt-2'>
                    <h5> Management Log Record</h5>
                    <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                        onClick={()=>setManagementLogModel(true)}
                        >Add New
                    </button>
                </div>
                <div className='mt-2 d-flex  justify-content-end align-items-center gap-3'>
                    <label htmlFor="" className='form-select-lg'>Serach : </label>
                    <input type="text" className='form-control w-25 '
                    //  onChange={handleFilter} 
                    placeholder='Search Here'  />
                </div>
            </div>
        </div> 
    </div>
    {/* empty box */}
    <div className='bg-info' style={{height:"400px"}}>
    </div>
    <div className='container-fluid mt-2'>
        <div className='row'>
            <div className='col-md-12 d-flex justify-content-end gap-3'>
                <button className='btn border border-secondary ' onClick={()=>alert("Report call")}>View Report</button>
                <button className='btn border border-secondary ' onClick={()=>alert("Export Excel call")}>Export Excel</button>
                <button className='btn border border-secondary ' onClick={()=>alert("Cancel call")}>Cancel</button>
            </div>
        </div>
    </div>

{/* all model of Management Log */}

{managementLogModel && (
<div className="modal show fade" style={{ display: 'block' }}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-header border-0">
        <h5 className="modal-title" id="exampleModalLabel">Management Log</h5>
        <button type="button" className="btn-close" onClick={()=>setManagementLogModel(false)}></button>
      </div>
      <div className="modal-body border-top border-bottom  p-0 pb-3"> 
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <fieldset className='rounded-1 pb-2'>
                        <legend>Management Details</legend>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="row ">
                                <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Management Log No :</label>             
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="ManagementLogNo"
                                    autoComplete="off" required  />
                                </div>
                                </div>
                                <div className="row ">
                                <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Current Status :</label>             
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="CurrentStatus"
                                    autoComplete="off" required  />
                                </div>
                                </div>
                                <div className="row ">
                                <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Owner :</label>             
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="Owner"
                                     onClick={()=>setOwnerModel(true)}  autoComplete="off"  />
                                </div>
                                </div>
                                <div className="row ">
                                <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Date Identified :</label>             
                                <div className="col-sm-4 d-flex align-items-center form-control-sm">
                                    <input type="date" className="form-control form-control-sm"  name="DateIdentified"
                                    autoComplete="off" required  />
                                </div>
                                </div>
                                <div className="row ">
                                <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Action Steps :</label>             
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="ActionSteps"
                                    autoComplete="off" required  />
                                </div>
                                </div>
                                <div className="row ">
                                <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Impact Summary :</label>             
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="ImpactSummary"
                                    autoComplete="off" required  />
                                </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="row ">
                                    <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Date :</label>             
                                    <div className="col-sm-4 d-flex align-items-center form-control-sm">
                                    <input type="date" className="form-control form-control-sm"  name="Date"
                                    autoComplete="off" required  />
                                    </div>
                                </div>
                                <div className="row ">
                                    <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Prirority :</label>             
                                    <div className="col-sm-6 d-flex align-items-center">
                                        <input type="text" className="form-control form-control-sm"  name="ManagementLogNo"
                                        autoComplete="off" required  />
                                    </div>
                                </div>
                                <div className="row ">
                                    <label htmlFor="" className=" col-sm-6 col-form-label text-end">Change Request Description:</label>             
                                    <div className="col-sm-6 d-flex align-items-center">
                                        <input type="text" className="form-control form-control-sm"  name="ManagementLogNo"
                                        autoComplete="off" required  />
                                    </div>
                                </div>
                                <div className="row ">
                                    <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Expected Resolution Date :</label>             
                                    <div className="col-sm-4 d-flex align-items-center form-control-sm">
                                    <input type="date" className="form-control form-control-sm"  name="Date"
                                    autoComplete="off" required  />
                                    </div>
                                </div>
                                <div className="row ">
                                    <label htmlFor="" className=" col-sm-6 col-form-label text-end" >Actual Resolution Date :</label>             
                                    <div className="col-sm-4 d-flex align-items-center form-control-sm">
                                    <input type="date" className="form-control form-control-sm"  name="ActualResolutionDate"
                                    autoComplete="off" required  />
                                    </div>
                                </div>
                                <div className="row ">
                                    <label htmlFor="" className=" col-sm-6 col-form-label text-end">Final Resolution and Rationale :</label>             
                                    <div className="col-sm-6 d-flex align-items-center">
                                        <input type="text" className="form-control form-control-sm"  name="FinalResolutionAndRationale"
                                        autoComplete="off" required  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer border-0">
        <button type="button" className="btn border-primary">NEW</button>
        <button type="button" className="btn btn-primary">SAVE</button>
        <button type="button" className="btn border-secondary disabled">UPDATE</button>
        <button type="button" className="btn border-secondary disabled">DELETE</button>
        <button type="button" className="btn btn-secondary d-none" onClick={()=>setManagementLogModel(false)}>Close</button>  
      </div>
    </div>
  </div>
</div>
)}

{/* owner model */}
{ownerModel && (
<div className="modal show fade" style={{ display: 'block' }} aria-hidden="false">
  <div className="modal-dialog modal-dialog-centered modal-sm">
    <div className="modal-content">
      <div className="modal-header border-0">
        <h5 className="modal-title fs-6">Select Employee</h5>
        <button type="button" className="btn-close" onClick={()=>setOwnerModel(false)} ></button>
      </div>
      <div className="modal-body p-0">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 text-end p-1'>
                    {/* <h5 className='fs-5'>Select Employee</h5> */}
                    <button className='border px-2 rounded-2 bg-transparent border-primary' 
                        onClick={addEmployeeHandler}>Add Employee
                    </button>
                </div>
                <div className='row p-0 m-0'>
                    <div className='col-md-12 p-0'>
                    <table className="table table-hover table-bordered ">
                        <thead>
                            <tr>
                                 <th scope="col">Employee Code</th>
                                 <th scope="col">Employee Name</th>
                            </tr>
                         </thead>
                        <tbody>
                             <tr >
                                <td>Ajay</td>
                                <td>Mr. Ajay</td>
                            </tr>
                            <tr>
                                <td>Vijay</td>
                                <td>Mr. Vijay</td>
                            </tr>
                            <tr>
                                <td>Pankaj</td>
                                <td>Mr. Pankaj</td>
                            </tr>
                            <tr>
                                <td>Pooja</td>
                                <td>Miss. Pooja</td>
                            </tr>
                            <tr>
                                <td>Simran</td>
                                <td>Miss. Simran</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer border-0">
      </div>
    </div>
  </div>
</div>
)}

{/*Add Employee model  */}

{AddEmployeeModel && (
<div className="modal show fade" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog modal-dialog-scrollable  modal-fullscreen">
    <div className="modal-content">
      <div className="modal-header border-0 px-4">
        <h5 className="modal-title fs-6">Employee Master</h5>
        <button type="button" className="btn-close" onClick={()=>setAddEmployeeModel(false)}></button>
      </div>
      <div className="modal-body p-0">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-12 d-flex gap-1 fs-6'>
                            <button className='em-btn border px-1 border-secondary rounded-2' onClick={PersonalDetailsHandler}>Personal Details</button>
                            <button className='em-btn border px-1 border-secondary rounded-2' onClick={officialDetailsHandler}>Official Details </button>
                            <button className='em-btn border px-1 border-secondary rounded-2' onClick={QualificationHandler}>Qualification</button>
                            <button className='em-btn border px-1 border-secondary rounded-2'>Work Experiance </button>
                            <button className='em-btn border px-1 border-secondary rounded-2'>Bank Details </button>
                            <button className='em-btn border px-1 border-secondary rounded-2'>Document & Insurance </button>
                            <button className='em-btn border px-1 border-secondary rounded-2'>Dependent Details and Assests </button>
                            <button className='em-btn border px-1 border-secondary rounded-2'>Line Management Rating Head </button>
                            <button className='em-btn border px-1 border-secondary rounded-2'>CTC </button>
                        </div>
                    </div>
                    {/* Personal Details */}
                    {personalDetails && (
                    <div className='row m-2 border rounded-2'>
                        <div className='col-md-6'>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Employee Code : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="EmployeeCode" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" > Category : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="Category" autoComplete="off" required  />
                                </div>

                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Name : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="Name" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >DOB : </label>
                                <div className="col-sm-4 d-flex align-items-center">
                                    <input type="date" className="form-control form-control-sm"  name="DateOfBirth" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Age : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="Age" autoComplete="off" required  />
                                </div>

                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Religion : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="Religion" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Cast : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="Cast" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Blood Group : </label>
                                 <div className="col-sm-5 d-flex align-items-center">
                                        <select className=" form-control form-control-sm  form-select-sm py-0 fs-6" aria-label=".form-select-sm example">
                                            <option>Select One Of Blood-Groups</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="row"> 
                                <label className=" col-sm-6 col-form-label fs-6 text-end" >Gender : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <div className="form-check">
                                         <input id='male' className="form-check-input" type="radio" name="Gender" />
                                        <label htmlFor='male' className="form-check-label">Male </label>
                                    </div>
                                     <div className="form-check mx-2">
                                        <input id='female' className="form-check-input" type="radio" name="Gender"/>
                                        <label htmlFor='female' className="form-check-label">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Contact No : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="ContactNo" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Email : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="email" className="form-control form-control-sm"  name="ContactNo" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Disability/Allergy : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="ContactNo" autoComplete="off" required  />
                                </div>
                            </div> 
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Present Address : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <textarea class="form-control" rows="2"></textarea>                               
                                     </div>
                            </div> 
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Employee Type : </label>
                                 <div className="col-sm-5 d-flex align-items-center">
                                        <select className="form-control form-select-sm fs-6" aria-label=".form-select-sm example">
                                            <option>Select</option>
                                            <option value="Official">Official</option>
                                            <option value="Normal">Normal</option>
                                        </select>
                                    </div>
                            </div>                          
                        </div>
                        <div className='col-md-6'>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Photo : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <input type="file" className="form-control form-control-sm"  name="Photo" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Permanent Address : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <textarea class="form-control" rows="2"></textarea>                               
                                     </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >DL No : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <input type="text" className="form-control form-control-sm"  name="Photo" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Valid For : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <input type="text" className="form-control form-control-sm"  name="Photo" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >DL Expire Date : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <input type="date" className="form-control form-control-sm"  name="DlExpireDate" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >PF : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <input type="text" className="form-control form-control-sm"  name="Pf" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >PF UAN No : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <input type="text" className="form-control form-control-sm"  name="PfUanNo" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Emergency Contact No : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <input type="text" className="form-control form-control-sm"  name="EmergencyContactNo" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Emergency Contact Name : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <input type="text" className="form-control form-control-sm"  name="EmergencyContactName" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Device Code : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <input type="text" className="form-control form-control-sm"  name="DeviceCode" autoComplete="off" required  />
                                </div>
                            </div>

                         </div>
                            
                    </div>
                    )}
                    {/* Officials Details */}
                    {officialDetails && (
                    <div className='row m-2 border rounded-2'>
                        <div className='col-md-6'>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Interview Date: </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="date" className="form-control form-control-sm"  name="InterviewDate" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" > Date Of Joining : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="date" className="form-control form-control-sm"  name="DateOfJoining" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" > Location : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="Location" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Shift : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="shift" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Department : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="Department" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Position Title : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="PositionTitle" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Salary Category : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="SalaryCategory" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Monthly CTC : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="MonthlyCtc" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >CTC In Words : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="CtcInWords" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Monthly Gross Salary : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="MonthlyGrossSalary" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >SalaryInWords : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="SalaryInWords" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Official Mail Id : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="OfficialMailId" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Aadhar Card No : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="AadharCardNo" autoComplete="off" required  />
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-md-6'>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Official Mobile No : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="OfficialMobileNo" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Mobile Serial No : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="text" className="form-control form-control-sm"  name="MobileSerialNo" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >PB Application : </label>
                                 <div className="col-sm-6 d-flex align-items-center">
                                        <select className="form-control form-select-sm fs-6" name='PbApplication' aria-label=".form-select-sm example">
                                            <option>Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Resignation : </label>
                                 <div className="col-sm-6 d-flex align-items-center">
                                        <select className="form-control form-select-sm fs-6" name='Resignation' aria-label=".form-select-sm example">
                                            <option>Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                            </div>
                             <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Resignation Notice Date : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="date" className="form-control form-control-sm"  name="ResignationNoticeDate" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Reason of  Resignation : </label>
                                <div className="col-sm-6 d-flex align-items-center mt-1">
                                    <textarea class="form-control" rows="2"></textarea>                               
                                     </div>
                            </div>
                             <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Resignation Date : </label>
                                <div className="col-sm-6 d-flex align-items-center">
                                    <input type="date" className="form-control form-control-sm"  name="ResignationNoticeDate" autoComplete="off" required  />
                                </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Pay Salary : </label>
                                 <div className="col-sm-6 d-flex align-items-center">
                                        <select className="form-control form-select-sm fs-6" name='PaySalary' aria-label=".form-select-sm example">
                                            <option>Select</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Salary Calculation : </label>
                                 <div className="col-sm-6 d-flex align-items-center">
                                        <select className="form-control form-select-sm fs-6" name='Resignation' aria-label=".form-select-sm example">
                                            <option>Select</option>
                                            <option value="Work Days">Work Days</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Per Days : </label>
                                <div className="col-sm-4 d-flex align-items-center p-0">
                                    <input type="text" className="form-control form-control-sm"  name="PerDays" autoComplete="off" required  />
                                </div>
                                <span className='col-md-2 pt-2 p-1'>(Amt)</span>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >Salary Based On : </label>
                                 <div className="col-sm-6 d-flex align-items-center">
                                        <select className="form-control form-select-sm fs-6" name='SalaryBasedOn' aria-label=".form-select-sm example">
                                            <option>Select</option>
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >OT Application : </label>
                                 <div className="col-sm-6 d-flex align-items-center">
                                        <select className="form-control form-select-sm fs-6" name='OtApplication' aria-label=".form-select-sm example">
                                            <option>Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="row"> 
                                <label htmlFor="" className=" col-sm-6 col-form-label fs-6 text-end" >OT Based On : </label>
                                 <div className="col-sm-6 d-flex align-items-center">
                                        <select className="form-control form-select-sm fs-6" name='OtBasedOn' aria-label=".form-select-sm example">
                                            <option>Select</option>
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                        </select>
                                    </div>
                            </div>
                        </div>
                    </div>
                    )}
                    {/*Qualification  */}
                    {qualification && (
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3>Qualification Details</h3>
                        </div>
                    </div>
                    )}
                    {/*  */}
                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer mx-3">
        <button type="button" className="btn border-primary">Next</button>
      </div>
    </div>
  </div>
</div>
)}


    </>
  )
}

export default ManagementLog