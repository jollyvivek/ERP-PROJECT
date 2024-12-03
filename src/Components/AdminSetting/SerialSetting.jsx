import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { BiEdit } from "react-icons/bi";

const SerialSetting = () => {

  const [isUpdate,setIsUpdate]= useState(false)
  const [settingModel,setSettingModel] = useState(false)

  const dataList =[
    {Name :"Gautam", Email:"gautam@gmail.com",MobileNo:"9876543210",AutoGenerate:"Yes"},
    {Name :"Vivek", Email:"vivek@gmail.com",MobileNo:"7854239610",AutoGenerate:"Yes"},
    {Name :"Priya", Email:"priya@gmail.com",MobileNo:"999998888",AutoGenerate:"Yes"},
    {Name :"Ajay", Email:"ajay@gmail.com",MobileNo:"88888999999",AutoGenerate:"Yes"}
  ]
  const columns =[
    {name:"Form Name",selector:row=>row.Name,sortable:true},
    {name:"Prefix",selector:row=>row.Email,sortable:true},
    {name:"Postfix",selector:row=>row.MobileNo},
    {name:"Auto Generate",selector:row=>row.AutoGenerate},
    {name:"Modify",selector:row=>row,cell:row=>(
      <button className="btn text-center fs-4" onClick={SerialSettingUpdate}><BiEdit/></button>
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

    const SerailSettingAdd = ()=>{
      setSettingModel(true)
      setIsUpdate(false)
    }

    const SerailSettingAddHandler = ()=>{
      alert("Add call")
    }


    const SerialSettingUpdate = ()=>{
      setSettingModel(true)
      setIsUpdate(true)
    }

    const SerailSettingUpdateHandler = ()=>{
      alert("update call")
    }

    




  return (
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 px-3'>
              <div className='d-flex justify-content-between mt-3'>
                <h4>Setting Record</h4>
                <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                   onClick={SerailSettingAdd}
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
        <h5 className="modal-title ">Setting</h5>
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
                  <div className=' mb-2 row '>
                    <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Example :</label>  
                    <label className='col-sm-7 col-form-label fs-5 '> CHLN-01/22/23</label>
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
              </form>
            </div>
          </div>
        </div>
        
      </div>
      <div className="modal-footer border-0">
        <button type="button" className="btn btn-primary"
          onClick={isUpdate ? ()=>SerailSettingUpdateHandler() : ()=>SerailSettingAddHandler()}        
        >
          {isUpdate ? "Update" : "Save"}
        </button>
        <button type="button" className="btn btn-secondary" onClick={()=>setSettingModel(false)}>Close</button>
      </div>
    </div>
  </div>
</div>
)}
    </div>
  )
}

export default SerialSetting