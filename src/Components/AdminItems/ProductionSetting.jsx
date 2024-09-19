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

      <div className="row">
            <div className="col-md-12">
                <form action="" className="">
                    <div className="row">
                        <div className="col-md-7 mb-3 ">
                            <fieldset>
                                <legend>Production Setting</legend>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Machine Based
                                                Production :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1 ">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Direct Insert
                                                Record in MRS
                                                From BOM :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1 ">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Direct Insert
                                                Record in GRN From Production Report :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className=" row mb-1 ">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Production
                                                Using MIS:</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className=" row mb-1 ">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Material
                                                Consumptopn Requird on Operation Group :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className=" row  mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Transfer Stock
                                                From Group
                                                In MIS :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1 ">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Operation
                                                QC/QA Requird :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1 ">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Direct Insert
                                                Record in Gate Pass From Finshed Goods :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1 ">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Scrap Details
                                                Required on Last Operation Only :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Auto Material
                                                Consumption On First Operation :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Required
                                                Material
                                                Consumption On First Operation :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className='col-sm-1 d-flex align-items-center'>
                                                <span className=' text-primary fs-6'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Show Gross
                                                Weight In Packing List :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Show Client
                                                Name When work Order Close In Packing List :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end "> QC Testing
                                                By Login User :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Quantity
                                                Calculate
                                                Based On AltQty :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Sales and
                                                Purchase
                                                Show customer and Vendor Both :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Production Not
                                                More
                                                Then Previous Operation :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Production
                                                Report
                                                Alt Qty Calculation Based BOM Operation Weight :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-1 d-flex align-items-center">
                                                <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Production
                                                Planing
                                                Required :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" row mb-1">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Weight
                                                Calculate In
                                                Production No Pcs :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className=" col-sm-8 col-form-label fs-6  text-end">Production
                                                Weight :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-5 ">
                            <fieldset className="mb-1">
                                <legend>Work Order Tolerance</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row py-2">
                                            <label className=" col-sm-4 col-form-label fs-6  text-end">Tolerance
                                                :</label>
                                            <div className="col-sm-4 d-flex align-items-center gap-2">
                                                <span className="fs-5">+</span>
                                                <input type="text" name="" id="" className="form-control" required />
                                                <span className="fs-5">%</span>
                                            </div>
                                            <div className="col-sm-4 d-flex align-items-center gap-2">
                                                <span className="fs-5">-</span>
                                                <input type="text" name="" id="" className="form-control" required />
                                                <span className="fs-5">%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mb-1">
                                <legend>Production QC Time Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                      <div className="mb-1 row">
                                                    <label className=" col-sm-5 col-form-label fs-6 text-center  ">Start
                                                        Time :</label>
                                                    <div className="col-sm-5 d-flex align-items-center">
                                                        <input type="time" className="form-control form-control-sm" required />
                                                    </div>
                                      </div>
                                        <div className="row">
                                           <label className=" col-sm-5 col-form-label fs-6 text-center  ">End
                                              Time :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                               <input type="time" className="form-control" required />      
                                            </div>
                                        </div>
                                        <div className="my-1 row">
                                            <label className=" col-sm-5 col-form-label fs-6 text-center">Interval
                                                Time:</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                                <span className="col-sm-1 fs-6">Min</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Packing Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Pack List
                                                Generate
                                                By Pack Dept :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 mt-3 row">
                                            <label className="col-sm-8 col-form-label fs-6  text-end ">Material
                                                Consumption
                                                In Packing :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mb-1">
                                <legend>Operation Wise Stock Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-1 row">
                                            <label className="col-sm-7 col-form-label fs-6  text-end ">Operation Wise
                                                Production Stock :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                               <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className="mb-1 row">
                                            <label className="col-sm-7 col-form-label fs-6  text-end ">Operation Wise
                                                Stock Movement Auto :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-1 d-flex align-items-center">
                                            <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className="mb-1 row">
                                            <label className="col-sm-7 col-form-label fs-6  text-end ">In Process
                                                QC Requird For Operation :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                            <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className="mb-1 row">
                                            <label className="col-sm-7 col-form-label fs-6  text-end ">Previous
                                                Stock Show Based On In Process QC :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                            <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                        <div className="mb-1 row">
                                            <label className="col-sm-7 col-form-label fs-6  text-end ">Production
                                                Report
                                                Batch No System With Batch Tracking :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" required aria-label="select example">
                                                    <option value=""> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                            <span className='text-primary fs-5'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mb-1">
                                <legend>Production From Job Work Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-2 row">
                                            <label className=" col-sm-7 col-form-label fs-6  text-end">Job Work
                                                Default Machine:</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-2 row">
                                            <label className=" col-sm-7 col-form-label fs-6  text-end">Foundary
                                                Machine Category:</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center gap-3 btn-cont my-4 py-3">
                                    <button type="submit"  className="btn  update-btn border-secondary">Update</button>
                                    <button type="button" className="btn  cancel-btn border-secondary">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>




    </div>
  )
}

export default ProductionSetting