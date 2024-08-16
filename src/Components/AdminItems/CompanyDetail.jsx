import axios from "axios";
import React, { useState } from "react";

const CompanyDetail = () => {
  const url = "http://localhost:4000";
  const [logo,setLogo]=useState(false)
  const [data, setData] = useState({
    companyName: "",
    // companyLogo: "",
    tagline: "",
    website: "",
    email: "",
    optionalEmail: "",
    aadhaarNo: "",
    contactNo: "",
    contactPerson: "",
    personContactNo: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    note: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(()=>{
  //   console.log(data,logo)
  // },[data,logo])

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("companyName",data.companyName)
    formData.append("logo",logo)
    formData.append("tagline",data.tagline)
    formData.append("website",data.website)
    formData.append("email",data.email)
    formData.append("optionalEmail",data.optionalEmail)
    formData.append("aadhaarNo",Number(data.aadhaarNo))
    formData.append("contactNo",Number(data.contactNo))
    formData.append("contactPerson",data.contactPerson)
    formData.append("personContactNo",Number(data.personContactNo))
    formData.append("address",data.address)
    formData.append("country",data.country)
    formData.append("state",data.state)
    formData.append("city",data.city)
    formData.append("pincode",Number(data.pincode))
    formData.append("note",data.note)

    const response = await axios.post(`${url}/api/company/add`,formData);

    if (response.data.success) {
      setData({
        companyName: "",
        tagline: "",
        website: "",
        email: "",
        optionalEmail: "",
        aadhaarNo: "",
        contactNo: "",
        contactPerson: "",
        personContactNo: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        note: "",
      })
      setLogo(false)
      console.log("success")

    }else{
      
      console.log("error")
    }
  };
  return (
    <div className=" container-fluid ">
      <div className="row">
        <div className="col-md-12 company">
          <h4>Company Details</h4>

          <div className="row">
            <div className="col-md-12 nav-btns ">
              <button className="btn btn-sm fs-5 ">Basic Details</button>
              <button className="btn btn-sm fs-5 ">Tax & Bank Details</button>
              <button className="btn btn-sm fs-5 ">Terms & Condtions</button>
              <button className="btn btn-sm fs-5 ">Report Haeding</button>
              <button className="btn btn-sm fs-5 ">Report Haeding</button>
              <button className="btn btn-sm fs-5 ">Other Setting</button>
              <button className="btn btn-sm fs-5 ">CRM/HR Setting</button>
              <button className="btn btn-sm fs-5 ">
                Finance/Inventory Setting
              </button>
              <button className="btn btn-sm fs-5 ">
                TCS Setting & E-Invoice
              </button>
              <button className="btn btn-sm fs-5 ">Costing Setting</button>
              <button className="btn btn-sm fs-5 ">Production setting</button>
              <button className="btn btn-sm fs-5 ">Terms & Conditions</button>
            </div>
          </div>

          <div className="row mt-2">
            <fieldset>
              <legend>COMPANY DETAILS</legend>
              <form  onSubmit={handleSubmit}>
                <div className="row ">
                  <div className="col-md-6 mt-3 ">
                    <div className="mb-3 row ">
                      <label className="col-sm-4 col-form-label fs-5">
                        Company Name
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="companyName"
                          value={data.companyName}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Company Logo
                       
                      </label>
                      <div className="col-sm-8 d-flex flex-column align-items-center">
                        <input
                          type="file"
                          className="form-control"
                          // onChange={onChangeHandler}
                          onChange={(e)=>setLogo(e.target.files[0])}
                          // name="companyLogo"
                          // value={data.companyLogo}
                          required
                        />
                         <img className="mt-3 img-fluid" src={logo ? URL.createObjectURL(logo):""} alt="" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Tag Line
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="tagline"
                          value={data.tagline}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Website
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="email"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="website"
                          value={data.website}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Email Id
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="email"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="email"
                          value={data.email}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Optional Email Id
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="email"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="optionalEmail"
                          value={data.optionalEmail}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Aadhaar No
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="number"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="aadhaarNo"
                          value={data.aadhaarNo}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-3 ps-3">
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Contact No
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="number"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="contactNo"
                          value={data.contactNo}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Contact Person
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="contactPerson"
                          value={data.contactPerson}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Person Contact No
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="number"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="personContactNo"
                          value={data.personContactNo}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Address
                      </label>
                      <div className="col-sm-8">
                        <textarea
                          className="form-control"
                          onChange={onChangeHandler}
                          name="address"
                          value={data.address}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Country
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="country"
                          value={data.country}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        State
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="state"
                          value={data.state}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        City
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="city"
                          value={data.city}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Pincode
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="number"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="pincode"
                          value={data.pincode}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label  fs-5">
                        Note
                      </label>
                      <div className="col-sm-8">
                        <textarea
                          id=""
                          className="form-control"
                          onChange={onChangeHandler}
                          name="note"
                          value={data.note}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="mb-3 row ">
                      <div className="col-sm-12 d-flex justify-content-end align-items-center">
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
