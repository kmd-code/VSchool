import React from 'react'
import resume from './assets/resume.pdf'

function Contact(props){
    return (
        <div className="content contact">
            <div className="contactContainer">
                <h2>If you'd like to get a hold of me, send me an email!</h2>
                <h3>duvall.kaydon@gmail.com</h3>
                <h2>I'm also available on Facebook, and LinkedIn</h2>
            </div>
            <div className="aboutContainer downloadContainer">
                    <a href={resume} download='KDResume' className='downloadResume'>Download Resume</a>
            </div>
        </div>
    )
}

export default Contact