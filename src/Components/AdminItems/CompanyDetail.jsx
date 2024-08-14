import React from "react";

const CompanyDetail = () => {




  const handleSubmit = (e) =>{
    e.preventDefault()
    alert("form submit")
  }
  return (
    <div className=" container-fluid ">
      <div className="row">
        <div className="col-md-12 company">
          <h4>Company Details</h4>

          <div class="row">
            <div class="col-md-12 nav-btns ">
              <button class="btn btn-sm fs-5 ">Basic Details</button>
              <button class="btn btn-sm fs-5 ">Tax & Bank Details</button>
              <button class="btn btn-sm fs-5 ">Terms & Condtions</button>
              <button class="btn btn-sm fs-5 ">Report Haeding</button>
              <button class="btn btn-sm fs-5 ">Report Haeding</button>
              <button class="btn btn-sm fs-5 ">Other Setting</button>
              <button class="btn btn-sm fs-5 ">CRM/HR Setting</button>
              <button class="btn btn-sm fs-5 ">
                Finance/Inventory Setting
              </button>
              <button class="btn btn-sm fs-5 ">TCS Setting & E-Invoice</button>
              <button class="btn btn-sm fs-5 ">Costing Setting</button>
              <button class="btn btn-sm fs-5 ">Production setting</button>
              <button class="btn btn-sm fs-5 ">Terms & Conditions</button>
            </div>
          </div>

          <div class="row mt-2">
            <fieldset>
              <legend>COMPANY DETAILS</legend>
              <form action="" onSubmit={handleSubmit}>
                <div class="row ">
                  <div class="col-md-6 mt-3 ">
                    <div class="mb-3 row ">
                      <label for="" class="col-sm-4 col-form-label fs-5 ">
                        Company Name
                      </label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label for="" class="col-sm-4 col-form-label  fs-5">
                        Company Logo
                      </label>
                      <div class="col-sm-8">
                        <input type="file" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Tag Line
                      </label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Website
                      </label>
                      <div class="col-sm-8">
                        <input type="email" class="form-control"required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Email Id
                      </label>
                      <div class="col-sm-8">
                        <input type="email" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Optional Email Id
                      </label>
                      <div class="col-sm-8">
                        <input type="email" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Aadhaar No
                      </label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mt-3 ps-3">
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Contact No
                      </label>
                      <div class="col-sm-8">
                        <input type="number" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Contact Person
                      </label>
                      <div class="col-sm-8">
                        <input type="number" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Person Contact No
                      </label>
                      <div class="col-sm-8">
                        <input type="number" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Address
                      </label>
                      <div class="col-sm-8">
                        <textarea name="" id="" class="form-control" required></textarea>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Country
                      </label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        State
                      </label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        City
                      </label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Pincode
                      </label>
                      <div class="col-sm-8">
                        <input type="number" class="form-control" required />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label
                        for="inputPassword"
                        class="col-sm-4 col-form-label  fs-5"
                      >
                        Note
                      </label>
                      <div class="col-sm-8">
                        <textarea name="" id="" class="form-control"></textarea>
                      </div>
                    </div>
                    <div class="mb-3 row ">
                      <div class="col-sm-12 d-flex justify-content-end align-items-center">
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-3 fs-4"
                        >
                          Next
                        </button>
                        {/* <input type="button" value="Next" class="form-control fs-3 btn-next" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
