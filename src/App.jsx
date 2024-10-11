import React, { useContext, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Route, Routes } from "react-router-dom";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import { StoreContext } from "./Context/StoreContext";
import ErpHome from "./Components/ErpHome/ErpHome";

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  const{token}= useContext(StoreContext)
  const[value,setValue]=useState(token)
 

  return <div>
    {showLogin ?<LoginPopup setShowLogin={setShowLogin}/> :<></>}
    <ToastContainer/>
    <Navbar setShowLogin={setShowLogin}/>
    {/* <hr /> */}
    <div className="app-content">
    {value===token ? <ErpHome/> :<Sidebar/>}
      
     
    </div>
  </div>;
};

export default App;
