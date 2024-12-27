import React from 'react'
import "./Projectslist.css"
import { Link } from 'react-router-dom'

function Projectslist() {

    const Projects = [
        {
            image: "/images/foodpanda.png",
            title: "Foodpanda App",
            link: "https://foodpanda-app-rouge.vercel.app/",
            description: "The foodpanda app is a food ordering and delivery platform that connects users with local restaurants and shops. Users can browse menus, place orders, and pay for food delivery. Foodpanda offers a variety of restaurants, including big brands and local favorites."
        },
        {
            image: "/images/ludo.png",
            title: "Ludo Game",
            link: "https://ludo-game-pearl.vercel.app/",
            description: " A form of structured play or activity that is taken freely by players for their own enjoyment and often entertainment provided same rules as original one."
        },
        {
            image: "/images/ecom.png",
            title: "ECOMMERCE",
            link: "https://e-pze8hqa6d-maryam703s-projects.vercel.app/",
            description: "An e-commerce app, also known as a mobile commerce app, is a software program that allows users to buy and sell goods or services online."
        },
        {
            image: "/images/whatsapp.png",
            title: "What's App Clone",
            link: "https://whatsapp-clone-chi-eight.vercel.app/register",
            description: "A social media app that allows users to send as receive messages, photos, videos, documents as well."
        },
        {
            image: "/images/youtube-video.png",
            title: "Youtube Clone",
            link: "https://youtube-clone-beta-nine-83.vercel.app/",
            description: "A social media and video-sharing platform that allows users to watch and upload videos on their mobile devices. Login email: user@gmail.com pass: 123456"
        },
        {
            image: "/images/todolist.png",
            title: "Todo List",
            link: "https://todo-gamma-indol-16.vercel.app/",
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
                            <div className='projectlist-box-description'>{project.description}</div>
                            <div className='projectlist-box-link-container'><Link className='projectlist-box-link' to={project.link}>Visit</Link></div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Projectslist
