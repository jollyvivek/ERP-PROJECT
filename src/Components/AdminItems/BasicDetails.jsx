import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

const BasicDetails = () => {
  const [selectedData, setSelectedData]=useState([])
  const url = "http://localhost:4000"
  const fileInputRef = useRef(null)
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

  // companydata get

  const companyList = async()=>{
    const response = await axios.get(`${url}/api/company/list`);
    if(response){
      // console.log(response.data.data)
      setSelectedData(response.data.data[0])
    }else{
      console.log("Error")
    }
  }

  useEffect(()=>{
    companyList();
  },[]);

//  setTimeout(()=>{ console.log(selectedData)},3000)

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

    // console.log(data,logo)
    
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
      if(fileInputRef.current){
        fileInputRef.current.value="";
      }
      console.log("success")
      toast.success(response.data.message)

    }else{
      console.log("error");
      toast.error(response.data.message)
    }
  };

  return (
    <div className='container-fluid'>
       <div className="row mt-2">
          <div className='col-md-12'>
            <fieldset>
              <legend>COMPANY DETAILS</legend>
              <form   method="post" onSubmit={handleSubmit}>
                <div className="row ">
                  <div className="col-md-6 mt-3 ">
                    <div className="mb-3 row ">
                      <label className="col-sm-5 col-form-label fs-5">
                        Company Name
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="companyName"
                          value={selectedData.companyName || data.companyName}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Company Logo
                       
                      </label>
                      <div className="col-sm-7 d-flex flex-column align-items-center">
                        <input
                          type="file"
                          className="form-control"
                          ref={fileInputRef}
                          onChange={(e)=>setLogo(e.target.files[0])}
                          required
                        />
                         <img className="mt-3 img-fluid" src={logo ? URL.createObjectURL(logo):""} alt="" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Tag Line
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="tagline"
                          value={ selectedData.tagline  || data.tagline}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Website
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="email"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="website"
                          value={ selectedData.website  || data.website}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Email Id
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="email"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="email"
                          value={ selectedData.email || data.email}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Optional Email Id
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="email"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="optionalEmail"
                          value={selectedData.optionalEmail || data.optionalEmail}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Aadhaar No
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="number"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="aadhaarNo"
                          value={selectedData.aadhaarNo || data.aadhaarNo}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Contact No
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="number"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="contactNo"
                          value={ selectedData.contactNo || data.contactNo}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-3 ps-3">

                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Contact Person
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="contactPerson"
                          value={selectedData.contactPerson ||data.contactPerson}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Person Contact No
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="number"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="personContactNo"
                          value={selectedData.personContactNo || data.personContactNo}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Address
                      </label>
                      <div className="col-sm-7">
                        <textarea
                          className="form-control"
                          onChange={onChangeHandler}
                          name="address"
                          value={ selectedData.address||data.address}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Country
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="country"
                          value={selectedData.country ||data.country}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        State
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="state"
                          value={selectedData.state || data.state}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        City
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="city"
                          value={selectedData.city || data.city}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Pincode
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="number"
                          className="form-control"
                          onChange={onChangeHandler}
                          name="pincode"
                          value={selectedData.pincode || data.pincode}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-5 col-form-label  fs-5">
                        Note
                      </label>
                      <div className="col-sm-7">
                        <textarea
                          id=""
                          className="form-control"
                          onChange={onChangeHandler}
                          name="note"
                          value={ selectedData.note || data.note}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="mb-3 row ">
                      <div className="col-sm-12 d-flex justify-content-end align-items-center">
                        <button
                          type="submit"
                          className=" py-1 rounded-1 btn-next border-secondary bg-transparent fs-5"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
    </div>
  )
}

export default BasicDetails