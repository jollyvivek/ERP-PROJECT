import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Role = () => {
  const url = " http://localhost:4000/api/company/list"
  const [list , setList] = useState([])

  const fetchCompany = async() =>{
    const response = await axios.get(`${url}`);
    console.log(response.data)
    if(response.data.success){
      setList(response.data.data)
     
    }else{
      console.log("Error")
    }
  }

useEffect(()=>{
fetchCompany();
},[])

  return (
    <div className='container-fluid bg-secondary '>
      <div className='row'>
        <div className='col-md-12'>
        <h3>Role Page</h3>
        {list.map((item,index)=>{
            return <div key={index}>
              <h3>{item.companyName}</h3>
              <img src={item.logo} alt="logo" />
              <h5>{item.tagline}</h5>
              <h5>{item.website}</h5>
              <h5>{item.email}</h5>
              <h5>{item.optionalEmail}</h5>
              <h5>{item.aadhaarNo}</h5>
              <h5>{item.contactNo}</h5>
              <h5>{item.contactPerson}</h5>
              <h5>{item.personContactNo}</h5>
              <h5>{item.address}</h5>
              <h5>{item.country}</h5>
              <h5>{item.state}</h5>
              <h5>{item.city}</h5>
              <h5>{item.pincode}</h5>
              <h5>{item.note}</h5>
            







            </div>
        })}





        </div>
      </div>
      
    </div>
  )
}

export default Role