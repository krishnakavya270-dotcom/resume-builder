import React, { useEffect, useRef } from 'react'
import { FaFileDownload } from 'react-icons/fa'
import Edit from '../Components/Edit.jsx'
import { IoDocumentText } from 'react-icons/io5'
import Preview from '../Components/Preview'
import { Link, useParams } from 'react-router-dom'
import { MdFileDownloadDone } from 'react-icons/md'
import { GrLinkPrevious } from 'react-icons/gr'
import { downloadResumeApi, viewResumeApi } from '../service/apiService'
import { useState } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

function View() {

const [resume,setResume]=useState()

const PreviewRef = useRef()


const {id}= useParams()
console.log(resume);

useEffect(()=>{
  getResumeDetails()
},[])

const getResumeDetails = async ()=>{
  const response = await viewResumeApi(id)
if(response.status===200){
 setResume(response.data)
}

  
}

const downloadCV=async()=>{

const previewTag=PreviewRef.current
const canvas = await html2canvas(previewTag)
canvas.toBlob(async(imgFile)=>{
  //create formdata to send file viva API
  const formData = new FormData()
  formData.append("file",imgFile)
  formData.append("upload_preset","my-resume")
  const result= await fetch("https://api.cloudinary.com/v1_1/ce88r6ga/image/upload",{
    method:"POST",
  body:formData
})
const serverData = await result.json()
const url=serverData.secure_url

generatePDF(url)


})

}


const generatePDF = async(resumeImg)=>{
 

 const pdf=new jsPDF()
const imageWidth=pdf.internal.pageSize.getWidth()
const imageHeight=pdf.internal.pageSize.getHeight()
pdf.addImage(resumeImg,"PNG",0,0,imageWidth,imageHeight)
const today=new Date()
const timeStamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
console.log(timeStamp);

const result=await downloadResumeApi({timeStamp,resumeImg,resumeId:resume.id,jobrole:resume.job})

if (result.status===201){
  //downloas cv
  pdf.save(`${resume.fullname}CV.pdf`)
}



//pdf.save("resume.pdf")

}

//
 // {
//time stamp
//resume id
//resumeimgurl
//jobrole
  //}

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navicon */}
<div className='d-flex justify-content-center align-items-center'>      
          {/* download */}
          <button onClick={downloadCV} style={{color:'#421c03'}} className='btn fs-5'><FaFileDownload/>Download</button>
          {/* edit */}
          <Edit resumeDetails={resume} setResumeDetails={setResume}/>
          {/* all resumes */}
          {/* <Link style={{color:'#421c03'}} to={'/all-resumes'} className='btn mx-2 fs-5'><IoDocumentText/>all Resume</Link> */}
          {/* download history */}
           {/* <Link style={{color:'#421c03'}} to={'/downloads'} className='btn mx-2 fs-5'><MdFileDownloadDone />Download History</Link> */}
          {/* back */}
           <Link style={{color:'#421c03'}} to={'/resume-details'} className='btn mx-2 fs-5'><GrLinkPrevious />Previous</Link>
       
</div> 
    <div ref={PreviewRef} className='p-5'>
      <Preview resumeDetails={resume} />
      </div> 
        </div>
        <div className="col-lg-2"></div>

      </div>
      
    </div>
  )
}

export default View