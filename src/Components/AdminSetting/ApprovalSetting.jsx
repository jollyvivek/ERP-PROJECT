import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { StoreContext } from '../../Context/StoreContext';
import { toast } from 'react-toastify';
import axios from 'axios';
const ApprovalSetting = () => {
  const {url} = useContext(StoreContext)
  const [id,setId] = useState("")
  const [isCheckedAp1, setIsCheckedAp1] = useState(false);
  const [isCheckedAp2, setIsCheckedAp2] = useState(false);
  const [isCheckedAp3, setIsCheckedAp3] = useState(false);
  const [fetchData,setFetchData] = useState([])
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
    {name:"Approval 1",selector:row=>row.Approved1,sortable:true},
    {name:"Approval 2",selector:row=>row.Approved2},
    {name:"Approval 3",selector:row=>row.Approved3},
    {name:"Modify",selector:row=>row,cell:row=>(
      <button className="btn text-center fs-4" onClick={()=>ApprovalSettingUpdate(row._id,row.FormName,row.Approved1,row.Approved2,row.Approved3)}><BiEdit/></button>
    )},
    {name:"Delete",selecto:row=>row._id ,cell: row=>(
                <button className=" btn text-danger text-center fs-4"
                 onClick={()=>ApprovalSettingRemove(row._id)}
                 ><MdDelete/></button>
              )      
        }
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

    // Function to toggle the checkbox state
  const handleCheckboxChangeAp1 = (e) => {
    setIsCheckedAp1(e.target.checked);
  };
  const handleCheckboxChangeAp2 = (e) => {
    setIsCheckedAp2(e.target.checked);
  };
  const handleCheckboxChangeAp3 = (e) => {
    setIsCheckedAp3(e.target.checked);
  };

    const onChangeHandler = (event)=>{
        const {name,value} = event.target
        setData((data)=>({...data,[name]:value}))
    }

    // useEffect(()=>{console.log(data)},[data])

    const ApprovalSettingAddModel = ()=>{
      setSettingModel(true)
      setSettingForm(false)
      setIsCheckedAp1(false)
      setIsCheckedAp2(false)
      setIsCheckedAp3(false)
      setData({FormName:"", Approved1:"", Approved2:"", Approved3:""});
    }
// add
    const ApprovalSettingSubmit = async(event)=>{
      event.preventDefault();
      let payload = {
        FormName:data.FormName,
        Approved1:data.Approved1,
        Approved2:data.Approved2,
        Approved3:data.Approved3       
      }
      const response = await axios.post(`${url}/api/approvalsetting/add`,payload);
      if (response.data.success) {
        // console.log(data)
        setData({FormName:"", Approved1:"", Approved2:"", Approved3:""});
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }      
      setSettingModel(false)
      FetchRecords();
    }
// fetchList
const FetchRecords= async()=>{
  const response = await axios.get(`${url}/api/approvalsetting/list`);
  if(response.data.data){
    setFetchData(response.data.data)
    // console.log(response.data.data)
  }else{
    console.log("Error")
  }

}

useEffect(()=>{
  FetchRecords();
},[]);
 
// update
    const ApprovalSettingUpdate = (id,FormName,Approved1,Approved2,Approved3)=>{
      setSettingModel(true)
      setSettingForm(true)
      setData({FormName:FormName,Approved1:Approved1,Approved2:Approved2,Approved3:Approved3})
      setId(id)
    }

    const ApprovalSettingUpdateHandler = async(id,data)=>{
      try {
        const response = await axios.post(`${url}/api/approvalsetting/update`,{id:id,FormName:data.FormName,
          Approved1:data.Approved1,Approved2:data.Approved2,Approved3:data.Approved3 });
          if (response.data.success) {
            setData({FormName:"", Approved1:"", Approved2:"", Approved3:""});
            toast.success(response.data.message)
          } else {
            toast.error(response.data.message)
          }
      } catch (error) {
        toast.error(response.data.message);
      }
      setSettingModel(false)
      setSettingForm(false)
      FetchRecords();
    }
// delete

const ApprovalSettingRemove = async(id)=>{
  const response = await axios.post(`${url}/api/approvalsetting/remove`,{id:id})
      await FetchRecords();
      toast.success(response.data.message)
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
                data={fetchData}
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
              <form 
                  onSubmit={settingForm ? ()=>alert("update call") : ApprovalSettingSubmit}
                  >
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
                    <input type="checkbox" className='form-check-input p-2' checked={isCheckedAp1} 
                       onChange={handleCheckboxChangeAp1}  />
                    <input type="text" className="form-control bg-body-secondary"  name="Approved1"
                      value={data.Approved1} onChange={onChangeHandler}
                      autoComplete="off" disabled={!isCheckedAp1} required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Approved 2 :</label>             
                <div className="col-sm-7 d-flex align-items-center gap-2">
                    <input type="checkbox" className='form-check-input p-2' checked={isCheckedAp2} 
                      onChange={handleCheckboxChangeAp2} />
                    <input type="text" className="form-control bg-body-secondary"  name="Approved2"
                      value={data.Approved2} onChange={onChangeHandler}
                      autoComplete="off" disabled={!isCheckedAp2} required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Approved 3 :</label>             
                <div className="col-sm-7 d-flex align-items-center gap-2">
                    <input type="checkbox" className='form-check-input p-2' checked={isCheckedAp3} 
                        onChange={handleCheckboxChangeAp3}  />
                    <input type="text" className="form-control bg-body-secondary"  name="Approved3"
                      value={data.Approved3} onChange={onChangeHandler}
                      autoComplete="off" disabled={!isCheckedAp3} required  />
                </div>
                </div>
                <div className='mt-3 d-flex justify-content-center gap-2'>
                  <button type="button" className="btn btn-primary"
                    onClick={settingForm ? ()=>ApprovalSettingUpdateHandler(id,data) : ApprovalSettingSubmit}>{settingForm ? "Update" :"Save"}</button>
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