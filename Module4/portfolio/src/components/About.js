import React from 'react'
import me from './assets/me.jpg'
import resume from './assets/resume.pdf'



function About(props){
    return (
        <div className="content about">
            <div className="aboutContainer">
                <img className="me" src={me} alt="A ravishing young gentleman, who makes his own lucky by working hard."></img>
                <p>My name is Kaydon, for as long as I can remember I have enjoyed taking things apart and putting them back together. I've always had a curiosity of how things work, and the process behind how they were thought together. Ever since I got my first paycheck I've been fascinated with computers, how they work, how they go together, the software that actually runs everything, and how that software is built.</p>
                <br />
                <p>I started working at a young age, and I still haven't stopped. Growing up with positive role models to look up to I've developed a strong work ethic, and typically won't stop something until I finish it. I also am a competitive person, pushing myself against others is something that has helped me thrive in whatever environment I end up in. I enjoy being part of a team, the culture of it, the competition of it, and the success you always have because of everyone lifting each other up. As they say, "Teamwork makes the dream work"</p>
            </div>
                <div className="aboutContainer downloadContainer">
                    <a href={resume} download='KDResume' className='downloadResume'>Download Resume</a>
                </div>
            
        </div>
    )
}

export default About