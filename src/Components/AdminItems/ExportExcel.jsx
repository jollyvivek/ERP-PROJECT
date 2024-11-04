import React from "react";
import DataTable from "react-data-table-component";
const ExportExcel = () => {

  const dataList =[
    {ItemType:"Finished Goods", ItemCode:"ABC101", ItemName:"A2F-Item1", Unit:"Pcs", ConverationValue:"0.254632", ConvertUnit:"KG",GroupName:"Finished Goods"},
    {ItemType:"Finished Goods", ItemCode:"ABC102", ItemName:"A2F-Item1", Unit:"Pcs", ConverationValue:"0.254632", ConvertUnit:"KG",GroupName:"Finished Goods"},
    {ItemType:"Finished Goods", ItemCode:"ABC103", ItemName:"A2F-Item1", Unit:"Pcs", ConverationValue:"0.254632", ConvertUnit:"KG",GroupName:"Finished Goods"},
    {ItemType:"Finished Goods", ItemCode:"ABC104", ItemName:"A2F-Item1", Unit:"Pcs", ConverationValue:"0.254632", ConvertUnit:"KG",GroupName:"Finished Goods"},
    {ItemType:"Finished Goods", ItemCode:"ABC105", ItemName:"A2F-Item1", Unit:"Pcs", ConverationValue:"0.254632", ConvertUnit:"KG",GroupName:"Finished Goods"},

  ]

  const columns =[
    {name:"Item Type",selector:row=>row.ItemType,sortable:true},
    {name:"Item Code",selector:row=>row.ItemCode,sortable:true},
    {name:"Item Name",selector:row=>row.ItemName,sortable:true},
    {name:"Unit",selector:row=>row.Unit},
    {name:"Convertion Value",selector:row=>row.ConverationValue},
    {name:"Convert Unit",selector:row=>row.ConvertUnit},
    {name:"Group Name",selector:row=>row.GroupName}
  ];
  const customStyles = {
    rows: {
        style: {
          cursor:"pointer",
            // minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // padding for header cells
            paddingRight: '8px',
            fontSize:"16px"
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // padding for body cells
            paddingRight: '8px',
             fontSize:"14px",
              text:"center"
        },
    },
    };

  return (
  <div className="container-fluid">
    <div className="row">
        <div className="col-md-12 px-3 mt-2">
            <h4>Import Docement List</h4>
            <div className="row mt-3">
                <div className="col-md-3 offset-1">
                <div className="row mb-1 ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                   Select :
                </label>
                <div className="col-sm-8 d-flex align-items-center gap-3">
                    <select className="form-select form-select-sm" 
                     required aria-label="Default select example">
                           <option> select</option>
                           <option value="Item List">Item List</option>
                           <option value="BOM List">BOM List</option>
                           <option value="Ledger List">Ledger List</option>
                    </select>
                </div>
                 </div>
                </div>
                <div className="col-md-3">
                <div className="row mb-1 ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-6  text-end" >
                   Show :
                </label>
                <div className="col-sm-8 d-flex align-items-center gap-3">
                    <select className="form-select form-select-sm" 
                     required aria-label="Default select example">
                           <option> select</option>
                           <option value="25">25</option>
                           <option value="100">100</option>
                           <option value="500">500</option>
                           <option value="1000">1000</option>
                    </select>
                </div>
                 </div>
                </div>
                <div className="col-md-5">
                <div className="row ">
                <label htmlFor="" className=" col-sm-4 col-form-label fs-6 text-end" >
                  Search :
                </label>
                <div className="col-sm-8 d-flex align-items-center">
                  <input type="text" className="form-control " />
                </div>
              </div>
                </div>
            </div>
            {/* DataTable */}
            <div className="row mt-3">
                <div className="col-md-12">
                <DataTable
                  columns={columns}
                  data={dataList}
                  customStyles={customStyles}
                  pagination
                />
                </div>
            </div>
            {/* button end */}
            <div className="row">
                <div className="col-md-12 d-flex justify-content-end gap-3">
                    <button className="btn border-secondary px-2">Export Excel</button>
                    <button className="btn border-secondary px-2">Cancel</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
};

export default ExportExcel;
