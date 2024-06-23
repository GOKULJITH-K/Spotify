import React from 'react'
import './connect.css'
import email_icon from '../../assets/email-icon.png'
import call_icon from '../../assets/call.png'
import website from '../../assets/website-icon.png'

const Connect = () => {
  return (
    <div className='contact'>
        <h1>Let's Talk</h1>
        <div className="contact-align">
            <div className="contact-left">
                <p className='contact-text'>
                    I'm currently avaliable to take on new projects,
                    so feel free to send me  a message about anything that you want me to work on. You can contact  anytime.
                </p>
                <p><img src={email_icon} className='icons' alt=''/> gokuljithk@gmail.com</p>
                <p><img src={call_icon} className='icons' alt=''/>9447140767</p>
                <p><img src={website} className='icons' alt=''/>gokuljithk.in</p>
            </div>
            <div className="contact-right">
                <form action="">
                    <p>Full name :</p>
                    <input type='text' placeholder='Full name' />
                    <p>Email :</p>
                    <input type='email' placeholder='Email' />
                    <p>Your message :</p>
                    <textarea rows={6} placeholder='Message'></textarea>
                    <button className='btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
        <div className="footer">
            <div className="footer-first">
                <div className="footer-left">
                    <h4>GOKULJITH K</h4>
                    <p>I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
                </div>
                <div className="footer-right">
                        <input type='text' placeholder='Enter you email' />
                        <a>SUBSCRIBE</a>
                </div>
            </div>
            <hr/>
            <div className="footer-second">
                    <div className="footer-second1">
                        <p>Read © 2023 Alex Bennett. All rights reserved.</p>
                    </div>
                    <div className="footer-second2">
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Connect