import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const ManageUser = () => {

  const url = " http://localhost:4000"
  const [list , setList] = useState([])

  const fetchCompany = async() =>{
    const response = await axios.get(`${url}/api/company/list`);
    // console.log(response.data)
    if(response.data.success){
      setList(response.data.data)
     
    }else{
      console.log("Error")
    }
  }

useEffect(()=>{
fetchCompany();
},[])

  const columns = [
    { name :'companyName', selector: row=>row.companyName,sortable:true},
    { name :'logo', selector: row=>row.logo,
      cell: row => (
        <img
          src={`${url}/images/` + row.logo}
          alt={row.companyName}
          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '5px' }}
        />
      )
    },
    { name :'tagline', selector: row=>row.tagline,sortable:true},
    { name :'website', selector: row=>row.website,sortable:true},
    {name:"Email", selector: row=>row.email,sortable:true},
    { name :'optionalEmail', selector: row=>row.optionalEmail,sortable:true},
    { name :'aadhaarNo', selector: row=>row.aadhaarNo},
    { name :'contactNo', selector: row=>row.contactNo},
    { name :'contactPerson', selector: row=>row.contactPerson,sortable:true},
    { name :'personContactNo', selector: row=>row.personContactNo},
    { name :'address', selector: row=>row.address},
    { name :'country', selector: row=>row.country,sortable:true},
    { name :'state', selector: row=>row.state,sortable:true},
    { name :'city', selector: row=>row.city,sortable:true},
    { name :'pincode', selector: row=>row.pincode},
    { name :'note', selector: row=>row.note}
];


const handleFilter = (event)=>{
const searchText = event.target.value.toLowerCase();
  const filteredData = list.filter(row =>
   row.companyName.toLowerCase().includes(searchText)
   );
 setList(filteredData);
}

  return (
    <div className='container-fluid'>
      {/* <h3>ManageUser</h3> */}
      <div className='row'>
        <div className='col-md-12 '>
          <div className='mt-3'>
            <input type="text" className='form-control' onChange={handleFilter} placeholder='Search Here'  />
          </div>
          <DataTable columns={columns}
          data={list} selectableRows pagination >
          </DataTable>
        </div>
      </div>
    </div>
  )
}

export default ManageUser