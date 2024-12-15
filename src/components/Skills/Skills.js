import React from 'react'
import "./Skills.css"

export default function Skills() {

    const Frontend = [
        {
            icon : <i className="fa-brands fa-react"></i>,
            name : "React"
        },
        {
            icon : <i className="fa-brands fa-js"></i>,
            name : "JavaScript"
        },
        {
            icon : <i className="fa-brands fa-react"></i>,
            name : "Context API"
        },
        {
            icon : <i className="fa-brands fa-react"></i>,
            name : "Reducx & Reducx Toolkit"
        },
        {
            icon : <i className="fa-brands fa-react"></i>,
            name : "State Management"
        },
        {
            icon : <i className="fa-solid fa-border-top-left"></i>,
            name : "CSS"
        }
    ]

    const Backend = [
        {
            icon : <i className="fa-solid fa-leaf"></i>,
            name : "MongoDB"
        },
        {
            icon : <i className="fa-solid fa-leaf"></i>,
            name : "Mongoose"
        },
        {
            icon : <i className="fa-brands fa-internet-explorer"></i>,
            name : "Express"
        },
        {
            icon : <i className="fa-brands fa-node"></i>,
            name : "Node js"
        },
        {
            icon : <i className="fa-solid fa-fire"></i>,
            name : "FireBase"
        }
    ]

    const APIDevelopment = [
        {
            icon : <i className="fa-solid fa-globe"></i>,
            name : "Rest API's"
        },
        {
            icon : <i className="fa-solid fa-user"></i>,
            name : "Authentications"
        },
        {
            icon : <i className="fa-brands fa-git"></i>,
            name : "Git"
        },
        {
            icon : <i className="fa-brands fa-github"></i>,
            name : "GitHub"
        }
    ]

  return (
    <div className='skills-container'>
      <h1>Skills</h1>

      <div className='skills-box-container'>
      <div className='skills-box'>
        <h1>Frontend Tools</h1>
        {
            Frontend && Frontend.map((item) => {
                return (
                    <div className='skill-inner-box'>
                        <div className='skill-inner-box-icon'>{item.icon}</div>
                        <div>{item.name}</div>
                    </div>
                )
            })
        }
      </div>

      <div className='skills-box'>
        <h1>Backend</h1>
        {
            Backend && Backend.map((item) => {
                return (
                    <div className='skill-inner-box'>
                        <div className='skill-inner-box-icon'>{item.icon}</div>
                        <div>{item.name}</div>
                    </div>
                )
            })
        }
      </div>

      <div className='skills-box'>
        <h1>API Development & Controls</h1>
        {
            APIDevelopment && APIDevelopment.map((item) => {
                return (
                    <div className='skill-inner-box'>
                        <div className='skill-inner-box-icon'>{item.icon}</div>
                        <div>{item.name}</div>
                    </div>
                )
            })
        }
      </div>
      </div>
    </div>
  )
}
