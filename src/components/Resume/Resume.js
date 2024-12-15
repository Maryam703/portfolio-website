import React from 'react'
import "./Resume.css"

function Resume() {
  return (
    <div className='resume-container'> 
      <div className='resume-img-container'>
        <embed src='/images/resume.pdf' type="application/pdf" />
      </div>
    </div>
  )
}

export default Resume
