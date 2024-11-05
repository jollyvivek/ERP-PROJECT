import React from 'react'
import DataTable from 'react-data-table-component'
const FinanceSetting = () => {

    const dataList =[
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",Balance:"25454.00", BalanceStatus:"Cr"},
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",Balance:"25454.00", BalanceStatus:"Dr"},
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",Balance:"25454.00", BalanceStatus:"Cr"},
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",Balance:"25454.00", BalanceStatus:"Dr"},
        { ItemName:"A2F-Item1",GroupName:"Finished Goods",Balance:"25454.00", BalanceStatus:"Cr"}       
    
      ];
      const columns =[
        {name:"Ledger Name",selector:row=>row.ItemName,sortable:true},
        {name:"Group Name",selector:row=>row.GroupName},
        {name:"Balance ",selector:row=>row.Balance},
        {name:"BalanceStatus",selector:row=>row.BalanceStatus},      
        
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
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12 mt-3 px-3'>
                <div className="d-flex justify-content-between">
                    <h4>Account Manage</h4>
                    <button className="btn btn-secondary px-3 disabled">Submit</button>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                    <DataTable
                        columns={columns}
                        data={dataList}
                        customStyles={customStyles}
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinanceSetting