import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderSerialSetting = () => {
  const {url} = useContext(StoreContext)
  const [id,setId] = useState("")
  const [fetchData,setFetchData] = useState([])
  const[settingForm,setSettingForm]= useState(false)
  const [settingModel,setSettingModel] = useState(false)
  const [data,setData] = useState({
    Type:"",
    Name:"",
    Prefix:"",
    Postfix:"",
    AutoGenerate:"",
    NoOfDigit:"",
    StartFrom:""

  })

  const columns =[
    {name:"Type",selector:row=>row.Type,sortable:true},
    {name:"Name",selector:row=>row.Name,sortable:true},
    {name:"Prefix",selector:row=>row.Prefix,sortable:true},
    {name:"Postfix",selector:row=>row.Postfix},
    {name:"Auto Generate",selector:row=>row.AutoGenerate},
    {name:"Modify",selector:row=>row,cell:row=>(
      <button className="btn text-center fs-4" 
      onClick={()=>OrderSerialSettingUpdate(row._id,row.Type,row.Name,row.Prefix,row.Postfix,row.AutoGenerate,row.NoOfDigit,row.StartFrom)}><BiEdit/></button>
    )},
    {name:"Delete",selecto:row=>row._id ,cell: row=>(
            <button className=" btn text-danger text-center fs-4"
             onClick={()=>OrderSerialSettingRemove(row._id)}
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

    const OrderSerialSettingAddModel = ()=>{
      setSettingModel(true)
      setSettingForm(false)
      setData({Type:"",Name:"",Prefix:"",Postfix:"",AutoGenerate:"",NoOfDigit:"",StartFrom:""})
    }

    const onChangeHandler = (event)=>{
      const {name,value} = event.target;
      setData((data)=>({...data,[name]:value}))
    }

    // useEffect(()=>{console.log(data)},[data])

    const OrderSerialSettingSubmit = async(event)=>{
      event.preventDefault();
      let payload = {
        Type:data.Type,
        Name:data.Name,
        Prefix:data.Prefix,
        Postfix:data.Postfix,
        AutoGenerate:data.AutoGenerate,
        NoOfDigit:Number(data.NoOfDigit),
        StartFrom:Number(data.StartFrom)
      }
      const response = await axios.post(`${url}/api/orderserialsetting/add`,payload);
      if (response.data.success) {
          setData({ Type:"",Name:"",Prefix:"", Postfix:"", AutoGenerate:"",NoOfDigit:"", StartFrom:""})
          toast.success(response.data.message)
        } else {
                console.log("error");
                toast.error(response.data.message)
              }
      setSettingModel(false)
      FetchRecords()
      // console.log(data)
    }
    // fetch data
    const FetchRecords= async()=>{
      const response = await axios.get(`${url}/api/orderserialsetting/list`);
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
    const OrderSerialSettingUpdate = (id,Type,Name,Prefix,Postfix,AutoGenerate,NoOfDigit,StartFrom)=>{
      setSettingModel(true)
      setSettingForm(true)
      setData({Type:Type,Name:Name,Prefix:Prefix,Postfix:Postfix,AutoGenerate:AutoGenerate,NoOfDigit:NoOfDigit,StartFrom:StartFrom});
      setId(id)
    }

    const OrderSerialSettingUpdateHandler = async(id,data)=>{
      try {
        const response = await axios.post(`${url}/api/orderserialsetting/update`,{
          id:id,Type:data.Type,Name:data.Name,Prefix:data.Prefix,Postfix:data.Postfix,AutoGenerate:data.AutoGenerate,
          NoOfDigit:Number(data.NoOfDigit),
          StartFrom:Number(data.StartFrom)
        });
        if (response.data.success) {
          setSettingModel(false)
          setSettingForm(false)
          setData({ Type:"",Name:"",Prefix:"",Postfix:"",AutoGenerate:"",NoOfDigit:"",StartFrom:""});
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log("Error");
        toast.error(response.data.message);
      }
      FetchRecords();
    }

    // delete
    const OrderSerialSettingRemove = async(id)=>{
      const response = await axios.post(`${url}/api/orderserialsetting/remove`,{id:id})
      await FetchRecords();
      toast.success(response.data.message)
    }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 px-3'>
          <div className='d-flex justify-content-between mt-3'>
                <h4>Order Serial Setting Record</h4>
                <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                   onClick={OrderSerialSettingAddModel}
                   >Add New</button>
          </div>
          <div className='mt-3 '>
               <input type="text" className='form-control '
                //  onChange={handleFilter} 
                placeholder='Search Here'  />
          </div>
          <DataTable  columns={columns}  data={fetchData}    customStyles={customStyles}  />


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
      <div className="modal-body border  border-secondary rounded-3 mx-2">
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <form 
                  // onSubmit={settingForm ? ()=>alert("update call") : OrderSerialSettingSubmit}
              >
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Type :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                  <select className="form-select form-select-sm bg-body-secondary" 
                        name='Type' value={data.Type} onChange={onChangeHandler} required aria-label="Default select example">
                           <option> select</option>
                           <option value="Sales Order">Sales Order</option>
                           <option value="Export Sales Order">Export Sales Order</option>
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
                      value={data.Name} onChange={onChangeHandler}
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
                      autoComplete="off"  />
                </div>
                </div>
                <div className="mb-2 row ">
                  <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >No Of Digit :</label>             
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="number" className="form-control bg-body-secondary"  name="NoOfDigit"
                      value={data.NoOfDigit} onChange={onChangeHandler}
                      autoComplete="off" required  />
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
                  <div className="mb-2 row">
                   <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Auto Generate :</label>             
                   <div className="col-sm-5 d-flex align-items-center">
                   <select className="form-select form-select-sm bg-body-secondary" 
                        name='AutoGenerate' value={data.AutoGenerate} onChange={onChangeHandler} required aria-label="Default select example">
                           <option> select</option>
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                    </select>
                    </div>
                  </div>
                  <div className=' mb-2 row '>
                    <label htmlFor="" className=" col-sm-5 col-form-label fs-5" >Example :</label>  
                    <label className='col-sm-7 col-form-label fs-5 '>{data.Prefix + 0 + data.StartFrom + data.Postfix} </label>
                  </div>
                  <div className='mt-3 d-flex justify-content-center gap-2'>
                    <button type="button" className="btn btn-primary"
                      onClick={settingForm ? ()=>OrderSerialSettingUpdateHandler(id,data) : OrderSerialSettingSubmit}>{settingForm ? "Update" :"Save"}</button>
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

export default OrderSerialSetting