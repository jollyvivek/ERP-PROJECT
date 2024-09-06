import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";

const BankMaster = ({url}) => {
const[bankRecords,setBankRecords]=useState([])
 const [showModal, setShowModal] = useState(false);
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

//    fetch bankRecords
   const fetchBankRecords = async()=>{
    const response = await axios.get(`${url}/api/bankrecords/list`);
    if (response.data.success) {
        setBankRecords(response.data.data);
        // console.log("Bank records Fetch");
        // console.log(response.data)
    } else {
        console.log("error")
    }
   }

 useEffect(()=>{
    fetchBankRecords();
  },[])

//   remove bank records

  const removeBankRecord = async(bankRecordId)=>{
    const response = await axios.post(`${url}/api/bankrecords/remove`,{id:bankRecordId});
    await fetchBankRecords();
    toast.success(response.data.message);
  }

//   model from submit handler

   const bankFormSubmitHandler = async(event)=>{
      event.preventDefault();
    let payload ={
        BankName:data.BankName,
        BranchName:data.BranchName,
        IfscCode:data.IfscCode,
        SwiftCode:Number(data.SwiftCode),
        AdCode:Number(data.AdCode),
        MicroCode:Number(data.MicroCode),
        AccountName:data.AccountName,
        AccountNo:Number(data.AccountNo)
    }
    const response = await axios.post(`${url}/api/bankrecords/add`,payload);
    if (response.data.success) {
        setData({
            BankName:"",
            BranchName:"",
            IfscCode:"",
            SwiftCode:"",
            AdCode:"",
            MicroCode:"",
            AccountName:"",
            AccountNo:""
          });
          toast.success(response.data.message)
    } else {
        console.log("error");
        toast.error(response.data.message)
    }
    setShowModal(false);
    fetchBankRecords();
   }

  return (
    <div className='container-fluid px-3'>
        
      <div className="row">
            <div className="col-md-12  role-content">
                <div className="row mt-3">
                    <div className="col-md-4">
                        <h3 className="fs-3">Bank Records </h3>
                    </div>
                    <div className="col-md-8 d-flex flex-column align-items-end justify-content-end">
                        <button
                             className=" add-btn btn border-primary"
                             id="addnew-btn"
                             data-bs-toggle="modal"
                             data-bs-target="#bankMaster"
                             onClick={()=>setShowModal(true)}>ADD NEW
                        </button>
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
                                    <th className="fs-5 fw-normal">Swift Code</th>
                                    <th className="fs-5 fw-normal">AD Code</th>
                                    <th className="fs-5 fw-normal">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               {bankRecords.map((item,index)=>{
                                    return(
                                        <tr key={index} className='text-center'>
                                        <td>{item.AccountName}</td>
                                          <td>{item.BankName}</td>
                                          <td>{item.BranchName}</td>
                                          <td>{item.IfscCode}</td>
                                          <td>{item.MicroCode}</td>
                                          <td>{item.AccountNo}</td>
                                          <td>{item.SwiftCode}</td>
                                          <td>{item.AdCode}</td>
                                          <td style={{cursor:"pointer"}}
                                            className='fs-4 text-danger'
                                           onClick={()=> removeBankRecord(item._id)} ><MdDelete/></td>
                                      </tr>
                                    )
                               })}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

      </div>

       {/* model  */}
    {showModal && (
    <div className="modal show fade model-box "
        style={{ display: 'block' }}
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
                    <button 
                        type="button"
                         className="btn-close"
                         data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={()=>setShowModal(false)}
                          >
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
                        <button 
                            type="button"
                            className="btn btn-secondary"
                             data-bs-dismiss="modal"
                             onClick={()=>setShowModal(false)}
                             >Close</button>
                        <button type="button" className="btn btn-secondary">Update</button>
                        <button type="reset" className="btn btn-danger ">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )}


    </div>
  )
}

export default BankMaster