import React, { PropsWithChildren } from 'react'

function HeroOrbit({children, size, duration, rotate}: PropsWithChildren<{size: number, duration: number, rotate:number}>) {
  return (
    <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div  style={{
              height: `${size}px`,
              width: `${size}px`,
              transform: `rotate(${rotate}deg)`,
              animationDuration: `${duration}s`
            }} className="  animate-spin ">
              <div className="inline-flex animate-spin [animation-duration:4s]">
              {children}
              </div>
            </div>
          </div>
  )
}

export default HeroOrbit