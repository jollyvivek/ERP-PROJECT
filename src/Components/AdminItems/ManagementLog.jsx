import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

const ManagementLog = () => {
    const [managementLogModel,setManagementLogModel] = useState(false)
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

{/* all model of Management log */}

{managementLogModel && (
<div className="modal show fade" style={{ display: 'block' }}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    autoComplete="off" required  />
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
    </>
  )
}

export default ManagementLog