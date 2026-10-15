import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div style={{ backgroundColor: 'black', height: "300px" }} className='container-fluid text-light p-5'>
      <div className='row'>
        <div className="col-lg-4">
          <h4 className='mb-3'>AI rBUILDER</h4>
          <p style={{textAlign:"justify"}}>An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 mt-3">
          <h4>Contact Us</h4>
          <p>  <MdEmail />  resumebuilder1@gmail.com</p>
          <p> <FaPhone />  98897675656</p>
          <h4>Connet With Us</h4>
          <div className='fs-5 d-flex gap-3'>
            < FaInstagram />
            < FaFacebook />
            < FaWhatsapp />
          </div>
        </div>
      </div>
      <h4 className='text-center mt-2'>Designed & built with ❤️ using React</h4>
    </div>
  )
}
export default Footer
