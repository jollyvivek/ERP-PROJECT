import React from 'react'
import NavTabs from '../Navbar/NavTabs'

const FinanceInventrySetting = () => {
  return (
    <div className='container-fluid mt-2'>
      <div className='row'>
        <div className='col-md-12 px-0'>
        <h4 className="company-title fs-5 px-3">Company Details</h4>
          <NavTabs/>

        </div>
      </div>

      <div class="row">
      <div class="col-md-12">
        <form action="" class="needs-validation" novalidate>
          <div class="row">
            <div class="col-md-6">
              <fieldset>
                <legend> Inventory Setting</legend>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3 row">
                      <label for="" class="col-sm-8 col-form-label fs-5  text-end ">Second Unit
                        Calculation Auto :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-8 col-form-label fs-5  text-end ">Stock
                        Acceptance (Negative) :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-8 col-form-label fs-5 text-end ">Show the
                        Description of the place of the Item Name in the Invoice :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-8 col-form-label fs-5 text-end ">QC/QA
                        Required:</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-8 col-form-label fs-5 text-end ">Default Return
                        Item :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-8 col-form-label fs-5 text-end ">Required
                        Schedule:</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-8 col-form-label fs-5 text-end ">PriceList
                        Applicable :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-8 col-form-label fs-5 text-end ">Additional
                        Charges GST Taxation Based in Item:</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Work in
                        Progress :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Unit For Size
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Unit For
                        Weight :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Batch No. Text
                        Name :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="mt-3">
                <legend>Tally Integration Setting</legend>
                <div class="row ">
                  <div class="col-12">
                    <div class="mb-3 row">
                      <label for="" class="col-sm-8 col-form-label fs-5  text-end">Tally Host
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end ">Tally Company
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end ">Customer Item
                        Detail Send :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Purchase Setting</legend>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-4 col-form-label fs-5  text-end">Tolerance
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center gap-3">
                        <span class="fs-5">+</span>
                        <input type="text" name=""  class="form-control" required />
                        <span class="fs-5">%</span>
                      </div>
                      <div class="col-sm-4 d-flex align-items-center gap-3">
                        <span class="fs-5">-</span>
                        <input type="text" name=""  class="form-control" required />
                        <span class="fs-5">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="col-md-6 ">
              <fieldset class="mb-3">
                <legend>Finance Setting</legend>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5 text-end">Sales
                        Order/Invoice
                        Based On :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Item1">Item1</option>
                          <option value="Item2">Item2</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5 text-end">Sheet Size
                        Options
                        Required :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Item1">Item1</option>
                          <option value="Item2">Item2</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Sales Order
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5 text-end">Multiple Sales
                        Order To
                        Invoice :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Domastic Bank
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Export Bank
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Export Setting</legend>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5 text-end">IEC NO
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5 text-end">EPCG Lic No
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5 text-end">LUT No
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5 text-end">REX NO
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>GST Refund</legend>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">IGST Refund
                        Ledger :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Export Invoice
                        :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>WeightScale Setting</legend>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Get Weight
                        From WeightScale :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Qty
                        Replace/Addition :</label>
                      <div class="col-sm-4 d-flex align-items-center">
                        <select class="form-select form-select-sm" required aria-label="select example">
                          <option value="">Select</option>
                          <option value="Yes">Replace</option>
                          <option value="No">No Replace</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mt-3">
              <div class="mb-3 row">
                <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Dashboard
                  Image :</label>
                <div class="col-sm-4 d-flex flex-column align-items-center">
                  <label htmlFor="img-file w-100" className='px-3 py-1 border'>BROWSE</label>
                  <input id='img-file' type="file" class="form-control d-none" required />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="" class=" col-sm-8 col-form-label fs-5  text-end">Near Due Days Alert
                  :</label>
                <div class="col-sm-4 d-flex align-items-center">
                  <input type="text" class="form-control" required />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3 row">
                <label for="" class=" col-sm-6 col-form-label fs-5  text-end">Select Path For DRG
                  Image :</label>
                <div class="col-sm-4 d-flex align-items-center">
                  <input type="file" class="form-control form-control-sm" required />
                </div>
                <div class="col-md-2 d-flex align-items-center">
                  <h6 onClick={()=>alert()} className=''> Another Path</h6>
                </div>
              </div>
              <div class=" my-3 d-flex justify-content-end align-items-center">
                <button type="submit" class="btn border-secondary btn-next py-1 fs-5 ">Next</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>






    </div>
  )
}

export default FinanceInventrySetting