import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)
const StoreContextProvider = (props)=>{
const url ="https://erpbackend-ybw5.onrender.com";
const [token ,setToken] = useState("")
const[showLogin,setShowLogin]=useState(false)
const [userData,setUserData] = useState(null)




useEffect(()=>{
  if(localStorage.getItem("token")){
    setToken(localStorage.getItem("token"));
  }
  if(localStorage.getItem("user")){
    let TogetStringValue=localStorage.getItem("user")
    // console.log(TogetStringValue)
    let userObject = JSON.parse(TogetStringValue)
    // console.log(userObject)
    setUserData(userObject)
  }

  
},[])

const contextValue ={
url,
token,
setToken,showLogin,setShowLogin,userData,setUserData
}

return (
  <StoreContext.Provider value={contextValue}>
    {props.children}
  </StoreContext.Provider>
)

}


export default StoreContextProvider;