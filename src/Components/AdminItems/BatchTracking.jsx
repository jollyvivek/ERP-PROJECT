import React, { useEffect, useRef, useState } from 'react'

const BatchTracking = () => {
    const [showModal, setShowModal] = useState(false);
    // const inputRef = useRef(null);

    // useEffect(() => {
    //     if (showModal) {
    //       const modalElement = new bootstrap.Modal(document.getElementById('exampleModal'));
    //       modalElement.show(); 
    //       if (inputRef.current) {
    //         inputRef.current.focus(); 
    //       }
    //     }
    //   }, [showModal]);

  return (
    <div className='container-fluid'>
        <div className='row mt-3'>
            <div className='col-md-8 border border-secondary rounded-3 ms-2'>
                <div className='row'>
                    <div className='col-md-6 py-1'>
                    <label htmlFor="" className="col-form-label fs-6 w-100 text-center" >Batch No :</label>
                    <input type="text" className="form-control mt-1"  name="currentYear" autoComplete="off"
                     onClick={()=>setShowModal(true)}  />
                    </div>
                    <div className='col-md-6 py-1 d-flex align-items-center gap-2 '>
                        <button className='btn btn-secondary mt-5'>Submit</button>
                        <button className='btn btn-secondary mt-5'>Reset</button>
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
                  <input type="text" className="form-control"  name="currentYear"
                    autoComplete="off" required  />
                </div>
                </div>
                <div className="mb-2 row">
                    <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >Item Name : </label>
                    <div className="col-sm-8 d-flex align-items-center">
                        <input type="text" className="form-control"  name="currentYear" autoComplete="off" required  />
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
                                {/* <input type="text"  className="form-control" placeholder="Enter text here" /> */}
                                <select className="form-select form-select-sm" 
                                    name='DigitalSign' aria-label="Default select example">
                                    <option> select</option>
                                    <option value="AB101">AB101</option>
                                    <option value="AB102">AB102</option>
                                    <option value="AB102">AB103</option>
                                    <option value="AB102">AB104</option>
                                    <option value="AB102">AB105</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='row mt-3 px-1'>
                                <label className=''>Item Name </label>
                                {/* <input type="text"  className="form-control" placeholder="Enter text here" /> */}
                                <select className="form-select form-select-sm" 
                                    name='DigitalSign' aria-label="Default select example">
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
                                {/* <input type="text"  className="form-control" placeholder="Enter text here" /> */}
                                <select className="form-select form-select-sm" 
                                    name='DigitalSign' aria-label="Default select example">
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
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
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