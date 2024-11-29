import React, { useContext, useEffect, useState } from 'react'
import { FaInfoCircle } from "react-icons/fa";
import NavTabs from '../Navbar/NavTabs'
import { toast } from 'react-toastify';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';

const CostingSetting = () => {
    const {url} = useContext(StoreContext)
    const[data,setData] = useState({
        BasicScrap :"",
        ExtrusionConversionRate :"",
        Recovery:"",
        Profit :"",
        Freight :"",

        ContractReview:"",

        PackingStockAvaibility :"",

        MultiplePcsRate:"",

        RawMaterialsMrs:"",
        QuotationWithMold :"",
        QuotationWithMachine :""
    });

    const handlleChange = (event)=>{
        const {name,value} = event.target;
        setData({...data,[name]:value})
    };

    const handleFormSubmit = async(event)=>{
        event.preventDefault();
        let payload ={
        BasicScrap :Number(data.BasicScrap),
        ExtrusionConversionRate :Number(data.ExtrusionConversionRate),
        Recovery:Number(data.Recovery),
        Profit :Number(data.Profit),
        Freight :Number(data.Freight),

        ContractReview:data.ContractReview,

        PackingStockAvaibility :data.PackingStockAvaibility,

        MultiplePcsRate:data.MultiplePcsRate,

        RawMaterialsMrs:data.RawMaterialsMrs,
        QuotationWithMold :data.QuotationWithMold,
        QuotationWithMachine :data.QuotationWithMachine
        }

        const response = await axios.post(`${url}/api/costingsetting/add`,payload);

        if (response.data.success) {
            setData({
                BasicScrap :"",
                ExtrusionConversionRate :"",
                Recovery:"",
                Profit :"",
                Freight :"",
        
                ContractReview:"",
        
                PackingStockAvaibility :"",
        
                MultiplePcsRate:"",
        
                RawMaterialsMrs:"",
                QuotationWithMold :"",
                QuotationWithMachine :""
            });
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        } 
    }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 px-0'>
        <h4 className="company-title px-3 fs-5 mt-2">Company Details</h4>
          <NavTabs/>
        </div>
      </div>

      <div className="row">
            <div className="col-md-12">
                <form action="" className="" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <legend>Costing Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label  className="col-sm-6 col-form-label  text-end ">Basic Scrap :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name='BasicScrap'
                                                    value={data.BasicScrap}
                                                    onChange={handlleChange}
                                                    required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                                <span className="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label  className="col-sm-6 col-form-label  text-end ">Extrusion
                                                Conversion Rate :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                    type="number"
                                                    className="form-control"
                                                    name='ExtrusionConversionRate'
                                                    value={data.ExtrusionConversionRate}
                                                    onChange={handlleChange}
                                                    required 
                                                />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                                <span className="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-6 col-form-label text-end"
                                            data-toggle="tooltip">Recovery :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="number"
                                                className="form-control"
                                                name='Recovery'
                                                value={data.Recovery}
                                                onChange={handlleChange}
                                                required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center gap-1">
                                                <span className="fs-5">(Rs.)</span>
                                                <span className='fs-5 text-primary'><FaInfoCircle /></span>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-6 col-form-label text-end ">Profit :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="number" 
                                                className="form-control"
                                                name='Profit'
                                                value={data.Profit}
                                                onChange={handlleChange}
                                                required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                                <span className="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-6 col-form-label text-end ">Freight :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <input 
                                                type="number"
                                                className="form-control"
                                                name='Freight'
                                                value={data.Freight}
                                                onChange={handlleChange}
                                                required />
                                            </div>
                                            <div className="col-sm-2 d-flex align-items-center">
                                                <span className="fs-5">(Rs.)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="mt-3">
                                <legend>Contract Review Setting</legend>
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-9 col-form-label text-end">Default
                                                Contract
                                                Review Diolog On Save :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='ContractReview' value={data.ContractReview} onChange={handlleChange} required >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
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
                                            <label className="col-sm-9 col-form-label text-end">Create
                                                Packing
                                                From Stock Avaibility :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='PackingStockAvaibility' value={data.PackingStockAvaibility} onChange={handlleChange} required >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Multiple PCS Rate Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-9 col-form-label text-end">Multiple
                                                PCS
                                                Rate In Quotation :</label>
                                            <div className="col-sm-3 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='MultiplePcsRate' value={data.MultiplePcsRate} onChange={handlleChange}  required >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-6 ">
                            <fieldset>
                                <legend>Finance Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-9 col-form-label text-end">Create
                                                Raw
                                                Materials MRS From Sales Order:</label>
                                            <div className="col-sm-3 d-flex align-items-center gap-1">
                                                <select className="form-select form-select-sm" name='RawMaterialsMrs' value={data.RawMaterialsMrs} onChange={handlleChange} required >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                                <span className='fs-5 text-primary'><FaInfoCircle/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Quotation Setting</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Quotation
                                                With
                                                Mold :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='QuotationWithMold' value={data.QuotationWithMold} onChange={handlleChange} required >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-8 col-form-label text-end">Quotation
                                                With
                                                Machine :</label>
                                            <div className="col-sm-4 d-flex align-items-center">
                                                <select className="form-select form-select-sm" name='QuotationWithMachine' value={data.QuotationWithMachine} onChange={handlleChange} required >
                                                    <option> select</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>  
                        </div>
                    </div>
                    <div className=" my-3 d-flex justify-content-end align-items-center">
                        <button type="submit" className="btn border-secondary btn-next py-1 fs-5 ">Save</button>
                    </div>
                    <div className=" my-3 d-flex justify-content-end align-items-center">
                        <button type="button" className="btn border-secondary btn-next py-1 fs-5 ">Next</button>
                    </div>
                </form>
            </div>
        </div>




    </div>
  )
}

export default CostingSetting