import React from 'react'
import { FaInfo, FaInfoCircle } from "react-icons/fa";

import NavTabs from '../Navbar/NavTabs'

const ProductionSetting = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
        <h4 className="company-title fs-5 px-2">Company Details</h4>
        <div className='row '>
          <div className='col-md-12 px-0'>
            <NavTabs/>
          </div>
        </div>
        </div>
      </div>

      <div class="row">
            <div class="col-md-12">
                <form action="" class="needs-validation" novalidate>
                    <div class="row">
                        <div class="col-md-7 mb-3 ">
                            <fieldset>
                                <legend>Production Setting</legend>
                                <div class="row ">
                                    <div class="col-12">
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Machine Based
                                                Production :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1 ">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Direct Insert
                                                Record in MRS
                                                From BOM :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1 ">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Direct Insert
                                                Record in GRN From Production Report :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class=" row mb-1 ">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Production
                                                Using MIS:</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class=" row mb-1 ">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Material
                                                Consumptopn Requird on Operation Group :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class=" row  mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Transfer Stock
                                                From Group
                                                In MIS :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1 ">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Operation
                                                QC/QA Requird :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1 ">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Direct Insert
                                                Record in Gate Pass From Finshed Goods :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1 ">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Scrap Details
                                                Required on Last Operation Only :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Auto Material
                                                Consumption On First Operation :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Required
                                                Material
                                                Consumption On First Operation :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Show Gross
                                                Weight In Packing List :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Show Client
                                                Name When work Order Close In Packing List :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end "> QC Testing
                                                By Login User :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Quantity
                                                Calculate
                                                Based On AltQty :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Sales and
                                                Purchase
                                                Show customer and Vendor Both :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Production Not
                                                More
                                                Then Previous Operation :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Production
                                                Report
                                                Alt Qty Calculation Based BOM Operation Weight :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-1 d-flex align-items-center">
                                                <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Production
                                                Planing
                                                Required :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" row mb-1">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Weight
                                                Calculate In
                                                Production No Pcs :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="" class=" col-sm-8 col-form-label fs-6  text-end">Production
                                                Weight :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-md-5 ">
                            <fieldset class="mb-1">
                                <legend>Work Order Tolerance</legend>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row py-2">
                                            <label for="" class=" col-sm-4 col-form-label fs-6  text-end">Tolerance
                                                :</label>
                                            <div class="col-sm-4 d-flex align-items-center gap-2">
                                                <span class="fs-5">+</span>
                                                <input type="text" name="" id="" class="form-control" required />
                                                <span class="fs-5">%</span>
                                            </div>
                                            <div class="col-sm-4 d-flex align-items-center gap-2">
                                                <span class="fs-5">-</span>
                                                <input type="text" name="" id="" class="form-control" required />
                                                <span class="fs-5">%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="mb-1">
                                <legend>Production QC Time Setting</legend>
                                <div class="row">
                                    <div class="col-12">
                                      <div class="mb-1 row">
                                                    <label for="" class=" col-sm-5 col-form-label fs-6 text-center  ">Start
                                                        Time :</label>
                                                    <div class="col-sm-5 d-flex align-items-center">
                                                        <input type="time" class="form-control form-control-sm" required />
                                                    </div>
                                      </div>
                                        <div class="row">
                                           <label for="" class=" col-sm-5 col-form-label fs-6 text-center  ">End
                                              Time :</label>
                                            <div class="col-sm-5 d-flex align-items-center">
                                               <input type="time" class="form-control" required />      
                                            </div>
                                        </div>
                                        <div class="my-1 row">
                                            <label for="" class=" col-sm-5 col-form-label fs-6 text-center">Interval
                                                Time:</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <input type="text" class="form-control form-control-sm" required />
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                                <span class="col-sm-1 fs-6">Min</span>
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
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Pack List
                                                Generate
                                                By Pack Dept :</label>
                                            <div class="col-sm-4 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3 mt-3 row">
                                            <label for="" class="col-sm-8 col-form-label fs-6  text-end ">Material
                                                Consumption
                                                In Packing :</label>
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
                            <fieldset class="mb-1">
                                <legend>Operation Wise Stock Setting</legend>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-1 row">
                                            <label for="" class="col-sm-7 col-form-label fs-6  text-end ">Operation Wise
                                                Production Stock :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                               <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class="mb-1 row">
                                            <label for="" class="col-sm-7 col-form-label fs-6  text-end ">Operation Wise
                                                Stock Movement Auto :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-1 d-flex align-items-center">
                                            <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class="mb-1 row">
                                            <label for="" class="col-sm-7 col-form-label fs-6  text-end ">In Process
                                                QC Requird For Operation :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                            <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class="mb-1 row">
                                            <label for="" class="col-sm-7 col-form-label fs-6  text-end ">Previous
                                                Stock Show Based On In Process QC :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                            <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div class="mb-1 row">
                                            <label for="" class="col-sm-7 col-form-label fs-6  text-end ">Production
                                                Report
                                                Batch No System With Batch Tracking :</label>
                                            <div class="col-sm-3 d-flex align-items-center">
                                                <select class="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-2 d-flex align-items-center">
                                            <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="mb-1">
                                <legend>Production From Job Work Setting</legend>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-2 row">
                                            <label for="" class=" col-sm-7 col-form-label fs-6  text-end">Job Work
                                                Default Machine:</label>
                                            <div class="col-sm-5 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="mb-2 row">
                                            <label for="" class=" col-sm-7 col-form-label fs-6  text-end">Foundary
                                                Machine Category:</label>
                                            <div class="col-sm-5 d-flex align-items-center">
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="row">
                                <div class="col-12 d-flex justify-content-center align-items-center gap-3 btn-cont my-4 py-3">
                                    <button type="button"  class="btn  update-btn border-secondary">Update</button>
                                    <button type="button" class="btn  cancel-btn border-secondary">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class=" my-3 d-flex justify-content-end align-items-center">
                        <button type="submit" class="btn form-control btn-next py-2 fs-3 ">Next</button>
                    </div>  */}
                </form>
            </div>
        </div>




    </div>
  )
}

export default ProductionSetting