import React from 'react'
import favicon from '/src/assets/favicon.png';


/*
<div className='flex items-center gap-8'>
                    <div className="nav-item">
                        <a href="#about" className="nav-link text-xl text-amber-400 hover:text-amber-300 font-medium">About</a>
                    </div>
                    <div className="nav-item">
                        <a href="#schedule" className="nav-link text-xl text-amber-400 hover:text-amber-300 font-medium">Schedule</a>
                    </div>
                    <div className="nav-item">
                        <a href="#faqs" className="nav-link text-xl text-amber-400 hover:text-amber-300 font-medium">FAQS</a>
                    </div>  
                     <div className="nav-item">
                        <a href="#sponsors" className="nav-link text-xl text-amber-400 hover:text-amber-300 font-medium">Sponsors</a>
                    </div>  
                   
                </div>
*/

const navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className='w-full flex justify-between p-4 px-8'>
                <img className='w-16 h-16 rounded-full' src={favicon}></img>
                
            </div>
        </nav>
    </div>
  )
}

export default navbar