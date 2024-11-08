import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { BiEdit } from "react-icons/bi";

const OrderSerialSetting = () => {
  const[settingForm,setSettingForm]= useState(false)
  const [settingModel,setSettingModel] = useState(false)

  const dataList =[
    { Type:"Sales", Name :"Sales", Email:"gautam@gmail.com",MobileNo:"9876543210",AutoGenerate:"Yes"},
    { Type:"Purchase",Name :"Purchase", Email:"vivek@gmail.com",MobileNo:"7854239610",AutoGenerate:"Yes"},
    { Type:"Export",Name :"Export", Email:"priya@gmail.com",MobileNo:"999998888",AutoGenerate:"Yes"},
    { Type:"Job Work",Name :"Job Work", Email:"ajay@gmail.com",MobileNo:"88888999999",AutoGenerate:"Yes"}
  ]
  const columns =[
    {name:"Type",selector:row=>row.Type,sortable:true},
    {name:"Name",selector:row=>row.Name,sortable:true},
    {name:"Prefix",selector:row=>row.Email,sortable:true},
    {name:"Postfix",selector:row=>row.MobileNo},
    {name:"Auto Generate",selector:row=>row.AutoGenerate},
    {name:"Modify",selector:row=>row,cell:row=>(
      <button className="btn text-center fs-4" onClick={()=>setSettingModel(true)}><BiEdit/></button>
    )},
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
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // padding for body cells
            paddingRight: '8px',
            fontSize:"15px",
            // border:"2px solid red",
        },
    },
    };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 px-3'>
          <div className='d-flex justify-content-between mt-3'>
                <h4>Order Serial Setting Record</h4>
                <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                   onClick={()=>setSettingModel(true)}
                   >Add New</button>
          </div>
          <div className='mt-3 '>
               <input type="text" className='form-control '
                //  onChange={handleFilter} 
                placeholder='Search Here'  />
          </div>
          <DataTable  columns={columns}  data={dataList}    customStyles={customStyles}  />


        </div>
      </div>


      {/* <!-- Setting Modal --> */}
{settingModel && (
<div className="modal m-0 show  fade"  style={{ display: 'block',overflow: "hidden" }}
    tabIndex="-1" aria-labelledby="exampleModalLabel"
    //  aria-hidden="true"
    >
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header border-0">
        <h5 className="modal-title ">Order Serial Setting</h5>
        <button type="button" className="btn-close" onClick={()=>setSettingModel(false)}></button>
      </div>
      <div className="modal-body border  border-secondary mx-2">
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <form action="">
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Type :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                  <select className="form-select form-select-sm bg-body-secondary" 
                        name='Type' required aria-label="Default select example">
                           <option> select</option>
                           <option value="Sales Order">Sales Order</option>
                           <option value="Sales Order">Export Sales Order</option>
                           <option value="Work Order">Work Order</option>
                           <option value="Export Work Order">Export Work Order</option>
                           <option value="Purchase Order">Purchase Order</option>
                           <option value="Job Work">Job Work</option>
                    </select>
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Name :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="text" className="form-control bg-body-secondary"  name="Name"
                      // value={updateData.RoleName} onChange={updateHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Prefix :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="text" className="form-control bg-body-secondary"  name="Prefix"
                      // value={updateData.RoleName} onChange={updateHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Post Fix :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="text" className="form-control bg-body-secondary"  name="Postfix"
                      // value={updateData.RoleName} onChange={updateHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >No Of Digit :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="number" className="form-control bg-body-secondary"  name="NoOfDigit"
                      // value={updateData.RoleName} onChange={updateHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Start Form :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="number" className="form-control bg-body-secondary"  name="FormName"
                      // value={updateData.RoleName} onChange={updateHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                  <div className="mb-2 row">
                   <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Auto Generate :</label>             
                   <div className="col-sm-5 d-flex align-items-center">
                   <select className="form-select form-select-sm bg-body-secondary" 
                        name='AutoGenerate' required aria-label="Default select example">
                           <option> select</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                    </select>
                    </div>
                  </div>
                  <div className=' mb-2 row '>
                    <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Example :</label>  
                    <label className='col-sm-7 col-form-label fs-5 '>01</label>
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

export default OrderSerialSetting