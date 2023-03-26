import React from 'react'
import './contact.css'

import { BsWhatsapp, BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs'

function Contact() {
  return (
    <div className="contact" id="contact">
        <h1>
            <span>Contact </span>
            <b> me</b>
        </h1>
        <div className="socials">
            <div className="icon" style={{'--c':"#00ff00"}}>
                <BsWhatsapp className='social-icons'/>
                <div className="tooltip">Whatsapp</div>
            </div>

            <div className="icon" style={{'--c':"#1d3fff"}}>
                <BsFacebook className='social-icons'/>
                <div className="tooltip">Facebook</div>
            </div>

            <div className="icon" style={{'--c':"#ff5cff"}}>
                <BsInstagram className='social-icons'/>
                <div className="tooltip">Instagram</div>
            </div>

            <div className="icon" style={{'--c':"#ff0000"}}>
                <BsYoutube className='social-icons'/>
                <div className="tooltip">Youtube</div>
            </div>

            <div className="icon" style={{'--c':"#6abef3"}}>
                <BsTwitter className='social-icons'/>
                <div className="tooltip">Twitter</div>
            </div>
        </div>
    </div>
  )
}

export default Contact