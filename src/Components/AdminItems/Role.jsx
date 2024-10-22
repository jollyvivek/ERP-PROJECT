import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify'
import { RoleFetchList } from '../../Utils/HandleApi'

const Role = ({RoleModel}) => {
  const {url}= useContext(StoreContext);
  const [dataList,setDataList]= useState([])
  const [roleId,setRoleId] = useState("")
  const navigate = useNavigate()
  // const dataList =[
  //   {RoleName :"Web Developer", Description:"Gautam"},
  //   {RoleName :"Mern Stack", Description:"Vivek"},
  //   {RoleName :"UX Developer", Description:"Priya"},
  //   {RoleName :"Testing", Description:"Ajay"}
  // ];

  const columns =[
    {name:"Role Name",selector:row=>row.RoleName,sortable:true},
    {name:"Description",selector:row=>row.Description,sortable:true},
    {name:"Modify",selector:row=>row._id,cell:row=>(
      <button className="btn text-center fs-4" onClick={()=>updateRole(row._id,RoleModel,row.RoleName,row.Description)}><BiEdit/></button>
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

    // const RoleFetchList =  async()=>{
    //     try {
    //       const response = await axios.get(`${url}/api/role/list`);
    //       if (response.data.success) {
    //         setDataList(response.data.data);
    //         // console.log(response.data.data)
    //       } else {
    //         console.log(response.data.message)
    //       }
    //     } catch (error) {
    //       console.log(error)
    //     }
    // }
  useEffect(()=>{
    RoleFetchList(setDataList);
  },[]);

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

    const updateRole = (id,RoleModel,RoleName,Description)=>{
      RoleModel(true)
      // setRoleId(id)
      // setDataList({RoleName:RoleName,Description:Description})
      // alert(`${RoleName} ${Description}`);
    }

  return (
    <>
    <div className='container-fluid role'>
      <div className='row'>
        <div className='col-md-10 offset-1'>
          <div className='d-flex justify-content-between mt-3'>
          <h4>Role Record</h4>
          <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5' onClick={()=>RoleModel(true)}>Add New</button>
          </div> 
          <div>
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
        
      </div>
    </div>

    </>
  )
}

export default Role;