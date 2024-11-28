import React, { useContext, useEffect, useRef, useState } from 'react'
import NavTabs from '../Navbar/NavTabs'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { error } from 'jquery';
import { StoreContext } from '../../Context/StoreContext';

const TaxAndBankDetails = () => {
    const navigate = useNavigate()
    const {url}= useContext(StoreContext)
    const [taxBankData,setTaxAndBankData]= useState([])
     const [signImage,setSignImage] =useState(false)
     const singInputRef= useRef(null)
     const [data, setData] = useState({
    panNo: '',
    gstNo: '',
    gstDate: '',
    signature: '',
    bankName: '',
    branchName: '',
    ifscCode: '',
    microCode: '',
    accountName: '',
    accountNo: '',
    senderMailId: '',
    senderPassword: '',
    smtpPort: '',
    smtpHost: '',
    ccMailId: '',
    enableSSL: '',
    sendMailForm: '',
    });
  

   // Handle input change
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

//   taxAndBankDetailSubmitHandler

const taxAndBankDetailSubmitHandler = async(event)=>{
    event.preventDefault();
    const formData= new FormData();
   formData.append("panNo",data.panNo)
   formData.append("gstNo",data.gstNo)
   formData.append("gstDate",data.gstDate)
   formData.append("signature",data.signature)
   formData.append("signatureImage",signImage)
   formData.append("bankName",data.bankName)
   formData.append("branchName",data.branchName)
   formData.append("ifscCode",data.ifscCode)
   formData.append("microCode",data.microCode)
   formData.append("accountName",data.accountName)
   formData.append("accountNo",data.accountNo)
   formData.append("senderMailId",data.senderMailId)
   formData.append("senderPassword",data.senderPassword),
   formData.append("smtpPort",data.smtpPort)
   formData.append("smtpHost",data.smtpHost)
   formData.append("ccMailId",data.ccMailId)
   formData.append("enableSSL",data.enableSSL)
   formData.append("sendMailForm",data.sendMailForm)

    // console.log(data,signImage)

    const response = await axios.post(`${url}/api/bankdetails/add`,formData)
    if(response.data.success){
        setData({
            panNo: '',
            gstNo: '',
            gstDate: '',
            signature: '',
            bankName: '',
            branchName: '',
            ifscCode: '',
            microCode: '',
            accountName: '',
            accountNo: '',
            senderMailId: '',
            senderPassword: '',
            smtpPort: '',
            smtpHost: '',
            ccMailId: '',
            enableSSL: '',
            sendMailForm: '',
          });
          setSignImage(false);
          if(singInputRef.current){
            singInputRef.current.value="";
          }
          toast.success(response.data.message)
    }else{
        console.log("Error")
        toast.error(response.data.message)
    }

}

// TaxAndBankFetch

const  TaxAndBankFetch = async()=>{
    const response = await axios.get(`${url}/api/bankdetails/list`);
    if(response){
        setTaxAndBankData(response.data.data);
        // console.log(response.data.data)
    }else{
        console.log("error")
    }
}

useEffect(()=>{ TaxAndBankFetch()},[]);




  return (
    <div className='container-fluid'>
    <h4 className="company-title fs-5">Company Details</h4>
        <div className='row'>
            <div className='col-md-12 p-0'>
            <NavTabs/>
            </div>
        </div>

      <div className="row mt-3">
            <form  className="col-md-12" onSubmit={taxAndBankDetailSubmitHandler}>
                <div className="row">
                    <div className="col-6 ">
                        <fieldset className="px-3">
                            <legend>Texition Details</legend>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">Pan No :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="text"
                                     className="form-control"
                                     name='panNo'
                                     value={data.panNo}
                                     onChange={handleInputChange}
                                     required
                                     />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label ">GST No :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    name='gstNo'
                                    value={data.gstNo}
                                    onChange={handleInputChange}
                                    required
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label ">GSTDate :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="date"
                                    className="form-control"
                                     name='gstDate'
                                     value={data.gstDate}
                                     onChange={handleInputChange}
                                     required
                                     />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-6">
                        <fieldset className="px-3">
                            <legend >Authorised Signature</legend>
                            <div className="mb-3 py-1 row">
                                <label  className="col-sm-6 col-form-label">Signature :</label>
                                <div className="col-sm-6">
                                <select 
                                  className="form-select"
                                   name='signature' 
                                   value={data.signature}
                                   onChange={handleInputChange}
                                   aria-label="Default select example required">
                                        <option > select menu</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                      </select>
                                </div>
                            </div>
                            <div className="mb-3 py-2 row">
                                <label className="col-sm-6 col-form-label">Signature Image :</label>
                                <div className="col-sm-6 text-center d-flex flex-column justify-content-center gap-3">
                                    <img src={signImage ? URL.createObjectURL(signImage):""} className='w-75 m-auto' alt="" />
                                    {/* <label htmlFor="signature-image" className='p-1 w-50 m-auto border'>BROWSE</label> */}
                                    <input 
                                      type="file" 
                                      ref={singInputRef}
                                      id='signature-image'
                                       className="form-control"
                                       onChange={(e)=>setSignImage(e.target.files[0])}
                                       required
                                       />
                                    
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                <div className="row">
                    <div className="col-6">
                        <fieldset>
                            <legend>Bank Details</legend>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">Bank Name :</label>
                                <div className="col-sm-7">
                                    <input
                                     type="text"
                                      className="form-control"
                                      name='bankName'
                                      value={data.bankName}
                                      onChange={handleInputChange}
                                      required
                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">Branch Name :</label>
                                <div className="col-sm-7">
                                    <input 
                                      type="text" 
                                      className="form-control"
                                      name='branchName'
                                      value={data.branchName}
                                      onChange={handleInputChange}
                                      required
                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">IFSC Code :</label>
                                <div className="col-sm-7">
                                    <input 
                                      type="text"
                                       className="form-control"
                                       name='ifscCode'
                                       value={data.ifscCode}
                                       onChange={handleInputChange}
                                       required
                                       />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">Micro Code :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="text"
                                     className="form-control"
                                     name='microCode'
                                     value={data.microCode}
                                     onChange={handleInputChange}
                                     required
                                     />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">Account Name :</label>
                                <div className="col-sm-7">
                                    <input 
                                      type="text"
                                      className="form-control"
                                       name='accountName'
                                       value={data.accountName}
                                       onChange={handleInputChange}
                                       required
                                       />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-5 col-form-label  ">Account No :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="number"
                                     className="form-control"
                                     name='accountNo'
                                     value={data.accountNo}
                                     onChange={handleInputChange}
                                     required
                                     />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-6">
                        <fieldset>
                            <legend>Send Mail Configure</legend>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label ">Sender Mail Id :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="email"
                                     className="form-control"
                                     name='senderMailId'
                                     value={data.senderMailId}
                                     onChange={handleInputChange}
                                     required
                                     />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">Sender Password :</label>
                                <div className="col-sm-7">
                                    <input
                                     type="password"
                                      className="form-control"
                                      name='senderPassword'
                                      value={data.senderPassword}
                                      onChange={handleInputChange}
                                      required

                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-5 col-form-label  ">SMTP Port :</label>
                                <div className="col-sm-7">
                                    <input
                                     type="text"
                                      className="form-control"
                                      name='smtpPort'
                                      value={data.smtpPort}
                                      onChange={handleInputChange}
                                      required
                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-5 col-form-label  ">SMTP Host :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="text"
                                     className="form-control"
                                     name='smtpHost'
                                     value={data.smtpHost}
                                     onChange={handleInputChange}
                                     required
                                     />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">CC Mail Id :</label>
                                <div className="col-sm-7">
                                    <input
                                     type="email"
                                      className="form-control"
                                      name='ccMailId'
                                      value={data.ccMailId}
                                      onChange={handleInputChange}
                                      required
                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">Enable SSL :</label>
                                <div className="col-sm-7">
                                    <select className="form-select"
                                     name='enableSSL'
                                     value={data.enableSSL}
                                      onChange={handleInputChange} 
                                      aria-label="Default select example" required>
                                        <option>Open this select menu</option>
                                        <option value="True">True</option>
                                        <option value="False">False</option>
                                      </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label  ">Send Mail Form :</label>
                                <div className="col-sm-7">
                                    <select 
                                    className="form-select"
                                     aria-label="Default select example"
                                     name='sendMailForm'
                                     value={data.sendMailForm}
                                     onChange={handleInputChange}
                                     required
                                     >
                                        <option >Open this select menu</option>
                                        <option value="User Mail">User Mail</option>
                                        <option value="False">False</option>
                                      </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 d-flex justify-content-end">
                                    <button  type='submit' className="btn border-secondary px-3 fs-5 fw-normal">Test Mail</button> 
                                </div>
                            </div>
                      </fieldset>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-md-12 d-flex justify-content-end">
                      <button onClick={()=>navigate("/terms_condtions")} type='button' className="btn btn-next px-3 fs-5 border-secondary">NEXT</button>
                   </div>
                 </div>
                </div>
                </div>
            </form>
      </div>

    </div>
  )
}

export default TaxAndBankDetails