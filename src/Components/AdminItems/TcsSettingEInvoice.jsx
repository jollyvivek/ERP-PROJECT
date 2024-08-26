import React from 'react'
import NavTabs from '../Navbar/NavTabs'

const TcsSettingEInvoice = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
        <h4 className="company-title fs-5">Company Details</h4>
          <NavTabs/>
        </div>
      </div>

      <div className="row">
            <div className="col-md-12 ">
                <form action="" className="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>TCS Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5  text-end ">TCS Applicable
                                                :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5  text-end">TCS Ledger
                                                (For Sales) :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5  text-end">TCS Ledger
                                                (For Purchase) :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-5  text-end">TAX No
                                                :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-5  text-end">PAN No. (IF
                                                PRESENT) :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <input type="number" className="form-control" required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                                <span className="fs-5">%</span>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-5  text-end">PAN No. (IF
                                                NOT PRESENT) :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <input type="number" className="form-control" required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                                <span className="fs-5">%</span>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end ">TCS
                                                Calculation ON :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class=" col-sm-7 col-form-label fs-5  text-end">Application On
                                                More Than Turnover Amount :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <input type="number" class="form-control" required />
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                                <span class="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="mb-3 row mt-3">
                                <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Duty DrawBack
                                    Ledger :</label>
                                <div class="col-sm-4 d-flex align-items-center">
                                    <input type="text" class="form-control" required />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 ">
                            <fieldset class="mb-3">
                                <legend>Purchase Setting</legend>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end ">Purchase Scrap
                                                Required :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class=" col-sm-8 col-form-label fs-5  text-end"> Adjustment
                                                Ledger :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end ">Quality
                                                Premium and Site Premium Required :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="mt-5 row">
                                <label for="" class="col-sm-8 col-form-label fs-5 text-end mt-5 ">Add
                                    Auto Scrap JobWork :</label>
                                <div class="col-sm-4 d-flex align-items-center mt-5">
                                    <select class="form-select form-select-sm" required aria-label="select example">
                                        <option value=""> select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <fieldset>
                                <legend>E-Invoice Setting</legend>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end ">E-Invoice
                                                Applicable :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class=" col-sm-8 col-form-label fs-5  text-end">URL :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end ">E-Way Bill
                                                Parameter In E-Invoice :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class=" col-sm-8 col-form-label fs-5  text-end">User Name
                                                :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Password
                                                :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <input type="password" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Select Path
                                                For Export E-Invoice Json :</label>
                                            <div class="col-sm-4 d-flex flex-column align-items-center gap-3">
                                                <input type="text" class="form-control" required />
                                                <p class="fs-5">Another Path</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-5 col-form-label fs-5  text-end ">E-Invoice Type
                                                :</label>
                                            <div class="col-sm-7 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row ">
                                            <label for="" class=" col-sm-5 col-form-label fs-5  text-end">Key :</label>
                                            <div class="col-sm-7 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="mb-3 row ">
                                            <label for="" class=" col-sm-5 col-form-label fs-5  text-end">Subscription ID :</label>
                                            <div class="col-sm-7 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="mb-3 row ">
                                            <label for="" class=" col-sm-5 col-form-label fs-5  text-end">GST No :</label>
                                            <div class="col-sm-7 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div class=" my-3 d-flex justify-content-end align-items-center">
                        <button type="submit" class="btn border-secondary btn-next py-1 fs-5 ">Next</button>
                    </div>
                </form>
            </div>
        </div>






    </div>
  )
}

export default TcsSettingEInvoice