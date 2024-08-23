import React from 'react'
import NavTabs from '../Navbar/NavTabs'

const ReportHeading = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 p-0'>
        <h4 className='company-title fs-5 px-3'>Company Details</h4>
          <NavTabs/>
        </div>
      </div>
      
      <div className="row">
            <div className="col-md-12">
                <form action="" className="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>Sales Invoice Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-6 col-form-label fs-5  text-end ">Tax Invoice
                                                Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Tax Stock
                                                Transfer :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Bill of
                                                Supply
                                                Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Bill of
                                                Supply Stock
                                                Transfer :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="mt-3">
                                <legend>Purchase Invoice Heading</legend>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-6 col-form-label fs-5  text-end">Tax Invoice
                                                Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end ">Tax Stock
                                                Transfer:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end ">Bill of
                                                Supply
                                                Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end ">Bill of
                                                Supply Stock
                                                Transfer:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Export Invoice Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-6 col-form-label fs-5  text-end">Tax Invoice
                                                Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end ">Tax Invoice
                                                Sub Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end ">Bill of
                                                Supply
                                                Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class=" col-sm-6 col-form-label fs-5  text-end ">Bill of
                                                Supply Sub Heading:</label>
                                            <div class="col-sm-6 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Delivery Challan Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-6 col-form-label fs-5  text-end">Sales DC
                                                Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end ">Purchase
                                                DC Heading:</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-6 ">
                            <fieldset className="mb-3">
                                <legend>Sales Invoice Return Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Tax Invoice
                                                Return Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Tax Invoice
                                                Return Stock Transfer :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Bill of
                                                Supply
                                                Return Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end ">Bill of
                                                Supply
                                                Return Stock Transfer :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Purchase Invoice Return Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Tax Invoice
                                                Return Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Tax Invoice
                                                Return Stock Transfer :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Bill of
                                                Supply
                                                Return Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end">Bill of
                                                Supply
                                                Return Stock Transfer :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Import Invoice Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Tax Import
                                                Invoice Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Tax Import
                                                Invoice
                                                Sub Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Bill of
                                                Supply
                                                Invoice Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5  text-end">Bill of
                                                Supply Invoice
                                                Sub Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className=" my-3 d-flex justify-content-end align-items-center">
                        <button type="submit" className="btn form-control btn-next py-2 fs-5 border-secondary">Next</button>
                    </div>
                </form>
            </div>
        </div>
      
      
      
    </div>
  )
}

export default ReportHeading