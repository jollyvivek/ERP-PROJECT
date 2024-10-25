import React from 'react'
import DataTable from 'react-data-table-component'


const SerialSetting = () => {

  const dataList =[
    {Name :"Gautam", Email:"gautam@gmail.com",MobileNo:"9876543210",AutoGenerate:"Yes"},
    {Name :"Vivek", Email:"vivek@gmail.com",MobileNo:"7854239610",AutoGenerate:"Yes"},
    {Name :"Priya", Email:"priya@gmail.com",MobileNo:"999998888",AutoGenerate:"Yes"},
    {Name :"Ajay", Email:"ajay@gmail.com",MobileNo:"88888999999",AutoGenerate:"Yes"}
  ]
  const columns =[
    {name:"Form Name",selector:row=>row.Name,sortable:true},
    {name:"Prefix",selector:row=>row.Email,sortable:true},
    {name:"Postfix",selector:row=>row.MobileNo},
    {name:"Auto Generate",selector:row=>row.AutoGenerate}
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
             display: "flex",
            justifyContent: "center"
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // padding for body cells
            paddingRight: '8px',
            fontSize:"15px",
            // border:"2px solid red",
            display: "flex",
            justifyContent: "center"
        },
    },
    };




  return (
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-10 offset-1'>
              <div className='d-flex justify-content-between mt-3'>
                <h4>Setting Record</h4>
                <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                   onClick={()=>alert("click")}>Add New</button>
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
    </div>
  )
}

export default SerialSetting