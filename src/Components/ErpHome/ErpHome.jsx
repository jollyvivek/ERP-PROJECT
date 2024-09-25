import React from 'react'
import './ErpHome.css'
import erpImage from '../../assets/erp_image.jpeg'

const ErpHome = () => {
  return (
    <div className='container-fluid px-0'>
     <div className='row'>
      <div className='col-md-12 erp-home'>
      <img className='img-fluid h-100' src={erpImage} alt="" />

      </div>
     </div>
           
      </div>
  )
}

export default ErpHome