import React, { useContext, useEffect, useState } from 'react'
import NavTabs from '../Navbar/NavTabs'
import { toast } from 'react-toastify';
import {StoreContext} from '../../Context/StoreContext'
import axios from 'axios';

const FinanceInventrySetting = () => {
  const {url} = useContext(StoreContext)
  const [data,setdata] = useState({
    SecondUnitCalculationAuto :"",
    StockAcceptance:"",
    TheItemNameInTheInvoice :"",
    Qc_QaRequired:"",
    DefaultReturnItem :"",
    RequiredSchedule:"",
    PriceListApplicable :"",
    AdditionalChargesGstTaxation:"",
    WorkInProgress :"",
    UnitForSize :"",
    UnitForWeight :"",
    BatchNoTextName :"",

    TallyHost :"",
    TallyCompany :"",
    CustomerItemDetailSend :"",

    ToleranceFirstValue :"",
    ToleranceSecondValue :"",

    SalesOrderInvoice:"",
    SheetSize:"",
    SalesOrder :"",
    MultipleSalesOrder:"",
    DomasticBank :"",
    ExportBank :"",

    IecNo :"",
    EpcgLicNo :"",
    LutNo :"",
    RexNo :"",

    IgstRefundLedger :"",
    ExportInvoice :"",

    GetWeightFromWeightScale :"",
    QtyReplaceAddition :"",

    DashboardImage :"",
    NearDueDaysAlert :"",
    SelectPathForDrgImage :""

  });

  const changeHandler =(event)=>{
    const {name,value} =event.target; 
    setdata({...data,[name]:value})
  }

  // useEffect(()=>console.log(data),[data])

  const handleFormSubmit = async(event)=>{
    event.preventDefault();

    const payload = {
      SecondUnitCalculationAuto :data.SecondUnitCalculationAuto,
      StockAcceptance :data.StockAcceptance,
      TheItemNameInTheInvoice :data.TheItemNameInTheInvoice,
      Qc_QaRequired :data.Qc_QaRequired,
      DefaultReturnItem :data.DefaultReturnItem,
      RequiredSchedule :data.RequiredSchedule,
      PriceListApplicable :data.PriceListApplicable,
      AdditionalChargesGstTaxation :data.AdditionalChargesGstTaxation,
      WorkInProgress :data.WorkInProgress,
      UnitForSize :data.UnitForSize,
      UnitForWeight :data.UnitForWeight,
      BatchNoTextName :data.BatchNoTextName,
  
      TallyHost :data.TallyHost,
      TallyCompany :data.TallyCompany,
      CustomerItemDetailSend :data.CustomerItemDetailSend,
  
      ToleranceFirstValue :Number(data.ToleranceFirstValue),
      ToleranceSecondValue :Number(data.ToleranceSecondValue),
  
      SalesOrderInvoice :data.SalesOrderInvoice,
      SheetSize :data.SheetSize,
      SalesOrder :data.SalesOrder,
      MultipleSalesOrder :data.MultipleSalesOrder,
      DomasticBank :Number(data.DomasticBank),
      ExportBank :Number(data.ExportBank),
  
      IecNo :Number(data.IecNo),
      EpcgLicNo :data.EpcgLicNo,
      LutNo :data.LutNo,
      RexNo :data.RexNo,
  
      IgstRefundLedger :data.IgstRefundLedger,
      ExportInvoice :data.ExportInvoice,
  
      GetWeightFromWeightScale :data.GetWeightFromWeightScale,
      QtyReplaceAddition :data.QtyReplaceAddition,
  
      DashboardImage :data.DashboardImage,
      NearDueDaysAlert :Number(data.NearDueDaysAlert),
      SelectPathForDrgImage :data.SelectPathForDrgImage
    }

    const response = await axios.post(`${url}/api/financeinventry/add`,payload);
    if (response.data.success) {
      setdata({
        SecondUnitCalculationAuto :"",
        StockAcceptance:"",
        TheItemNameInTheInvoice :"",
        Qc_QaRequired:"",
        DefaultReturnItem :"",
        RequiredSchedule:"",
        PriceListApplicable :"",
        AdditionalChargesGstTaxation:"",
        WorkInProgress :"",
        UnitForSize :"",
        UnitForWeight :"",
        BatchNoTextName :"",
    
        TallyHost :"",
        TallyCompany :"",
        CustomerItemDetailSend :"",
    
        ToleranceFirstValue :"",
        ToleranceSecondValue :"",
    
        SalesOrderInvoice:"",
        SheetSize:"",
        SalesOrder :"",
        MultipleSalesOrder:"",
        DomasticBank :"",
        ExportBank :"",
    
        IecNo :"",
        EpcgLicNo :"",
        LutNo :"",
        RexNo :"",
    
        IgstRefundLedger :"",
        ExportInvoice :"",
    
        GetWeightFromWeightScale :"",
        QtyReplaceAddition :"",
    
        DashboardImage :"",
        NearDueDaysAlert :"",
        SelectPathForDrgImage :""
    
      });
      toast.success(response.data.message)
    } else {
      console.log("Error");
      toast.error(response.data.message)
    }
    // console.log(data);
  }

  return (
    <div className='container-fluid mt-2'>
      <div className='row'>
        <div className='col-md-12 px-0'>
        <h4 className="company-title fs-5 px-3">Company Details</h4>
          <NavTabs/>

        </div>
      </div>

      <div className="row">
      <div className="col-md-12">
        <form  onSubmit={handleFormSubmit} >
          <div className="row">
            <div className="col-md-6">
              <fieldset>
                <legend> Inventory Setting</legend>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3 row">
                      <label className="col-sm-8 col-form-label fs-5 text-end ">Second Unit
                        Calculation Auto :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='SecondUnitCalculationAuto' value={data.SecondUnitCalculationAuto} onChange={changeHandler}  required>
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-8 col-form-label fs-5  text-end ">Stock
                        Acceptance (Negative) :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='StockAcceptance' value={data.StockAcceptance} onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-8 col-form-label fs-5 text-end ">Show the
                        Description of the place of the Item Name in the Invoice :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='TheItemNameInTheInvoice' value={data.TheItemNameInTheInvoice} onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-8 col-form-label fs-5 text-end ">QC/QA
                        Required:</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='Qc_QaRequired' value={data.Qc_QaRequired} onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-8 col-form-label fs-5 text-end ">Default Return
                        Item :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" required name='DefaultReturnItem' value={data.DefaultReturnItem} onChange={changeHandler}>
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-8 col-form-label fs-5 text-end ">Required
                        Schedule:</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='RequiredSchedule' value={data.RequiredSchedule} onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-8 col-form-label fs-5 text-end ">PriceList
                        Applicable :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='PriceListApplicable' value={data.PriceListApplicable} onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-8 col-form-label fs-5 text-end ">Additional
                        Charges GST Taxation Based in Item:</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='AdditionalChargesGstTaxation' value={data.AdditionalChargesGstTaxation} onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Work in
                        Progress :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text"
                         className="form-control"
                         name='WorkInProgress'
                         value={data.WorkInProgress}
                         onChange={changeHandler}                         
                         required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Unit For Size :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text"
                        className="form-control"
                        name='UnitForSize'
                        value={data.UnitForSize}
                        onChange={changeHandler}
                        required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Unit For
                        Weight :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text"
                        className="form-control"
                        name='UnitForWeight'
                        value={data.UnitForWeight}
                        onChange={changeHandler}
                        required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Batch No. Text
                        Name :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text" 
                        className="form-control"
                        name='BatchNoTextName'
                        value={data.BatchNoTextName}
                        onChange={changeHandler}
                        required />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-3">
                <legend>Tally Integration Setting</legend>
                <div className="row ">
                  <div className="col-12">
                    <div className="mb-3 row">
                      <label className="col-sm-8 col-form-label fs-5  text-end">Tally Host :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text" 
                        className="form-control"
                        name='TallyHost'
                        value={data.TallyHost}
                        onChange={changeHandler}
                        required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end ">Tally Company :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input
                         type="text"
                          className="form-control"
                          name='TallyCompany'
                          value={data.TallyCompany}
                          onChange={changeHandler}
                          required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end ">Customer Item
                        Detail Send :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='CustomerItemDetailSend' value={data.CustomerItemDetailSend} onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Purchase Setting</legend>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3 row">
                      <label className=" col-sm-4 col-form-label fs-5  text-end">Tolerance :</label>
                      <div className="col-sm-4 d-flex align-items-center gap-3">
                        <span className="fs-5">+</span>
                        <input 
                        type="number" 
                        className="form-control"
                        name='ToleranceFirstValue'
                        value={data.ToleranceFirstValue}
                        onChange={changeHandler}
                        required />
                        <span className="fs-5">%</span>
                      </div>
                      <div className="col-sm-4 d-flex align-items-center gap-3">
                        <span className="fs-5">-</span>
                        <input 
                        type="number"
                        className="form-control"
                        name='ToleranceSecondValue'
                        value={data.ToleranceSecondValue}
                        onChange={changeHandler}
                        required />
                        <span className="fs-5">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="col-md-6 ">
              <fieldset className="mb-3">
                <legend>Finance Setting</legend>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5 text-end">Sales
                        Order/Invoice
                        Based On :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='SalesOrderInvoice' value={data.SalesOrderInvoice} onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Item1">Item1</option>
                          <option value="Item2">Item2</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5 text-end">Sheet Size
                        Options
                        Required :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='SheetSize' value={data.SheetSize} onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Sales Order :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text"
                        className="form-control"
                         name='SalesOrder'
                         value={data.SalesOrder}
                         onChange={changeHandler}
                         required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5 text-end">Multiple Sales
                        Order To
                        Invoice :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='MultipleSalesOrder' value={data.MultipleSalesOrder}  onChange={changeHandler} required >
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Domastic Bank
                        :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input
                         type="number"
                        className="form-control"
                        name='DomasticBank'
                        value={data.DomasticBank}
                        onChange={changeHandler}
                        required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Export Bank
                        :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="number"
                         className="form-control"
                         name='ExportBank'
                         value={data.ExportBank}
                         onChange={changeHandler}
                         required />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Export Setting</legend>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5 text-end">IEC NO
                        :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="number"
                        className="form-control"
                         name='IecNo'
                         value={data.IecNo}
                         onChange={changeHandler}
                         required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5 text-end">EPCG Lic No
                        :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input
                         type="text"
                        className="form-control"
                        name='EpcgLicNo'
                        value={data.EpcgLicNo}
                        onChange={changeHandler}
                        required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5 text-end">LUT No
                        :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text"
                         className="form-control"
                         name='LutNo'
                         value={data.LutNo}
                         onChange={changeHandler}
                         required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5 text-end">REX NO
                        :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text"
                         className="form-control"
                         name='RexNo'
                         value={data.RexNo}
                         onChange={changeHandler}
                         required />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>GST Refund</legend>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">IGST Refund
                        Ledger :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text"
                         className="form-control"
                         name='IgstRefundLedger'
                         value={data.IgstRefundLedger}
                         onChange={changeHandler}
                         required />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Export Invoice
                        :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <input 
                        type="text"
                         className="form-control"
                         name='ExportInvoice'
                         value={data.ExportInvoice}
                         onChange={changeHandler}
                         required />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>WeightScale Setting</legend>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Get Weight
                        From WeightScale :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='GetWeightFromWeightScale' value={data.GetWeightFromWeightScale}  onChange={changeHandler} required>
                          <option>Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className=" col-sm-8 col-form-label fs-5  text-end">Qty
                        Replace/Addition :</label>
                      <div className="col-sm-4 d-flex align-items-center">
                        <select className="form-select form-select-sm" name='QtyReplaceAddition' value={data.QtyReplaceAddition}  onChange={changeHandler} required>
                          <option>Select</option>
                          <option value="Replace">Replace</option>
                          <option value="No Replace"> No Replace</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <div className="mb-3 row">
                <label className=" col-sm-8 col-form-label fs-5  text-end">Dashboard
                  Image :</label>
                <div className="col-sm-4 d-flex flex-column align-items-center">
                  <label htmlFor="img" className='px-3 py-1 my-2 cursor-pointer border'>BROWSE</label>
                  <input
                  //  id='img'
                  type="file"
                  className="form-control"
                   hidden 
                   name='DashboardImage'
                   value={data.DashboardImage}
                   onChange={changeHandler}
                    />
                </div>
              </div>
              <div className="mb-3 row">
                <label className=" col-sm-8 col-form-label fs-5  text-end">Near Due Days Alert
                  :</label>
                <div className="col-sm-4 d-flex align-items-center">
                  <input 
                  type="number"
                  className="form-control"
                  name='NearDueDaysAlert'
                  value={data.NearDueDaysAlert}
                  onChange={changeHandler}
                  required />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3 row">
                <label className=" col-sm-6 col-form-label fs-5  text-end">Select Path For DRG
                  Image :</label>
                <div className="col-sm-4 d-flex align-items-center">
                  <input 
                  type="text" 
                  className="form-control"
                  name='SelectPathForDrgImage'
                  value={data.SelectPathForDrgImage}
                  onChange={changeHandler}
                  required />
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <h6 onClick={()=>alert()} className='cursor-pointer'> Another Path</h6>
                </div>
              </div>
              <div className=" my-3 d-flex justify-content-end align-items-center">
                <button type="submit" className="btn border-secondary btn-next py-1 fs-5 ">Save</button>
              </div>
              <div className=" my-3 d-flex justify-content-end align-items-center">
                <button type="button" className="btn border-secondary btn-next py-1 fs-5 ">Next</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>






    </div>
  )
}

export default FinanceInventrySetting