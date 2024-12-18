import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className='footer-container'>
      <div>
      © 2024 Maryam Mughal. All Right Reserved.
      </div>
      <div>
        <Link className='footer-links' to="https://www.linkedin.com/in/maryam-rizwan-a53423341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" ><i className="fa-brands fa-linkedin"></i></Link>
        <Link className='footer-links' to="https://github.com/Maryam703"><i className="fa-brands fa-github"></i></Link>
        <Link className='footer-links' to="https://icloud.com/maryam.rizwan6@icloud.com"><i className="fa-solid fa-envelope"></i></Link>
      </div>
    </div>
  )
}

export default Footer
