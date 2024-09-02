import React, { useEffect, useRef, useState } from "react";
import '../../Styles/AdminMaster.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import axios from "axios";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";

const CountryMaster = () => {

 const url = "http://localhost:4000";
 const [codeList,setCodeList]=useState([])
 const modalRef = useRef(null);
 const [data,setData]= useState({
  code: "",
  countryName:""
 });

 const columns = [
  {name:"Country Code", selectors:row=>row.code, sortable:true},
  {name:"Country Name", selectors:row=>row.countryName,sortable:true}
 ]

 


 const codeFetchList = async()=>{
  const response = await axios.get(`${url}/api/code/list`);
  if(response.data.success){
    setCodeList(response.data.data)
    console.log("success code list data")
    console.log(response.data)
  }else{
    console.log("Error")
  }
  
 }

 useEffect(()=>{
  codeFetchList();
 },[]);


 const modelHandler = (event)=>{
  const name =event.target.name;
  const value = event.target.value;
  setData((data) => ({ ...data, [name]: value }));
 }

  const handleModelFormSubmit = async(event)=>{
    event.preventDefault();

    let payload = {
      code: Number(data.code) || '',
      countryName: data.countryName || ''
    }

    const response = await axios.post(`${url}/api/code/add`, payload);
    if(response.data.success){
      setData({
        code: '',
        countryName:""
      });
      toast.success(response.data.message);
     
    }else{
      console.log("error");
      toast.error(response.data.message)
    }
    if (modalRef.current) {
      const modalElement = new bootstrap.Modal(modalRef.current);
      modalElement.hide();
    }
  }

  return (
    <div className="container-fluid px-3">
      {/* <h3>CountryMaster</h3> */}
      <div className="row ">
        <div className="col-md-12  role-content">
          <div className="row mt-3">
            <div className="col-md-4">
              <h3 className="fs-3">Country Record </h3>
            </div>
            <div className="col-md-8 d-flex flex-column align-items-end justify-content-end">
              <button
                className=" add-btn btn border-primary"
                id="addnew-btn"
                data-bs-toggle="modal"
                data-bs-target="#countryMasterModal"
              >
                ADD NEW
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <DataTable columns={columns} data={codeList}/>
            </div>
          </div>

          {/* model */}
          <div
            ref={modalRef}
            className="modal fade model-box"
            id="countryMasterModal"
            data-bs-backdrop="static"
            // tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-between">
                  <h5 className="modal-title fs-3" id="exampleModalLongTitle">
                    Country Master
                  </h5>
                  <div className="d-flex align-items-center px-3">
                  <button
                    type="button"
                    className="btn btn-outline-0 fs-3"
                    id="minimizeBtn"
                  >
                    &minus;
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-0 fs-3 "
                    id="restoreBtn"
                  >
                    &#9633;
                  </button>
                  <button
                    type="button"
                    className="btn-close fs-6"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  </div>
                </div>
                <form action="" className="" onSubmit={handleModelFormSubmit} >
                  <div className="modal-body">
                    <fieldset>
                      <legend>Country Details</legend>
                      <div className="mb-3 row">
                        <label
                          htmlFor="code"
                          className=" col-sm-4 col-form-label fs-5  text-end"
                        >
                          Code :
                        </label>
                        <div className="col-sm-8 d-flex align-items-center">
                          <input
                            type="text"
                            id="code"
                            className="form-control"
                            name="code"
                            onChange={modelHandler}
                            value={data.code}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          htmlFor="countryName"
                          className=" col-sm-4 col-form-label fs-5  text-end"
                        >
                          Name :
                        </label>
                        <div className="col-sm-8 d-flex align-items-center">
                          <input
                            type="text"
                            id="countryName"
                            className="form-control"
                            name="countryName"
                            onChange={modelHandler}
                            value={data.countryName}
                            required
                          />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal-footer d-flex justify-content-center gap-1">
                    <button type="button" className="btn btn-secondary ">
                      New
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Save
                    </button>
                    <button type="button" className="btn btn-secondary  ">
                      Update
                    </button>
                    <button type="reset" className="btn btn-danger  ">
                      Delete
                    </button>
                    {/* <button type="button" className="btn btn-secondary fs-4 " data-bs-dismiss="modal">Close</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryMaster;
