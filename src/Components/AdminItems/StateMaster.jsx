import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';


const StateMaster = () => {

  const url = "http://localhost:4000";
  const [stateRecords,setStateRecords]= useState([])
  const [showModal, setShowModal] = useState(false);
  const [data,setData]=useState({ StateCode:"", StateName:"", Country:"" });


  const stateFetchRecords= async()=>{
    const response = await axios.get(`${url}/api/state/list`);
    if(response.data.data){
      setStateRecords(response.data.data)
      // console.log("success")
    }else{
      console.log("Error")
    }

  }

  useEffect(()=>{
    stateFetchRecords();
  },[]);

  const removeState = async(stateId)=>{
    const response = await axios.post(`${url}/api/state/remove`,{id:stateId});
    await stateFetchRecords();
    toast.success(response.data.message);

  }

  const modelHandler = (event)=>{
    const name =event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
   }
  

  const stateFormSubmitHandler = async(event)=>{
    event.preventDefault();

    let payload = {
      StateCode:Number(data.StateCode),
      StateName:data.StateName,
      Country:data.Country
    }

    const response = await axios.post(`${url}/api/state/add`,payload);
    if (response.data.success) {
      setData({ StateCode:"", StateName:"", Country:"" });
      toast.success(response.data.message)
    }else{
      console.log("error");
      toast.error(response.data.message)
    }
    setShowModal(false);
    stateFetchRecords();
  };


  return (
    <div className='container-fluid px-3'>
      {/* <h3>StateMaster </h3> */}
      <div className="row">
            <div className="col-md-12  role-content">
                <div className="row mt-3">
                    <div className="col-md-4">
                        <h3 className="fs-5">State Record </h3>
                    </div>
                    <div className="col-md-8 d-flex flex-column align-items-end justify-content-end">
                        <button className=" add-btn btn border-primary" id="addnew-btn" 
                          data-bs-toggle="modal"
                          data-bs-target="#stateMaster"
                          onClick={()=>setShowModal(true)}
                          >ADD NEW
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                      <div className='row'>
                        <div className='col-md-4 d-flex  align-items-center px-3 gap-3'>
                          <label htmlFor="search" id='stateSearch' className='fs-5'>Search</label>
                          <input type="text" className='form-control' id="search" autoComplete='false' />
                        </div>
                      </div>
                        <table id="stateTable" className="table table-striped">
                            <thead>
                                <tr className='text-center'> 
                                    <th className="fs-5 fw-normal">State Code</th>
                                    <th className="fs-5 fw-normal">State Name</th>
                                    <th className="fs-5 fw-normal">Country Name</th>
                                    <th className='fs-5 fw-normal'>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {stateRecords.map((item,index)=>{
                                  return(
                                    <tr className='text-center'>
                                    <td>0{item.StateCode}</td>
                                    <td>{item.StateName}</td>
                                    <td>{item.Country}</td>
                                    <td className='text-danger fs-5' onClick={()=>removeState(item._id)}
                                      style={{cursor:"pointer"}}><MdDelete/></td>
                                </tr>
                                  )
                                })}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

      </div>
        {showModal && (
        <div className="modal show fade model-box "
          style={{ display: 'block' }}
          id="stateMaster" 
          data-bs-backdrop="static"
          tabindex="-1" role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title fs-3" id="exampleModalLongTitle">State Master</h5>
                    <button type="button" 
                    className="btn-close"
                     data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setShowModal(false)}
                      >
                    </button>
                </div>
                <form  className="needs-validation" onSubmit={stateFormSubmitHandler}>
                    <div className="modal-body">
                        <fieldset>
                            <legend>State Details</legend>
                              <div className="mb-3 row">
                                <div className="mb-3 row">
                                    <label for="" className=" col-sm-5 col-form-label fs-5 text-end">Country Name :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input type="text" 
                                        className="form-control"
                                        onChange={modelHandler}
                                        name='Country'
                                        value={data.Country}
                                         required
                                         />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label for="" className=" col-sm-5 col-form-label fs-5 text-end">Code :</label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input 
                                        type="number" 
                                        className="form-control"
                                        onChange={modelHandler}
                                        name='StateCode'
                                        value={data.StateCode}
                                        required 
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label for="" className=" col-sm-5 col-form-label fs-5 text-end">State Name :
                                    </label>
                                    <div className="col-sm-7 d-flex align-items-center">
                                        <input 
                                        type="text"
                                         className="form-control"
                                         onChange={modelHandler}
                                         name='StateName'
                                         value={data.StateName}
                                          required />
                                    </div>
                                </div>
                              </div>
                        </fieldset>
                    </div>
                    <div class="modal-footer d-flex justify-content-center gap-1">
                        <button type="submit" class="btn btn-primary fs-5">Save</button>
                        <button type="button"
                         class="btn btn-secondary fs-5 " 
                         data-bs-dismiss="modal" 
                         onClick={() => setShowModal(false)} 
                         >Close
                         </button>
                        {/* <button type="button" class="btn btn-info fs-5">Update</button> */}
                        {/* <button type="button" class="btn btn-danger fs-5">Delete</button> */}
                    </div>
                </form>
                </div>
            </div>
        </div>
        )}
    </div>
  )
}


export default StateMaster