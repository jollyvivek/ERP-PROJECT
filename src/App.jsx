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
import RoleModel from "./Pages/RoleModel";

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  const [userData,setUserData] = useState()
  const{token}= useContext(StoreContext)
  const[value,setValue]=useState(token)
 
// console.log(userData)
  return (
    <>
  <div>
    {showLogin ?<LoginPopup setShowLogin={setShowLogin} setUserData = {setUserData}/> :<></>}
    <ToastContainer/>
    <Navbar setShowLogin={setShowLogin}/>
    {/* <hr /> */}
    <div className="app-content">
    {value===token ? <ErpHome/> :<Sidebar userData={userData}/>}
    </div>
  </div>
    </>
  );
};

export default App;
