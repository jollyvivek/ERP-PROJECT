import React, { useEffect, useState } from 'react'
import NavTabs from '../Navbar/NavTabs'

const TaxAndBankDetails = () => {

  const [signImage,setSignImage] =useState(false)
  const [formData, setFormData] = useState({
    panNo: '',
    gstNo: '',
    gstDate: '',
    signature: '',
    // signImage: null,
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleFileChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     signImage: e.target.files[0],
  //   });
  // };

useEffect(()=>{
  console.log(formData)
  console.log(signImage)
},[])

  return (
    <div className='container-fluid'>
    <h4 className="company-title fs-5">Company Details</h4>
        <div className='row'>
            <div className='col-md-12 p-0'>
            <NavTabs/>
            </div>
        </div>

      <div className="row mt-3">
            <form action='' className="col-md-12">
                <div className="row">
                    <div className="col-6 ">
                        <fieldset className="px-3">
                            <legend>Texition Details</legend>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5 ">Pan No :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="text"
                                     className="form-control"
                                     name='panNo'
                                     value={formData.panNo}
                                     onChange={handleInputChange}
                                     />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5">GST No :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    name='gstNo'
                                    value={formData.gstNo}
                                    onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5">GSTDate :</label>
                                <div class="col-sm-7">
                                    <input 
                                    type="date"
                                    className="form-control"
                                     name='gstdate'
                                     value={formData.gstDate}
                                     onChange={handleInputChange}
                                     />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-6">
                        <fieldset class="px-3">
                            <legend >Authorised Signature</legend>
                            <div className="mb-3 py-1 row">
                                <label  class="col-sm-6 col-form-label fs-5">Signature :</label>
                                <div class="col-sm-6">
                                <select 
                                  className="form-select"
                                   name='signature' 
                                   value={formData.signature}
                                   onChange={handleInputChange}
                                   aria-label="Default select example">
                                        <option disabled> select menu</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                      </select>
                                </div>
                            </div>
                            <div className="mb-3 py-2 row">
                                <label className="col-sm-6 col-form-label fs-5">Signature Image :</label>
                                <div class="col-sm-6 text-center d-flex flex-column justify-content-center gap-3">
                                    <img src={signImage ? URL.createObjectURL(signImage):""} className='w-75 m-auto' alt="" />
                                    {/* <label htmlFor="signature-image" className='p-1 w-50 m-auto border'>BROWSE</label> */}
                                    <input 
                                      type="file" 
                                      id='signature-image'
                                       className="form-control"
                                       onChange={(e)=>setSignImage(e.target.files[0])}
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
                                <label  className="col-sm-5 col-form-label fs-5 ">Bank Name :</label>
                                <div className="col-sm-7">
                                    <input
                                     type="text"
                                      className="form-control"
                                      name='bankName'
                                      value={formData.bankName}
                                      onChange={handleInputChange}
                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5 ">Branch Name :</label>
                                <div className="col-sm-7">
                                    <input 
                                      type="text" 
                                      className="form-control"
                                      name='branchName'
                                      value={formData.branchName}
                                      onChange={handleInputChange}
                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5 ">IFSC Code :</label>
                                <div className="col-sm-7">
                                    <input 
                                      type="text"
                                       className="form-control"
                                       name='ifscCode'
                                       value={formData.ifscCode}
                                       onChange={handleInputChange}
                                       />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5 ">Micro Code :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="text"
                                     className="form-control"
                                     name='microCode'
                                     value={formData.microCode}
                                     onChange={handleInputChange}
                                     />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5 ">Account Name :</label>
                                <div className="col-sm-7">
                                    <input 
                                      type="text"
                                      className="form-control"
                                       name='accountName'
                                       value={formData.accountName}
                                       onChange={handleInputChange}
                                       />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-5 col-form-label fs-5 ">Account No :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="text"
                                     class="form-control"
                                     name='accountNo'
                                     value={formData.accountNo}
                                     onChange={handleInputChange}
                                     />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-6">
                        <fieldset>
                            <legend>Send Mail Configure</legend>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5">Sender Mail Id :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="email"
                                     className="form-control"
                                     name='senderMailId'
                                     value={formData.senderMailId}
                                     onChange={handleInputChange}
                                     />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5 ">Sender Password :</label>
                                <div className="col-sm-7">
                                    <input
                                     type="password"
                                      className="form-control"
                                      name='senderPassword'
                                      value={formData.senderPassword}
                                      onChange={handleInputChange}

                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-5 col-form-label fs-5 ">SMTP Port :</label>
                                <div className="col-sm-7">
                                    <input
                                     type="text"
                                      className="form-control"
                                      name='smtpPort'
                                      value={formData.smtpPort}
                                      onChange={handleInputChange}
                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-5 col-form-label fs-5 ">SMTP Host :</label>
                                <div className="col-sm-7">
                                    <input 
                                    type="text"
                                     className="form-control"
                                     name='smtpHost'
                                     value={formData.smtpHost}
                                     onChange={handleInputChange}
                                     />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5 ">CC Mail Id :</label>
                                <div className="col-sm-7">
                                    <input
                                     type="email"
                                      className="form-control"
                                      name='ccMailId'
                                      value={formData.ccMailId}
                                      onChange={handleInputChange}
                                      />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5 ">Enable SSL :</label>
                                <div className="col-sm-7">
                                    <select className="form-select"
                                     name='enableSSL'
                                     value={formData.enableSSL}
                                      onChange={handleInputChange} 
                                      aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="True">True</option>
                                        <option value="False">False</option>
                                      </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-5 col-form-label fs-5 ">Send Mail Form :</label>
                                <div className="col-sm-7">
                                    <select 
                                    className="form-select"
                                     aria-label="Default select example"
                                     name='sendMailId'
                                     value={formData.senderMailId}
                                     onChange={handleInputChange}
                                     >
                                        <option selected>Open this select menu</option>
                                        <option value="User Mail">User Mail</option>
                                        <option value="False">False</option>
                                      </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 d-flex justify-content-end">
                                    <button type='submit' className="btn border-secondary px-3 fs-5 fw-normal">Test Mail</button> 
                                </div>
                            </div>
                      </fieldset>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-md-12 d-flex justify-content-end">
                      <button className="btn btn-next px-3 fs-5 border-secondary">NEXT</button>
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