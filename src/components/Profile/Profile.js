import React from 'react'
import "./Profile.css"
import { useNavigate, Link } from 'react-router-dom'

function Profile() {
  const naviate = useNavigate()

  const openResume = () => {
    naviate("/resume")
  }

  return (
    <div className='profile-container'>
       <div className='profile-container-card'>
        <h1>Hi! I'm Maryam Mughal</h1>
        <h4>Full Stack Develpor</h4>
        <div className='profile-container-btn'> <Link className='profile-container-btn-link' to="https://github.com/Maryam703/">View My Projects | Github Repositories</Link> </div>
        <div className='profile-container-btn' onClick={openResume}> Download Resume </div>
      </div>
    </div>
  )
}

export default Profile
