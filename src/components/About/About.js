import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div className='about-container-card'>
            <h1>About Me</h1>
            <div className='about-img-container'>
                <div>
                    <img className='about-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPm4zNKBSI1kgalpAibXWT1FAoYJMs7RKNnocndED6FJTnxU6UTR8mmMsWOOJ3HeITXFE&usqp=CAU' alt='profile' />
                </div>
            </div>

            <div className='about-detail'>
                <p>
                    Hello! I'm a passionate Full Stack Developer
                    dedicated to crafting innovative, user-centric web applications.
                    With a strong foundation in React.js, Node.js, Mongoose and MongoDB, I excel at solving complex problems with creative solutions.
                </p>
                <p>
                    Whether I'm tackling frontend development or backend architecture, my goal remains the same: to deliver intuitive, scalable, and impactful experiences that make a real difference.
                </p>
            </div>
        </div>
    )
}
