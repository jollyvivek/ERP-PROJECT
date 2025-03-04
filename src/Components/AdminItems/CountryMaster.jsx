import React, { useContext, useEffect, useState } from "react";
import '../../Styles/AdminMaster.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import axios from "axios";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { data } from "jquery";
import { StoreContext } from "../../Context/StoreContext";

const CountryMaster = () => {

const {url} = useContext(StoreContext)

 const [codeList,setCodeList]=useState([])
 const [showModal, setShowModal] = useState(false);
 const [isUpdate,setIsUpdate] =useState(false)
 const [codeId,setCodeId]=useState("")

 const [data,setData]= useState({
  code: "",
  countryName:""
 });

 

 const columns = [
  {name:"Country Code", selector:row=>row.code, sortable:true},
  {name:"Country Name", selector:row=>row.countryName,sortable:true},
  {name:"Modify",selector:row=>row._id,cell:row=>(
    <button className="btn text-center fs-4" onClick={()=>updateCode(row._id,row.code,row.countryName)}><BiEdit/></button>
  )},
  {name:"Delete",selecto:row=>row._id ,cell: row=>(
    <button className=" btn text-danger text-center fs-4"
     onClick={()=>removeCode(row._id)}
     ><MdDelete/></button>
  )

  }
 ]

 const handleFilter = (event)=>{
  const searchText = event.target.value.toLowerCase();
    const filteredData = codeList.filter(row =>{
      return row.countryName.toLowerCase().includes(searchText)
 });
 if(searchText){
  setCodeList(filteredData);
 }else{
  setCodeList(()=>{
    codeFetchList();
  })
 }
   
   
  }


 const codeFetchList = async()=>{
  const response = await axios.get(`${url}/api/code/list`);
  if(response.data.success){
    setCodeList(response.data.data)
    // console.log("success code list data")
    // console.log(response.data)
  }else{
    console.log("Error")
  }
  
 }

 useEffect(()=>{
  codeFetchList();
 },[]);

// update code functionality

const updateCode =(codeId,code,countryName)=>{
  setShowModal(true)
  setIsUpdate(true)
  setCodeId(codeId);
  setData({code:code,countryName:countryName})
};

const updateHandler = async(codeId,data)=>{
  try {
    const response = await axios.post(`${url}/api/code/update`,{id:codeId,code: Number(data.code),
      countryName:data.countryName});
      if (response.data.success) {
        setShowModal(false)
        setIsUpdate(false)
        setData({code: "",countryName:""})
        toast.success(response.data.message)
        codeFetchList();
        // console.log(data)
      } else {
        toast.error(response.data.message)
      }
  } catch (error) {
    console.log(error);
    toast.error(response.data.message);
  }
 
}

//  remove code functionality

 const removeCode = async(id)=>{
  const response = await axios.post(`${url}/api/code/remove`,{id:id})
  await codeFetchList();
  toast.success(response.data.message)
 }

//  model handler

 const modelHandler = (event)=>{
  const name =event.target.name;
  const value = event.target.value;
  setData((data) => ({ ...data, [name]: value }));
 }

//  model from submit

  const handleModelFormSubmit = async()=>{
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
   setShowModal(false)
   codeFetchList();
  }

  return (
    <div className="container-fluid px-3">
      {/* <h3>CountryMaster</h3> */}
      <div className="row ">
        <div className="col-md-12  role-content">
          <div className="row mt-3">
            <div className="col-md-4">
              <h3 className="fs-5">Country Record </h3>
            </div>
            <div className="col-md-8 d-flex flex-column align-items-end justify-content-end">
              <button
                className=" add-btn btn border-primary"
                id="addnew-btn"
                // data-bs-toggle="modal"
                // data-bs-target="#countryMasterModal"
                onClick={() => setShowModal(true)}
              >
                ADD NEW
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <div className='mt-3 '>
              <input type="text" className='form-control ' onChange={handleFilter} placeholder='Search Here'  />
            </div>
              <DataTable 
              columns={columns}
               data={codeList}
                // selectableRows
                // fixedHeader
                pagination
                highlightOnHover
                pointerOnHover
                // theme={2===1?"dark":"default"}
               />
            </div>
          </div>

          {/* model */}
          {showModal && (
          <div
            className="modal show fade model-box"
            style={{ display: 'block' }}
            id="countryMasterModal"
            data-bs-backdrop="static"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            // aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-between">
                  <h5 className="modal-title fs-5" id="exampleModalLongTitle">
                    Country Master
                  </h5>
                  <div className="d-flex align-items-center px-3">
                  <button
                    type="button"
                    className="btn btn-outline-0 fs-3 d-none"
                    id="minimizeBtn"
                  >
                    &minus;
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-0 fs-3 d-none "
                    id="restoreBtn"
                  >
                    &#9633;
                  </button>
                  <button
                    type="button"
                    className="btn-close fs-5"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  ></button>
                  </div>
                </div>
                <form action="" className="" 
                // onSubmit={handleModelFormSubmit}
                 >
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
                            // id="code"
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
                    <button type="button" className="btn btn-secondary d-none ">
                      New
                    </button>
                    <button type="button" className="btn btn-primary"
                    onClick={isUpdate ? ()=>updateHandler(codeId,data) :handleModelFormSubmit}
                    >
                     {isUpdate ? "Update":"Save"}
                    </button>
                    <button type="button" className="btn btn-secondary d-none  ">
                      Update
                    </button>
                    <button type="button" className="btn bg-secondary text-white" onClick={()=>setShowModal(false)}>
                      Close
                    </button>
                    {/* <button type="button" className="btn btn-secondary fs-4 " data-bs-dismiss="modal">Close</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryMaster;
