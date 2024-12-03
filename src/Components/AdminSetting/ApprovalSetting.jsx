import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { BiEdit } from "react-icons/bi";
const ApprovalSetting = () => {

  const[settingForm,setSettingForm]= useState(false)
  const [settingModel,setSettingModel] = useState(false)
  const [data,setData] = useState({
    FormName:"",
    Approved1:"",
    Approved2:"",
    Approved3:""
  })

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
    {name:"Approval 3",selector:row=>row.ap3},
    {name:"Modify",selector:row=>row,cell:row=>(
      <button className="btn text-center fs-4" onClick={ApprovalSettingUpdate}><BiEdit/></button>
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

    const onChangeHandler = (event)=>{
        const {name,value} = event.target
        setData((data)=>({...data,[name]:value}))
    }

    // useEffect(()=>{console.log(data)},[data])

    const ApprovalSettingAddModel = ()=>{
      setSettingModel(true)
      setSettingForm(false)
    }

    const ApprovalSettingSubmit = (event)=>{
      event.preventDefault();
      console.log(data)
      setData({FormName:"", Approved1:"", Approved2:"", Approved3:""})
      setSettingModel(false)
    }
    

    const ApprovalSettingUpdate = ()=>{
      setSettingModel(true)
      setSettingForm(true)
    }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 px-3'>
           <div className='d-flex justify-content-between mt-3'>
                <h4>Approval Setting Record</h4>
                <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                   onClick={ApprovalSettingAddModel}
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
      <div className="modal-body border  border-secondary mx-2 rounded-2">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <form onSubmit={settingForm ? ()=>alert("update call") : ApprovalSettingSubmit}>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Form Name :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="text" className="form-control bg-body-secondary"  name="FormName"
                      value={data.FormName} onChange={onChangeHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Approved 1 :</label>             
                <div className="col-sm-7 d-flex align-items-center gap-2">
                    {/* <input type="checkbox" className='form-check-input p-2'  /> */}
                    <input type="text" className="form-control bg-body-secondary"  name="Approved1"
                      value={data.Approved1} onChange={onChangeHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Approved 2 :</label>             
                <div className="col-sm-7 d-flex align-items-center gap-2">
                    {/* <input type="checkbox" className='form-check-input p-2'  /> */}
                    <input type="text" className="form-control bg-body-secondary"  name="Approved2"
                      value={data.Approved2} onChange={onChangeHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Approved 3 :</label>             
                <div className="col-sm-7 d-flex align-items-center gap-2">
                    {/* <input type="checkbox" className='form-check-input p-2'  /> */}
                    <input type="text" className="form-control bg-body-secondary"  name="Approved3"
                      value={data.Approved3} onChange={onChangeHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className='mt-3 d-flex justify-content-center gap-2'>
                  <button type="submit" className="btn btn-primary">{settingForm ? "Update" :"Save"}</button>
                  <button type="button" className="btn btn-secondary" onClick={()=>setSettingModel(false)}>Close</button>
                </div>
                 
              </form>
            </div>
          </div>
        </div>
        
      </div>
      <div className="modal-footer border-0">
        {/* <button type="button" className="btn btn-primary">{settingForm ? "Update" :"Save"}</button>
        <button type="button" className="btn btn-secondary" onClick={()=>setSettingModel(false)}>Close</button> */}
      </div>
    </div>
  </div>
</div>
)}
    </div>
  )
}

export default ApprovalSetting