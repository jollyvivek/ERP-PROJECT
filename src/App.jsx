import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Sidebar from "./Components/Sidebar/Sidebar";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
// import Role from './Components/AdminItems/Role'
// import CompanyDetail from "./Components/AdminItems/CompanyDetail";

const App = () => {
  return <div>
    <ToastContainer/>
    <Navbar/>
    {/* <hr /> */}
    <div className="app-content">
      <Sidebar/>
      {/* <Routes> */}
        {/* <Route path="/company" element={<CompanyDetail/>}/>
        <Route path="/role" element={<Role/>}/> */}
        {/* <Route/>
        <Route/>
        <Route/>
      </Routes> */}
    </div>
  </div>;
};

export default App;
