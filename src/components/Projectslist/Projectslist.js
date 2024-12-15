import React from 'react'
import "./Projectslist.css"
import { Link } from 'react-router-dom'

function Projectslist() {

    const Projects = [
        {
            image: "/images/foodpanda.png",
            title: "Foodpanda App",
            link: "https://github.com/Maryam703/foodpanda-app",
            link2: "https://github.com/Maryam703/foodpanda-backend",
            description: "The foodpanda app is a food ordering and delivery platform that connects users with local restaurants and shops. Users can browse menus, place orders, and pay for food delivery. Foodpanda offers a variety of restaurants, including big brands and local favorites."
        },
        {
            image: "/images/ludo.png",
            title: "Ludo Game",
            link: "https://github.com/Maryam703/ludo-game",
            description: " A form of structured play or activity that is taken freely by players for their own enjoyment and often entertainment provided same rules as original one."
        },
        {
            image: "/images/ecom.png",
            title: "ECOMMERCE",
            link: "https://github.com/Maryam703/e-com",
            description: "An e-commerce app, also known as a mobile commerce app, is a software program that allows users to buy and sell goods or services online."
        },
        {
            image: "/images/whatsapp.png",
            title: "What's App Clone",
            link: "https://github.com/Maryam703/whatsapp-clone",
            description: "A social media app that allows users to send as receive messages, photos, videos, documents as well."
        },
        {
            image: "/images/youtube-video.png",
            title: "Youtube Clone",
            link: "https://github.com/Maryam703/youtube-clone",
            description: "A social media and video-sharing platform that allows users to watch and upload videos on their mobile devices."
        },
        {
            image: "/images/todolist.png",
            title: "Todo List",
            link: "https://github.com/Maryam703/Todo",
            description: "A to-do list is tasks that need to be completed or things that need to be done, usually organized by priority"
        }
    ]

    return (
        <div className='projectlist-container'>
            <h1>My Projects</h1>
            <div className='projectlist-projects-container'>
                {Projects && Projects.map((project) => {
                    return (
                        <div className='projectlist-container-box'>
                            <div className='projectlist-box-img-container'>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className='projectlist-box-title'>{project.title}</div>
                            <div  className='projectlist-box-description'>{project.description}</div>
                            <div className='projectlist-box-link-container'><Link className='projectlist-box-link' to={project.link}>Visit repository</Link></div>
                            {project?.link2 && <div className='projectlist-box-link-container'><Link className='projectlist-box-link' to={project.link2}>Visit repository (Backend)</Link></div>}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Projectslist
