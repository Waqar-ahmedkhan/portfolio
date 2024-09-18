import React, { PropsWithChildren } from 'react'

function HeroOrbit({children, size, duration}: PropsWithChildren<{size: number, duration: number}>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div  style={{
              height: `${size}px`,
              width: `${size}px`,
              animationDuration: `${duration}s`
            }} className="  animate-spin ">
              <div className="inline-flex animate-spin [animation-duration:5s]">
              {children}
              </div>
            </div>
          </div>
  )
}

export default HeroOrbit