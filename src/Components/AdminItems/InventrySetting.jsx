import React from "react";
import DataTable from "react-data-table-component";
const InventrySetting = () => {
    const dataList =[
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",AvailableQty:"25454.00", Unit:"Pcs",SecAvailableQty:"25463.00",SecUnit:"KG",Rate:"0"},
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",AvailableQty:"25454.00", Unit:"Pcs",SecAvailableQty:"25463.00",SecUnit:"KG",Rate:"0"},
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",AvailableQty:"25454.00", Unit:"Pcs",SecAvailableQty:"25463.00",SecUnit:"KG",Rate:"0"},
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",AvailableQty:"25454.00", Unit:"Pcs",SecAvailableQty:"25463.00",SecUnit:"KG",Rate:"0"},
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",AvailableQty:"25454.00", Unit:"Pcs",SecAvailableQty:"25463.00",SecUnit:"KG",Rate:"0"}       
    
      ]
    
      const columns =[
        {name:"Item Name",selector:row=>row.ItemName,sortable:true},
        {name:"Group Name",selector:row=>row.GroupName},
        {name:"Available Qty",selector:row=>row.AvailableQty},
        {name:"Unit",selector:row=>row.Unit},
        {name:"Sec.AvailableQty",selector:row=>row.SecAvailableQty},
        {name:"Sec. Unit",selector:row=>row.SecUnit},
        {name:"Rate",selector:row=>row.Rate,sortable:true},       
        
      ];
      const customStyles = {
        rows: {
            className:"table-row",
            style: {
              cursor:"pointer",
              transition: "background-color 0.3s ease",
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
            <div className="col-md-12 mt-3 px-3">
                <div className="d-flex justify-content-between">
                    <h4>Stock Manage</h4>
                    <button className="btn btn-secondary px-3 disabled">Submit</button>
                </div>
            <div>
                <DataTable
                columns={columns}
                data={dataList}
                customStyles={customStyles}
                />
            </div>
            </div>
        </div>
    </div>
    );
};

export default InventrySetting;
