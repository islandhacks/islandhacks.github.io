import React from "react"


const Hero = () => {

    return(
        <section className="">
            <div className="flex items-center justify-center w-full mt-8">

                <div className=" flex flex-col items-center justify-center p-4">
                    <span className="text-5xl md:text-9xl text-amber-400 w-180 text-center font-bold tracking-wider">IslandHacks</span>
                    
                    <span className="leading-snug bg-gradient-to-r text-3xl md:text-4xl font-medium from-green-500 to-green-600 bg-clip-text text-transparent">Sept 27, 2025</span>
                   
                   <span className="text-gray-700 text-xl">8:30AM - 8:30PM</span>
                   <a href='https://forms.gle/5xQ11Mq7ckGd8c679'>
                      <button className="w-64 md:w-96 p-3 bg-amber-100 border-amber-400 border-2 rounded-xl text-xl font-medium text-amber-400 my-8 hover:cursor-pointer hover:opacity-50 transition-all">Register Now</button>
                    </a>
                    
                </div>
            </div>
        </section>
    )
}

export default Hero;

/*
<h1 className="mb-6 max-w-4xl lg:max-w-6xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Connecting {' '}
            <span className="leading-snug bg-gradient-to-r from-teal-200 to-sky-500 bg-clip-text text-transparent">
              physical therapists
            </span>
             {' '}with their {' '}
            <span className="leading-snug bg-gradient-to-r from-teal-200 to-sky-500 bg-clip-text text-transparent">
              patients
            </span>
          </h1>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-10">
              <strong className="leading-8 bg-gradient-to-r from-teal-300 to-sky-600 bg-clip-text text-transparent">Doctors:</strong> Assign exercises, track progress, and stay connected with your patients.<br />
              <strong className="bg-gradient-to-r from-teal-300 to-sky-600 bg-clip-text text-transparent">Patients:</strong> Access personalized routines, log your workouts, and guaruntee good form.
            </p>
            <div className="text-center">
                        <p className="text-lg text-gray-500 mb-10 w-140 mx-auto">Learn to code, or practice coded, by creating awesome projects with your friends and winning prizes!</p>
                    </div>
          </div>*/