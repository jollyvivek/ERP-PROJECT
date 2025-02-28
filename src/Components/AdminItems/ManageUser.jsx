import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const ManageUser = ({addModelHandler}) => {
  const {url} = useContext(StoreContext)
  const [dataList,setDataList]= useState([])
  const[isUpdate,setIsUpdate]=useState(false)
  const [manageUserId,setManageUsreId] = useState("")
  const [updateData,setUpdateData] =useState({
    Name:"",
    Role:"",
    UserName:"",
    Password:"",
    MobileNo:"",
    Email:"",
    EmailPassword:"",
    SmtpPort:"",
    SmtpHost:"",
    PopPort:"",
    EnableSsl:"",
    DigitalSign:""        
    });
  
  const columns =[
    {name:"Name",selector:row=>row.Name,sortable:true},
    {name:"Email",selector:row=>row.Email,sortable:true},
    {name:"Mobile No",selector:row=>row.MobileNo},
    {name:"Modify",selector:row=>row._id,cell:row=>(
          <button className="btn text-center fs-4"  onClick={()=>UpdateHandler(row._id,row.Name,row.Role,row.UserName,row.Password,row.MobileNo,
            row.Email,row.EmailPassword,row.SmtpPort,row.SmtpHost,row.PopPort,row.EnableSsl,row.DigitalSign
          )}><BiEdit/></button>
        )},
    {name:"Delete",selecto:row=>row._id ,cell: row=>(
          <button className=" btn text-danger text-center fs-4"
           onClick={()=>RemoveManageUser(row._id)}
           ><MdDelete/></button>
        )}
  ]


  const customStyles = {
    rows: {
        style: {
            // minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // padding for header cells
            paddingRight: '8px',
            fontSize:"18px"
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // padding for body cells
            paddingRight: '8px',
             fontSize:"15px"
        },
    },
    };
    // ManageUserFetch
    const ManageUserFetch = async()=>{
        try {
            const response = await axios.get(`${url}/api/manageuser/list`);
            // console.log(response)
            if (response.data.success) {
                setDataList(response.data.data);
            } else {
                console.log(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
      
    }
    useEffect(()=>{ManageUserFetch()},[]);

// remove

const RemoveManageUser = async(id)=>{
   try {
    const response = await axios.post(`${url}/api/manageuser/remove`,{id:id});
            console.log(response)
            if (response) {
              ManageUserFetch()
              toast.success(response.data.message)
            } else {
              toast.error(response.data.message)
            }
   } catch (error) {
    console.log(error)
   }
}

// update 
const handleChange = (event)=>{
    const {name,value} = event.target;
    setData((data)=>({...data,[name]:value}))
  };
const UpdateHandler = (id,Name,Role,UserName,Password,MobileNo,Email,EmailPassword,SmtpPort,SmtpHost,PopPort,EnableSsl,DigitalSign)=>{
  setIsUpdate(true);
  setManageUsreId(id)
  setUpdateData({Name:Name,Role:Role,UserName:UserName,Password:Password,MobileNo:MobileNo,Email:Email,EmailPassword:EmailPassword,
    SmtpPort:SmtpPort,SmtpHost:SmtpHost,PopPort:PopPort,EnableSsl:EnableSsl,DigitalSign:DigitalSign
  })
  // alert(manageUserId)
}

  return (
    <div className="container-fluid manage-user">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between mt-3">
            <h4>Users</h4>
            <button
              className="px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5"
              onClick={() => addModelHandler(true)}
            >
              Add New
            </button>
          </div>
          <div>
            <div className="mt-3 ">
              <input
                type="text"
                className="form-control "
                //  onChange={handleFilter}
                placeholder="Search Here"
              />
            </div>
            <DataTable
              columns={columns}
              data={dataList}
              customStyles={customStyles}
            />
          </div>
        </div>
      </div>
      {/* update model */}

      {isUpdate && (
        <div
          className="modal show fade"
          style={{ display: "block" }}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          //  aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  User Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setIsUpdate(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md12">
                      <form action="">
                        <fieldset className="py-2">
                          <legend>User Details</legend>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              Name :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="text"
                                className="form-control form-control-sm bg-body-secondary"
                                name="Name"
                                value={updateData.Name}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              Role :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="text"
                                className="form-control form-control-sm bg-body-secondary"
                                name="Role"
                                  value={updateData.Role}
                                   onChange={handleChange}
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              User Name :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="text"
                                className="form-control form-control-sm bg-body-secondary"
                                name="UserName"
                                value={updateData.UserName} onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              Password :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="password"
                                className="form-control form-control-sm bg-body-secondary"
                                name="Password"
                                value={updateData.Password} onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              Mobile No :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="number"
                                className="form-control form-control-sm bg-body-secondary"
                                name="MobileNo"
                                value={updateData.MobileNo} onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              Email Id :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="email"
                                className="form-control form-control-sm bg-body-secondary"
                                name="Email"
                                value={updateData.Email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              Email Password :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="password"
                                className="form-control form-control-sm bg-body-secondary"
                                name="EmailPassword"
                                value={updateData.EmailPassword}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              SMTP Port :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="text"
                                className="form-control form-control-sm bg-body-secondary"
                                name="SmtpPort"
                                value={updateData.SmtpPort}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              SMTP Host :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="text"
                                className="form-control form-control-sm bg-body-secondary"
                                name="SmtpHost"
                                value={updateData.SmtpHost}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              POP Port :
                            </label>
                            <div className="col-sm-7 d-flex align-items-center">
                              <input
                                type="text"
                                className="form-control form-control-sm bg-body-secondary"
                                name="PopPort"
                                value={updateData.PopPort}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="row mt-1 ">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              Enable SSL :
                            </label>
                            <div className="col-sm-7">
                              <select
                                className="form-select form-select-sm w-75"
                                name="EnableSsl"
                                value={updateData.EnableSsl}
                                onChange={handleChange}
                                required
                                aria-label="Default select example"
                              >
                                <option> select</option>
                                <option value="True">True</option>
                                <option value="False">False</option>
                              </select>
                            </div>
                          </div>
                          <div className="row">
                            <label
                              htmlFor=""
                              className=" col-sm-5 col-form-label fs-5  text-end"
                            >
                              Digital Sign :
                            </label>
                            <div className="col-sm-7 fs-5 d-flex align-items-center">
                              <select
                                className="form-select form-select-sm w-75"
                                name="DigitalSign"
                                value={updateData.DigitalSign}
                                onChange={handleChange}
                                required
                                aria-label="Default select example"
                              >
                                <option> select</option>
                                <option value="Yes">Yes</option>
                                <option value="Yes">No</option>
                              </select>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => alert("update call")}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setIsUpdate(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageUser