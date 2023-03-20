import React from 'react'
import './home.css'
import bg from '../props/photo-nft.jpg'

function Home() {
  return (
    <div className="home" id="Home">
        <div className="bg">
            <img src={bg} alt="" />
        </div>
        <div className="content">
            <h1>
                <c>eXplore</c>
                my
                <d>Portfolio</d>
                <br/>

            </h1>
            <a href="#collection" className='show-me'>
                <span>Download my CV</span>
            </a>
        </div>
    </div>
  )
}

export default Home