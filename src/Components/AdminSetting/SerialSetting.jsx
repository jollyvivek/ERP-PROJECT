import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const SerialSetting = () => {
  const {url} = useContext(StoreContext)
  const [id,setId] = useState("")
  const [isUpdate,setIsUpdate]= useState(false)
  const [settingModel,setSettingModel] = useState(false)
  const [serialSettingRecords,setSerialSettingRecords]= useState([])
  const[data,setData] = useState({
    FormName:"",
    Prefix:"",
    Postfix:"",
    AutoGenerate:"",
    NoOfDigit:"",
    StartFrom:""
  })

  // const dataList =[
  //   {Name :"Gautam", Email:"gautam@gmail.com",MobileNo:"9876543210",AutoGenerate:"Yes"},
  //   {Name :"Vivek", Email:"vivek@gmail.com",MobileNo:"7854239610",AutoGenerate:"Yes"},
  //   {Name :"Priya", Email:"priya@gmail.com",MobileNo:"999998888",AutoGenerate:"Yes"},
  //   {Name :"Ajay", Email:"ajay@gmail.com",MobileNo:"88888999999",AutoGenerate:"Yes"}
  // ]
  const columns =[
    {name:"Form Name",selector:row=>row.FormName,sortable:true},
    {name:"Prefix",selector:row=>row.Prefix,sortable:true},
    {name:"Postfix",selector:row=>row.Postfix},
    {name:"Auto Generate",selector:row=>row.AutoGenerate},
    {name:"Modify",selector:row=>row,cell:row=>(
      <button className="btn text-center fs-4" 
      onClick={()=>SerialSettingUpdate(row._id,row.FormName,row.Prefix,row.Postfix,row.AutoGenerate,row.StartFrom,row.NoOfDigit)}><BiEdit/></button>
    )},
    {name:"Delete",selecto:row=>row._id ,cell: row=>(
        <button className=" btn text-danger text-center fs-4"
         onClick={()=>SerialSettingRemove(row._id)}
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

    const onChangeHandler = (event)=>{
      const {name,value} = event.target;
      setData((data)=>({...data,[name]:value}));
    }

    // useEffect(()=>{console.log(data)},[data])

    const SerailSettingAddHandler = async(e)=>{
      e.preventDefault();
      let payload = {
        FormName:data.FormName,
        Prefix:data.Prefix,
        Postfix:data.Postfix,
        AutoGenerate:data.AutoGenerate,
        NoOfDigit:Number(data.NoOfDigit),
        StartFrom:Number(data.StartFrom)
      }
      const response = await axios.post(`${url}/api/serialsetting/add`,payload);
      if (response.data.success) {
        setData({FormName:"", Prefix:"", Postfix:"", AutoGenerate:"", NoOfDigit:"",StartFrom:""});
        toast.success(response.data.message)
        // console.log(data)
      } else {
        console.log("error");
        toast.error(response.data.message)
      }     
      setSettingModel(false);
      SerialSettingFetch()
    }


    const SerialSettingUpdate = (id,FormName,Prefix,Postfix,AutoGenerate,StartFrom,NoOfDigit)=>{
      setSettingModel(true)
      setIsUpdate(true)
      setId(id)
      setData({FormName:FormName,Prefix:Prefix,Postfix:Postfix,AutoGenerate:AutoGenerate,StartFrom:StartFrom,NoOfDigit:NoOfDigit})
    }

    const SerailSettingUpdateHandler = ()=>{
      alert("update call")
    }

    // fetch SerialSetting 

    const SerialSettingFetch = async()=>{

      const response = await axios.get(`${url}/api/serialsetting/list`);
      if(response.data.data){
        setSerialSettingRecords(response.data.data)
        // console.log(response.data)
      }else{
        console.log("Error")
      }
    }

     useEffect(()=>{ SerialSettingFetch(); },[]);

      // delete
    const SerialSettingRemove = async(id)=>{
      const response = await axios.post(`${url}/api/serialsetting/remove`,{id:id})
      await SerialSettingFetch();
      toast.success(response.data.message)
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
                data={serialSettingRecords}
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
      <div className="modal-body border  border-secondary rounded-2 mx-2">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <form onSubmit={isUpdate ? ()=>SerailSettingUpdateHandler() : SerailSettingAddHandler }>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Form Name :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="text" className="form-control bg-body-secondary"  name="FormName"
                      value={data.FormName} onChange={onChangeHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Prefix :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="text" className="form-control bg-body-secondary"  name="Prefix"
                      value={data.Prefix} onChange={onChangeHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Post Fix :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="text" className="form-control bg-body-secondary"  name="Postfix"
                      value={data.Postfix} onChange={onChangeHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >No Of Digit :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="number" className="form-control bg-body-secondary"  name="NoOfDigit"
                      value={data.NoOfDigit} onChange={onChangeHandler}
                      autoComplete="off" required />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Start Form :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="number" className="form-control bg-body-secondary"  name="StartFrom"
                      value={data.StartFrom} onChange={onChangeHandler}
                      autoComplete="off" required  />
                </div>
                </div>
                  <div className=' mb-2 row '>
                    <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Example :</label>  
                    <label className='col-sm-7 col-form-label fs-5 '> {data.Prefix + data.StartFrom + data.Postfix}</label>
                  </div>
                  <div className="mb-2 row">
                   <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Auto Generate :</label>             
                   <div className="col-sm-5 d-flex align-items-center">
                   <select className="form-select form-select-sm bg-body-secondary" 
                        name='AutoGenerate' value={data.AutoGenerate} onChange={onChangeHandler} required >
                           <option> select</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                    </select>
                    </div>
                  </div>
                  <div className=' d-flex justify-content-center gap-2 mt-2'>
                     <button type="submit" className="btn btn-primary"
                      // onClick={isUpdate ? ()=>SerailSettingUpdateHandler() : SerailSettingAddHandler}        
                     >
                      {isUpdate ? "Update" : "Save"}
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setSettingModel(false)}>Close</button>
                  </div>
              </form>
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
    </div>
  )
}

export default SerialSetting