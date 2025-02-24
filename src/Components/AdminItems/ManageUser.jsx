import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const ManageUser = ({addModelHandler}) => {
  const {url} = useContext(StoreContext)
  const [dataList,setDataList]= useState([])
  
  const columns =[
    {name:"Name",selector:row=>row.Name,sortable:true},
    {name:"Email",selector:row=>row.Email,sortable:true},
    {name:"Mobile No",selector:row=>row.MobileNo},
    {name:"Modify",selector:row=>row._id,cell:row=>(
          <button className="btn text-center fs-4"  onClick={()=>alert(row._id)}><BiEdit/></button>
        )},
    {name:"Delete",selecto:row=>row._id ,cell: row=>(
          <button className=" btn text-danger text-center fs-4"
           onClick={()=>RemoveManageUser(row._id)}
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
            fontSize:"18px"
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // padding for body cells
            paddingRight: '8px',
             fontSize:"15px"
        },
    },
    };
    // ManageUserFetch
    const ManageUserFetch = async()=>{
        try {
            const response = await axios.get(`${url}/api/manageuser/list`);
            // console.log(response)
            if (response.data.success) {
                setDataList(response.data.data);
            } else {
                console.log(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
      
    }
    useEffect(()=>{ManageUserFetch()},[]);

// remove

const RemoveManageUser = async(id)=>{
   try {
    const response = await axios.post(`${url}/api/manageuser/remove`,{id:id});
            console.log(response)
            if (response) {
              ManageUserFetch()
              toast.success(response.data.message)
            } else {
              toast.error(response.data.message)
            }
   } catch (error) {
    console.log(error)
   }
}



  return (
    <div className='container-fluid manage-user'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='d-flex justify-content-between mt-3'>
          <h4>Users</h4>
          <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
           onClick={()=>addModelHandler(true)}>Add New</button>
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
  )
}

export default ManageUser