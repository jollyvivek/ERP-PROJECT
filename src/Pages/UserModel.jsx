import React, { useState } from 'react'
import ModuleMenuCommon from './ModuleMenuCommon'


const UserModel = ({addModelHandler}) => {

  const [testMail,setTestMail]= useState(false)

  return (
    <div className="container-fluid px-3 position-absolute h-100  z-1 "
    style={{background:"lightGrey", 
    overflowY:"scroll"
     }}>
      <div className='row'>
      <h4>Add User</h4>
      <div className="col-md-4">
          <fieldset className="py-2">
            <legend>User Details</legend>
            <form action="">
              <div className="row ">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Name :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Role :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                 User Name :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Password :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="password" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Mobile No :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="number" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Email Id :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="email" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Email Password :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="password" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  SMTP Port :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  SMTP Host :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  POP Port :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
              </div>
              <div className="row ">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Enable SSL :
                </label>
                <div className="col-sm-7 d-flex align-items-center gap-3">
                  {/* <div className='row'> */}
                    {/* <div className='col-md-7'> */}
                    <select className="form-select form-select-sm w-75" aria-label="Default select example">
                           <option> select menu</option>
                           <option value="True">True</option>
                           <option value="False">False</option>
                    </select>
                    {/* </div> */}
                    {/* <div className='col-md-5 d-flex align-items-center bg-danger m-0 '> */}
                        <button type="button" 
                        className='border-primary p-2 rounded-2 w-50' onClick={()=>setTestMail(true)}
                          //  data-bs-toggle="modal"
                          // data-bs-target="#staticBackdrop"
                          >Test Mail</button>
                    {/* </div> */}

                  {/* </div> */}
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Digital Sign :
                </label>
                <div className="col-sm-4 d-flex align-items-center">
                <select className="form-select form-select-sm" aria-label="Default select example">
                           <option> select menu</option>
                           <option value="Yes">Yes</option>
                           <option value="Yes">No</option>
                  </select>
                </div>
              </div>

              <div className="mb-3 p-2 row">
                <div className="col-md-12">
                  <p className="fs-5 m-0">Select Company :</p>
                  <div className="row border border-secondary m-0">
                    <p className="col-12 px-2 fs-5 m-0">Company Names</p>
                    <div className="row p-0 m-0">
                      <div className="col-sm-12 d-flex align-items-center gap-2 ">
                        <input id="bfox" type="checkbox" className="form-check-input px-2" name="" />
                        <label htmlFor="bfox" className="col-form-label" >Bfox Pvt Lmt </label>
                      </div>
                    </div>
                    <div className="row p-0 m-0">
                      <div className="col-sm-12 d-flex align-items-center gap-2">
                        <input id="googles" type="checkbox" className="form-check-input px-2 m-0" name="" />
                        <label htmlFor="googles" className="col-form-label" >Googles Infotech </label>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-2 border-secondary">
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" onClick={()=>confirm("Do you really want to New Entry ?")}>New</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" onClick={()=>addModelHandler(false)}> Save</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary">Updare</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" >Delete</button>
              </div>
            </form>
          </fieldset>
      </div>
      <div className='col-md-8'>
        <ModuleMenuCommon/>
      </div>

{/* <!-- Modal --> */}
{testMail && (
<div className="modal show fade"
   style={{ display: 'block' }} 
    id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
     tabIndex="-1" aria-labelledby="staticBackdropLabel" 
    //  aria-hidden="true"
     >
  <div  className="modal-dialog modal-dialog-centered">
    <div  className="modal-content">
      <div  className="modal-header">
        <h5  className="modal-title" id="staticBackdropLabel">Test Mail</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setTestMail(false)}></button>
      </div>
      <div  className="modal-body">
        <div className='container-fluid'>
          <fieldset>
            <legend>Mail Details</legend>
            <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  From :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="From"  />
                </div>
            </div>
            <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  To :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="To"  />
                </div>
            </div>
            <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  Cc :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="Cc"  />
                </div>
            </div>
            <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  Subject :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
            </div>
            <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  Message :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"  name="RoleName"  />
                </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div  className="modal-footer">
        <button type="button"  className="btn btn-primary">Send</button>
        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setTestMail(false)}>Close</button>
      </div>
    </div>
  </div>
</div>
)}

      </div>       
          
    </div>
  )
}

export default UserModel