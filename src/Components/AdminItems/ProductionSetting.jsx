import React, { useEffect, useState } from "react";
import { FaInfo, FaInfoCircle } from "react-icons/fa";

import NavTabs from "../Navbar/NavTabs";
import { toast } from "react-toastify";

const ProductionSetting = () => {
  const [data, setData] = useState({
    MachineBasedProduction: "",
    RecordInMRSFromBOM: "",
    RecordInGrnFromProductionReport: "",
    ProductionUsingMis: "",
    MaterialConsumptionRequirdOnOperationGroup: "",
    TransferStockFromGroupInMis: "",
    OperationQcQa: "",
    GatePassFromFinshedGoods: "",
    ScrapDetailsRequired: "",
    AutoMaterialConsumption: "",
    RequiredMaterialConsumption: "",
    ShowGrossWeight: "",
    ShowClientName: "",
    QcTestingByLoginUser: "",
    QuantityCalculateBasedOnAltQty: "",
    SalesAndPurchaseShow: "",
    ProductionNotMoreThenPreviousOperation: "",
    ProductionReportAltQtyCalculation: "",
    ProductionPlaningRequired: "",
    WeightCalculateInProductionNoPcs: "",
    ProductionWeight: "",

    ToleranceFirstValue: "",
    ToleranceSecondValue: "",

    StartTime: "",
    EndTime: "",
    IntervalTime: "",

    PackListGenerateByPackDept: "",
    MaterialConsumptionInPacking: "",

    OperationWiseProductionStock: "",
    OperationWiseStockMovementAuto: "",
    InProcessQcRequirdForOperation: "",
    PreviousStockShowBasedOnInProcessQc: "",
    ProductionReportBatchNoSystemWithBatchTracking: "",

    JobWorkDefaultMachine: "",
    FoundaryMachineCategory: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

//   useEffect(() => console.log(data), [data]);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(data);
    setData({
        MachineBasedProduction: "",
        RecordInMRSFromBOM: "",
        RecordInGrnFromProductionReport: "",
        ProductionUsingMis: "",
        MaterialConsumptionRequirdOnOperationGroup: "",
        TransferStockFromGroupInMis: "",
        OperationQcQa: "",
        GatePassFromFinshedGoods: "",
        ScrapDetailsRequired: "",
        AutoMaterialConsumption: "",
        RequiredMaterialConsumption: "",
        ShowGrossWeight: "",
        ShowClientName: "",
        QcTestingByLoginUser: "",
        QuantityCalculateBasedOnAltQty: "",
        SalesAndPurchaseShow: "",
        ProductionNotMoreThenPreviousOperation: "",
        ProductionReportAltQtyCalculation: "",
        ProductionPlaningRequired: "",
        WeightCalculateInProductionNoPcs: "",
        ProductionWeight: "",
    
        ToleranceFirstValue: "",
        ToleranceSecondValue: "",
    
        StartTime: "",
        EndTime: "",
        IntervalTime: "",
    
        PackListGenerateByPackDept: "",
        MaterialConsumptionInPacking: "",
    
        OperationWiseProductionStock: "",
        OperationWiseStockMovementAuto: "",
        InProcessQcRequirdForOperation: "",
        PreviousStockShowBasedOnInProcessQc: "",
        ProductionReportBatchNoSystemWithBatchTracking: "",
    
        JobWorkDefaultMachine: "",
        FoundaryMachineCategory: "",
      });

      toast.success("form update successfully");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h4 className="company-title fs-5 px-2">Company Details</h4>
          <div className="row ">
            <div className="col-md-12 px-0">
              <NavTabs />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <form action="" className="" onSubmit={formSubmitHandler}>
            <div className="row">
              <div className="col-md-7 mb-3 ">
                <fieldset>
                  <legend>Production Setting</legend>
                  <div className="row ">
                    <div className="col-12">
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Machine Based Production :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="MachineBasedProduction"
                            value={data.MachineBasedProduction}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1 ">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Direct Insert Record in MRS From BOM :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="RecordInMRSFromBOM"
                            value={data.RecordInMRSFromBOM}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1 ">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Direct Insert Record in GRN From Production Report :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="RecordInGrnFromProductionReport"
                            value={data.RecordInGrnFromProductionReport}
                            onChange={changeHandler}
                            required
                          >
                            <option value=""> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-sm-1 d-flex align-items-center">
                          <span className=" text-primary fs-6">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className=" row mb-1 ">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Production Using MIS:
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="ProductionUsingMis"
                            value={data.ProductionUsingMis}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-sm-1 d-flex align-items-center">
                          <span className=" text-primary fs-6">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className=" row mb-1 ">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Material Consumption Requird on Operation Group :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="MaterialConsumptionRequirdOnOperationGroup"
                            value={
                              data.MaterialConsumptionRequirdOnOperationGroup
                            }
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-sm-1 d-flex align-items-center">
                          <span className=" text-primary fs-6">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className=" row  mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Transfer Stock From Group In MIS :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="TransferStockFromGroupInMis"
                            value={data.TransferStockFromGroupInMis}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1 ">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Operation QC/QA Requird :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="OperationQcQa"
                            value={data.OperationQcQa}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1 ">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Direct Insert Record in Gate Pass From Finshed Goods :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="GatePassFromFinshedGoods"
                            value={data.GatePassFromFinshedGoods}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1 ">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Scrap Details Required on Last Operation Only :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="ScrapDetailsRequired"
                            value={data.ScrapDetailsRequired}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Auto Material Consumption On First Operation :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="AutoMaterialConsumption"
                            value={data.AutoMaterialConsumption}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-sm-1 d-flex align-items-center">
                          <span className=" text-primary fs-6">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Required Material Consumption On First Operation :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="RequiredMaterialConsumption"
                            value={data.RequiredMaterialConsumption}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-sm-1 d-flex align-items-center">
                          <span className=" text-primary fs-6">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Show Gross Weight In Packing List :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="ShowGrossWeight"
                            value={data.ShowGrossWeight}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Show Client Name When work Order Close In Packing List
                          :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="ShowClientName"
                            value={data.ShowClientName}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          {" "}
                          QC Testing By Login User :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="QcTestingByLoginUser"
                            value={data.QcTestingByLoginUser}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Quantity Calculate Based On AltQty :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select"
                            name="QuantityCalculateBasedOnAltQty"
                            value={data.QuantityCalculateBasedOnAltQty}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Sales and Purchase Show customer and Vendor Both :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="SalesAndPurchaseShow"
                            value={data.SalesAndPurchaseShow}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Production Not More Then Previous Operation :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="ProductionNotMoreThenPreviousOperation"
                            value={data.ProductionNotMoreThenPreviousOperation}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Production Report Alt Qty Calculation Based BOM
                          Operation Weight :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select"
                            name="ProductionReportAltQtyCalculation"
                            value={data.ProductionReportAltQtyCalculation}
                            onChange={changeHandler}
                            required
                          >
                            <option value=""> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-sm-1 d-flex align-items-center">
                          <span className="text-primary fs-5">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Production Planing Required :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="ProductionPlaningRequired"
                            value={data.ProductionPlaningRequired}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className=" row mb-1">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Weight Calculate In Production No Pcs :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="WeightCalculateInProductionNoPcs"
                            value={data.WeightCalculateInProductionNoPcs}
                            onChange={changeHandler}
                            required
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className=" col-sm-8 col-form-label fs-6  text-end">
                          Production Weight :
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <input
                            type="text"
                            className="form-control"
                            name="ProductionWeight"
                            value={data.ProductionWeight}
                            onChange={changeHandler}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="col-md-5 ">
                <fieldset className="mb-1">
                  <legend>Work Order Tolerance</legend>
                  <div className="row">
                    <div className="col-12">
                      <div className="row py-2">
                        <label className=" col-sm-4 col-form-label fs-6  text-end">
                          Tolerance :
                        </label>
                        <div className="col-sm-4 d-flex align-items-center gap-2">
                          <span className="fs-5">+</span>
                          <input
                            type="text"
                            className="form-control"
                            name="ToleranceFirstValue"
                            value={data.ToleranceFirstValue}
                            onChange={changeHandler}
                            required
                          />
                          <span className="fs-5">%</span>
                        </div>
                        <div className="col-sm-4 d-flex align-items-center gap-2">
                          <span className="fs-5">-</span>
                          <input
                            type="text"
                            className="form-control"
                            name="ToleranceSecondValue"
                            value={data.ToleranceSecondValue}
                            onChange={changeHandler}
                            required
                          />
                          <span className="fs-5">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mb-1">
                  <legend>Production QC Time Setting</legend>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-1 row">
                        <label className=" col-sm-5 col-form-label fs-6 text-center  ">
                          Start Time :
                        </label>
                        <div className="col-sm-5 d-flex align-items-center">
                          <input
                            type="time"
                            className="form-control form-control-sm"
                            name="StartTime"
                            value={data.StartTime}
                            onChange={changeHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className=" col-sm-5 col-form-label fs-6 text-center  ">
                          End Time :
                        </label>
                        <div className="col-sm-5 d-flex align-items-center">
                          <input
                            type="time"
                            className="form-control"
                            name="EndTime"
                            value={data.EndTime}
                            onChange={changeHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="my-1 row">
                        <label className=" col-sm-5 col-form-label fs-6 text-center">
                          Interval Time:
                        </label>
                        <div className="col-sm-3 d-flex align-items-center">
                          <input
                            type="number"
                            className="form-control form-control-sm"
                            name="IntervalTime"
                            value={data.IntervalTime}
                            onChange={changeHandler}
                            required
                          />
                        </div>
                        <div className="col-sm-2 d-flex align-items-center">
                          <span className="col-sm-1 fs-6">Min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Packing Setting</legend>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3 row">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Pack List Generate By Pack Dept :
                        </label>
                        <div className="col-sm-4 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="PackListGenerateByPackDept"
                            value={data.PackListGenerateByPackDept}
                            onChange={changeHandler}
                            required
                          >
                            <option > select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 mt-3 row">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Material Consumption In Packing :
                        </label>
                        <div className="col-sm-4 d-flex align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="MaterialConsumptionInPacking"
                            value={data.MaterialConsumptionInPacking}
                            onChange={changeHandler}
                            required
                            
                          >
                            <option > select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mb-1">
                  <legend>Operation Wise Stock Setting</legend>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2 row">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Operation Wise Production Stock:
                        </label>
                        <div className="col-sm-4 d-flex gap-1 align-items-center">
                          <select
                            className="form-select form-select-sm"
                            name="OperationWiseProductionStock"
                            value={data.OperationWiseProductionStock}
                            onChange={changeHandler}
                            required                            
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          <span className="text-primary fs-5">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className="mb-2 row">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Operation Wise Stock Movement Auto:
                        </label>
                        <div className="col-sm-4 d-flex align-items-center gap-1">
                          <select
                            className="form-select form-select-sm"
                            name="OperationWiseStockMovementAuto"
                            value={data.OperationWiseStockMovementAuto}
                            onChange={changeHandler}
                            required                            
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          <span className="text-primary fs-5">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className="mb-2 row">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          In Process QC Requird For Operation :
                        </label>
                        <div className="col-sm-4 d-flex align-items-center gap-1">
                          <select
                            className="form-select form-select-sm"
                            name="InProcessQcRequirdForOperation"
                            value={data.InProcessQcRequirdForOperation}
                            onChange={changeHandler}
                            required                            
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          <span className="text-primary fs-5">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className="mb-1 row">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Previous Stock Show Based On In Process QC :
                        </label>
                        <div className="col-sm-4 d-flex align-items-center gap-1">
                          <select
                            className="form-select form-select-sm"
                            name="PreviousStockShowBasedOnInProcessQc"
                            value={data.PreviousStockShowBasedOnInProcessQc}
                            onChange={changeHandler}
                            required                            
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          <span className="text-primary fs-5">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                      <div className="mb-1 row">
                        <label className="col-sm-8 col-form-label fs-6  text-end ">
                          Production Report Batch No System With Batch Tracking
                          :
                        </label>
                        <div className="col-sm-4 d-flex align-items-center gap-1">
                          <select
                            className="form-select form-select-sm"
                            name="ProductionReportBatchNoSystemWithBatchTracking"
                            value={data.ProductionReportBatchNoSystemWithBatchTracking}
                            onChange={changeHandler}
                            required                            
                          >
                            <option> select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          <span className="text-primary fs-5">
                            <FaInfoCircle />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mb-1">
                  <legend>Production From Job Work Setting</legend>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2 row">
                        <label className=" col-sm-7 col-form-label fs-6  text-end">
                          Job Work Default Machine:
                        </label>
                        <div className="col-sm-5 d-flex align-items-center">
                          <input
                            type="text"
                            className="form-control"
                            name="JobWorkDefaultMachine"
                            value={data.JobWorkDefaultMachine}
                            onChange={changeHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-2 row">
                        <label className=" col-sm-7 col-form-label fs-6  text-end">
                          Foundary Machine Category:
                        </label>
                        <div className="col-sm-5 d-flex align-items-center">
                          <input
                            type="text"
                            className="form-control"
                            name="FoundaryMachineCategory"
                            value={data.FoundaryMachineCategory}
                            onChange={changeHandler}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center align-items-center gap-3 btn-cont my-4 py-3">
                    <button
                      type="submit"
                      className="btn  update-btn border-secondary"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn  cancel-btn border-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductionSetting;
