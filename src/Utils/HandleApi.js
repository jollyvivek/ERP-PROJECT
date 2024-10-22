import axios from "axios";

const url ="http://localhost:4000";


const RoleFetchList =  async(setDataList)=>{
  try {
    const response = await axios.get(`${url}/api/role/list`);
    if (response.data.success) {
      setDataList(response.data.data);
      // console.log(response.data.data)
    } else {
      console.log(response.data.message)
    }
  } catch (error) {
    console.log(error)
  }
}



export{RoleFetchList}