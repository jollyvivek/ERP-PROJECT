import React from 'react'
import { useNavigate } from 'react-router-dom'

const MailHistory = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='d-flex justify-content-between mt-2 px-2'>
                    <h5>Mail History</h5>
                    <div className='row'>
                        <label className='col-sm-4 fs-5 '>Search :</label>
                        <input type="text" className='col-sm-8 border border-secondary' />
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    {/* empty box */}
        <div className='bg-info mt-1' style={{height:"450px"}}>
        </div>
    {/*bottom button  */}
        <div className='container-fluid'>
        <div className='row mt-2'>
            <div className='col-md-12 d-flex justify-content-end gap-2'>
                <button className='btn border-secondary' onClick={()=>alert("View Report Call")} >View Report</button>
                <button className='btn border-secondary' onClick={()=>alert("Export Excel Call")} >Export Excel</button>
                <button type='button' className='btn border-secondary' onClick={()=>navigate('/')}>Cancel</button>
            </div>
        </div>
        </div>
    </>

  )
}

export default MailHistory