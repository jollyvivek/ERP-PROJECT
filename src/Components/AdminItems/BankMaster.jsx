import React, { useEffect, useState } from 'react'

const BankMaster = () => {

  const [data,setData]=useState({
    BankName:"",
    BranchName:"",
    IfscCode:"",
    SwiftCode:"",
    AdCode:"",
    MicroCode:"",
    AccountName:"",
    AccountNo:""
  });

  

  const modelHandler = (event)=>{
    const name =event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
   }

   useEffect(()=>{
    console.log(data)
  },[data])

   const bankFormSubmitHandler =(event)=>{
      event.preventDefault()
   }

  return (
    <div className='container-fluid px-3'>
      {/* <h3>BankMaster</h3> */}

      <div className="row">
            <div className="col-md-12  role-content">
                <div className="row mt-3">
                    <div className="col-md-4">
                        <h3 className="fs-3">Bank Records </h3>
                    </div>
                    <div className="col-md-8 d-flex flex-column align-items-end justify-content-end">
                        <button className=" add-btn btn border-primary" id="addnew-btn" data-bs-toggle="modal" data-bs-target="#bankMaster">ADD
                            NEW</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <table id="example" className="table table-striped">
                            <thead>
                                <tr>
                                <th className="fs-5 fw-normal">Account Name</th>
                                    <th className="fs-5 fw-normal">Bank Name</th>
                                    <th className="fs-5 fw-normal">Branch Name</th>
                                    <th className="fs-5 fw-normal">IFSC Code</th>
                                    <th className="fs-5 fw-normal">Micro Code</th>
                                    <th className="fs-5 fw-normal">Account No</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  <td>Akshay Kumar</td>
                                    <td>SBI</td>
                                    <td>Jammu and Kashmir</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                </tr>
                                <tr>
                                    <td>Vinod Sharma</td>
                                    <td>Punjab National Bank</td>
                                    <td>Punjab</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                </tr>
                                <tr>
                                    <td>Anil Kumar</td>
                                    <td>ICICI</td>
                                    <td>Chandigarh</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td> 
                                </tr>
                                <tr>
                                    <td>Pankaj Kumar</td>
                                    <td>Dean Bank</td>
                                    <td>Jammu and Kashmir</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                </tr>
                                <tr>
                                    <td>Rajinder</td>
                                    <td>UCO Bank</td>
                                    <td>Haryana</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                </tr>
                                <tr>
                                    <td>Virat </td>
                                    <td>HDFC Bank</td>
                                    <td>Chandigarh</td>
                                    <td>654123456</td>
                                    <td>654123456</td>
                                    <td>6541234562</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

      </div>

       {/* model  */}
    <div className="modal fade model-box "
        id="bankMaster" 
        data-bs-backdrop="static"
        // tabindex="-1" 
        role="dialog"
        aria-labelledby="exampleModalCenterTitle" 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title fs-5">Bank Master</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <form action="" className="" onSubmit={bankFormSubmitHandler} >
                    <div className="modal-body">
                        <fieldset>
                            <legend>Bank Details</legend>
                            <div className="mb-1 row">
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Bank Name :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input 
                                          type="text" 
                                          className="form-control"
                                          name='BankName'
                                          value={data.BankName}
                                          onChange={modelHandler}
                                           required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Branch Name
                                        :</label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input 
                                          type="text"
                                           className="form-control"
                                           name='BranchName'
                                           value={data.BranchName}
                                           onChange={modelHandler}
                                           required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">IFSC Code :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input
                                         type="text"
                                          className="form-control"
                                          name='IfscCode'
                                          value={data.IfscCode}
                                          onChange={modelHandler}
                                           required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Swift Code :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input
                                         type="number"
                                          className="form-control"
                                          name='SwiftCode'
                                          value={data.SwiftCode}
                                          onChange={modelHandler}
                                          required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">AD Code :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input 
                                        type="number"
                                         className="form-control"
                                         name='AdCode'
                                         value={data.AdCode}
                                         onChange={modelHandler}
                                         required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Micro Code :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input
                                         type="number"
                                          className="form-control"
                                          name='MicroCode'
                                          value={data.MicroCode}
                                          onChange={modelHandler}
                                          required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Account Name :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input 
                                        type="text"
                                         className="form-control"
                                         name='AccountName'
                                         value={data.AccountName}
                                         onChange={modelHandler}
                                         required />
                                    </div>
                                </div>
                                <div className="mb-1 row">
                                    <label  className=" col-sm-5 col-form-label fs-5 text-end">Account No :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input 
                                        type="number"
                                         className="form-control"
                                         name='AccountNo'
                                         value={data.AccountNo}
                                         onChange={modelHandler}
                                         required />
                                    </div>
                                </div>
                              </div>
                        </fieldset>
                    </div>
                    <div className="modal-footer d-flex justify-content-center gap-1">
                        <button type="submit" className="btn btn-primary ">Save</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-secondary  ">Update</button>
                        <button type="reset" className="btn btn-danger ">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>



    </div>
  )
}

export default BankMaster