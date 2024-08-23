
import React from "react";

import BasicDetails from "./BasicDetails";
import NavTabs from "../Navbar/NavTabs";

const CompanyDetail = () => {
  return (
    <div className=" container-fluid ">
      <div className="row">
        <div className="col-md-12 company">
          <h4 className="company-title fs-5">Company Details</h4>
          <div className="row">
              <div className="colmd-12 p-0">
                <NavTabs/>
              </div>
          </div>
          <BasicDetails/>         
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
