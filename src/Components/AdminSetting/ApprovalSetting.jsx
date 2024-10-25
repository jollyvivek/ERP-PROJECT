import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

const ApprovalSetting = () => {

  const[settingForm,setSettingForm]= useState(false)
  const [settingModel,setSettingModel] = useState(false)

  const dataList =[
    {FormName :"test", ap1:"ap1",ap2:"ap2",ap3:"ap3"},
    {FormName :"Vendor", ap1:"ap1",ap2:"ap2",ap3:"ap3"},
    {FormName :"Challan", ap1:"ap1",ap2:"ap2",ap3 :"ap3"},
    {FormName :"GRN", ap1:"ap1",ap2:"ap2",ap3:"ap3"}
  ]
  const columns =[
    {name:"Form Name",selector:row=>row.FormName,sortable:true},
    {name:"Approval 1",selector:row=>row.ap1,sortable:true},
    {name:"Approval 2",selector:row=>row.ap2},
    {name:"Approval 3",selector:row=>row.ap3}
  ]

  const customStyles = {
    rows: {
        style: {
            // minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // padding for header cells
            paddingRight: '8px',
            fontSize:"18px",
            // display: "flex",
            // justifyContent: "center"
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // padding for body cells
            paddingRight: '8px',
            fontSize:"15px",
            // border:"2px solid red",
            // display: "flex",
            // justifyContent: "center"
        },
    },
    };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-10 offset-1'>
           <div className='d-flex justify-content-between mt-3'>
                <h4>Approval Setting Record</h4>
                <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                   onClick={()=>setSettingModel(true)}
                  //  data-bs-toggle="modal" data-bs-target="#exampleModal"
                   >Add New</button>
            </div>
            <div className='mt-3 '>
               <input type="text" className='form-control '
                //  onChange={handleFilter} 
                placeholder='Search Here'  />
              </div>
              <DataTable
                columns={columns}
                data={dataList}
                customStyles={customStyles}
              />


        </div>
      </div>



{/* <!-- Setting Modal --> */}
{settingModel && (
<div className="modal show  fade"  style={{ display: 'block' }}
    tabIndex="-1" aria-labelledby="exampleModalLabel"
    //  aria-hidden="true"
    >
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header border-0">
        <h5 className="modal-title ">Approval Setting</h5>
        <button type="button" className="btn-close" onClick={()=>setSettingModel(false)}></button>
      </div>
      <div className="modal-body border  border-secondary mx-2">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <form action="">
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Form Name :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="text" className="form-control bg-body-secondary"  name="FormName"
                      // value={updateData.RoleName} onChange={updateHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Approved 1 :</label>             
                <div className="col-sm-7 d-flex align-items-center gap-2">
                    <input type="checkbox" className='form-check-input p-2'  />
                    <input type="text" className="form-control bg-body-secondary"  name="Approved1"
                      // value={updateData.RoleName} onChange={updateHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Approved 2 :</label>             
                <div className="col-sm-7 d-flex align-items-center gap-2">
                    <input type="checkbox" className='form-check-input p-2'  />
                    <input type="text" className="form-control bg-body-secondary"  name="Approved2"
                      // value={updateData.RoleName} onChange={updateHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Approved 3:</label>             
                <div className="col-sm-7 d-flex align-items-center gap-2">
                    <input type="checkbox" className='form-check-input p-2'  />
                    <input type="number" className="form-control bg-body-secondary"  name="Approved3"
                      // value={updateData.RoleName} onChange={updateHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                 
              </form>
            </div>
          </div>
        </div>
        
      </div>
      <div className="modal-footer border-0">
        <button type="button" className="btn btn-primary">{settingForm ? "Update" :"Save"}</button>
        <button type="button" className="btn btn-secondary" onClick={()=>setSettingModel(false)}>Close</button>
      </div>
    </div>
  </div>
</div>
)}
    </div>
  )
}

export default ApprovalSetting