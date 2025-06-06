import React, { useContext, useEffect, useState } from 'react'
import ModuleMenuCommon from './ModuleMenuCommon'
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { StoreContext } from '../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserModel = ({addModelHandler}) => {
  const {url} = useContext(StoreContext)
  const [testMail,setTestMail]= useState(false)
  const [isconfirmModel,setIsConfirmModel] = useState(false)
  const [data,setData] = useState({
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

  const [emailData,setEmailData] = useState({
    // From:"",
    To:"",
    Cc:"",
    Subject:"",
    Message:""
  })

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setData((data)=>({...data,[name]:value}))
  };

  // useEffect(()=>console.log(data),[data])

  const userFormHandler = async(event)=>{
    event.preventDefault();
    // console.log(data);
    addModelHandler(false);
    const payload ={
      Name:data.Name,
      Role:data.Role,
      UserName:data.UserName,
      Password:data.Password,
      MobileNo:data.MobileNo,
      Email:data.Email,
      EmailPassword:data.EmailPassword,
      SmtpPort:data.SmtpPort,
      SmtpHost:data.SmtpHost,
      PopPort:data.PopPort,
      EnableSsl:data.EnableSsl,
      DigitalSign:data.DigitalSign
    }
    const response = await axios.post(`${url}/api/manageuser/add`,payload)
    if (response.data.success) {
      setData({
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
      toast.success(response.data.message)
      addModelHandler(false)
    } else {
       console.log("Error");
      toast.error(response.data.message);
    }   

  }
  // sendMailHandler

  const EmailChangeHandler=(event)=>{
    const {name,value}= event.target;
    setEmailData((data)=>({...data,[name]:value}))
  }

  const sendMailHandler = async(event)=>{
    event.preventDefault();
    const payload ={
      // From:emailData.From,
      To:emailData.To,
      Cc:emailData.Cc,
      Subject:emailData.Subject,
      Message:emailData.Message
    }
    try {
      const response = await axios.post(`${url}/api/email/add`,payload);
      if(response.data.success){
        setTestMail(false);
        setEmailData({
          // From:"",
          To:"",
          Cc:"",
          Subject:"",
          Message:""
        });
        toast.success(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  

  return (
    <div className="container-fluid px-3 position-absolute z-1 "
    style={{background:"lightGrey", 
    // overflowY:"scroll"
     }}>
      <div className='row mx-0'>
      <h4>Add User</h4>
      <div className="col-md-4">
          <fieldset className="py-2">
            <legend>User Details</legend>
            <form action="" onSubmit={userFormHandler}>
              <div className="row ">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Name :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary" 
                  name="Name" value={data.Name} onChange={handleChange} required  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Role :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"
                    name="Role" value={data.Role} onChange={handleChange}  required />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                 User Name :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"
                   name="UserName" value={data.UserName} onChange={handleChange}  required  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Password :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="password" className="form-control form-control-sm bg-body-secondary"
                    name="Password" value={data.Password} onChange={handleChange}  required  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Mobile No :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="number" className="form-control form-control-sm bg-body-secondary"
                    name="MobileNo" value={data.MobileNo} onChange={handleChange}  required  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Email Id :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="email" className="form-control form-control-sm bg-body-secondary" 
                   name="Email" value={data.Email} onChange={handleChange}  required  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Email Password :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="password" className="form-control form-control-sm bg-body-secondary"
                    name="EmailPassword" value={data.EmailPassword} onChange={handleChange}  required  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  SMTP Port :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"
                    name="SmtpPort" value={data.SmtpPort} onChange={handleChange}  required  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  SMTP Host :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"
                    name="SmtpHost" value={data.SmtpHost} onChange={handleChange}  required  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  POP Port :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"
                    name="PopPort" value={data.PopPort} onChange={handleChange}  required  />
                </div>
              </div>
              <div className="row mb-1 ">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Enable SSL :
                </label>
                <div className="col-sm-7 d-flex align-items-center gap-3">
                    <select className="form-select form-select-sm w-75" 
                    name='EnableSsl' value={data.EnableSsl} onChange={handleChange}  required aria-label="Default select example">
                           <option> select</option>
                           <option value="True">True</option>
                           <option value="False">False</option>
                    </select>
                      <button type="button" className='border-primary p-1 rounded-2 w-50' onClick={()=>setTestMail(true)}>Test Mail</button>
                </div>
              </div>
              <div className="row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Digital Sign :
                </label>
                <div className="col-sm-5 fs-5 d-flex align-items-center">
                <select className="form-select form-select-sm w-75" 
                  name='DigitalSign' value={data.DigitalSign} onChange={handleChange}  required aria-label="Default select example">
                           <option> select</option>
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
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary"
                 onClick={()=>setIsConfirmModel(true)}
                 >New</button>
                <button type="submit" className="px-3 py-1 border-1 rounded-1 border-primary" > Save</button>
                <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" onClick={()=>addModelHandler(false)}>Update</button>
                {/* <button type="button" className="px-3 py-1 border-1 rounded-1 border-primary" >Delete</button> */}
              </div>
            </form>
          </fieldset>
      </div>
      <div className='col-md-8'>
        <ModuleMenuCommon RoleModel={addModelHandler}/>
      </div>

{/* TestMail Modal*/}
{testMail && (
<div className="modal show fade"
   style={{ display: 'block' }} 
    id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
     tabIndex="-1" aria-labelledby="staticBackdropLabel" 
    //  aria-hidden="true"
     >
  <div  className="modal-dialog modal-dialog-centered">
    <div  className="modal-content">
      <div  className="modal-header border-bottom-0 ">
        <h5  className="modal-title" id="staticBackdropLabel">Test Mail</h5>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setTestMail(false)}></button>
      </div>
      <div  className="modal-body mb-4" >
        <div className='container-fluid'>
          
          <fieldset className='pb-1 '>
            <legend>Mail Details</legend>
            <form action="" onSubmit={sendMailHandler}>
             {/* <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  From :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="email" className="form-control form-control-sm bg-body-secondary"
                   name="From" value={emailData.From} onChange={EmailChangeHandler} required  />
                </div>
            </div>  */}
            <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  To :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="email" className="form-control form-control-sm bg-body-secondary"
                    name="To"  value={emailData.To} onChange={EmailChangeHandler} required />
                </div>
            </div>
            <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  Cc :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="email" className="form-control form-control-sm bg-body-secondary"
                    name="Cc" value={emailData.Cc} onChange={EmailChangeHandler} required  />
                </div>
            </div>
            <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  Subject :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="text" className="form-control form-control-sm bg-body-secondary"
                    name="Subject" value={emailData.Subject} onChange={EmailChangeHandler} required  />
                </div>
            </div>
            <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-5  text-end" >
                  Message :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  {/* <input type="text" className="form-control form-control-sm bg-body-secondary"
                    name="Message" value={emailData.message} onChange={EmailChangeHandler}  /> */}
                    <textarea className="form-control form-control-sm bg-body-secondary" 
                      name="Message" value={emailData.Message} onChange={EmailChangeHandler} required></textarea>
                </div>
            </div>
            <div  className="row">
              <div className='col-sm-12 d-flex justify-content-end gap-3 my-3'>
              <button type="submit"  className="btn btn-primary" >Send</button>
              <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setTestMail(false)}>Close</button>
              </div>
            </div>
            </form>
          </fieldset>
          
        </div>
      </div>
      
    </div>
  </div>
</div>
)}

{/* Confirm Modal*/}
{isconfirmModel &&(
<div className="modal show fade" 
  style={{ display: 'block' }}
  tabIndex="-1" 
  aria-labelledby="exampleModalLabel"
  //  aria-hidden="true"
   >
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header border-bottom-0">
        <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setIsConfirmModel(false)}></button>
      </div>
      <div className="modal-body border-0">
        <div>
          <p className=' d-flex gap-3 px-3 fs-4'> <span className='text-primary'><BsFillPatchQuestionFill /></span> <span>Do you really want to new entry ?</span></p>
        </div>
      </div>
      <div className="modal-footer border-top-0">
      <button type="button" className="btn btn-primary">Yes</button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setIsConfirmModel(false)}>No</button>
        
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