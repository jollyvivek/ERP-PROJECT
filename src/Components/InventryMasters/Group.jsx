import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Group = () => {
  const [showModal, setShowModal] = useState(false);
  const {url} = useContext(StoreContext)
  const [groupId,setGroupId]=useState("")
  const[groupForm,setGroupForm]= useState(false)
  const [groupRecords,setGroupRecords]= useState([])
  const [data,setData] = useState({
    GroupName:"",
    ProductionUnit:"",
    Description:""

  })

    
      const columns =[
        {name:"Group Name",selector:row=>row.GroupName,sortable:true},
        {name:"Description",selector:row=>row.Description,sortable:true},
        {name:"Production Unit",selector:row=>row.ProductionUnit,sortable:true},
        {name:"Modify",selector:row=>row._id,cell:row=>(
            <button className="btn text-center fs-4" 
            onClick={()=>updateModelHandelr(row._id,row.GroupName,row.ProductionUnit,row.Description)}><BiEdit/></button>
          )},
          {name:"Delete",selecto:row=>row._id ,cell: row=>(
              <button className=" btn text-danger text-center fs-4"
               onClick={()=>GroupRemove(row._id)}
               ><MdDelete/></button>
            )
          
            }
      ];

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

      // handler 
      const onChangeHandler =(event)=>{
        const {name,value} = event.target
        setData((data)=>({...data,[name]:value}))
      }

      const AddNewModel = async()=>{
        setShowModal(true)
        setGroupForm(false)
        setData({GroupName:"",ProductionUnit:"",Description:""})
      }

      const FormSubmitHandler = async(event)=>{
        event.preventDefault();
        let payload = {
          GroupName:data.GroupName,
          ProductionUnit:data.ProductionUnit,
          Description:data.Description
        }
        const response = await axios.post(`${url}/api/group/add`,payload);
        if (response.data.success) {
          setData({GroupName:"",ProductionUnit:"",Description:""})
          toast.success(response.data.message)
        } else {
          console.log("error");
          toast.error(response.data.message)
        }
        setShowModal(false)
        groupFetchRecords()
      }

      // facth records
      const groupFetchRecords= async()=>{
        const response = await axios.get(`${url}/api/group/list`);
        if(response.data.data){
          setGroupRecords(response.data.data)
          // console.log(response)
        }else{
          console.log("Error")
        }
    
      }
    
      useEffect(()=>{
        groupFetchRecords();
      },[]);

      // delete
      const GroupRemove = async(id)=>{
        const response = await axios.post(`${url}/api/group/remove`,{id:id})
        await groupFetchRecords();
        toast.success(response.data.message)
      }

      // update

      const updateModelHandelr = (id,GroupName,ProductionUnit,Description)=>{
        setShowModal(true)
        setGroupForm(true)
        setGroupId(id)
        setData({GroupName:GroupName,ProductionUnit:ProductionUnit,Description:Description})
      }
      const GroupUpdateHandler = async(groupId,data)=>{
          try {
            const response = await axios.post(`${url}/api/group/update`,{id:groupId,GroupName:data.GroupName,
              ProductionUnit:data.ProductionUnit,Description:data.Description});
              if (response.data.success) {
                setData({GroupName:"",ProductionUnit:"",Description:""})
                toast.success(response.data.message)
              } else {
                 toast.error(response.data.message)
              }
          } catch (error) {
             toast.error(response.data.message)
          }
          setShowModal(false)
          setGroupForm(false)
          groupFetchRecords();
      }


  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='d-flex justify-content-between mt-3'>
                    <h5> Group Record</h5>
                    <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5' onClick={AddNewModel}
                        // data-bs-toggle="modal" data-bs-target="#GroupModal"
                        >Add New
                    </button>
                </div>
            </div>
            <div className='mt-3 d-flex  justify-content-end align-items-center gap-3'>
                <label htmlFor="" className='form-select-lg'>Serach : </label>
               <input type="text" className='form-control w-25 '
                //  onChange={handleFilter} 
                placeholder='Search Here'  />
            </div>
          <DataTable  columns={columns}  data={groupRecords}  customStyles={customStyles} />
        </div>
        {/* Group model */}

{showModal && (
<div className="modal show fade" id="GroupModal" tabIndex="-1"  style={{ display: 'block' }}
  aria-labelledby="exampleModalLabel"
  //  aria-hidden="true"
  >
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Group Master</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={()=>setShowModal(false)}></button>
      </div>
      <div className="modal-body">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 px-0'>
                  <form action="">
                    <fieldset>
                        <legend>Group</legend>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Group Name :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="GroupName"
                                value={data.GroupName} onChange={onChangeHandler}
                                autoComplete="off" required  />
                        </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Production Unit :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="ProductionUnit"
                                value={data.ProductionUnit} onChange={onChangeHandler}
                                autoComplete="off" required  />
                        </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Description :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="Description"
                                value={data.Description} onChange={onChangeHandler}
                                autoComplete="off" required  />
                        </div>
                        </div>
                        <div className='my-3 d-flex justify-content-center gap-1'>
                            <button type="button" className="btn btn-primary" 
                            onClick={groupForm ? ()=>GroupUpdateHandler(groupId,data) : FormSubmitHandler}>{groupForm ? "Update" :"Save"}</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setShowModal(false)}>
                              Close
                            </button>
                        </div>
                    </fieldset>
                  </form>
                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>
</div>
)}
     </div>
  )
}

export default Group