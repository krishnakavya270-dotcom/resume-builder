import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
function Download() {
  return (
    <div className='container  my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='fs-1'>Download Resume History</h3>
        <Link to={'/resume-details'}><IoMdArrowBack />Back</Link>
      </div>
      <div className='row my-5'>
        <div className='col-lg-4'>
          <div style={{ height: "300px" }} className='rounded shadow p-3'>
            <h6>Review At: Time Stamp</h6>
            <div className='mt-4 text-center'>
              <Link to={'/resume/:id'}><img style={{ height: "230px" }} className='w-50' src="https://tse4.mm.bing.net/th/id/OIP.zsuU8XswcDF8MpJFxaX5lQHaKa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="resume image" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Download
