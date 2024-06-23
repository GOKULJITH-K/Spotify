import React from 'react'
import './About.css'
import profile_pic from '../../assets/profile pic.jpg'

const About = () => {
  return (
    
    <div className='about'>
    <h1>About me</h1>
        <div className="about-align">
            <div className="about-left">
                <img className='profile_pic' src={profile_pic} alt='' /> 
            </div>
            <div className="about-right">
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
                </p>
               
            </div>
        </div>
        <div className="summary">
            <div className="summary-element">
                <h4>1+</h4>
                <p>Years of experience</p>
            </div>
            <div className="summary-element">
                <h4>01</h4>
                <p>IEEE Publication</p>
            </div>
            <div className="summary-element">
                <h4>5+</h4>
                <p>Projects completed</p>
            </div>
            <div className="summary-element">
                <h4>2+</h4>
                <p>Certifications earned</p>
            </div>
        </div>
    </div>
  )
}

export default About