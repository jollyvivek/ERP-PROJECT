import React from 'react'
import DataTable from 'react-data-table-component'

const Group = () => {

    const dataList =[
        { GroupName:"Book Bag", Description :"Book Bag", ProductionUnit:"Production Unit-I"},
        { GroupName:"Notebook", Description :"Notebook", ProductionUnit:"Production Unit-II"},
        { GroupName:"Plastic", Description :"Plastic", ProductionUnit:"Production Unit-III"},
        { GroupName:"ABCDE", Description :"ABCDE", ProductionUnit:"Production Unit-IV"},
        { GroupName:"Casting", Description :"Casting", ProductionUnit:"Production Unit-V"}
      ]
      const columns =[
        {name:"Group Name",selector:row=>row.GroupName,sortable:true},
        {name:"Description",selector:row=>row.Description,sortable:true},
        {name:"Production Unit",selector:row=>row.ProductionUnit,sortable:true},
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
                    <h5> Group Record</h5>
                    <button className='px-3 py-1 border-1 rounded-3 border-primary bg-transparent fs-5'
                        data-bs-toggle="modal" data-bs-target="#GroupModal">Add New
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
        {/* Group model */}

{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#GroupModal">
  Launch demo modal
</button> */}

<div className="modal fade" id="GroupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Group Master</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 px-0'>
                    <fieldset>
                        <legend>Group</legend>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Group Name :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="currentYear"
                                // value={data.currentYear} onChange={handleChange}
                                autoComplete="off" required  />
                        </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Production Unit :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="currentYear"
                                // value={data.currentYear} onChange={handleChange}
                                autoComplete="off" required  />
                        </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                                 Description :
                            </label>
                        <div className="col-sm-8 d-flex align-items-center">
                            <input type="text" className="form-control"  name="currentYear"
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

export default Group