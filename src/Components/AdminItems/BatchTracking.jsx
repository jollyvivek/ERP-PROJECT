import React, { useEffect, useRef, useState } from 'react'

const BatchTracking = () => {
    const [showModal, setShowModal] = useState(false);
   const [batchData,setBatchData] = useState({
    BatchNo:"",
    ItemCode:"",
    ItemName:""
   });
   const [selectedValue, setSelectedValue] = useState({
    BatchNo:"",
    ItemCode:"",
    ItemName:""
   });

   const BatchHandleChange = (event)=>{
    const {name,value}= event.target;
    setBatchData((data)=>({...data,[name]:value}))
   }

   const BatchSubmitHandler =()=>{
    console.log(batchData)
    setBatchData({ BatchNo:"", ItemCode:"", ItemName:""})
   };

   const BatchResetHandler = ()=>{
    setBatchData({ BatchNo:"", ItemCode:"", ItemName:""})
   }

   const ModelOnChange = (event)=>{
        const {name,value} = event.target;
        setSelectedValue((data)=>({...data,[name]:value}))
   }

   const batchModelHandler = ()=>{
    setShowModal(false)
    setBatchData(selectedValue)
   }

  return (
    <div className='container-fluid'>
        <h5 className='my-2'>Master Report For Batch No</h5>
        <div className='row mt-3'>
            <div className='col-md-8 border border-secondary rounded-3 ms-2'>
                <div className='row'>
                    <div className='col-md-6 py-1'>
                    <label htmlFor="" className="col-form-label fs-6 w-100 text-center" >Batch No :</label>
                    <input type="text" className="form-control mt-1" readOnly  name="BatchNo" value={batchData.BatchNo} 
                    onChange={BatchHandleChange} 
                    autoComplete="off"
                     onClick={()=>setShowModal(true)}  />
                    </div>
                    <div className='col-md-6 py-1 d-flex align-items-center gap-2 '>
                        <button type='button' className='btn btn-secondary mt-5' onClick={BatchSubmitHandler}>Submit</button>
                        <button className='btn btn-secondary mt-5' onClick={BatchResetHandler}>Reset</button>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-8 ms-2 px-0'>
                <fieldset className='border-secondary rounded-3'>
                    <legend>Items Details</legend>
                <div className="mb-2 row">
                    <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >Item Code : </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="text" className="form-control" readOnly  name="ItemCode" value={batchData.ItemCode}
                   onChange={BatchHandleChange}
                    autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row">
                    <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >Item Name : </label>
                    <div className="col-sm-8 d-flex align-items-center">
                        <input type="text" className="form-control" readOnly   name="ItemName"  value={batchData.ItemName} 
                         onChange={BatchHandleChange} 
                         autoComplete="off" required  />
                    </div>
                </div>
                </fieldset>
            </div>
        </div>
        
        {/* model */}
        {showModal && (
        <div className="modal show fade"
         style={{ display: 'block' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Select Batch</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='row mt-3 px-1'>
                                <label className=''>Item Code</label>
                                <select className="form-select form-select-sm" 
                                    name='ItemCode' value={selectedValue.ItemCode} onChange={ModelOnChange} aria-label="Default select example">
                                    <option> select</option>
                                    <option value="AB101">AB101</option>
                                    <option value="AB102">AB102</option>
                                    <option value="AB103">AB103</option>
                                    <option value="AB104">AB104</option>
                                    <option value="AB105">AB105</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='row mt-3 px-1'>
                                <label className=''>Item Name </label>
                                <select className="form-select form-select-sm" 
                                    name='ItemName' value={selectedValue.ItemName} onChange={ModelOnChange} aria-label="Default select example">
                                    <option> select</option>
                                    <option value="Item-1">Item-1</option>
                                    <option value="Item-2">Item-2</option>
                                    <option value="Item-3">Item-3</option>
                                    <option value="Item-4">Item-4</option>
                                    <option value="Item-5">Item-5</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='row mt-3 px-1'>
                                <label className=''>Batch No</label>
                                <select className="form-select form-select-sm" 
                                    name='BatchNo' value={selectedValue.BatchNo} onChange={ModelOnChange} aria-label="Default select example">
                                    <option> select</option>
                                    <option value="101">101</option>
                                    <option value="102">102</option>
                                    <option value="103">103</option>
                                    <option value="104">104</option>
                                    <option value="105">105</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>

            <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={batchModelHandler}>Submit</button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              
            </div>
          </div>
        </div>
        </div>
        )}







        {/* model end */}
    </div>
  )
}

export default BatchTracking