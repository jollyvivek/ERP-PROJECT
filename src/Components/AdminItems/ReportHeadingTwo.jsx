import React from "react";
import NavTabs from "../Navbar/NavTabs";

const ReportHeadingTwo = () => {
  return (
    <div className="container-fluid">
      <h4 className="company-title fs-5">Company Details</h4>
      <div className="row ">
        <div className="col-md-12 px-0">
          <NavTabs />
        </div>
      </div>

      <div className="row">
            <div className="col-md-12">
                <form action="" className="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>Sales Order Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-7 col-form-label fs-6 text-end">Tax Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end">Proforma
                                                Invoice :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            {/* <fieldset className="mt-3">
                                <legend>Purchase Order Heading</legend>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-6 col-form-label fs-5 text-end">Tax Order
                                                Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-6 col-form-label fs-5 text-end ">Bill of
                                                Supply Order
                                                Heading :</label>
                                            <div className="col-sm-6 d-flex align-items-center">
                                                <input type="text" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset> */}
                            <fieldset>
                                <legend>Export Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-7 col-form-label fs-6 text-end">Tax Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end ">Tax Order
                                                Subheading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end ">Bill of
                                                Supply Order Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end ">Bill of
                                                Supply Order Subheading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Import Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-7 col-form-label fs-6 text-end">Tax Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end ">Tax Order
                                                Subheading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end ">Bill of
                                                Supply Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end ">Bill of
                                                Supply Order
                                                Subheading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-6 ">
                            <fieldset className="">
                                <legend>Purchase Order Heading</legend>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className="col-sm-7 col-form-label fs-6 text-end">Tax Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end ">Bill of
                                                Supply Order
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mb-3">
                                <legend>Quotation Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end"> Quotation
                                                Tax
                                                Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end">Quotation
                                                Bill of Supply :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end">Export
                                                Quotation :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Return Rejected Heading</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end"> Return
                                                Rejected Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label for="" className=" col-sm-7 col-form-label fs-6 text-end">Return
                                                Rejected Report Heading :</label>
                                            <div className="col-sm-5 d-flex align-items-center">
                                                <input type="text" className="form-control form-control-sm" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div class=" my-3 d-flex justify-content-end align-items-center">
                        <button type="submit" class="btn form-control btn-next py-1 fs-5 border-secondary ">Next</button>
                    </div>
                </form>
            </div>
        </div>









    </div>
  );
};

export default ReportHeadingTwo;
