import React, { useState } from "react";

const CreateYear = () => {
  const [isModel,setIsModel] = useState(false);
  const [data,setData] = useState({
    currentYear:"",
    createYear:""
  });
  const [yearData,setYearData] = useState([])

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setData((data)=>({...data,[name]:value}))
  };

  const YearSubmitHandler =()=>{
    setData({
        currentYear:"",
        createYear:""
    });
    setIsModel(false)
    console.log(data)
  }

  return (
    <div className="container-fluid">
      <div className="row mx-5">
        <div className="col-md-12 ps-4 pe-5  mt-3">
          <div className="d-flex justify-content-between ">
            <h5>Financial Year Setting</h5>
            <button className="btn border-primary" onClick={()=>setIsModel(true)}>Add Year</button>
          </div>
            
        </div>
      </div>

      {/* model */}

    {isModel && (
      <div
        className="modal show fade"
        style={{ display: 'block' }}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        // aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Financial Year Setting
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>setIsModel(false)}
              ></button>
            </div>
            <div className="modal-body">

            <div className="mb-2 row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Current Fyear :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control"  name="currentYear"
                    value={data.currentYear} onChange={handleChange}
                    autoComplete="off" required  />
                </div>
            </div>
            <div className="mb-2 row">
                <label htmlFor="" className=" col-sm-5 col-form-label fs-5  text-end" >
                  Create Fyear :
                </label>
                <div className="col-sm-7 d-flex align-items-center">
                  <input type="text" className="form-control"  name="createYear"
                    value={data.createYear} onChange={handleChange}
                    autoComplete="off" required  />
                </div>
            </div>


            </div>
            <div className="modal-footer">

            <button type="button" className="btn btn-primary" onClick={YearSubmitHandler}>
                Submit
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={()=>setIsModel(false)}
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    )}
      {/* model end */}
    </div>
  );
};

export default CreateYear;
