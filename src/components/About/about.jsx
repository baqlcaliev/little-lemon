import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = ()=> {
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Little Lemon</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About me information" />
                    </div>
                </div>
            

            <div className="about__content">
                <div className="about__cards">
                    <article className= "about__card">
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>10+ Years Experience</small>
                    </article>
                    <article className= "about__card">
                        <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small>2000+ Worldwide</small>
                    </article>
                    <article className= "about__card">
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Micheline Stars</h5>
                        <small>5 Completed</small>
                    </article>
                </div>
                
                <p>
                At Little Lemon Restaurant we know what you want.
                </p>
                <a href="#contact" className='btn btn-primary'>Lets Talk</a>
            </div>
            </div>
        </section>
    )
}

export default About