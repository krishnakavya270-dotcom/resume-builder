import React from 'react'
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
function Footer() {
  return (
    <footer style={{   backgroundColor: "#17365D", color: "#FFFFFF", padding: "30px 20px", textAlign: "center", marginTop: "40px" }} >
      <h4 style={{ fontWeight: "bold" }}>AI rBUILDER</h4>
      <p> Build your future with a professional resume. </p>

      <div style={{ margin: "15px 0" }}>
        <a href="mailto:yourmail@example.com" style={iconStyle}>  <FaEnvelope />  </a>
        <a href="tel:+910000000000" style={iconStyle}>  <FaPhone /> </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" style={iconStyle}><FaInstagram /> </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" style={iconStyle}>  <FaFacebook />  </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" style={iconStyle}>  <FaWhatsapp /></a>
      </div>
      <hr style={{ borderColor: "#FFFFFF", opacity: 0.4 }} />
      <small>
        © {new Date().getFullYear()} AI rBUILDER. All rights reserved.
      </small>
    </footer>
  )
}
const iconStyle = {
  color: "#FFFFFF",
  fontSize: "22px",
  margin: "0 12px",
  textDecoration: "none"
}
export default Footer
