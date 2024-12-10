import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';


const Category = () => {
   const {url} = useContext(StoreContext) 
  const [showModal, setShowModal] = useState(false)
  const [categoryRecords,setCategoryRecords]= useState([])
  const [data,setData] = useState({
    CategoryName:"",
    ParentCategory:""
  })

      const columns =[
        {name:"Category Name",selector:row=>row.CategoryName,sortable:true},
        {name:"Parent Category Name",selector:row=>row.ParentCategory,sortable:true},
      ];
      const customStyles = {
        rows: {
            style: {
                // minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // padding for header cells
                paddingRight: '8px',
                fontSize:"18px",
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // padding for body cells
                paddingRight: '8px',
                fontSize:"15px",
                // border:"2px solid red",
            },
        },
        };
    // handler
    const handleChange = (event)=>{
        const {name,value} = event.target
        setData((data)=>({...data,[name]:value}))
    }


    const FormSubmitHandler = async(event) =>{
        event.preventDefault();
        let payload = {
            CategoryName:data.CategoryName,
            ParentCategory:data.ParentCategory
        }
        const response = await axios.post(`${url}/api/category/add`,payload);
        if (response.data.success) {
            setData({CategoryName:"",ParentCategory:""})
            toast.success(response.data.message)
            // console.log(data)
        } else {
            console.log("error");
            toast.error(response.data.message)
        }
        setShowModal(false)
    }

    // fetch category records
    const CategoryFetchRecords = async()=>{
        const response = await axios.get(`${url}/api/category/list`);
        if(response.data.data){
          setCategoryRecords(response.data.data)
        }else{
          console.log("Error")
        }
    
      }
    
      useEffect(()=>{
        CategoryFetchRecords();
      },[]);

  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-12'>
                <div className='d-flex justify-content-between mt-3'>
                    <h5> Category Record</h5>
                    <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5' onClick={()=>setShowModal(true)}
                        
                    >Add New
                    </button>
                </div>
            </div>
            <div className='mt-3 d-flex  justify-content-end align-items-center gap-3'>
                <label htmlFor="" className='form-select-lg'>Serach : </label>
               <input type="text" className='form-control w-25 '
                //  onChange={handleFilter} 
                placeholder='Search Here'  />
            </div>
            <DataTable  columns={columns}  data={categoryRecords}  customStyles={customStyles} />

        </div>

        {/* category model */}
    {showModal && (
        <div className="modal show fade" style={{ display: 'block' }}  tabIndex="-1" aria-labelledby="exampleModalLabel"
        //  aria-hidden="true"
        >
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Category Master</h5>
        <button type="button" className="btn-close" onClick={()=>setShowModal(false)} aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 px-0'>
                    <form onSubmit={FormSubmitHandler}>
                    <fieldset>
                        <legend>Category</legend>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Category Name :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="CategoryName"
                                value={data.CategoryName} onChange={handleChange}
                                autoComplete="off" required  />
                        </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Parent Category :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="ParentCategory"
                                value={data.ParentCategory} onChange={handleChange}
                                autoComplete="off" required  />
                        </div>
                        </div>
                        <div className='my-3 d-flex justify-content-center gap-2'>
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" className="btn btn-secondary" onClick={()=>setShowModal(false)}>Close</button>
                        </div>
                    </fieldset>
                    </form>

                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  </div>
        </div>
    )}
    </div>
  )
}

export default Category