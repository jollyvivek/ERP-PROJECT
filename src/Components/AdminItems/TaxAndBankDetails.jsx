import React from 'react'
import NavTabs from '../Navbar/NavTabs'

const TaxAndBankDetails = () => {
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
                                <label for="" className="col-sm-4 col-form-label fs-5 ">Pan No :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5">GST No :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5">GSTDate :</label>
                                <div class="col-sm-8">
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-6">
                        <fieldset class="px-3">
                            <legend >Authorised Signature</legend>
                            <div className="mb-3 py-1 row">
                                <label for="" class="col-sm-4 col-form-label fs-5">Pan No :</label>
                                <div class="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 py-2 row">
                                <label for=""className="col-sm-4 col-form-label fs-5">Signature Image :</label>
                                <div class="col-sm-8">
                                    <input type="file" className="form-control" />
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="row">
                <div className="col-md-12">
                <div className="row">
                    <div className="col-6">
                        <fieldset>
                            <legend>Bank Details</legend>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">Bank Name :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">Branch Name :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">IFSC Code :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">Micro Code :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">Account Name :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">Account No :</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-6">
                        <fieldset>
                            <legend>Send Mail Configure</legend>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5">Sender Mail Id :</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">Sender Password :</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">SMTP Port :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">SMTP Host :</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">CC Mail Id :</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">Enable SSL :</label>
                                <div className="col-sm-8">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="True">True</option>
                                        <option value="False">False</option>
                                      </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="" className="col-sm-4 col-form-label fs-5 ">Send Mail Form :</label>
                                <div className="col-sm-8">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="User Mail">User Mail</option>
                                        <option value="False">False</option>
                                      </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 d-flex justify-content-end">
                                    <button className="btn border-secondary px-4 fs-4 fw-normal">Test Mail</button> 
                                </div>
                            </div>
                      </fieldset>
                    </div>
                </div>
                <div class="row mt-3 mb-3">
                  <div class="col-md-12 d-flex justify-content-end">
                      <button class="btn btn-next px-4 fs-4 border-secondary">NEXT</button>
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