import React from 'react'

const navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className='w-full flex justify-between p-4 px-8'>
                <img className='w-16 h-16 rounded-full' src='https://bank-hackclub.s3.amazonaws.com/pijx9rrtm462h5gv25lkojurt60n?response-content-disposition=inline%3B%20filename%3D%22best.png%22%3B%20filename%2A%3DUTF-8%27%27best.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIKG4WV6AJLBGRMWQ%2F20250808%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250808T012519Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=7eaf37b97816e2718e70769e30bbe4156b53902a7bd79e931713e40bf7e85453'></img>
                <div className='flex items-center gap-8'>
                    <div className="nav-item">
                        <a href="#home" className="nav-link text-xl text-amber-400 hover:text-amber-300 font-medium">About</a>
                    </div>
                    <div className="nav-item">
                        <a href="#home" className="nav-link text-xl text-amber-400 hover:text-amber-300 font-medium">Schedule</a>
                    </div>
                    <div className="nav-item">
                        <a href="#home" className="nav-link text-xl text-amber-400 hover:text-amber-300 font-medium">FAQS</a>
                    </div>  
                     <div className="nav-item">
                        <a href="#home" className="nav-link text-xl text-amber-400 hover:text-amber-300 font-medium">Sponsors</a>
                    </div>  
                   
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbar