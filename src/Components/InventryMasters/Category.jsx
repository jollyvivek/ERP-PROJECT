import React from 'react'
import DataTable from 'react-data-table-component';


const Category = () => {

    const dataList =[
        { CategoryName:"Book Bag", ParentCategoryName :"Book Bag"},
        { CategoryName:"Notebook", ParentCategoryName :"Notebook"},
        { CategoryName:"Plastic", ParentCategoryName :"Plastic"},
        { CategoryName:"ABCDE", ParentCategoryName :"ABCDE"},
        { CategoryName:"Casting", ParentCategoryName :"Casting"}
      ]
      const columns =[
        {name:"Category Name",selector:row=>row.CategoryName,sortable:true},
        {name:"Parent Category Name",selector:row=>row.ParentCategoryName,sortable:true},
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

  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-12'>
                <div className='d-flex justify-content-between mt-3'>
                    <h5> Category Record</h5>
                    <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                        data-bs-toggle="modal" data-bs-target="#CategoryModal">Add New
                    </button>
                </div>
            </div>
            <div className='mt-3 d-flex  justify-content-end align-items-center gap-3'>
                <label htmlFor="" className='form-select-lg'>Serach : </label>
               <input type="text" className='form-control w-25 '
                //  onChange={handleFilter} 
                placeholder='Search Here'  />
            </div>
            <DataTable  columns={columns}  data={dataList}  customStyles={customStyles} />

        </div>

        {/* category model */}

        <div className="modal fade" id="CategoryModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Category Master</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 px-0'>
                    <fieldset>
                        <legend>Category</legend>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Category Name :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="CategoryName"
                                // value={data.currentYear} onChange={handleChange}
                                autoComplete="off" required  />
                        </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Parent Category :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="ParentCategory"
                                // value={data.currentYear} onChange={handleChange}
                                autoComplete="off" required  />
                        </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
        </div>

    </div>
  )
}

export default Category