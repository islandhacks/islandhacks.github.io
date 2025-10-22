import React from 'react'
import Socials from './Socials'

const PreLaunch = () => {
  return (
    <section className="">
            <div className="flex items-center justify-center h-full w-full mt-8">

                <div className=" flex flex-col items-center justify-center p-4">
                    <span className="text-5xl md:text-9xl text-amber-400 w-180 text-center font-bold tracking-wider">IslandHacks</span>
                    
                    <span className="leading-snug bg-gradient-to-r text-2xl md:text-3xl font-medium from-green-500 to-green-600 bg-clip-text text-transparent">We're coming back for 2025! Stay Tuned.</span>
                   
                
                   <a href='https://docs.google.com/forms/d/e/1FAIpQLSdZC2AhL2U4b2TkLVWLPDN0LHFCKjsQwCTKNPjMFtKbJOd7JQ/viewform?usp=dialog'>
                      <button className="w-64 md:w-96 p-3 bg-amber-100 border-amber-400 border-2 rounded-xl text-xl font-medium text-amber-400 my-8 hover:cursor-pointer hover:opacity-50 transition-all">Notify Me</button>
                    </a>

                    <Socials/>
                    
                </div>
            </div>
        </section>
  )
}

export default PreLaunch