
import React from "react";

import BasicDetails from "./BasicDetails";
import NavTabs from "../Navbar/NavTabs";

const CompanyDetail = () => {
  return (
    <div className=" container-fluid ">
      <div className="row">
        <div className="col-md-12 company">
          <h4>Company Details</h4>
            <NavTabs/>
          <BasicDetails/>         
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
