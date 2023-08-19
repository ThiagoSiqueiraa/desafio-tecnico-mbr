import React from 'react'
import './Loader.css'
function PageLoader() {
  return (
    <div className={'loading'}>
      <div className={'loader-container'}>
        <div className={`dot dot-1`}></div>
        <div className={`dot dot-2`}></div>
        <div className={`dot dot-3`}></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default PageLoader