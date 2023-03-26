import React, {useEffect, useState} from 'react'
import './collection.css'

function Collection() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300
      const windowHeight = window.innerHeight
      const collection = document.querySelector(".collection")
      var collecton_top = collection.getBoundingClientRect().top
      if (collecton_top < windowHeight - animationPoint) {
        setActive(true)
      }
    }

    scrollAnimation()
    window.addEventListener("scroll", scrollAnimation)
  }, [])

  return (
    <div className={`collection ${active && "active"}`} id="collection">
        <h1>my <span>PROJECT</span> collection</h1>
        <div className="collections-container">
            <div className="cl-row row1">
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
            </div>
            <div className="cl-row row2">
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
            </div>
            <div className="cl-row row3">
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
            </div>
            <div className="cl-row row4">
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
            </div>
        </div>
    </div>
  )
}

export default Collection