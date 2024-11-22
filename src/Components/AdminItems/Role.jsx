import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify'
// import { RoleFetchList } from '../../Utils/HandleApi'

const Role = ({RoleModel}) => {
  const {url}= useContext(StoreContext);
  const [dataList,setDataList]= useState([])
  const[isUpdate,setIsUpdate]=useState(false)
  const [updateData,setUpdateData] =useState({ RoleName:"",Description:"" });

  const [roleId,setRoleId] = useState("")
  const navigate = useNavigate()

  const columns =[
    {name:"Role Name",selector:row=>row.RoleName,sortable:true},
    {name:"Description",selector:row=>row.Description,sortable:true},
    {name:"Modify",selector:row=>row._id,cell:row=>(
      <button className="btn text-center fs-4"  onClick={()=>updateRole(row._id,row.RoleName,row.Description)}><BiEdit/></button>
    )},
    {name:"Delete",selecto:row=>row._id ,cell: row=>(
      <button className=" btn text-danger text-center fs-4"
       onClick={()=>removeRole(row._id)}
       ><MdDelete/></button>
    )}
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
            fontSize:"20px"
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // padding for body cells
            paddingRight: '8px',
             fontSize:"16px"
        },
    },
    };

    const RoleFetchList =  async()=>{
        try {
          const response = await axios.get(`${url}/api/role/list`);
          if (response.data.success) {
            setDataList(response.data.data);
            // console.log(response.data.data)
          } else {
            console.log(response.data.message)
          }
        } catch (error) {
          console.log(error)
        }
    }
  useEffect(()=>{
    RoleFetchList();
  },[]);

  // handleFilter

  const handleFilter =(event)=>{
    const searchText = event.target.value.toLowerCase();
    const filteredData = dataList.filter(row =>{
      return row.Description.toLowerCase().includes(searchText)
    });
    if(searchText){
      setDataList(filteredData);
     }else{
      setDataList(()=>{
        RoleFetchList();
      })
     }
  }

    const removeRole = async(id)=>{
      try {
        const response = await axios.post(`${url}/api/role/remove`,{id:id});
        if (response) {
          RoleFetchList(setDataList);
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error)
      }
    }

    const updateHandler = (event)=>{
        const {name,value} = event.target;
        setUpdateData((data)=>({...data,[name]:value}))
    }
    const updateRole = (id,RoleName,Description)=>{
      setIsUpdate(true)
      setRoleId(id)
      setUpdateData({RoleName:RoleName,Description:Description});
    }

    const updateSubmitHandler = async(roleId,updateData)=>{
        try {
          const response = await axios.post(`${url}/api/role/update`,{
            id:roleId,RoleName:updateData.RoleName,Description:updateData.Description
          });
          if (response.data.success) {
            setIsUpdate(false);
            setUpdateData({RoleName:"",Description:""});
            toast.success(response.data.message)
            RoleFetchList();
          } else {
            toast.error(response.data.message)
          }
        } catch (error) {
          console.log(error)
          toast.error(response.data.message)
        }      
      // console.log(updateData);
    }

  return (
    <>
    <div className='container-fluid role'>

      <div className='row'>
        <div className='col-md-12'>
          <div className='d-flex justify-content-between mt-3'>
          <h4>Role Record</h4>
          <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5' onClick={()=>RoleModel(true)}>Add New</button>
          </div> 
          <div>
          <div className='mt-3 '>
              <input type="text" className='form-control '
               onChange={handleFilter} 
               placeholder='Search Here'  />
            </div>
          <DataTable
            columns={columns}
            data={dataList}
            customStyles={customStyles}
          />

          </div>        
        </div>
        
      </div>
      {/* RoleUpdate  */}
      
{isUpdate && (
<div className="modal show fade" style={{ display: 'block' }} id="exampleModal" tabIndex="-1" 
     aria-labelledby="exampleModalLabel"
    //  aria-hidden="true"
    >
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Role Details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setIsUpdate(false)}></button>
      </div>
      <div className="modal-body">
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md12'>
            <form action="">
              <fieldset className="py-2">
                <legend>Role Details</legend>
                <div className="mb-2 row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Role Name :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control bg-body-secondary"  name="RoleName"
                    value={updateData.RoleName} onChange={updateHandler}
                    autoComplete="off" required  />
                </div>
                </div>
              <div className="mb-2 row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Description :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control bg-body-secondary" name="Description" value={updateData.Description}
                       onChange={updateHandler} autoComplete="off" required />
                </div>
              </div>
              </fieldset>
            </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" onClick={()=>updateSubmitHandler(roleId,updateData)}>Update</button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setIsUpdate(false)}>Close</button>
        
      </div>
    </div>
  </div>
</div>
)}
      {/* RoleUpdate end */}

    </div>

    </>
  )
}

export default Role;