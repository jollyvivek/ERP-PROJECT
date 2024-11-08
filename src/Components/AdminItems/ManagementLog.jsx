import React from 'react'
import DataTable from 'react-data-table-component'

const ManagementLog = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='d-flex justify-content-between mt-2'>
                    <h5> Management Log Record</h5>
                    <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                        // data-bs-toggle="modal" data-bs-target="#GroupModal"
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
    </>
  )
}

export default ManagementLog