import React from 'react'
import { useNavigate } from 'react-router-dom'

const MailHistory = () => {
    const navigate = useNavigate()
  return (
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
        <div className='row mt-3'>
            <div className='col-md-12 bg-info h-75 border'>
               <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi magnam unde? Repellendus,
                nisi fuga voluptate autem provident animi assumenda cum commodi facere officia accusantium aliquam
                illum tempora vitae esse possimus voluptates excepturi deleniti reprehenderit eius natus. Eaque magni 
                cum quos nobis unde, quibusdam commodi architecto reiciendis iste beatae perferendis atque veritatis, 
                sint exercitationem aperiam harum, dicta deserunt sapiente! Iste necessitatibus excepturi nisi error,
                eligendi asperiores a qui, dolorem natus provident blanditiis, ab tempora dignissimos tempore? Quam,
                quibusdam officia repellendus non sed animi consequuntur in error illum eius sequi quidem laborum dolor
                expedita optio, qui, ad reiciendis est ipsa beatae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi magnam unde? Repellendus,
                nisi fuga voluptate autem provident animi assumenda cum commodi facere officia accusantium aliquam
                illum tempora vitae esse possimus voluptates excepturi deleniti reprehenderit eius natus. Eaque magni 
                cum quos nobis unde, quibusdam commodi architecto reiciendis iste beatae perferendis atque veritatis, 
                sint exercitationem aperiam harum, dicta deserunt sapiente! Iste necessitatibus excepturi nisi error,
                eligendi asperiores a qui, dolorem natus provident blanditiis, ab tempora dignissimos tempore? Quam,
                quibusdam officia repellendus non sed animi consequuntur in error illum eius sequi quidem laborum dolor
                expedita optio, qui, ad reiciendis est ipsa beatae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi magnam unde? Repellendus,
                nisi fuga voluptate autem provident animi assumenda cum commodi facere officia accusantium aliquam
                illum tempora vitae esse possimus voluptates excepturi deleniti reprehenderit eius natus. Eaque magni 
                cum quos nobis unde, quibusdam commodi architecto reiciendis iste beatae perferendis atque veritatis, 
                sint exercitationem aperiam harum, dicta deserunt sapiente! Iste necessitatibus excepturi nisi error,
                eligendi asperiores a qui, dolorem natus provident blanditiis, ab tempora dignissimos tempore? Quam,
                quibusdam officia repellendus non sed animi consequuntur in error illum eius sequi quidem laborum dolor
                expedita optio, qui, ad reiciendis est ipsa beatae.
                </p>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-12 d-flex justify-content-end gap-2'>
                <button className='btn border-secondary' onClick={()=>alert("View Report Call")} >View Report</button>
                <button className='btn border-secondary' onClick={()=>alert("Export Excel Call")} >Export Excel</button>
                <button type='button' className='btn border-secondary' onClick={()=>navigate('/')}>Cancel</button>
            </div>
        </div>



    </div>
  )
}

export default MailHistory