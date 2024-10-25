import React from 'react'
import DataTable from 'react-data-table-component'

const ManageUser = ({addModelHandler}) => {

  const dataList =[
    {Name :"Gautam", Email:"gautam@gmail.com",MobileNo:"9876543210"},
    {Name :"Vivek", Email:"vivek@gmail.com",MobileNo:"7854239610"},
    {Name :"Priya", Email:"priya@gmail.com",MobileNo:"999998888"},
    {Name :"Ajay", Email:"ajay@gmail.com",MobileNo:"88888999999"}
  ]
  const columns =[
    {name:"Name",selector:row=>row.Name,sortable:true},
    {name:"Email",selector:row=>row.Email,sortable:true},
    {name:"Mobile No",selector:row=>row.MobileNo}
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

  return (
    <div className='container-fluid manage-user'>
      <div className='row'>
        <div className='col-md-10 offset-1'>
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