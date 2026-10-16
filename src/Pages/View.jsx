import React from 'react'
import { FaDownload } from "react-icons/fa";
import Edit from '../Components/Edit'
import { Link } from 'react-router-dom';
import { IoDocumentText } from "react-icons/io5";
import { FaBackward } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import Preview from '../Components/Preview';

function View() {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
            {/* navigation icons */}
              <div className='d-flex justify-content-center align-items-center'>
            {/* download */}
            <button className='btn mx-2'><FaDownload />Download CV</button>
            {/* edit */}
            <Edit/>

            {/* all resumes */}
            <Link style={{color:'#421c03'}} to={'/all-resumes'} className='btn mx-2'>  <IoDocumentText size={20} />  All Resumes</Link>
            {/* download history */}
             <Link style={{color:'#421c03'}} to={'/downloads'} className='btn mx-2'><IoMdRefresh size={20}/>  Download History</Link>
            {/* back */}
             <Link style={{color:'#421c03'}} to={'/resume-details'} className='btn mx-2'> <FaBackward size={20} />  Previous</Link>
            
       </div>
       <div className='p-5'>
        <Preview/>

       </div>
        </div>
        <div className="col-lg-2"></div>

      </div>
      
    </div>
  )
}

export default View
