import React, { useEffect, useState } from 'react'
import './secondsection.css'

function SecondSection() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        function scrollAnimation() {
            const animationPoint = 300
            const windowHeight = window.innerHeight
            const secondSection = document.querySelector(".second-section")

            var secondSectionTop = secondSection.getBoundingClientRect().top
            
            if (secondSectionTop < windowHeight - animationPoint) {
                setActive(true)
            }
        }
        scrollAnimation()
        window.addEventListener('scroll', scrollAnimation)
    },[])

    return (
    <div className={`second-section ${active && "active"}`} id="second-section">
        <div className="text-content">
            <div className="text text1">
                <h1>How i <span>Started</span></h1>
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, quasi ratione vero eum molestias natus velit consectetur, excepturi optio earum architecto, iusto expedita assumenda. Dolorum magni labore perspiciatis animi eius!</h2>
            </div>
            <div className="text text2">
                <h1>
                    <span>Experiencess</span> so far
                </h1>
                <h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quisquam facilis commodi quaerat architecto voluptates nobis possimus modi nam tempora? Dicta, id! Non, sequi nesciunt? Animi possimus ratione repudiandae laborum?
                </h2>
            </div>
        </div>
        <div className="progress">
            <div className="container" style={{"--x" : 1}}>
                <h1>1</h1>
                <span>Lorem</span>
            </div>
            <div className="container" style={{"--x" : 2}}>
                <h1>2</h1>
                <span>Lorem</span>
            </div>
            <div className="container" style={{"--x" : 3}}>
                <h1>3</h1>
                <span>Lorem</span>
            </div>
        </div>
    </div>
  )
}

export default SecondSection