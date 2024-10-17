import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const Role = ({RoleModel}) => {
  const navigate = useNavigate()
  const dataList =[
    {RoleName :"Web Developer", Description:"Gautam"},
    {RoleName :"Mern Stack", Description:"Vivek"},
    {RoleName :"UX Developer", Description:"Priya"},
    {RoleName :"Testing", Description:"Ajay"}
  ]
  const columns =[
    {name:"Role Name",selector:row=>row.RoleName,sortable:true},
    {name:"Description",selector:row=>row.Description,sortable:true}
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

export default Role