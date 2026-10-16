import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Resume() {
  return (
    <div>
      <div style={{ height: "100vh" }} className='my-5'>
        <h1 className='text-center mt-5'>Create An ATS Resume Friendly In Minutes With AI</h1>

        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-4 rounded shadow text-center p-5">
              <IoDocumentTextSharp className='fs-1 mb-3 text-primary' />
              <h4>Add Your Details</h4>
              <p>Our AI Will Generate Skills & Summary</p>
              <h5>Step 1</h5>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 rounded shadow text-center p-5">
              <FaFileDownload className='fs-1 mb-3 text-success' />
              <h4>Download Your Resume</h4>
              <p>Download PDF And Start Applying</p>
              <h5>Step 2</h5>

            </div>
            <div className="col-lg-1"></div>
          </div>
       
        </div>
          <div className='text-center mt-5'> 
            <Link  to={'/resume-details'}style={{ backgroundColor: "#9b7856" }} className='btn text-light mt-5 rounded'>LET ' S START</Link>
            </div>

      </div>
    </div>
  )
}

export default Resume
