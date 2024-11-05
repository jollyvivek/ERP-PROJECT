import React from 'react'

const ImportPackingBom = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
		<div className='col-md-12 px-3'>
			<div className=' mt-3 d-flex justify-content-between'>
			<h5>Import Packing BOM </h5>
			<div><input type="text" className='form-control' /></div>
			</div>
			<div className='row mt-3'>
				<div className='col-md-10 offset-1 border rounded-3 py-3 mt-3'>
					<form action="">
						<div className='row '>
							<div className='col-md-3 d-flex justify-content-center align-items-center '>
								<label htmlFor="BrowseFile" className='border rounded-3 border-primary px-2 py-1 fs-6 cursor'>Browse File</label>
								<input id='BrowseFile' type="file" hidden />
							</div>
							<div className='col-md-6'>
								<div className='row'>
									<label htmlFor="" className='col-md-4'>Sheet Name</label>
									<div className='col-md-8'>
										<input type="text" className='form-control' />
									</div>
								</div>
								<div className='row mt-2'>
									<label htmlFor="" className='col-md-4'>File Path</label>
									<div className='col-md-8'>
										<input type="text" className='form-control' />
									</div>
								</div>
							</div>
							<div className='col-md-3 d-flex justify-content-center align-items-center'>
								<label htmlFor="InsertRecord" className='border rounded-3 border-primary px-2 py-1 fs-6 cursor'>Insert Record</label>
								<input id='InsertRecord' type="file" hidden />
							</div>				
						</div>
					</form>
				</div>
			</div>
			<div className='mt-5 border rounded-1 border-secondary h-100 d-flex align-items-center'>
				<p className='d-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore,
					sequi dolorem iure sit sapiente corrupti rem autem asperiores vitae odit repellendus 
					blanditiis culpa excepturi cupiditate doloremque sint maxime nemo ratione vel in nesciunt.
					 Quis ea temporibus tempora fugit alias provident aspernatur a voluptatum animi labore rerum, 
					 ullam expedita quisquam.
				</p>
			</div>
		</div>
        </div>
    
    </div>
  )
}

export default ImportPackingBom