import React from 'react'
import { FaInfoCircle } from "react-icons/fa";
import NavTabs from '../Navbar/NavTabs'

const CostingSetting = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 px-0'>
        <h4 className="company-title px-3 fs-5">Company Details</h4>
          <NavTabs/>
        </div>
      </div>

      <div class="row">
            <div class="col-md-12">
                <form action="" class="needs-validation" novalidate>
                    <div class="row">
                        <div class="col-md-6">
                            <fieldset>
                                <legend>Costing Setting</legend>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-6 col-form-label fs-5  text-end ">Basic Scrap
                                                :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <input type="number" class="form-control" required />
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                                <span class="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-6 col-form-label fs-5  text-end ">Extrusion
                                                Conversion Rate :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <input type="number" class="form-control" required />
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                                <span class="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-6 col-form-label fs-5 text-end"
                                            data-toggle="tooltip">Recovery
                                                :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <input type="number" class="form-control" required />
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center gap-1">
                                                <span class="fs-5">(Rs.)</span>
                                                <span className='fs-5 text-primary'><FaInfoCircle /></span>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-6 col-form-label fs-5  text-end ">Profit
                                                :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <input type="number" class="form-control" required />
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                                <span class="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-6 col-form-label fs-5  text-end ">Freight
                                                :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <input type="number" class="form-control" required />
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                                <span class="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="mt-3">
                                <legend>Contract Review Setting</legend>
                                <div class="row ">
                                    <div class="col-12">
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end">Default
                                                Contract
                                                Review Diolog On Save :</label>
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
                            <fieldset>
                                <legend>Packing Setting</legend>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end">Create
                                                Packing
                                                From Stock Avaibility :</label>
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
                            <fieldset>
                                <legend>Multiple PCS Rate Setting</legend>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end">Multiple
                                                PCS
                                                Rate In Quotation :</label>
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
                        </div>
                        <div class="col-md-6 ">
                            <fieldset>
                                <legend>Finance Setting</legend>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end">Create
                                                Raw
                                                Materials MRS From Sales Order :</label>
                                            <div class="col-sm-4 d-flex align-items-center gap-1">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                                <span className='fs-5 text-primary'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Quotation Setting</legend>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end">Quotation
                                                With
                                                Mold :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-5  text-end">Quotation
                                                With
                                                Machine :</label>
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

export default CostingSetting