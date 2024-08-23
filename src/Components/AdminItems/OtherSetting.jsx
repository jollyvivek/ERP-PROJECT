import React from 'react'
import NavTabs from '../Navbar/NavTabs'

const OtherSetting = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 px-0'>
        <h4 className="company-title fs-5 px-3">Company Details</h4>
        <NavTabs/>
        </div>
      </div>
      
      <div className="row">
            <div className="col-md-12">
                <form action="" className="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>Round Value And Qty Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Qty Round
                                                of :</label>
                                            <div className="col-sm-4">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">Value round
                                                of :</label>
                                            <div className="col-sm-4">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Normal">Normal</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Ledger
                                                Name :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mt-3">
                                <legend>Auto Generate Setting</legend>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Ledger Code
                                                Auto Generate :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Product Code
                                                Auto Generate :</label>
                                            <div className="col-sm-4">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Invoice Generate
                                                Using GRN/GIN :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Barcode
                                                Generate in Item Master :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Print
                                                Invoice in Letter Head/Footer :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Sending
                                                SMS :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Mail
                                                Sending :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Approved
                                                Required :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Import/Export
                                                :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Import/Export
                                                Value Round of :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Effect On
                                                Account/Inventry
                                                while Cancel Invoice :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Term & Condition
                                                Based
                                                On Master :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-8 col-form-label fs-5 text-end">Item Name
                                                Duplication Allowed :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-6 ">
                            <fieldset className="mb-3">
                                <legend>Commision Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end"> Commision
                                                :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">Commision
                                                Ledger :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mb-3">
                                <legend>TDS Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end"> TDS :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">TDS
                                                Ledger :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Purchase and Sales Account Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end"> Purchase
                                                Account :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">Sales
                                                Account :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Currency Details</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">Default Currency :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>OutStandings</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">Default OutStandings Pupup :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="One">One</option>
                                                    <option value="Both">Both</option>
                                                </select>                                           
                                               </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Inventory Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">Product Serial Number :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value="">select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Default GST Setting In HSN</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end"> CGST :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">SGST/UTGST :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">IGST :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">Custom Duty :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-8 col-form-label fs-5 text-end">CESS :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mt-3">
                            <div className="mb-3 row">
                                <label for="" className=" col-sm-7 col-form-label fs-6 text-end"> Merge PDF System Path :</label>
                                <div className="col-sm-4 d-flex align-items-center">
                                    <input type="text" className="form-control" required />
                                </div>
                                <button type='button' className='col-sm-1 border-0 bg-transparent text-left'>R</button>
                            </div>
                            <div className="mb-3 row d-flex align-items-center">
                                <label for="" className=" col-sm-7 text-end col-form-label fs-6"> Select Path For EU Declaration Path :</label>
                                <div className="col-sm-4 d-flex align-items-center">
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="col-sm-1">
                                    <button type='button' className='fs-6 border-0 bg-transparent'>Another Path</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-3">
                            <div className=" my-3 d-flex justify-content-end align-items-center">
                                <button type="submit" className="btn border-secondary btn-next py-1 fs-5">Next</button>
                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default OtherSetting